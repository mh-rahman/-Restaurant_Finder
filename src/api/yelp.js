import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XebEBf5wLE8os5RC8NxiTuHkG5uAiI5r9Zb8OqxmE3MfBS0k-KBwoXvSUcVnAblrLjGn2q-vU_CGzPlvTG1lnzHe43DgG6OH6LSsm1A9SC7kgyoSoQdh0nyrDvtCX3Yx",
  },
});
