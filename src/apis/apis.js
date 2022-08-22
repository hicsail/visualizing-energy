const VIZ_ENERGY_API_BASE_URL = "http://199.94.60.97:4000/content/";
var commonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json;charset=UTF-8",
  Authorization: btoa("secretKey"),
};

const TAG = "apis.js ";

async function createContent(content) {
  const options = {
    method: "POST",
    headers: {
      ...commonHeaders,
      Authorization: btoa("secretKey"),
    },
    body: JSON.stringify(content),
  };
  try {
    const response = await fetch(VIZ_ENERGY_API_BASE_URL, options);
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.log(TAG, "Error creating content");
    return null;
  }
}

async function readContent(contentId) {
  const options = {
    method: "GET",
    headers: commonHeaders,
  };
  try {
    const response = await fetch(VIZ_ENERGY_API_BASE_URL + contentId, options);
    const data = await response.json();
    return data.stringifiedPage;
  } catch (error) {
    console.log(TAG, "Error fetching content");
    return null;
  }
}

export { createContent, readContent };

/**
 * sample Ids
 * 63039f53e72ed3705c700b07
 */
