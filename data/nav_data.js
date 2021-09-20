import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/plans",
    text: "plans",
  },
  {
    id: 3,
    url: "/equipment",
    text: "equipment",
  },
  {
    id: 4,
    url: "/blog",
    text: "blog",
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];
