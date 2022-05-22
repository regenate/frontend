import axios, { AxiosResponse } from "axios";

export interface HttpResponse {
  statusCode: number;
  response: AxiosResponse;
  error: any;
}

export class HttpService {
  private static USER_TOKEN: string;
  private static BASE_URL = "https://regenate.herokuapp.com";
  public static setUserToken = (token: string) =>
    (HttpService.USER_TOKEN = token);
  public static post(
    url: string,
    data: object = undefined,
    header: object = undefined
  ) {
    return HttpService.callApi(url, "post", data, header);
  }

  public static get(
    url: string,
    data: object = undefined,
    header: object = undefined
  ) {
    return HttpService.callApi(url, "get", data, header);
  }

  public static delete(
    url: string,
    data: object = undefined,
    header: object = undefined
  ) {
    return HttpService.callApi(url, "delete", data, header);
  }

  public static put(
    url: string,
    data: object = undefined,
    header: object = undefined
  ) {
    return HttpService.callApi(url, "put", data, header);
  }

  private static setHeadersParams(headerParams: undefined | object) {
    let headerData = {
      "content-type": "application/json",
      Accept: "application/json",
      ...(HttpService.USER_TOKEN && {
        Authorization: `Bearer ${HttpService.USER_TOKEN}`,
      }),
    };

    if (
      typeof headerParams === "object" &&
      !Array.isArray(headerParams) &&
      headerParams !== undefined &&
      headerParams !== null
    ) {
      headerData = { ...headerData, ...headerParams };
    }
    return headerData;
  }

  private static handleError = (error: any) => {
    let errorResponseData;
    let status;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorResponseData = error.response.data;
      status = error.response.status;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      errorResponseData = error.request;
      status = 500;
    } else {
      // Something happened in setting up the request that triggered an Error
      errorResponseData = error.message;
      status = 500;
    }
    return { statusCode: status, errorData: errorResponseData };
  };

  private static setBody(method: string, data: object = undefined) {
    const correctData =
      typeof data === "object" &&
      !Array.isArray(data) &&
      data !== undefined &&
      data !== null
        ? data
        : {};

    if (method === "get" || method === "delete") {
      return { params: correctData };
    } else {
      return correctData;
    }
  }

  private static setUrl(url: string) {
    const urlWithLeadingForwardSlashRemoved = url.replace(/^\/+/g, "");
    return `${HttpService.BASE_URL}/${urlWithLeadingForwardSlashRemoved}`;
  }

  private static async callApi(
    url: string,
    method: "post" | "get" | "put" | "delete",
    data: object = undefined,
    headerParams: object = undefined
  ) {
    const headers = HttpService.setHeadersParams(headerParams);
    const body = HttpService.setBody(method, data);

    const apiUrl = HttpService.setUrl(url);
    return new Promise<HttpResponse>((resolve, reject) => {
      axios({
        url: apiUrl,
        data: body,
        headers: headers,
        method: method,
      })
        .then((res) => {
          const toSendRes: HttpResponse = {
            statusCode: res.status,
            response: res.data,
            error: undefined,
          };
          resolve(toSendRes);
        })
        .catch((error) => {
          const transformError = HttpService.handleError(error);
          const toSendRes: HttpResponse = {
            statusCode: transformError.statusCode,
            error: transformError.errorData,
            response: undefined,
          };
          reject(toSendRes);
        });
    });
  }
}
