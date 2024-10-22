import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex flex-col gap-4 border-t border-primary/30 bg-primary/10 backdrop-blur-xl">
      <div className="m-auto flex w-3/4 flex-col items-center justify-center py-5 md:flex-row md:justify-between md:py-16">
        <div className="mb-5 md:mb-0">
          <svg
            width="300"
            height="76"
            viewBox="0 0 300 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.96 71V56.6H3.34V71H0.96ZM6.19734 71V56.6H8.93734L18.1773 67.6V56.6H20.5973V71H17.8573L8.59734 59.98V71H6.19734ZM28.918 71V59.02H22.918V56.6H37.318V59.02H31.318V71H28.918ZM39.6538 71V56.6H52.8738V59.02H42.0738V62.6H50.7738V65H42.0738V68.58H52.8738V71H39.6538ZM67.3663 71L62.9463 65.72H66.0863L70.0663 70.44V71H67.3663ZM55.7263 71V56.62H67.4263C67.9196 56.62 68.3663 56.7467 68.7663 57C69.1796 57.24 69.5063 57.5667 69.7463 57.98C69.9996 58.38 70.1263 58.8267 70.1263 59.32V63.28C70.1263 63.76 69.9996 64.2067 69.7463 64.62C69.5063 65.0333 69.1796 65.36 68.7663 65.6C68.3663 65.84 67.9196 65.96 67.4263 65.96L58.1263 65.98V71H55.7263ZM58.4863 63.54H67.3463C67.4396 63.54 67.5196 63.5067 67.5863 63.44C67.6663 63.3733 67.7063 63.2867 67.7063 63.18V59.38C67.7063 59.2867 67.6663 59.2067 67.5863 59.14C67.5196 59.06 67.4396 59.02 67.3463 59.02H58.4863C58.3929 59.02 58.3063 59.06 58.2263 59.14C58.1596 59.2067 58.1263 59.2867 58.1263 59.38V63.18C58.1263 63.2867 58.1596 63.3733 58.2263 63.44C58.3063 63.5067 58.3929 63.54 58.4863 63.54ZM73.0302 71V56.6H75.7702L85.0102 67.6V56.6H87.4302V71H84.6902L75.4302 59.98V71H73.0302ZM90.5108 71V56.6H103.731V59.02H92.9308V62.6H101.631V65H92.9308V68.58H103.731V71H90.5108ZM111.863 71V59.02H105.863V56.6H120.263V59.02H114.263V71H111.863ZM129.356 71V56.6H142.576V59.02H131.776V62.6H140.476V65H131.776V71H129.356ZM144.409 71V56.6H146.789V71H144.409ZM149.707 71V56.6H160.827C161.32 56.6 161.767 56.72 162.167 56.96C162.58 57.2 162.907 57.5267 163.147 57.94C163.4 58.3533 163.527 58.8067 163.527 59.3V62.16C163.527 62.3467 163.507 62.5267 163.467 62.7C163.44 62.86 163.393 63.0133 163.327 63.16C163.567 63.4933 163.753 63.8267 163.887 64.16C164.033 64.48 164.107 64.8067 164.107 65.14V68.3C164.107 68.7933 163.98 69.2467 163.727 69.66C163.487 70.0733 163.16 70.4 162.747 70.64C162.347 70.88 161.9 71 161.407 71H149.707ZM152.467 68.58H161.327C161.42 68.58 161.5 68.5467 161.567 68.48C161.647 68.4133 161.687 68.3267 161.687 68.22V65.24C161.687 65.1333 161.647 65.0467 161.567 64.98C161.5 64.9133 161.42 64.88 161.327 64.88H152.467C152.373 64.88 152.287 64.9133 152.207 64.98C152.14 65.0467 152.107 65.1333 152.107 65.24V68.22C152.107 68.3267 152.14 68.4133 152.207 68.48C152.287 68.5467 152.373 68.58 152.467 68.58ZM152.467 62.46H160.727C160.833 62.46 160.92 62.4267 160.987 62.36C161.053 62.28 161.087 62.1933 161.087 62.1V59.38C161.087 59.2733 161.053 59.1867 160.987 59.12C160.92 59.0533 160.833 59.02 160.727 59.02H152.467C152.373 59.02 152.287 59.0533 152.207 59.12C152.14 59.1867 152.107 59.2733 152.107 59.38V62.1C152.107 62.1933 152.14 62.28 152.207 62.36C152.287 62.4267 152.373 62.46 152.467 62.46ZM178.727 71L174.307 65.72H177.447L181.427 70.44V71H178.727ZM167.087 71V56.62H178.787C179.281 56.62 179.727 56.7467 180.127 57C180.541 57.24 180.867 57.5667 181.107 57.98C181.361 58.38 181.487 58.8267 181.487 59.32V63.28C181.487 63.76 181.361 64.2067 181.107 64.62C180.867 65.0333 180.541 65.36 180.127 65.6C179.727 65.84 179.281 65.96 178.787 65.96L169.487 65.98V71H167.087ZM169.847 63.54H178.707C178.801 63.54 178.881 63.5067 178.947 63.44C179.027 63.3733 179.067 63.2867 179.067 63.18V59.38C179.067 59.2867 179.027 59.2067 178.947 59.14C178.881 59.06 178.801 59.02 178.707 59.02H169.847C169.754 59.02 169.667 59.06 169.587 59.14C169.521 59.2067 169.487 59.2867 169.487 59.38V63.18C169.487 63.2867 169.521 63.3733 169.587 63.44C169.667 63.5067 169.754 63.54 169.847 63.54ZM184.431 71V59.3C184.431 58.8067 184.551 58.3533 184.791 57.94C185.031 57.5267 185.358 57.2 185.771 56.96C186.184 56.72 186.638 56.6 187.131 56.6H196.131C196.624 56.6 197.071 56.72 197.471 56.96C197.884 57.2 198.211 57.5267 198.451 57.94C198.704 58.3533 198.831 58.8067 198.831 59.3V71H196.411V66.06H186.831V71H184.431ZM186.831 63.66H196.411V59.38C196.411 59.2733 196.371 59.1867 196.291 59.12C196.224 59.0533 196.144 59.02 196.051 59.02H187.191C187.098 59.02 187.011 59.0533 186.931 59.12C186.864 59.1867 186.831 59.2733 186.831 59.38V63.66ZM211.327 71C210.834 71 210.38 70.88 209.967 70.64C209.554 70.4 209.227 70.0733 208.987 69.66C208.747 69.2467 208.627 68.7933 208.627 68.3V59.3C208.627 58.8067 208.747 58.3533 208.987 57.94C209.227 57.5267 209.554 57.2 209.967 56.96C210.38 56.72 210.834 56.6 211.327 56.6H220.327C220.82 56.6 221.267 56.72 221.667 56.96C222.08 57.2 222.407 57.5267 222.647 57.94C222.9 58.3533 223.027 58.8067 223.027 59.3V68.3C223.027 68.7933 222.9 69.2467 222.647 69.66C222.407 70.0733 222.08 70.4 221.667 70.64C221.267 70.88 220.82 71 220.327 71H211.327ZM211.387 68.58H220.247C220.34 68.58 220.42 68.5467 220.487 68.48C220.567 68.4133 220.607 68.3267 220.607 68.22V59.38C220.607 59.2733 220.567 59.1867 220.487 59.12C220.42 59.0533 220.34 59.02 220.247 59.02H211.387C211.294 59.02 211.207 59.0533 211.127 59.12C211.06 59.1867 211.027 59.2733 211.027 59.38V68.22C211.027 68.3267 211.06 68.4133 211.127 68.48C211.207 68.5467 211.294 68.58 211.387 68.58ZM214.507 55.4L215.367 51.94H217.767L216.907 55.4H214.507ZM226.029 71V56.62H237.729C238.223 56.62 238.669 56.7467 239.069 57C239.483 57.24 239.809 57.5667 240.049 57.98C240.303 58.38 240.429 58.8267 240.429 59.32V63.28C240.429 63.76 240.303 64.2067 240.049 64.62C239.809 65.0333 239.483 65.36 239.069 65.6C238.669 65.84 238.223 65.96 237.729 65.96L228.429 65.98V71H226.029ZM228.789 63.54H237.649C237.743 63.54 237.823 63.5067 237.889 63.44C237.969 63.3733 238.009 63.2867 238.009 63.18V59.38C238.009 59.2867 237.969 59.2067 237.889 59.14C237.823 59.06 237.743 59.02 237.649 59.02H228.789C228.696 59.02 228.609 59.06 228.529 59.14C228.463 59.2067 228.429 59.2867 228.429 59.38V63.18C228.429 63.2867 228.463 63.3733 228.529 63.44C228.609 63.5067 228.696 63.54 228.789 63.54ZM247.93 71V59.02H241.93V56.6H256.33V59.02H250.33V71H247.93ZM258.465 71V56.6H260.845V71H258.465ZM266.403 71C265.909 71 265.456 70.88 265.043 70.64C264.629 70.4 264.303 70.0733 264.063 69.66C263.823 69.2467 263.703 68.7933 263.703 68.3V59.3C263.703 58.8067 263.823 58.3533 264.063 57.94C264.303 57.5267 264.629 57.2 265.043 56.96C265.456 56.72 265.909 56.6 266.403 56.6H278.063V59.02H266.823C266.609 59.02 266.436 59.0867 266.303 59.22C266.169 59.34 266.103 59.5067 266.103 59.72V67.88C266.103 68.0933 266.169 68.2667 266.303 68.4C266.436 68.52 266.609 68.58 266.823 68.58H278.063V71H266.403ZM280.988 71V59.3C280.988 58.8067 281.108 58.3533 281.348 57.94C281.588 57.5267 281.915 57.2 282.328 56.96C282.741 56.72 283.195 56.6 283.688 56.6H292.688C293.181 56.6 293.628 56.72 294.028 56.96C294.441 57.2 294.768 57.5267 295.008 57.94C295.261 58.3533 295.388 58.8067 295.388 59.3V71H292.968V66.06H283.388V71H280.988ZM283.388 63.66H292.968V59.38C292.968 59.2733 292.928 59.1867 292.848 59.12C292.781 59.0533 292.701 59.02 292.608 59.02H283.748C283.655 59.02 283.568 59.0533 283.488 59.12C283.421 59.1867 283.388 59.2733 283.388 59.38V63.66Z"
              fill="#169444"
            />
            <path
              d="M175.583 49V44.208H173.183V43.24H178.943V44.208H176.543V49H175.583ZM185.558 49V43.24H190.846V44.208H186.526V45.64H190.006V46.6H186.526V48.032H190.846V49H185.558ZM198.747 49C198.549 49 198.368 48.952 198.203 48.856C198.037 48.76 197.907 48.6293 197.811 48.464C197.715 48.2987 197.667 48.1173 197.667 47.92V44.32C197.667 44.1227 197.715 43.9413 197.811 43.776C197.907 43.6107 198.037 43.48 198.203 43.384C198.368 43.288 198.549 43.24 198.747 43.24H203.411V44.208H198.915C198.829 44.208 198.76 44.2347 198.707 44.288C198.653 44.336 198.627 44.4027 198.627 44.488V47.752C198.627 47.8373 198.653 47.9067 198.707 47.96C198.76 48.008 198.829 48.032 198.915 48.032H203.411V49H198.747ZM210.245 49V43.24H211.341L215.037 47.64V43.24H216.005V49H214.909L211.205 44.592V49H210.245ZM223.965 49C223.768 49 223.586 48.952 223.421 48.856C223.256 48.76 223.125 48.6293 223.029 48.464C222.933 48.2987 222.885 48.1173 222.885 47.92V44.32C222.885 44.1227 222.933 43.9413 223.029 43.776C223.125 43.6107 223.256 43.48 223.421 43.384C223.586 43.288 223.768 43.24 223.965 43.24H227.565C227.762 43.24 227.941 43.288 228.101 43.384C228.266 43.48 228.397 43.6107 228.493 43.776C228.594 43.9413 228.645 44.1227 228.645 44.32V47.92C228.645 48.1173 228.594 48.2987 228.493 48.464C228.397 48.6293 228.266 48.76 228.101 48.856C227.941 48.952 227.762 49 227.565 49H223.965ZM223.989 48.032H227.533C227.57 48.032 227.602 48.0187 227.629 47.992C227.661 47.9653 227.677 47.9307 227.677 47.888V44.352C227.677 44.3093 227.661 44.2747 227.629 44.248C227.602 44.2213 227.57 44.208 227.533 44.208H223.989C223.952 44.208 223.917 44.2213 223.885 44.248C223.858 44.2747 223.845 44.3093 223.845 44.352V47.888C223.845 47.9307 223.858 47.9653 223.885 47.992C223.917 48.0187 223.952 48.032 223.989 48.032ZM235.534 49V43.232H236.494V48.032H241.294V49H235.534ZM248.825 49C248.627 49 248.446 48.952 248.281 48.856C248.115 48.76 247.985 48.6293 247.889 48.464C247.793 48.2987 247.745 48.1173 247.745 47.92V44.32C247.745 44.1227 247.793 43.9413 247.889 43.776C247.985 43.6107 248.115 43.48 248.281 43.384C248.446 43.288 248.627 43.24 248.825 43.24H252.425C252.622 43.24 252.801 43.288 252.961 43.384C253.126 43.48 253.257 43.6107 253.353 43.776C253.454 43.9413 253.505 44.1227 253.505 44.32V47.92C253.505 48.1173 253.454 48.2987 253.353 48.464C253.257 48.6293 253.126 48.76 252.961 48.856C252.801 48.952 252.622 49 252.425 49H248.825ZM248.849 48.032H252.393C252.43 48.032 252.462 48.0187 252.489 47.992C252.521 47.9653 252.537 47.9307 252.537 47.888V44.352C252.537 44.3093 252.521 44.2747 252.489 44.248C252.462 44.2213 252.43 44.208 252.393 44.208H248.849C248.811 44.208 248.777 44.2213 248.745 44.248C248.718 44.2747 248.705 44.3093 248.705 44.352V47.888C248.705 47.9307 248.718 47.9653 248.745 47.992C248.777 48.0187 248.811 48.032 248.849 48.032ZM261.466 49C261.268 49 261.087 48.952 260.922 48.856C260.756 48.76 260.626 48.6293 260.53 48.464C260.434 48.2987 260.386 48.1173 260.386 47.92V44.32C260.386 44.1227 260.434 43.9413 260.53 43.776C260.626 43.6107 260.756 43.48 260.922 43.384C261.087 43.288 261.268 43.24 261.466 43.24H265.066C265.263 43.24 265.442 43.288 265.602 43.384C265.767 43.48 265.898 43.6107 265.994 43.776C266.095 43.9413 266.146 44.1227 266.146 44.32V44.712H265.178V44.352C265.178 44.3093 265.162 44.2747 265.13 44.248C265.103 44.2213 265.071 44.208 265.034 44.208H261.49C261.452 44.208 261.418 44.2213 261.386 44.248C261.359 44.2747 261.346 44.3093 261.346 44.352V47.888C261.346 47.9307 261.359 47.9653 261.386 47.992C261.418 48.0187 261.452 48.032 261.49 48.032H265.034C265.071 48.032 265.103 48.0187 265.13 47.992C265.162 47.9653 265.178 47.9307 265.178 47.888V46.76H263.85V45.792H266.146V47.92C266.146 48.1173 266.095 48.2987 265.994 48.464C265.898 48.6293 265.767 48.76 265.602 48.856C265.442 48.952 265.263 49 265.066 49H261.466ZM272.962 49V43.24H273.914V49H272.962ZM280.753 49V44.32C280.753 44.1227 280.801 43.9413 280.897 43.776C280.993 43.6107 281.124 43.48 281.289 43.384C281.454 43.288 281.636 43.24 281.833 43.24H285.433C285.63 43.24 285.809 43.288 285.969 43.384C286.134 43.48 286.265 43.6107 286.361 43.776C286.462 43.9413 286.513 44.1227 286.513 44.32V49H285.545V47.024H281.713V49H280.753ZM281.713 46.064H285.545V44.352C285.545 44.3093 285.529 44.2747 285.497 44.248C285.47 44.2213 285.438 44.208 285.401 44.208H281.857C281.82 44.208 281.785 44.2213 281.753 44.248C281.726 44.2747 281.713 44.3093 281.713 44.352V46.064Z"
              fill="#169444"
            />
            <g filter="url(#filter0_i_495_15)">
              <path
                d="M104.018 6.50676C104.443 6.50676 104.822 6.2382 104.962 5.83711L106.431 1.6402C106.659 0.990027 106.176 0.30985 105.487 0.30985H77.3032C77.2027 0.30985 77.1051 0.323901 77.0095 0.355068C73.9964 1.33802 68.2616 4.68831 68.1672 10.6943C68.1657 10.7929 68.152 10.8907 68.1232 10.985C66.38 16.6936 63.3008 25.6451 61.9691 29.4353C61.4527 31.6043 61.7832 35.9421 67.2365 35.9421H81.1796C78.8041 40.5898 76.222 49.8852 84.8977 49.8852H122.079C119.6 49.8852 118.051 44.9276 118.671 41.8292H99.0221C98.9022 41.8292 98.783 41.8087 98.6726 41.7621C96.9988 41.0555 94.3043 38.7771 95.7423 34.7027C97.0765 30.9224 99.3417 23.7009 100.614 19.5703C100.812 18.9281 100.33 18.2809 99.6585 18.2809H87.7507C87.3383 18.2809 86.9682 18.5341 86.8187 18.9185L85.1456 23.2206C84.9962 23.6049 84.6261 23.8581 84.2136 23.8581H79.4529C78.7749 23.8581 78.2934 23.1976 78.5009 22.5521L83.4352 7.20076C83.5682 6.7872 83.9529 6.50676 84.3873 6.50676H104.018Z"
                fill="#169444"
              />
              <path
                d="M51.8309 1.00357C51.9639 0.590154 52.3485 0.30985 52.7828 0.30985H64.6249C65.3031 0.30985 65.7845 0.970559 65.5768 1.61613L54.756 35.2484C54.623 35.6618 54.2384 35.9421 53.8041 35.9421H41.962C41.2838 35.9421 40.8024 35.2814 41.0101 34.6358L51.8309 1.00357Z"
                fill="#169444"
              />
              <path
                d="M42.8607 6.50676C43.3409 6.50676 43.7532 6.16553 43.8431 5.69388L44.7015 1.18711C44.8189 0.570884 44.3465 0 43.7192 0H16.2086C16.1443 0 16.0816 0.00565449 16.0187 0.0189814C12.9385 0.671576 8.07021 4.20521 6.8166 9.29537C5.62181 14.1467 0.613398 28.8756 0.0513618 30.5242C0.0158544 30.6284 -0.000491246 30.733 0.00155555 30.843C0.0774469 34.9223 2.91132 36.1501 4.33784 36.2519H18.4153C19.0069 36.2519 19.4642 36.7611 19.3717 37.3454C19.1296 38.8746 18.6051 41.5297 17.6612 44.9276C16.4218 49.3894 19.417 50.0917 21.0695 49.8852H64.0192C64.4582 49.8852 64.8458 49.5988 64.9749 49.1792L67.2365 41.8292H39.3504C33.8971 41.8292 33.5666 37.2848 34.083 35.0126L38.95 19.2664C39.1489 18.623 38.668 17.9711 37.9946 17.9711H26.1674C25.7182 17.9711 25.3241 18.2706 25.2039 18.7034L24.0615 22.8159C23.9413 23.2487 23.5472 23.5483 23.098 23.5483H18.1111C17.4309 23.5483 16.9491 22.8838 17.1607 22.2372L22.0834 7.19572C22.2179 6.78473 22.6014 6.50676 23.0338 6.50676H42.8607Z"
                fill="#169444"
              />
              <path
                d="M151.407 1.189C151.469 0.687162 151.895 0.30985 152.4 0.30985H164.287C164.902 0.30985 165.371 0.85885 165.275 1.46581L162.823 16.9923C162.643 18.1334 164.22 18.6204 164.715 17.5763L172.623 0.881764C172.788 0.532517 173.14 0.30985 173.527 0.30985H192.808C193.417 0.30985 193.885 0.850087 193.798 1.45309L191.544 17.0289C191.378 18.171 192.959 18.6386 193.441 17.5904L201.132 0.89155C201.295 0.536989 201.65 0.30985 202.04 0.30985H213.706C214.454 0.30985 214.937 1.10087 214.595 1.76632L197.341 35.3986C197.169 35.7323 196.826 35.9421 196.451 35.9421H177.084C176.497 35.9421 176.036 35.4392 176.088 34.8547L177.091 23.4171C177.187 22.3217 175.702 21.8962 175.204 22.8763L168.834 35.3956C168.663 35.7309 168.319 35.9421 167.943 35.9421H148.306C147.706 35.9421 147.241 35.4171 147.313 34.8213L151.407 1.189Z"
                fill="#169444"
              />
              <path
                d="M253.639 6.50676C254.081 6.50676 254.47 6.2171 254.597 5.79411L255.856 1.5972C256.049 0.955588 255.568 0.30985 254.898 0.30985H226.644C226.547 0.30985 226.451 0.323332 226.358 0.352473C224.242 1.01678 220.031 2.97762 219.061 5.88707C218.069 8.86159 213.69 23.0319 211.625 29.7452C211.005 31.8108 210.943 35.9421 215.653 35.9421H244.778L248.085 25.4691C248.289 24.8246 247.808 24.168 247.132 24.168H229.034C228.378 24.168 227.9 23.5476 228.067 22.9135L229.09 19.0264C229.205 18.5871 229.602 18.2809 230.057 18.2809H242.795C243.236 18.2809 243.626 17.9912 243.752 17.5682L245.012 13.3713C245.204 12.7297 244.724 12.084 244.054 12.084H232.77C232.109 12.084 231.63 11.4535 231.807 10.8163L232.8 7.23912C232.921 6.8063 233.315 6.50676 233.764 6.50676H253.639Z"
                fill="#169444"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M266.157 0.30985L255.41 34.6434C255.208 35.2874 255.689 35.9421 256.364 35.9421H285.058C290.961 35.9421 294.505 23.7387 295.568 17.7986C295.585 17.7051 295.59 17.6133 295.569 17.5207C295.359 16.5839 294.07 15.1824 292.184 15.1824C293.321 15.0792 295.841 14.5008 296.832 13.0135C298.072 11.1544 303.959 0.30985 295.593 0.30985H266.157ZM283.737 11.4002C283.601 11.8086 283.218 12.084 282.788 12.084H278.08C277.397 12.084 276.915 11.4153 277.131 10.7678L278.323 7.19054C278.459 6.78219 278.842 6.50676 279.272 6.50676H283.98C284.663 6.50676 285.145 7.17546 284.929 7.82299L283.737 11.4002ZM279.709 23.1744C279.573 23.5827 279.19 23.8581 278.76 23.8581H274.052C273.369 23.8581 272.887 23.1894 273.103 22.5419L274.295 18.9647C274.431 18.5563 274.814 18.2809 275.244 18.2809H279.952C280.635 18.2809 281.117 18.9496 280.901 19.5971L279.709 23.1744Z"
                fill="#169444"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M99.364 34.5698C99.1189 35.231 99.6043 35.9421 100.309 35.9421H112.063C112.493 35.9421 112.876 35.6667 113.012 35.2583L118.443 18.9647C118.579 18.5563 118.961 18.2809 119.392 18.2809H124.45C125.121 18.2809 125.601 18.9284 125.407 19.5706L118.671 41.8292H128.52C129.178 41.8292 129.657 42.4537 129.486 43.0891L127.656 49.8852H163.222C163.635 49.8852 164.006 49.6303 164.155 49.2441L167.007 41.8292H136.642C134.163 41.8292 132.304 39.9701 135.403 31.9141C138.301 24.3782 142.013 11.1544 143.768 5.57723C144.388 3.82143 144.202 0.30985 138.501 0.30985H115.263C111.544 0.30985 109.076 3.99459 107.516 8.98553C106.064 13.6331 102.07 27.2667 99.364 34.5698ZM126.649 12.3938C127.068 12.3938 127.443 12.1327 127.588 11.7395L129.02 7.85247C129.26 7.19961 128.777 6.50676 128.081 6.50676H122.812C122.376 6.50676 121.99 6.7896 121.858 7.20563L120.631 11.0927C120.427 11.7372 120.909 12.3938 121.585 12.3938H126.649Z"
                fill="#169444"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_495_15"
                x="0.00134277"
                y="0"
                width="299.999"
                height="53.917"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_495_15"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" /> 51 3582-5072
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" /> R. Florença, 703 -
              Canudos, Novo Hamburgo - RS
            </li>
            <li className="flex items-center gap-3">
              <MdEmail className="text-lg text-primary" />{" "}
              Contato@gigawebtecnologia.com.br
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary/10 py-2 font-thin">
        <div className="m-auto flex w-3/4 justify-between text-center">
          <p>
            &copy; Copyright Gigaweb - {new Date().getFullYear()} | Todos os
            direitos reservados
          </p>
          <p className="hidden md:inline">
            Desenvolvido por:{" "}
            <a
              className="text-primary underline"
              target="_blank"
              href="https://github.com/GabrielFleckl"
            >
              {" "}
              G.G.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
