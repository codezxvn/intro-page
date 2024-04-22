"use server";

import { google } from "googleapis";
import { SendFormToSheetType } from "../types/googleSheetType";
const getCredential = () => {
  const credential = JSON.parse(
    Buffer.from(process.env.GOOGLE_PRIVATE_KEYS as string, "base64")
      .toString()
      .replace(/\n/g, "")
  );
  return credential;
};
const validateEmail = (email: string) => {
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  return email.match(regex);
};

export default async function sendFormToGoogleSheet(data: SendFormToSheetType) {
  const credential = getCredential();

  if (!validateEmail(data.mail)) {
    return "Invalid email";
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: credential,
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const postPackage = {
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[data.name, data.mail, data.question]],
      },
    };

    const response = await sheets.spreadsheets.values.append(postPackage);
  } catch (e) {
    console.log(e);

    throw new Error("Fail to post file");
  }
}
