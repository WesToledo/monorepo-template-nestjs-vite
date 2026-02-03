import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export class BaseApi {
  protected readonly sufix: string;

  constructor(sufix: string) {
    this.sufix = sufix.startsWith("/") ? sufix.substring(1) : sufix;
  }

  protected get api() {
    return axios.create({
      baseURL: `${API_URL}/${this.sufix}`,
      withCredentials: true,
      headers: {
        Authorization: Cookies.get("accessToken")
          ? `Bearer ${Cookies.get("accessToken")}`
          : undefined,
      },
    });
  }
}
