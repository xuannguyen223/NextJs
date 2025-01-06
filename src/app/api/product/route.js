import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request) {
  // MOCK DATA
  //   const res = [
  //     {
  //       id: 1,
  //       name: "Phuong",
  //     },
  //     {
  //       id: 2,
  //       name: "Thy",
  //     },
  //   ];
  //   return NextResponse.json(res, { status: 200 });

  //   CALL API
  try {
    console.log("request: ", request);
    // B1: get Url from request
    const url = new URL(request.url);

    // B2: get Query from Url
    const params = new URLSearchParams(url.search);

    // B3: get keyword from params
    const keyword = params.get("keyword");
    console.log("keyword: ", keyword);

    // B4: kiem tra value cua keyword
    // case 1: keyword = null => get all product
    // case 2: keyword != null => get data depend keywod
    let final_url = `https://apistore.cybersoft.edu.vn/api/Product`;
    if (keyword) {
      final_url += `?keyword=${keyword}`;
    }

    const res = await axios.get(final_url);
    return NextResponse.json(res.data.content, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { messgae: "Could not fetch data" },
      { status: 500 }
    );
  }
}

export async function POST() {}
export async function PUT() {}
export async function DELETE() {}
