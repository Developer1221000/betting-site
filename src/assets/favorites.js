import React from "react";

const Favorites = (props) => {
  return (
    <>
      <svg
        className={props.className}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 32.001C24.8365 32.001 32 24.8375 32 16.001C32 7.16442 24.8365 0.000976562 16 0.000976562C7.16344 0.000976562 0 7.16442 0 16.001C0 24.8375 7.16344 32.001 16 32.001Z"
          fill="url(#paint0_linear_226_618)"
        ></path>
        <path
          d="M25.808 12.8142C25.6976 12.4749 25.4043 12.2275 25.0512 12.1762L19.378 11.3518L16.8409 6.21105C16.6829 5.89105 16.3571 5.68848 16.0001 5.68848C15.6433 5.68848 15.3175 5.89105 15.1595 6.2111L12.6224 11.3519L6.94919 12.1762C6.59607 12.2275 6.30263 12.4749 6.19238 12.8143C6.08212 13.1537 6.17412 13.5262 6.42963 13.7752L10.5348 17.7768L9.5657 23.427C9.50538 23.7787 9.64994 24.1342 9.93863 24.3439C10.2274 24.5538 10.6101 24.5814 10.9259 24.4154L16.0001 21.7477L21.0744 24.4154C21.3927 24.5826 21.7752 24.5522 22.0617 24.3439C22.3504 24.1342 22.4951 23.7789 22.4348 23.427L21.4656 17.7768L25.5708 13.7752C25.8263 13.5262 25.9181 13.1536 25.808 12.8142Z"
          fill="url(#paint1_linear_226_618)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_226_618"
            x1="16"
            y1="32.001"
            x2="16"
            y2="0.000976562"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FD5900"></stop>
            <stop offset="1" stop-color="#FFDE00"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_226_618"
            x1="16.0001"
            y1="24.523"
            x2="16.0001"
            y2="5.68848"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFE59A"></stop>
            <stop offset="1" stop-color="#FFFFD5"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default Favorites;
