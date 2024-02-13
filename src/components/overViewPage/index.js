import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Favorites from "../../assets/favorites";
import Football from "../../assets/football";
import Basketball from "../../assets/basketball";
import Tennis from "../../assets/tennis";
import Volleyball from "../../assets/volleyball";
import IceHockey from "../../assets/Icehockey";
import TableTennis from "../../assets/tabletennis";
import Handball from "../../assets/handball";
import Archeryshooting from "../../assets/archeryshooting";
import Biathion from "../../assets/biathion";
import Bandy from "../../assets/bandy";
import Badminton from "../../assets/badminton";
import Cricket from "../../assets/cricket";
import Darts from "../../assets/darts";
import Golf from "../../assets/golf";
import MMA from "../../assets/mma";
import Snooker from "../../assets/snooker";
import Counterstrike from "../../assets/counterstrike";
import Dota from "../../assets/dota";
import Leagueoflegends from "../../assets/leagueoflegends";
import Valorant from "../../assets/valorant";
import Efootball from "../../assets/efootball";

const OverViewPage = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-2 bg-[#1a1a1a] py-2 px-1">
        <div className="col-span-4 rounded-md flex flex-col gap-2">
          <div className="bg-white rounded-md">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                slidesPerView: 10,
                spaceBetween: 10,
                768: {
                  slidesPerView: 12,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 15,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper !px-5"
            >
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Favorites className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Favorites</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Football className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Football</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Basketball className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Basketball</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Tennis className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Tennis</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Volleyball className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Volleyball</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <IceHockey className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Ice Hockey</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <TableTennis className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Table Tennis</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Handball className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Handball</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Archeryshooting className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">
                    Archery Shooting
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Biathion className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Biathion</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Bandy className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Bandy</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Badminton className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Badminton</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Cricket className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Cricket</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Darts className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Darts</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Golf className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Golf</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <MMA className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">MMA</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Snooker className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Snooker</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Counterstrike className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">
                    Counter-Strike 2
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Dota className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Dota 2</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Leagueoflegends className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">
                    League of Legends
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Valorant className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">Valorant</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center cursor-pointer py-4">
                <div className="flex flex-col justify-center items-center">
                  <Efootball className="w-[33px] h-[32px]" />
                  <div className="text-xs text-center pt-2">E-Football</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="bg-white rounded-md flex flex-row justify-between py-2 px-3">
            <div className="flex flex-row gap-14 items-center justify-between">
              <div className="flex gap-2 py-2">
                <Favorites className="w-[33px] h-[32px]" />
                <div className="flex items-center">Favorites</div>
              </div>
              <button className="relative group transition-all duration-200 border-none focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200">
                <span className="flex flex-row gap-2 items-center">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 28.8002C7.04 28.8002 6.4 28.1602 6.4 27.2002V8.6402L2.72 12.3202C2.08 12.9602 1.12 12.9602 0.48 12.3202C-0.16 11.6802 -0.16 10.7202 0.48 10.0802L6.88 3.6802C7.04 3.5202 7.2 3.3602 7.36 3.3602C7.52 3.2002 7.84 3.2002 8 3.2002C8.16 3.2002 8.48 3.2002 8.64 3.3602C8.8 3.3602 8.96 3.5202 9.12 3.6802L15.52 10.0802C16.16 10.7202 16.16 11.6802 15.52 12.3202C14.88 12.9602 13.92 12.9602 13.28 12.3202L9.6 8.6402V27.2002C9.6 28.1602 8.96 28.8002 8 28.8002ZM24 28.8002C23.84 28.8002 23.52 28.8002 23.36 28.6402C23.2 28.6402 23.04 28.4802 22.88 28.3202L16.48 21.9202C15.84 21.2802 15.84 20.3202 16.48 19.6802C17.12 19.0402 18.08 19.0402 18.72 19.6802L22.4 23.3602V4.8002C22.4 3.8402 23.04 3.2002 24 3.2002C24.96 3.2002 25.6 3.8402 25.6 4.8002V23.3602L29.28 19.6802C29.92 19.0402 30.88 19.0402 31.52 19.6802C32.16 20.3202 32.16 21.2802 31.52 21.9202L25.12 28.3202C24.96 28.4802 24.8 28.6402 24.64 28.6402C24.48 28.8002 24.16 28.8002 24 28.8002Z"></path>
                  </svg>
                  <div>Sort by: By start time</div>
                </span>
                <div className="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
                  <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                    <p>By start time</p>
                  </span>
                  <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                    <p>Alphabetically A-Z</p>
                  </span>
                  <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
                    <p>Alphabetically Z-A</p>
                  </span>
                </div>
              </button>
            </div>
            <div className="flex">
              <input
                type="text"
                className="w-[300px] bg-[#f5f5f6] rounded-md flex bg-transparent pl-2 text-black outline-0"
                placeholder="Search for game"
              />
              <button
                type="submit"
                className="relative p-2 rounded-full right-[40px]"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="#999"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex bg-white py-2 px-3 rounded-t-md w-full justify-between">
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="w-full">Match Result</div>
            <div className="w-full">Handicap</div>
            <div className="w-full">Total</div>
          </div>
          <div className="flex bg-white py-5 w-full justify-center items-center">
            Click on the ⭐ to add it to Favourites
          </div>
        </div>
        <div className="col-span-1 min-h-[700px] h-full bg-white rounded-md">
          <div className="flex justify-center items-center py-3 shadow-md font-semibold">
            <div>Betslip&nbsp;&nbsp;</div>
            <div className="bg-[#098136] text-white rounded-full px-[7px]">
              6
            </div>
          </div>
          <div className="flex justify-between px-2 py-3 items-center shadow-lg">
            <div class=" relative inline-block text-left dropdown">
              <span class="rounded-md shadow-sm">
                <button
                  class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                  aria-controls="headlessui-menu-items-117"
                >
                  <span>Multiple</span>
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
              <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div
                  class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  aria-labelledby="headlessui-menu-button-1"
                  id="headlessui-menu-items-117"
                  role="menu"
                >
                  <div class="p-2 gap-2 flex flex-col">
                    <div role="menuitem">Single</div>
                    <div role="menuitem">Multiple</div>
                    <div role="menuitem">System</div>
                    <div role="menuitem">Chain</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  fill="#8f8f95"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.5761 9.2584C31.3049 8.67524 30.8725 8.18191 30.3299 7.83671C29.7873 7.49151 29.1572 7.30887 28.5141 7.3104C27.377 7.38727 26.251 7.04585 25.3481 6.3504C24.6176 5.46838 24.2406 4.34657 24.2901 3.2024C24.2709 2.55897 24.0678 1.9345 23.7049 1.40285C23.3419 0.871209 22.8343 0.454632 22.2421 0.202398C21.6383 -0.0188118 20.9838 -0.0623433 20.356 0.0769597C19.7283 0.216263 19.1536 0.532564 18.7001 0.988398C17.9464 1.84551 16.9104 2.40397 15.7801 2.5624C14.6447 2.45648 13.5891 1.9326 12.8181 1.0924C12.3517 0.649444 11.7683 0.349123 11.1369 0.226865C10.5054 0.104607 9.85208 0.165513 9.25408 0.402398C8.6704 0.673466 8.17636 1.10571 7.83017 1.64821C7.48398 2.19071 7.30006 2.82085 7.30007 3.4644C7.37726 4.60215 7.03583 5.72887 6.34007 6.6324C5.46078 7.36157 4.34358 7.74109 3.20207 7.6984C2.55869 7.71987 1.93475 7.92431 1.40341 8.28775C0.872065 8.65119 0.455337 9.15856 0.202075 9.7504C-0.0191397 10.3537 -0.0632476 11.0077 0.0749509 11.6353C0.213149 12.2628 0.527893 12.8378 0.982075 13.2924C1.83859 14.0429 2.39831 15.0751 2.56007 16.2024C2.45757 17.3418 1.93419 18.4021 1.09207 19.1764C0.647234 19.6421 0.345672 20.2258 0.223333 20.8581C0.100995 21.4903 0.163041 22.1444 0.402075 22.7424C0.672255 23.3269 1.10424 23.8218 1.64689 24.1684C2.18954 24.515 2.82015 24.699 3.46407 24.6984C4.60117 24.6215 5.72716 24.9629 6.63007 25.6584C7.36437 26.5372 7.74448 27.6582 7.69607 28.8024C7.71496 29.4462 7.91814 30.071 8.28151 30.6028C8.64488 31.1345 9.15317 31.5509 9.74608 31.8024C10.3495 32.0241 11.0038 32.0683 11.6315 31.9297C12.2592 31.7911 12.8341 31.4756 13.2881 31.0204C14.0362 30.1605 15.0723 29.6029 16.2021 29.4524C17.3384 29.5677 18.394 30.0923 19.1721 30.9284C19.6322 31.3826 20.2176 31.689 20.8531 31.8082C21.4886 31.9274 22.1452 31.8539 22.7387 31.5973C23.3321 31.3406 23.8354 30.9125 24.1838 30.3678C24.5322 29.8231 24.7099 29.1868 24.6941 28.5404C24.6169 27.4026 24.9583 26.2759 25.6541 25.3724C26.5342 24.6467 27.6526 24.2739 28.7921 24.3264C29.4393 24.322 30.0705 24.1244 30.6047 23.7588C31.1388 23.3932 31.5516 22.8763 31.7899 22.2745C32.0283 21.6727 32.0814 21.0134 31.9424 20.3812C31.8035 19.749 31.4788 19.1728 31.0101 18.7264C30.1487 17.9742 29.5888 16.9355 29.4341 15.8024C29.5389 14.6652 30.0645 13.6082 30.9081 12.8384C31.3446 12.3647 31.6386 11.7775 31.7564 11.1443C31.8743 10.511 31.811 9.85736 31.5741 9.2584H31.5761ZM18.4581 21.7204C17.1364 22.2904 15.6581 22.3845 14.2748 21.9868C12.8916 21.5891 11.689 20.7241 10.8719 19.5392C10.0549 18.3543 9.67384 16.9228 9.79379 15.4885C9.91373 14.0542 10.5272 12.7059 11.5297 11.6732C12.5323 10.6405 13.8618 9.98725 15.2919 9.82481C16.722 9.66236 18.1642 10.0007 19.3728 10.7823C20.5814 11.5639 21.4817 12.7403 21.9202 14.1111C22.3588 15.4819 22.3086 16.9624 21.7781 18.3004C21.4768 19.0608 21.0285 19.7543 20.4588 20.3411C19.8891 20.928 19.2092 21.3967 18.4581 21.7204V21.7204Z"></path>
                </svg>
              </div>
              <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                  fill="#8f8f95"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M29.648 5.81824H23.236C22.8693 4.16904 21.9513 2.69416 20.6334 1.63708C19.3155 0.579996 17.6765 0.00390625 15.987 0.00390625C14.2975 0.00390625 12.6586 0.579996 11.3407 1.63708C10.0227 2.69416 9.10468 4.16904 8.73801 5.81824H2.35001C1.95854 5.86991 1.59919 6.06211 1.33888 6.35903C1.07858 6.65595 0.935059 7.03737 0.935059 7.43224C0.935059 7.82711 1.07858 8.20852 1.33888 8.50544C1.59919 8.80237 1.95854 8.99456 2.35001 9.04624H4.98001L6.49801 27.0642C6.61969 28.4059 7.23632 29.6543 8.22785 30.5664C9.21938 31.4784 10.5148 31.9888 11.862 31.9982H20.118C21.4665 31.9903 22.7637 31.4803 23.7566 30.5677C24.7494 29.655 25.3667 28.4053 25.488 27.0622L27.002 9.04424H29.648C30.0395 8.99256 30.3988 8.80037 30.6591 8.50344C30.9195 8.20652 31.063 7.82511 31.063 7.43024C31.063 7.03537 30.9195 6.65395 30.6591 6.35703C30.3988 6.06011 30.0395 5.86791 29.648 5.81624V5.81824ZM15.99 3.25224C16.8211 3.25329 17.6333 3.5009 18.3236 3.96372C19.0139 4.42655 19.5514 5.08379 19.868 5.85224H12.112C12.4356 5.08871 12.9748 4.43609 13.6635 3.9743C14.3523 3.51251 15.1608 3.26158 15.99 3.25224V3.25224ZM13.58 24.6702H13.478C13.1374 24.671 12.8092 24.5419 12.5603 24.3094C12.3114 24.0768 12.1604 23.7582 12.138 23.4182L11.624 15.6722C11.6147 15.3246 11.7404 14.9868 11.9746 14.7298C12.2088 14.4727 12.5335 14.3163 12.8805 14.2933C13.2275 14.2703 13.5699 14.3825 13.836 14.6063C14.1022 14.8302 14.2713 15.1484 14.308 15.4942L14.824 23.2442C14.8373 23.4205 14.8153 23.5976 14.7593 23.7652C14.7033 23.9328 14.6143 24.0876 14.4977 24.2204C14.3811 24.3532 14.2392 24.4614 14.0802 24.5386C13.9213 24.6159 13.7485 24.6606 13.572 24.6702H13.58ZM19.85 23.4222C19.8263 23.7616 19.6748 24.0795 19.4262 24.3118C19.1776 24.544 18.8503 24.6736 18.51 24.6742H18.41C18.2341 24.663 18.0621 24.6173 17.9039 24.5395C17.7457 24.4617 17.6044 24.3535 17.4881 24.221C17.3718 24.0886 17.2828 23.9345 17.2261 23.7675C17.1695 23.6006 17.1463 23.4241 17.158 23.2482L17.7 15.4982C17.7089 15.3218 17.7527 15.1489 17.829 14.9896C17.9053 14.8303 18.0125 14.6878 18.1444 14.5703C18.2763 14.4528 18.4302 14.3627 18.5973 14.3053C18.7643 14.2479 18.9411 14.2242 19.1174 14.2358C19.2936 14.2473 19.4658 14.2938 19.6239 14.3725C19.7821 14.4512 19.9229 14.5606 20.0384 14.6943C20.1539 14.828 20.2416 14.9833 20.2964 15.1512C20.3513 15.319 20.3722 15.4962 20.358 15.6722L19.85 23.4222Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-column gap-1 p-1 w-full shadow-md">
            <div className="w-full flex flex-col gap-1">
              <div className="flex justify-between px-2 py-3 items-center shadow-sm">
                <div className="flex flex-row gap-2 items-center">
                  <Basketball className="w-[33px] h-[32px]" />
                  Prva B Liga
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="#8f8f95"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.9998 1.76089e-08C12.2981 -0.000173577 8.71087 1.28317 5.84932 3.63137C2.98776 5.97957 1.02894 9.24734 0.30662 12.8779C-0.415703 16.5084 0.143164 20.2771 1.88799 23.5418C3.63282 26.8064 6.45566 29.3651 9.87552 30.7818C13.2954 32.1985 17.1007 32.3856 20.643 31.3112C24.1854 30.2368 27.2456 27.9674 29.3022 24.8896C31.3589 21.8118 32.2848 18.1162 31.9221 14.4323C31.5594 10.7484 29.9305 7.30425 27.3131 4.68667C24.3127 1.68604 20.2432 0.000199016 15.9998 1.76089e-08V1.76089e-08ZM18.7518 24.252C18.681 24.3408 18.5974 24.4185 18.5038 24.4827C17.2189 25.4008 15.683 25.9021 14.1038 25.9187C13.7978 25.9507 13.4887 25.9051 13.2051 25.786C12.9214 25.667 12.6723 25.4783 12.4809 25.2374C12.2895 24.9966 12.162 24.7114 12.11 24.4081C12.0581 24.1049 12.0835 23.7935 12.1838 23.5027C12.5838 21.8133 13.0065 20.1307 13.4158 18.444C13.5323 18.1422 13.5241 17.8065 13.3931 17.5107C13.2695 17.311 13.0813 17.1595 12.8598 17.0813C12.7364 17.0473 12.6101 17.025 12.4825 17.0147C12.3291 16.98 12.1011 16.9533 11.9905 16.7853L11.9558 16.7307C11.9169 16.6732 11.8898 16.6087 11.8761 16.5407C11.8624 16.4727 11.8624 16.4026 11.876 16.3346C11.8897 16.2666 11.9167 16.202 11.9556 16.1445C11.9945 16.0871 12.0444 16.038 12.1025 16L12.3931 15.808L12.8251 15.568C13.0846 15.4341 13.3517 15.3156 13.6251 15.2133C14.1774 14.9947 14.7493 14.8295 15.3331 14.72C15.6858 14.6575 16.0421 14.6179 16.3998 14.6013C16.6904 14.5999 16.9802 14.6312 17.2638 14.6947C17.507 14.7481 17.736 14.8526 17.9358 15.0012C18.1355 15.1499 18.3014 15.3393 18.4224 15.5569C18.5435 15.7745 18.6169 16.0153 18.6378 16.2634C18.6587 16.5115 18.6267 16.7612 18.5438 16.996C18.1438 18.6973 17.7185 20.3933 17.3025 22.08C17.1038 22.88 17.3025 23.2387 18.1145 23.456C18.2358 23.488 18.3611 23.5107 18.4851 23.54C18.9051 23.648 19.0038 23.9093 18.7451 24.252H18.7518ZM17.3851 11.5427C16.8438 11.5397 16.3156 11.3761 15.8673 11.0726C15.4191 10.769 15.0711 10.3392 14.8675 9.83768C14.6638 9.33611 14.6137 8.78537 14.7234 8.25528C14.8331 7.72519 15.0978 7.23962 15.4839 6.86013C15.8699 6.48065 16.3599 6.22434 16.8918 6.12369C17.4237 6.02305 17.9735 6.08261 18.4715 6.29483C18.9695 6.50704 19.3933 6.86235 19.6891 7.3157C19.9849 7.76906 20.1395 8.30004 20.1331 8.84133C20.1254 9.56347 19.8319 10.2531 19.3169 10.7594C18.8019 11.2657 18.1073 11.5473 17.3851 11.5427V11.5427Z"></path>
                    </svg>
                  </div>
                  <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="#8f8f95"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M29.648 5.81824H23.236C22.8693 4.16904 21.9513 2.69416 20.6334 1.63708C19.3155 0.579996 17.6765 0.00390625 15.987 0.00390625C14.2975 0.00390625 12.6586 0.579996 11.3407 1.63708C10.0227 2.69416 9.10468 4.16904 8.73801 5.81824H2.35001C1.95854 5.86991 1.59919 6.06211 1.33888 6.35903C1.07858 6.65595 0.935059 7.03737 0.935059 7.43224C0.935059 7.82711 1.07858 8.20852 1.33888 8.50544C1.59919 8.80237 1.95854 8.99456 2.35001 9.04624H4.98001L6.49801 27.0642C6.61969 28.4059 7.23632 29.6543 8.22785 30.5664C9.21938 31.4784 10.5148 31.9888 11.862 31.9982H20.118C21.4665 31.9903 22.7637 31.4803 23.7566 30.5677C24.7494 29.655 25.3667 28.4053 25.488 27.0622L27.002 9.04424H29.648C30.0395 8.99256 30.3988 8.80037 30.6591 8.50344C30.9195 8.20652 31.063 7.82511 31.063 7.43024C31.063 7.03537 30.9195 6.65395 30.6591 6.35703C30.3988 6.06011 30.0395 5.86791 29.648 5.81624V5.81824ZM15.99 3.25224C16.8211 3.25329 17.6333 3.5009 18.3236 3.96372C19.0139 4.42655 19.5514 5.08379 19.868 5.85224H12.112C12.4356 5.08871 12.9748 4.43609 13.6635 3.9743C14.3523 3.51251 15.1608 3.26158 15.99 3.25224V3.25224ZM13.58 24.6702H13.478C13.1374 24.671 12.8092 24.5419 12.5603 24.3094C12.3114 24.0768 12.1604 23.7582 12.138 23.4182L11.624 15.6722C11.6147 15.3246 11.7404 14.9868 11.9746 14.7298C12.2088 14.4727 12.5335 14.3163 12.8805 14.2933C13.2275 14.2703 13.5699 14.3825 13.836 14.6063C14.1022 14.8302 14.2713 15.1484 14.308 15.4942L14.824 23.2442C14.8373 23.4205 14.8153 23.5976 14.7593 23.7652C14.7033 23.9328 14.6143 24.0876 14.4977 24.2204C14.3811 24.3532 14.2392 24.4614 14.0802 24.5386C13.9213 24.6159 13.7485 24.6606 13.572 24.6702H13.58ZM19.85 23.4222C19.8263 23.7616 19.6748 24.0795 19.4262 24.3118C19.1776 24.544 18.8503 24.6736 18.51 24.6742H18.41C18.2341 24.663 18.0621 24.6173 17.9039 24.5395C17.7457 24.4617 17.6044 24.3535 17.4881 24.221C17.3718 24.0886 17.2828 23.9345 17.2261 23.7675C17.1695 23.6006 17.1463 23.4241 17.158 23.2482L17.7 15.4982C17.7089 15.3218 17.7527 15.1489 17.829 14.9896C17.9053 14.8303 18.0125 14.6878 18.1444 14.5703C18.2763 14.4528 18.4302 14.3627 18.5973 14.3053C18.7643 14.2479 18.9411 14.2242 19.1174 14.2358C19.2936 14.2473 19.4658 14.2938 19.6239 14.3725C19.7821 14.4512 19.9229 14.5606 20.0384 14.6943C20.1539 14.828 20.2416 14.9833 20.2964 15.1512C20.3513 15.319 20.3722 15.4962 20.358 15.6722L19.85 23.4222Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#fcfcfc] p-2 flex flex-row justify-between text-[#909094] text-xs">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center flex-row gap-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      fill="#fcd988"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M28.202 22.202L19.202 6.64645C18.3132 5.09089 16.202 4.53533 14.6464 5.42422C14.0909 5.75756 13.6464 6.202 13.4242 6.64645L4.42422 22.202C3.53533 23.7576 4.09089 25.8686 5.64645 26.7576C6.20199 27.0909 6.75755 27.202 7.31311 27.202H25.202C27.0909 27.202 28.5353 25.6465 28.5353 23.8686C28.6465 23.202 28.4242 22.6465 28.202 22.202ZM16.3132 22.7576C15.6464 22.7576 15.202 22.3132 15.202 21.6465C15.202 20.9798 15.6464 20.5353 16.3132 20.5353C16.9798 20.5353 17.4242 20.9798 17.4242 21.6465C17.4242 22.3132 16.9798 22.7576 16.3132 22.7576ZM17.4242 17.202C17.4242 17.8686 16.9798 18.3132 16.3132 18.3132C15.6464 18.3132 15.202 17.8686 15.202 17.202V12.7576C15.202 12.0909 15.6464 11.6464 16.3132 11.6464C16.9798 11.6464 17.4242 12.0909 17.4242 12.7576V17.202Z"></path>
                    </svg>
                    <div>KK Mediteran Bar - Lim BC</div>
                  </div>
                  <div className="font-semibold text-[13px]">3rd Quarter Winner (2-Way)</div>
                </div>
                <div>
                  <div>07 Feb</div>
                  <div>14:00</div>
                </div>
              </div>
              <div className="px-2">
                <div className="px-2 py-1 bg-[#f6f6f7] w-fit font-semibold text-[#7e7e84]">Suspended</div>
              </div>
            </div>
          </div>
          <div className="flex flex-column gap-1 p-1 w-full shadow-md">
            <div className="w-full flex flex-col gap-1">
              <div className="flex justify-between px-2 py-3 items-center shadow-sm">
                <div className="flex flex-row gap-2 items-center">
                  <Basketball className="w-[33px] h-[32px]" />
                  Prva B Liga
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="#8f8f95"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.9998 1.76089e-08C12.2981 -0.000173577 8.71087 1.28317 5.84932 3.63137C2.98776 5.97957 1.02894 9.24734 0.30662 12.8779C-0.415703 16.5084 0.143164 20.2771 1.88799 23.5418C3.63282 26.8064 6.45566 29.3651 9.87552 30.7818C13.2954 32.1985 17.1007 32.3856 20.643 31.3112C24.1854 30.2368 27.2456 27.9674 29.3022 24.8896C31.3589 21.8118 32.2848 18.1162 31.9221 14.4323C31.5594 10.7484 29.9305 7.30425 27.3131 4.68667C24.3127 1.68604 20.2432 0.000199016 15.9998 1.76089e-08V1.76089e-08ZM18.7518 24.252C18.681 24.3408 18.5974 24.4185 18.5038 24.4827C17.2189 25.4008 15.683 25.9021 14.1038 25.9187C13.7978 25.9507 13.4887 25.9051 13.2051 25.786C12.9214 25.667 12.6723 25.4783 12.4809 25.2374C12.2895 24.9966 12.162 24.7114 12.11 24.4081C12.0581 24.1049 12.0835 23.7935 12.1838 23.5027C12.5838 21.8133 13.0065 20.1307 13.4158 18.444C13.5323 18.1422 13.5241 17.8065 13.3931 17.5107C13.2695 17.311 13.0813 17.1595 12.8598 17.0813C12.7364 17.0473 12.6101 17.025 12.4825 17.0147C12.3291 16.98 12.1011 16.9533 11.9905 16.7853L11.9558 16.7307C11.9169 16.6732 11.8898 16.6087 11.8761 16.5407C11.8624 16.4727 11.8624 16.4026 11.876 16.3346C11.8897 16.2666 11.9167 16.202 11.9556 16.1445C11.9945 16.0871 12.0444 16.038 12.1025 16L12.3931 15.808L12.8251 15.568C13.0846 15.4341 13.3517 15.3156 13.6251 15.2133C14.1774 14.9947 14.7493 14.8295 15.3331 14.72C15.6858 14.6575 16.0421 14.6179 16.3998 14.6013C16.6904 14.5999 16.9802 14.6312 17.2638 14.6947C17.507 14.7481 17.736 14.8526 17.9358 15.0012C18.1355 15.1499 18.3014 15.3393 18.4224 15.5569C18.5435 15.7745 18.6169 16.0153 18.6378 16.2634C18.6587 16.5115 18.6267 16.7612 18.5438 16.996C18.1438 18.6973 17.7185 20.3933 17.3025 22.08C17.1038 22.88 17.3025 23.2387 18.1145 23.456C18.2358 23.488 18.3611 23.5107 18.4851 23.54C18.9051 23.648 19.0038 23.9093 18.7451 24.252H18.7518ZM17.3851 11.5427C16.8438 11.5397 16.3156 11.3761 15.8673 11.0726C15.4191 10.769 15.0711 10.3392 14.8675 9.83768C14.6638 9.33611 14.6137 8.78537 14.7234 8.25528C14.8331 7.72519 15.0978 7.23962 15.4839 6.86013C15.8699 6.48065 16.3599 6.22434 16.8918 6.12369C17.4237 6.02305 17.9735 6.08261 18.4715 6.29483C18.9695 6.50704 19.3933 6.86235 19.6891 7.3157C19.9849 7.76906 20.1395 8.30004 20.1331 8.84133C20.1254 9.56347 19.8319 10.2531 19.3169 10.7594C18.8019 11.2657 18.1073 11.5473 17.3851 11.5427V11.5427Z"></path>
                    </svg>
                  </div>
                  <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="#8f8f95"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M29.648 5.81824H23.236C22.8693 4.16904 21.9513 2.69416 20.6334 1.63708C19.3155 0.579996 17.6765 0.00390625 15.987 0.00390625C14.2975 0.00390625 12.6586 0.579996 11.3407 1.63708C10.0227 2.69416 9.10468 4.16904 8.73801 5.81824H2.35001C1.95854 5.86991 1.59919 6.06211 1.33888 6.35903C1.07858 6.65595 0.935059 7.03737 0.935059 7.43224C0.935059 7.82711 1.07858 8.20852 1.33888 8.50544C1.59919 8.80237 1.95854 8.99456 2.35001 9.04624H4.98001L6.49801 27.0642C6.61969 28.4059 7.23632 29.6543 8.22785 30.5664C9.21938 31.4784 10.5148 31.9888 11.862 31.9982H20.118C21.4665 31.9903 22.7637 31.4803 23.7566 30.5677C24.7494 29.655 25.3667 28.4053 25.488 27.0622L27.002 9.04424H29.648C30.0395 8.99256 30.3988 8.80037 30.6591 8.50344C30.9195 8.20652 31.063 7.82511 31.063 7.43024C31.063 7.03537 30.9195 6.65395 30.6591 6.35703C30.3988 6.06011 30.0395 5.86791 29.648 5.81624V5.81824ZM15.99 3.25224C16.8211 3.25329 17.6333 3.5009 18.3236 3.96372C19.0139 4.42655 19.5514 5.08379 19.868 5.85224H12.112C12.4356 5.08871 12.9748 4.43609 13.6635 3.9743C14.3523 3.51251 15.1608 3.26158 15.99 3.25224V3.25224ZM13.58 24.6702H13.478C13.1374 24.671 12.8092 24.5419 12.5603 24.3094C12.3114 24.0768 12.1604 23.7582 12.138 23.4182L11.624 15.6722C11.6147 15.3246 11.7404 14.9868 11.9746 14.7298C12.2088 14.4727 12.5335 14.3163 12.8805 14.2933C13.2275 14.2703 13.5699 14.3825 13.836 14.6063C14.1022 14.8302 14.2713 15.1484 14.308 15.4942L14.824 23.2442C14.8373 23.4205 14.8153 23.5976 14.7593 23.7652C14.7033 23.9328 14.6143 24.0876 14.4977 24.2204C14.3811 24.3532 14.2392 24.4614 14.0802 24.5386C13.9213 24.6159 13.7485 24.6606 13.572 24.6702H13.58ZM19.85 23.4222C19.8263 23.7616 19.6748 24.0795 19.4262 24.3118C19.1776 24.544 18.8503 24.6736 18.51 24.6742H18.41C18.2341 24.663 18.0621 24.6173 17.9039 24.5395C17.7457 24.4617 17.6044 24.3535 17.4881 24.221C17.3718 24.0886 17.2828 23.9345 17.2261 23.7675C17.1695 23.6006 17.1463 23.4241 17.158 23.2482L17.7 15.4982C17.7089 15.3218 17.7527 15.1489 17.829 14.9896C17.9053 14.8303 18.0125 14.6878 18.1444 14.5703C18.2763 14.4528 18.4302 14.3627 18.5973 14.3053C18.7643 14.2479 18.9411 14.2242 19.1174 14.2358C19.2936 14.2473 19.4658 14.2938 19.6239 14.3725C19.7821 14.4512 19.9229 14.5606 20.0384 14.6943C20.1539 14.828 20.2416 14.9833 20.2964 15.1512C20.3513 15.319 20.3722 15.4962 20.358 15.6722L19.85 23.4222Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#fcfcfc] p-2 flex flex-row justify-between text-[#909094] text-xs">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center flex-row gap-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      fill="#fcd988"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M28.202 22.202L19.202 6.64645C18.3132 5.09089 16.202 4.53533 14.6464 5.42422C14.0909 5.75756 13.6464 6.202 13.4242 6.64645L4.42422 22.202C3.53533 23.7576 4.09089 25.8686 5.64645 26.7576C6.20199 27.0909 6.75755 27.202 7.31311 27.202H25.202C27.0909 27.202 28.5353 25.6465 28.5353 23.8686C28.6465 23.202 28.4242 22.6465 28.202 22.202ZM16.3132 22.7576C15.6464 22.7576 15.202 22.3132 15.202 21.6465C15.202 20.9798 15.6464 20.5353 16.3132 20.5353C16.9798 20.5353 17.4242 20.9798 17.4242 21.6465C17.4242 22.3132 16.9798 22.7576 16.3132 22.7576ZM17.4242 17.202C17.4242 17.8686 16.9798 18.3132 16.3132 18.3132C15.6464 18.3132 15.202 17.8686 15.202 17.202V12.7576C15.202 12.0909 15.6464 11.6464 16.3132 11.6464C16.9798 11.6464 17.4242 12.0909 17.4242 12.7576V17.202Z"></path>
                    </svg>
                    <div>KK Mediteran Bar - Lim BC</div>
                  </div>
                  <div className="font-semibold text-[13px]">3rd Quarter Winner (2-Way)</div>
                </div>
                <div>
                  <div>07 Feb</div>
                  <div>14:00</div>
                </div>
              </div>
              <div className="px-2">
                <div className="px-2 py-1 bg-[#f6f6f7] w-fit font-semibold text-[#7e7e84]">Suspended</div>
              </div>
            </div>
          </div>
          <div className="flex flex-column gap-1 p-1 w-full shadow-md">
            <div className="w-full flex flex-col gap-1">
              <div className="flex justify-between px-2 py-3 items-center shadow-sm">
                <div className="flex flex-row gap-2 items-center">
                  <Basketball className="w-[33px] h-[32px]" />
                  Prva B Liga
                </div>
                <div className="flex gap-2">
                  <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="#8f8f95"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.9998 1.76089e-08C12.2981 -0.000173577 8.71087 1.28317 5.84932 3.63137C2.98776 5.97957 1.02894 9.24734 0.30662 12.8779C-0.415703 16.5084 0.143164 20.2771 1.88799 23.5418C3.63282 26.8064 6.45566 29.3651 9.87552 30.7818C13.2954 32.1985 17.1007 32.3856 20.643 31.3112C24.1854 30.2368 27.2456 27.9674 29.3022 24.8896C31.3589 21.8118 32.2848 18.1162 31.9221 14.4323C31.5594 10.7484 29.9305 7.30425 27.3131 4.68667C24.3127 1.68604 20.2432 0.000199016 15.9998 1.76089e-08V1.76089e-08ZM18.7518 24.252C18.681 24.3408 18.5974 24.4185 18.5038 24.4827C17.2189 25.4008 15.683 25.9021 14.1038 25.9187C13.7978 25.9507 13.4887 25.9051 13.2051 25.786C12.9214 25.667 12.6723 25.4783 12.4809 25.2374C12.2895 24.9966 12.162 24.7114 12.11 24.4081C12.0581 24.1049 12.0835 23.7935 12.1838 23.5027C12.5838 21.8133 13.0065 20.1307 13.4158 18.444C13.5323 18.1422 13.5241 17.8065 13.3931 17.5107C13.2695 17.311 13.0813 17.1595 12.8598 17.0813C12.7364 17.0473 12.6101 17.025 12.4825 17.0147C12.3291 16.98 12.1011 16.9533 11.9905 16.7853L11.9558 16.7307C11.9169 16.6732 11.8898 16.6087 11.8761 16.5407C11.8624 16.4727 11.8624 16.4026 11.876 16.3346C11.8897 16.2666 11.9167 16.202 11.9556 16.1445C11.9945 16.0871 12.0444 16.038 12.1025 16L12.3931 15.808L12.8251 15.568C13.0846 15.4341 13.3517 15.3156 13.6251 15.2133C14.1774 14.9947 14.7493 14.8295 15.3331 14.72C15.6858 14.6575 16.0421 14.6179 16.3998 14.6013C16.6904 14.5999 16.9802 14.6312 17.2638 14.6947C17.507 14.7481 17.736 14.8526 17.9358 15.0012C18.1355 15.1499 18.3014 15.3393 18.4224 15.5569C18.5435 15.7745 18.6169 16.0153 18.6378 16.2634C18.6587 16.5115 18.6267 16.7612 18.5438 16.996C18.1438 18.6973 17.7185 20.3933 17.3025 22.08C17.1038 22.88 17.3025 23.2387 18.1145 23.456C18.2358 23.488 18.3611 23.5107 18.4851 23.54C18.9051 23.648 19.0038 23.9093 18.7451 24.252H18.7518ZM17.3851 11.5427C16.8438 11.5397 16.3156 11.3761 15.8673 11.0726C15.4191 10.769 15.0711 10.3392 14.8675 9.83768C14.6638 9.33611 14.6137 8.78537 14.7234 8.25528C14.8331 7.72519 15.0978 7.23962 15.4839 6.86013C15.8699 6.48065 16.3599 6.22434 16.8918 6.12369C17.4237 6.02305 17.9735 6.08261 18.4715 6.29483C18.9695 6.50704 19.3933 6.86235 19.6891 7.3157C19.9849 7.76906 20.1395 8.30004 20.1331 8.84133C20.1254 9.56347 19.8319 10.2531 19.3169 10.7594C18.8019 11.2657 18.1073 11.5473 17.3851 11.5427V11.5427Z"></path>
                    </svg>
                  </div>
                  <div className="bg-[#f5f5f6] text-[#8f8f95] p-1 rounded-md cursor-pointer">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                      fill="#8f8f95"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M29.648 5.81824H23.236C22.8693 4.16904 21.9513 2.69416 20.6334 1.63708C19.3155 0.579996 17.6765 0.00390625 15.987 0.00390625C14.2975 0.00390625 12.6586 0.579996 11.3407 1.63708C10.0227 2.69416 9.10468 4.16904 8.73801 5.81824H2.35001C1.95854 5.86991 1.59919 6.06211 1.33888 6.35903C1.07858 6.65595 0.935059 7.03737 0.935059 7.43224C0.935059 7.82711 1.07858 8.20852 1.33888 8.50544C1.59919 8.80237 1.95854 8.99456 2.35001 9.04624H4.98001L6.49801 27.0642C6.61969 28.4059 7.23632 29.6543 8.22785 30.5664C9.21938 31.4784 10.5148 31.9888 11.862 31.9982H20.118C21.4665 31.9903 22.7637 31.4803 23.7566 30.5677C24.7494 29.655 25.3667 28.4053 25.488 27.0622L27.002 9.04424H29.648C30.0395 8.99256 30.3988 8.80037 30.6591 8.50344C30.9195 8.20652 31.063 7.82511 31.063 7.43024C31.063 7.03537 30.9195 6.65395 30.6591 6.35703C30.3988 6.06011 30.0395 5.86791 29.648 5.81624V5.81824ZM15.99 3.25224C16.8211 3.25329 17.6333 3.5009 18.3236 3.96372C19.0139 4.42655 19.5514 5.08379 19.868 5.85224H12.112C12.4356 5.08871 12.9748 4.43609 13.6635 3.9743C14.3523 3.51251 15.1608 3.26158 15.99 3.25224V3.25224ZM13.58 24.6702H13.478C13.1374 24.671 12.8092 24.5419 12.5603 24.3094C12.3114 24.0768 12.1604 23.7582 12.138 23.4182L11.624 15.6722C11.6147 15.3246 11.7404 14.9868 11.9746 14.7298C12.2088 14.4727 12.5335 14.3163 12.8805 14.2933C13.2275 14.2703 13.5699 14.3825 13.836 14.6063C14.1022 14.8302 14.2713 15.1484 14.308 15.4942L14.824 23.2442C14.8373 23.4205 14.8153 23.5976 14.7593 23.7652C14.7033 23.9328 14.6143 24.0876 14.4977 24.2204C14.3811 24.3532 14.2392 24.4614 14.0802 24.5386C13.9213 24.6159 13.7485 24.6606 13.572 24.6702H13.58ZM19.85 23.4222C19.8263 23.7616 19.6748 24.0795 19.4262 24.3118C19.1776 24.544 18.8503 24.6736 18.51 24.6742H18.41C18.2341 24.663 18.0621 24.6173 17.9039 24.5395C17.7457 24.4617 17.6044 24.3535 17.4881 24.221C17.3718 24.0886 17.2828 23.9345 17.2261 23.7675C17.1695 23.6006 17.1463 23.4241 17.158 23.2482L17.7 15.4982C17.7089 15.3218 17.7527 15.1489 17.829 14.9896C17.9053 14.8303 18.0125 14.6878 18.1444 14.5703C18.2763 14.4528 18.4302 14.3627 18.5973 14.3053C18.7643 14.2479 18.9411 14.2242 19.1174 14.2358C19.2936 14.2473 19.4658 14.2938 19.6239 14.3725C19.7821 14.4512 19.9229 14.5606 20.0384 14.6943C20.1539 14.828 20.2416 14.9833 20.2964 15.1512C20.3513 15.319 20.3722 15.4962 20.358 15.6722L19.85 23.4222Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#fcfcfc] p-2 flex flex-row justify-between text-[#909094] text-xs">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center flex-row gap-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 32 32"
                      fill="#fcd988"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M28.202 22.202L19.202 6.64645C18.3132 5.09089 16.202 4.53533 14.6464 5.42422C14.0909 5.75756 13.6464 6.202 13.4242 6.64645L4.42422 22.202C3.53533 23.7576 4.09089 25.8686 5.64645 26.7576C6.20199 27.0909 6.75755 27.202 7.31311 27.202H25.202C27.0909 27.202 28.5353 25.6465 28.5353 23.8686C28.6465 23.202 28.4242 22.6465 28.202 22.202ZM16.3132 22.7576C15.6464 22.7576 15.202 22.3132 15.202 21.6465C15.202 20.9798 15.6464 20.5353 16.3132 20.5353C16.9798 20.5353 17.4242 20.9798 17.4242 21.6465C17.4242 22.3132 16.9798 22.7576 16.3132 22.7576ZM17.4242 17.202C17.4242 17.8686 16.9798 18.3132 16.3132 18.3132C15.6464 18.3132 15.202 17.8686 15.202 17.202V12.7576C15.202 12.0909 15.6464 11.6464 16.3132 11.6464C16.9798 11.6464 17.4242 12.0909 17.4242 12.7576V17.202Z"></path>
                    </svg>
                    <div>KK Mediteran Bar - Lim BC</div>
                  </div>
                  <div className="font-semibold text-[13px]">3rd Quarter Winner (2-Way)</div>
                </div>
                <div>
                  <div>07 Feb</div>
                  <div>14:00</div>
                </div>
              </div>
              <div className="px-2">
                <div className="px-2 py-1 bg-[#f6f6f7] w-fit font-semibold text-[#7e7e84]">Suspended</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverViewPage;
