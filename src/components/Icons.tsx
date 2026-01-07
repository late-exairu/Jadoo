interface SvgProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string;
}

// SVG Icons Collection
const svgIcons = {
  mic: {
    viewBox: "0 0 40 69",
    content: (
      <>
        <path
          fill="url(#a)"
          d="M0 0h40v50.539C40 60.734 31.735 69 21.539 69 9.642 69 0 59.357 0 47.462z"
        />
        <defs>
          <pattern
            id="a"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use xlinkHref="#b" transform="matrix(.01333 0 0 .00773 0 -.033)" />
          </pattern>
          <image
            xlinkHref="data:image/png;base64,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"
            id="b"
            width="75"
            height="138"
            preserveAspectRatio="none"
          />
        </defs>
      </>
    ),
  },

  satellite: {
    viewBox: "0 0 67 70",
    content: (
      <>
        <style>
          {`
            .satellite-dish {
              animation: satelliteRotation 3s ease-in-out infinite;
              transform-origin: 28px 47px; /* Rotation point at dish attachment */
            }
          `}
        </style>
        {/* Static base and support structure */}
        <g className="satellite-base">
          <path
            fill="#407093"
            d="m23.5 50.7l-1.9-0.9-11.2 16.5h12.5l1.2-0.7v-14.4z"
          />
          <path
            fill="#365e7d"
            d="m21.8 49.8l-4.2-2h-0.8l-12 17.8 0.7 0.7h5.1z"
          />
          <path
            fill="#4a80aa"
            d="m26.4 65.6h-16.6c-0.7 0-1.3 0.6-1.3 1.3v1.7c0 0.8 0.6 1.4 1.3 1.4h16.6c0.8 0 1.4-0.6 1.4-1.4v-1.7c0-0.7-0.6-1.3-1.4-1.3z"
          />
          <path
            fill="#407093"
            d="m8.8 68.6v-1.7c0-0.7 0.6-1.3 1.3-1.3h-8.7c-0.8 0-1.4 0.6-1.4 1.3v1.7c0 0.8 0.6 1.4 1.4 1.4h8.7c-0.7 0-1.3-0.6-1.3-1.4z"
          />
          <path
            fill="#4a80aa"
            d="m21.2 40c-0.5 1-0.8 2.2-0.8 3.5 0 3.4 2.2 6.3 5.2 7.4 1.3-0.4 2.4-1.1 3.3-2.1v-1.7z"
          />
          <path
            fill="#407093"
            d="m20.6 43.5c0-1.2 0.3-2.4 0.8-3.4l-2.5-2.3h-1c-1.5 1.4-2.4 3.5-2.4 5.7 0 4.3 3.4 7.8 7.8 7.8q1.3 0 2.5-0.5c-3-1-5.2-3.9-5.2-7.3z"
          />
        </g>
        {/* Animated dish and connecting elements */}
        <g className="satellite-dish">
          <path
            fill="#ffd086"
            d="m65.8 0.9c-1.2-1.2-3.2-1.2-4.5 0l-3 3v0.4l3.8 3.9 0.7 0.2 3-3c1.2-1.2 1.2-3.2 0-4.5z"
          />
          <path
            fill="#ffc365"
            d="m66.6 2.4c-0.1-0.5-0.4-1-0.8-1.5-1.2-1.2-3.2-1.2-4.5 0l-3 3v0.4l2 2.1c1.2-1.2 2.4-2.5 3-3.1 1-1 2.5-1 3.3-0.9z"
          />
          <path
            fill="#365e7d"
            d="m55.5 9q-0.1 0-0.1-0.1l-34.8-3.4c-0.6 0-1-0.6-1-1.1 0.1-0.6 0.6-1 1.2-1l34.8 3.4c0.6 0.1 1 0.6 0.9 1.2 0 0.5-0.5 1-1 1z"
          />
          <path
            fill="#407093"
            d="m30.6 15.5c-0.4 0-0.9-0.3-1-0.8-0.1-0.6 0.2-1.2 0.8-1.3l24.8-6.5c0.6-0.2 1.2 0.2 1.3 0.7 0.2 0.6-0.2 1.2-0.7 1.3l-24.9 6.5q-0.1 0.1-0.3 0.1z"
          />
          <path
            fill="#365e7d"
            d="m62.2 47.1c-0.5 0-1-0.4-1-0.9l-3.4-34.9c-0.1-0.5 0.4-1.1 0.9-1.1 0.6-0.1 1.1 0.4 1.2 0.9l3.4 34.9c0.1 0.6-0.4 1.1-0.9 1.1q-0.1 0-0.2 0z"
          />
          <path
            fill="#407093"
            d="m52.2 37.2q-0.1 0-0.2 0c-0.6-0.1-0.9-0.7-0.8-1.3l6.6-24.9c0.2-0.6 0.7-0.9 1.3-0.8 0.6 0.2 0.9 0.8 0.8 1.3l-6.7 25c-0.1 0.4-0.5 0.7-1 0.7z"
          />
          <path fill="#ffc365" d="m55.3 7l3-3.1 4.5 4.5-3 3z" />
          <path
            fill="#ffa90f"
            d="m57.6 9.2c0.7-0.7 1.9-1.9 3-3l-2.3-2.3-3 3.1z"
          />
          <path
            fill="#4a80aa"
            d="m60.5 13.2c-0.3 0-0.6-0.2-0.8-0.4l-5.8-5.8c-0.4-0.4-0.4-1 0-1.5 0.4-0.4 1.1-0.4 1.5 0l5.8 5.8c0.4 0.5 0.4 1.1 0 1.5-0.2 0.2-0.5 0.4-0.7 0.4z"
          />
          <path
            fill="#b5dcff"
            d="m61.1 49l-35.3-35.6c-4.7 10.5-5.5 21.9-2 31.7 9.7 8.8 24.1 10.1 37.5 4.6z"
          />
          <path
            fill="#8bcaff"
            d="m26 13.6l-8.2-8.2-0.8 0.1c-5.7 13.8-4 28.9 5.7 38.6q0.8 0.8 1.8 1.6c-4.1-9.8-3.4-21.4 1.5-32.1z"
          />
          <path
            fill="#dbedff"
            d="m64.4 46.5l-35.9-35.9q-0.6 0.1-1 0.5l-1.5 1.6c-0.4 0.3-0.5 0.7-0.5 1.2l35.7 35.7c0.6 0.6 1.4 0.6 1.9 0l1.3-1.2c0.5-0.5 0.5-1.4 0-1.9z"
          />
          <path
            fill="#b5dcff"
            d="m26 12.7l1.5-1.5q0.5-0.4 1.1-0.5l-8.4-8.3c-0.5-0.6-1.4-0.6-1.9 0l-1.2 1.2c-0.5 0.5-0.5 1.4 0 1.9l8.4 8.5c0-0.5 0.2-1 0.5-1.3z"
          />
        </g>
      </>
    ),
  },

  plane: {
    viewBox: "0 0 119 154",
    content: (
      <>
        <g>
          <path
            fill="#d5d6db"
            d="M71.82 86.847a11.9 11.9 0 0 0-3.888 1.655c-3.14 2.002-4.968 4.858-4.08 6.38.886 1.523 4.151 1.133 7.292-.868a12.4 12.4 0 0 0 3.19-2.852c.409-.542.482-1.218.187-1.723l-1.152-1.977c-.293-.507-.902-.748-1.55-.615m-7.887-26.993c-.985.22-1.944.63-2.818 1.2-2.277 1.451-3.603 3.523-2.96 4.626.642 1.102 3.01.82 5.287-.63a9 9 0 0 0 2.313-2.07c.296-.393.35-.882.135-1.248l-.834-1.432c-.212-.367-.653-.542-1.123-.446"
          />
          <path
            fill="#029bc5"
            d="M51.118 60.985a1.02 1.02 0 0 0-.656.163l-5.348 3.408c-.447.284-.626.832-.4 1.223q.08.136.21.225l13.181 9.085L75.94 63.724z"
          />
          <path
            fill="#e1e6e9"
            d="M107.495 59.7 58.963 90.252 30.25 101.677l-14.643 2.911-1.61-2.737L94.89 51.904c2.411-1.495 5.097-2.412 7.785-2.66a14.2 14.2 0 0 1 3.462.117c.994.15 1.937.441 2.801.863.963.479 2.798.534 3.392 1.487.002-.002 1.404 4.373-4.836 7.989"
          />
          <path
            fill="#029bc5"
            d="m59.606 86.21-20.995 33.469c-.262.471-.107.997.347 1.176.279.11.62.067.906-.115l5.344-3.39a10.5 10.5 0 0 0 2.674-2.435L88.6 67.046zM6.627 85.092c-.35-.12-.767-.058-1.12.166L1.09 88.072c-.602.383-.841 1.12-.536 1.645q.089.151.225.26l12.377 9.913 13.013-8.129zm10.677 16.585-6.661 9.329c-.098.134-.075.302.051.376.091.053.215.043.316-.024l4.128-2.616a.4.4 0 0 0 .085-.075l9.734-11.835zm88.037-51.914a14.5 14.5 0 0 0-3.565-.118c-1.18 1.65-1.935 3.505-2.189 5.379-.018.376.285.647.678.605a.8.8 0 0 0 .353-.125l7.608-4.844a9.9 9.9 0 0 0-2.885-.897"
          />
          <path
            fill="#d5d6db"
            d="m88.762 58.671 4.967-3.137 4.627 7.87-4.967 3.136z"
          />
          <path
            fill="#3a556a"
            d="M85.637 61.783c-.599.38-.838 1.108-.534 1.628l.492.842c.324.507 1.063.596 1.651.199.56-.378.786-1.065.516-1.572l-.492-.842c-.304-.519-1.035-.633-1.633-.255m-4.465 2.773c-.598.38-.837 1.108-.534 1.628l.493.841c.324.507 1.063.596 1.651.2.56-.378.785-1.065.516-1.572l-.493-.842c-.304-.52-1.034-.634-1.633-.255m-4.465 2.774c-.598.379-.837 1.107-.533 1.626l.492.842c.324.507 1.063.596 1.651.199.56-.378.786-1.065.516-1.572l-.492-.842c-.304-.52-1.036-.633-1.634-.254m-4.465 2.773c-.598.38-.836 1.107-.532 1.626l.492.843c.324.506 1.063.595 1.651.198.56-.378.785-1.064.516-1.571l-.493-.842c-.304-.52-1.035-.633-1.634-.254m-4.464 2.772c-.598.38-.837 1.108-.533 1.628l.493.842c.303.52 1.035.633 1.633.254s.837-1.107.534-1.626l-.493-.843c-.303-.52-1.034-.634-1.633-.255m-4.465 2.773c-.598.38-.837 1.108-.533 1.627l.492.843c.304.519 1.035.633 1.634.254.598-.38.837-1.108.533-1.627l-.492-.842c-.303-.52-1.034-.634-1.633-.256zM58.85 78.42c-.6.38-.838 1.107-.534 1.627l.493.842c.304.519 1.036.631 1.634.252.596-.379.835-1.106.532-1.624l-.492-.843c-.304-.52-1.035-.633-1.634-.255m-4.464 2.773c-.599.38-.837 1.108-.533 1.627l.492.843c.305.518 1.036.631 1.634.251.597-.378.835-1.105.533-1.624l-.493-.842c-.303-.52-1.035-.634-1.633-.255m-4.465 2.772c-.598.38-.836 1.108-.533 1.628l.493.842c.304.519 1.036.631 1.634.252.596-.379.835-1.106.533-1.624l-.493-.843c-.304-.519-1.035-.633-1.634-.255m-4.465 2.773c-.599.38-.838 1.108-.534 1.627v.001l.493.842c.305.52 1.036.632 1.634.252.597-.379.835-1.105.533-1.624l-.493-.842c-.303-.52-1.035-.634-1.633-.256m-4.464 2.773c-.598.378-.837 1.106-.533 1.625v.002l.493.842c.304.519 1.036.631 1.634.252.596-.379.835-1.106.533-1.624l-.493-.843c-.304-.52-1.035-.633-1.634-.255"
          />
        </g>
      </>
    ),
  },

  gear: {
    viewBox: "0 0 50 50",
    content: (
      <>
        <path
          fill="#b6c4cf"
          d="M49.9 27.848v-5.696a2.02 2.02 0 0 0-2.023-2.022H45.7a2.02 2.02 0 0 1-1.918-1.385 20 20 0 0 0-1.106-2.669 2.02 2.02 0 0 1 .375-2.339l1.541-1.541c.79-.79.79-2.07 0-2.86l-4.028-4.028c-.79-.79-2.07-.79-2.86 0l-1.54 1.542a2.02 2.02 0 0 1-2.34.375 20 20 0 0 0-2.669-1.107A2.02 2.02 0 0 1 29.77 4.2V2.023A2.02 2.02 0 0 0 27.748 0H22.05a2.02 2.02 0 0 0-2.022 2.022V4.2a2.02 2.02 0 0 1-1.385 1.918 20 20 0 0 0-2.668 1.106 2.02 2.02 0 0 1-2.34-.375l-1.541-1.542c-.79-.79-2.07-.79-2.86 0L5.209 9.336c-.79.79-.79 2.07 0 2.86l1.541 1.541c.617.617.767 1.56.375 2.34q-.647 1.285-1.106 2.668a2.02 2.02 0 0 1-1.187 1.248c-.228.089-.375.238-.63.238H2.02A2.02 2.02 0 0 0 0 22.252v5.496c0 1.116.905 2.021 2.022 2.021H4.2c.87 0 1.644.66 1.918 1.486q.458 1.383 1.106 2.669c.392.78.242 1.722-.375 2.339l-1.441 1.541c-.79.79-.79 2.07 0 2.86l3.827 3.826c.79.79 2.07.79 2.86 0l1.54-1.54a2.02 2.02 0 0 1 2.34-.376c.856.43 1.948.902 2.87 1.207a2.02 2.02 0 0 1 1.385 1.918v2.179c0 1.116.905 2.022 2.021 2.022h5.395a2.02 2.02 0 0 0 2.022-2.022v-2.18c0-.255.149-.401.237-.63a2.02 2.02 0 0 1 1.249-1.186 20 20 0 0 0 2.668-1.107 2.02 2.02 0 0 1 2.34.375l1.54 1.542c.79.79 2.07.79 2.86 0l4.028-4.028c.79-.79.79-2.07 0-2.86l-1.541-1.541a2.02 2.02 0 0 1-.375-2.34c.43-.855.801-1.747 1.106-2.668a2.02 2.02 0 0 1 1.918-1.385h2.179a2.02 2.02 0 0 0 2.021-2.022"
        />
        <path
          fill="#9facba"
          d="M24.9 41.6c9.167 0 16.599-7.432 16.599-16.6s-7.432-16.6-16.6-16.6C15.732 8.4 8.3 15.832 8.3 25s7.433 16.6 16.6 16.6"
        />
        <path
          fill="#f8f7f7"
          d="M24.9 38.078c7.222 0 13.078-5.855 13.078-13.078s-5.856-13.078-13.079-13.078S11.821 17.777 11.821 25s5.855 13.078 13.078 13.078"
        />
      </>
    ),
  },

  play: {
    viewBox: "0 0 52 52",
    content: (
      <>
        <circle cx="26" cy="26" r="26" fill="#df6951" />
        <path fill="#fff" d="m34 27.5-11.25 6.495v-12.99z" />
      </>
    ),
  },

  rect: {
    viewBox: "0 0 50 49",
    content: (
      <path
        fill="#fff1da"
        d="M0 31c0 9.941 8.059 18 18 18h27a5 5 0 0 0 5-5V10c0-5.523-4.477-10-10-10H5a5 5 0 0 0-5 5z"
      />
    ),
  },

  rectRed: {
    viewBox: "0 0 100 100",
    content: (
      <path
        fill="#df6951"
        d="M0 30C0 13.432 13.432 0 30 0h70v90c0 5.523-4.477 10-10 10H0z"
      />
    ),
  },

  pointer: {
    viewBox: "0 0 20 20",
    content: (
      <path
        fill="#080809"
        d="m18.068 2.76-6.875 15a.625.625 0 0 1-1.19-.208l-.582-6.973-6.973-.581a.625.625 0 0 1-.209-1.191l15-6.875a.625.625 0 0 1 .829.828"
      />
    ),
  },

  swirles: {
    viewBox: "0 0 97 253",
    content: (
      <>
        <path
          stroke="#84829a"
          d="M8.458 13.734C15.485 5.218 33.253-7.876 48.11 7.88c14.856 15.756-5.187 45.244-17.065 58.018-5.856 3.549-18.07 9.581-20.077 5.323-2.51-5.323-4.015-16.5 16.563-26.081 13.217-5.678 41.76-11.71 50.192 9.58 3.848 9.227 4.517 30.66-23.59 42.583l-35.134 15.436m0 0c-13.385.536-32.625-5.846-2.51-35.663 9.536-4.613 32.624-13.945 48.686-14.371 9.202 1.951 26.902 11.603 24.092 34.598.334 4.613-5.923 16.074-33.629 25.017-6.357 1.419-20.578 4.364-26.601 4.79l-21.582 3.194zm0 0c8.782-2.484 29.51-6.707 42.16-3.726 15.814 3.726 22.085.532 34.633 21.291 2.175 10.645.602 32.469-23.088 34.598s-38.982-1.952-43.667-4.258v-19.695m0 0c17.232 1.597 54.207.426 64.245-17.033 4.852-12.419 5.22-37.791-32.122-39.92-9.035.355-28.308 1.49-33.127 3.193l1.004 37.792c17.567 1.597 54.508 9.155 61.735 26.614 3.849 10.113 5.12 31.404-20.578 35.662-9.536.355-31.119-.958-41.157-9.048m0-37.26v37.26m0-37.26c10.875 2.662 34.833 10.007 43.667 18.098 10.707 8.871 26.4 30.872 3.513 47.904-7.194 2.662-26.3 4.791-45.172-7.984m-2.008-20.758 2.008 20.758m-2.008-20.758c12.046 8.516 36.64 29.168 38.647 43.646.837 8.871-1.405 27.359-17.065 30.34-4.015.71-13.953.639-21.582-5.323l2.008-47.905"
        />
      </>
    ),
  },
  destination: {
    viewBox: "0 0 22 22",
    content: (
      <path
        fill="#fff"
        d="M.545 4.475A.55.55 0 0 1 0 3.936V.545C0 .243.243 0 .545 0h3.391c.297 0 .54.243.54.545v1.18h13.048V.545c0-.297.243-.54.54-.545h3.391A.55.55 0 0 1 22 .545v3.391c0 .297-.243.54-.545.54h-1.18v13.048h1.18c.297 0 .54.243.545.54v3.391a.55.55 0 0 1-.545.545h-3.391a.54.54 0 0 1-.54-.545v-1.18H4.476v1.18c0 .297-.242.54-.539.545H.545A.55.55 0 0 1 0 21.455v-3.391c0-.297.243-.54.545-.54h1.18V4.476zm20.377-1.078V1.078h-2.32v2.32zm-2.32 17.525h2.32v-2.32h-2.32zM4.476 18.064v1.132h13.05v-1.132a.54.54 0 0 1 .539-.54h1.132V4.476h-1.132a.54.54 0 0 1-.54-.539V2.804H4.476v1.132a.54.54 0 0 1-.539.54H2.804v13.048h1.132a.54.54 0 0 1 .54.54m-3.397.539v2.319h2.32v-2.32zm2.32-15.206V1.078h-2.32v2.32z"
      />
    ),
  },

  payment: {
    viewBox: "0 0 23 18",
    content: (
      <>
        <path
          fill="#fff"
          d="M19.845 17.86c-.45.009-.892-.12-1.267-.37a1.72 1.72 0 0 0-1.876 0 2.36 2.36 0 0 1-2.534 0 1.71 1.71 0 0 0-1.877 0 2.36 2.36 0 0 1-2.534 0 1.71 1.71 0 0 0-1.876 0 2.2 2.2 0 0 1-1.156.367l-.022-.65c.304-.006.6-.103.85-.276a2.36 2.36 0 0 1 2.533 0 1.72 1.72 0 0 0 1.877 0 2.36 2.36 0 0 1 2.534 0 1.72 1.72 0 0 0 1.877 0 2.36 2.36 0 0 1 2.534 0 1.72 1.72 0 0 0 1.88 0 2.2 2.2 0 0 1 1.266-.369v.65a1.57 1.57 0 0 0-.939.278 2.2 2.2 0 0 1-1.27.37M2.205 17.86c-.45.009-.892-.12-1.266-.37A1.57 1.57 0 0 0 0 17.212v-.649c.45-.009.892.12 1.267.37.275.19.604.288.938.279.335.01.664-.089.939-.28.374-.25.815-.378 1.265-.369.438-.01.87.113 1.237.353l-.327.56a1.55 1.55 0 0 0-.91-.264 1.57 1.57 0 0 0-.935.279c-.375.25-.818.38-1.269.37M19.846 15.59c-.45.008-.893-.12-1.268-.37a1.72 1.72 0 0 0-1.878 0 2.36 2.36 0 0 1-2.533 0 1.71 1.71 0 0 0-1.876 0 2.36 2.36 0 0 1-2.534 0 1.71 1.71 0 0 0-1.876 0c-.375.25-.817.378-1.267.37-.45.008-.892-.12-1.267-.37a1.57 1.57 0 0 0-.937-.28 1.57 1.57 0 0 0-.938.28c-.374.25-.816.378-1.265.37-.45.008-.892-.12-1.267-.37a1.57 1.57 0 0 0-.94-.28v-.648c.45-.01.892.12 1.267.369.275.19.604.289.938.28.335.008.663-.09.938-.28a2.2 2.2 0 0 1 1.265-.37c.45-.009.893.12 1.268.37.275.19.603.289.938.28.335.009.663-.09.938-.28a2.36 2.36 0 0 1 2.534 0 1.71 1.71 0 0 0 1.876 0 2.36 2.36 0 0 1 2.534 0 1.71 1.71 0 0 0 1.876 0 2.36 2.36 0 0 1 2.535 0 1.72 1.72 0 0 0 1.88 0c.374-.25.817-.378 1.267-.37v.65a1.57 1.57 0 0 0-.94.279 2.2 2.2 0 0 1-1.268.37M19.845 13.32c-.45.008-.892-.12-1.267-.37a1.57 1.57 0 0 0-.938-.28 1.5 1.5 0 0 0-.71.153l-.286-.584c.31-.152.651-.227.996-.218.45-.01.893.12 1.268.37a1.72 1.72 0 0 0 1.881 0 2.2 2.2 0 0 1 1.265-.37v.65a1.57 1.57 0 0 0-.938.279c-.376.25-.82.379-1.27.37M15.431 13.319c-.45.01-.89-.12-1.264-.369a1.71 1.71 0 0 0-1.877 0 2.36 2.36 0 0 1-2.534 0 1.71 1.71 0 0 0-1.877 0c-.374.25-.816.378-1.266.369-.45.01-.892-.12-1.267-.37a1.57 1.57 0 0 0-.938-.279 1.57 1.57 0 0 0-.935.28c-.375.25-.817.378-1.268.369-.45.01-.892-.12-1.266-.37A1.57 1.57 0 0 0 0 12.67v-.648c.45-.01.892.12 1.267.369.275.19.604.289.938.28.335.009.664-.09.939-.28.374-.25.815-.379 1.265-.37.45-.009.892.12 1.267.37.275.19.603.289.938.28.335.009.663-.09.939-.28a2.36 2.36 0 0 1 2.533 0 1.71 1.71 0 0 0 1.877 0 2.36 2.36 0 0 1 2.535 0 1.64 1.64 0 0 0 1.043.275l.087.643q-.099.011-.197.01M19.846 11.049c-.45.009-.893-.12-1.268-.37a1.72 1.72 0 0 0-1.878 0 2.36 2.36 0 0 1-2.533 0 1.71 1.71 0 0 0-1.876 0 2.36 2.36 0 0 1-2.534 0 1.71 1.71 0 0 0-1.876 0c-.375.25-.817.379-1.267.37-.45.009-.892-.12-1.267-.37a1.57 1.57 0 0 0-.937-.28 1.57 1.57 0 0 0-.938.28 2.2 2.2 0 0 1-1.265.37c-.45.009-.892-.12-1.267-.37A1.57 1.57 0 0 0 0 10.4v-.648c.45-.01.892.12 1.267.37.275.19.604.288.938.279.335.009.663-.089.938-.28a2.2 2.2 0 0 1 1.265-.369c.45-.01.893.12 1.268.37.275.19.603.288.938.279.335.01.663-.089.938-.28a2.36 2.36 0 0 1 2.534 0 1.71 1.71 0 0 0 1.876 0 2.36 2.36 0 0 1 2.534 0 1.71 1.71 0 0 0 1.876 0 2.36 2.36 0 0 1 2.535 0 1.72 1.72 0 0 0 1.88 0c.374-.25.817-.378 1.267-.369v.649a1.57 1.57 0 0 0-.94.28c-.375.249-.817.377-1.268.369"
        />
        <path
          fill="#fff"
          d="m15.225 10.774-.612-.215a3.56 3.56 0 0 0-.19-2.784l-2.228-4.362a.324.324 0 0 1 .205-.461l4.44-1.184a.567.567 0 0 0-.277-1.1l-5.374 1.284a.77.77 0 0 0-.5 1.114l1.596 2.964a.324.324 0 0 1-.13.438l-2.06 1.135-.312-.568 1.778-.98-1.442-2.682a1.417 1.417 0 0 1 .921-2.052L16.41.037a1.216 1.216 0 1 1 .597 2.358l-4.053 1.08L15 7.48a4.2 4.2 0 0 1 .225 3.294M8.65 7.665 4.707 9.837l.313.568 3.941-2.172z"
        />
        <path
          fill="#fff"
          d="M18.162 8.616a2.432 2.432 0 1 1 0-4.865 2.432 2.432 0 0 1 0 4.865m0-4.216a1.784 1.784 0 1 0 0 3.567 1.784 1.784 0 0 0 0-3.567"
        />
      </>
    ),
  },

  airport: {
    viewBox: "0 0 23 18",
    content: (
      <>
        <path
          fill="#fff"
          d="M3.75 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M18.75 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0 2.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M7.875 12.375h6.75v.75h-6.75zM7.875 10.875h6.75v.75h-6.75zM10.125 5.25h2.25V6h-2.25z"
        />
        <path
          fill="#fff"
          d="M22.5 8.625v-.75a1.13 1.13 0 0 0-1.125-1.125H19.89l-.776-2.722-.233-.927a1.125 1.125 0 0 0-1.091-.851h-3.165V.75a.75.75 0 0 0-.75-.75h-5.25a.75.75 0 0 0-.75.75v1.5H4.71a1.125 1.125 0 0 0-1.091.851l-.229.923-.78 2.726H1.125A1.13 1.13 0 0 0 0 7.875v.75a1.12 1.12 0 0 0 .529.949A1.87 1.87 0 0 0 0 10.875v4.5a1.12 1.12 0 0 0 .375.832v1.418A1.13 1.13 0 0 0 1.5 18.75h3a1.13 1.13 0 0 0 1.125-1.125V16.5h11.25v1.125A1.13 1.13 0 0 0 18 18.75h3a1.13 1.13 0 0 0 1.125-1.125v-1.418a1.12 1.12 0 0 0 .375-.832v-4.5c0-.486-.19-.953-.529-1.301a1.12 1.12 0 0 0 .529-.949M8.625.75h5.25v1.5h-5.25zM4.346 3.285A.375.375 0 0 1 4.71 3h13.08a.375.375 0 0 1 .364.285l.116.465H4.23zM4.031 4.5H18.47L19.75 9H8.966a2.247 2.247 0 0 0-4.432 0H2.749zM8.198 9H5.303a1.494 1.494 0 0 1 2.895 0M.75 7.875a.375.375 0 0 1 .375-.375h1.271L1.97 9h-.844a.375.375 0 0 1-.375-.375zm4.125 9.75A.375.375 0 0 1 4.5 18h-3a.375.375 0 0 1-.375-.375V16.5h3.75zm16.5 0A.375.375 0 0 1 21 18h-3a.375.375 0 0 1-.375-.375V16.5h3.75zm.375-2.25a.375.375 0 0 1-.375.375H1.125a.375.375 0 0 1-.375-.375V15h21zm0-1.125h-21v-3.375A1.13 1.13 0 0 1 1.875 9.75h18.75a1.13 1.13 0 0 1 1.125 1.125zm0-5.625a.375.375 0 0 1-.375.375h-.844l-.427-1.5h1.271a.375.375 0 0 1 .375.375z"
        />
      </>
    ),
  },

  leaf: {
    viewBox: "0 0 14 14",
    content: (
      <>
        <g fill="#84829a" clipPath="url(#a)">
          <path d="M13.654.15C13.286.044 4.262-.854 1.094 3.427c-1.404 1.896-1.425 4.496-.07 7.727a16 16 0 0 0-.89 2.256.456.456 0 1 0 .871.27C3.42 5.87 11.27 2.093 13.676 1.139c.235-.094.547-.822-.022-.988" />
          <path d="M2.472 12.13c1.306.548 2.613.829 3.827.829 1.092 0 2.11-.225 2.988-.68 1.765-.916 2.845-2.668 3.12-5.068.28-2.445.63-3.977.922-4.914-2.595 1.197-8.16 4.3-10.857 9.833" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h14v14H0z" />
          </clipPath>
        </defs>
      </>
    ),
  },

  map: {
    viewBox: "0 0 14 14",
    content: (
      <>
        <g clipPath="url(#a)">
          <path
            fill="#84829a"
            d="M13.5 0a.5.5 0 0 0-.223.053L9.488 1.948 5.204.043Q5.194.04 5.18.037a.5.5 0 0 0-.12-.03 1 1 0 0 0-.121 0 .5.5 0 0 0-.12.03Q4.81.04 4.798.043l-4.5 2A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .703.457L5 12.047l4.297 1.91c.007.003.015 0 .023.004.12.055.26.052.378-.008.008-.003.017 0 .025-.005l4-2a.5.5 0 0 0 .277-.448V.5a.5.5 0 0 0-.5-.5m-9 11.175L1 12.73V2.826L4.5 1.27zM9 12.73l-3.5-1.555V1.27L9 2.825zm4-1.539-3 1.5V2.809l3-1.5z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h14v14H0z" />
          </clipPath>
        </defs>
      </>
    ),
  },

  paperPlane: {
    viewBox: "0 0 14 14",
    content: (
      <path
        fill="#84829a"
        d="M12.343 1.242 6.026 7.583a1.4 1.4 0 0 0-.228-.105l-4.17-1.411a.583.583 0 0 1 0-1.132l10.348-3.68a.7.7 0 0 1 .21-.036.5.5 0 0 1 .157.023M12.746 2.024l-3.681 10.36a.58.58 0 0 1-.583.397.584.584 0 0 1-.584-.408L6.51 8.202a1.4 1.4 0 0 0-.105-.228l6.353-6.317c.035.12.031.25-.012.367"
      />
    ),
  },

  building: {
    viewBox: "0 0 16 16",
    content: (
      <>
        <path
          fill="#84829a"
          d="M.267 15.467h1.6v-8.8c0-.148.12-.267.266-.267h3.734V.267c0-.148.12-.267.266-.267h6.934c.147 0 .266.12.266.267v15.2h2.4a.267.267 0 1 1 0 .533H.267a.267.267 0 0 1 0-.533m10.133 0h1.067v-2.4a.267.267 0 0 0-.267-.267h-.533a.267.267 0 0 0-.267.267zm-1.067-8.8v8.8h.534v-2.4a.8.8 0 0 1 .8-.8h.533a.8.8 0 0 1 .8.8v2.4h.8V.533H6.4V6.4h2.667c.147 0 .266.12.266.267m-6.933 8.8h6.4V6.933H2.4z"
        />
        <path
          fill="#84829a"
          d="M7.467 3.733h1.6c.147 0 .266.12.266.267v1.6c0 .147-.12.267-.266.267h-1.6A.267.267 0 0 1 7.2 5.6V4c0-.147.12-.267.267-.267m.266 1.6H8.8V4.267H7.733zM7.467 1.067h1.6c.147 0 .266.12.266.266v1.6c0 .148-.12.267-.266.267h-1.6a.267.267 0 0 1-.267-.267v-1.6c0-.147.12-.266.267-.266m.266 1.6H8.8V1.6H7.733zM10.133 3.733h1.6c.148 0 .267.12.267.267v1.6c0 .147-.12.267-.267.267h-1.6a.267.267 0 0 1-.266-.267V4c0-.147.12-.267.266-.267m.267 1.6h1.067V4.267H10.4zM10.133 1.067h1.6c.148 0 .267.12.267.266v1.6c0 .148-.12.267-.267.267h-1.6a.267.267 0 0 1-.266-.267v-1.6c0-.147.12-.266.266-.266m.267 1.6h1.067V1.6H10.4zM10.133 6.4h1.6c.148 0 .267.12.267.267v1.6c0 .147-.12.266-.267.266h-1.6a.267.267 0 0 1-.266-.266v-1.6c0-.148.12-.267.266-.267M10.4 8h1.067V6.933H10.4zM10.133 9.067h1.6c.148 0 .267.119.267.266v1.6c0 .148-.12.267-.267.267h-1.6a.267.267 0 0 1-.266-.267v-1.6c0-.147.12-.266.266-.266m.267 1.6h1.067V9.6H10.4zM5.067 12.267h-1.6A.267.267 0 0 1 3.2 12v-1.6c0-.147.12-.267.267-.267h1.6c.147 0 .266.12.266.267V12c0 .147-.12.267-.266.267m-.267-1.6H3.733v1.066H4.8zM5.067 9.6h-1.6a.267.267 0 0 1-.267-.267v-1.6c0-.147.12-.266.267-.266h1.6c.147 0 .266.119.266.266v1.6c0 .147-.12.267-.266.267M4.8 8H3.733v1.067H4.8zM5.067 14.933h-1.6a.267.267 0 0 1-.267-.266v-1.6c0-.148.12-.267.267-.267h1.6c.147 0 .266.12.266.267v1.6c0 .147-.12.266-.266.266m-.267-1.6H3.733V14.4H4.8zM7.733 12.267h-1.6A.267.267 0 0 1 5.867 12v-1.6c0-.147.12-.267.266-.267h1.6c.148 0 .267.12.267.267V12c0 .147-.12.267-.267.267m-.266-1.6H6.4v1.066h1.067zM7.733 9.6h-1.6a.267.267 0 0 1-.266-.267v-1.6c0-.147.12-.266.266-.266h1.6c.148 0 .267.119.267.266v1.6c0 .147-.12.267-.267.267M7.467 8H6.4v1.067h1.067zM7.733 14.933h-1.6a.267.267 0 0 1-.266-.266v-1.6c0-.148.12-.267.266-.267h1.6c.148 0 .267.12.267.267v1.6c0 .147-.12.266-.267.266m-.266-1.6H6.4V14.4h1.067z"
        />
      </>
    ),
  },

  heart: {
    viewBox: "0 0 20 19",
    content: (
      <path
        fill="#4152ca"
        d="M18.364 1.747A5.48 5.48 0 0 0 14.362 0a5.49 5.49 0 0 0-4.007 1.746L10 2.12l-.353-.373a5.47 5.47 0 0 0-8.012 0 6.133 6.133 0 0 0 0 8.34l7.847 8.276a.715.715 0 0 0 1.037 0l7.845-8.276a6.133 6.133 0 0 0 0-8.339M17.33 9.102l-7.328 7.73-7.33-7.73a4.687 4.687 0 0 1 0-6.372 4.04 4.04 0 0 1 5.94 0l.87.92a.736.736 0 0 0 1.038 0l.872-.92a4.04 4.04 0 0 1 5.938 0c1.68 1.8 1.693 4.583 0 6.372"
      />
    ),
  },

  facebook: {
    viewBox: "0 0 6 13",
    content: (
      <path
        fillRule="evenodd"
        d="M5.537 2.244a3.5 3.5 0 0 0-1.024-.168c-.416 0-1.312.287-1.312.843v1.334h2.128v2.244H3.201v6.194H1.056V6.497H0V4.253h1.056V3.122C1.056 1.418 1.792 0 3.57 0c.608 0 1.696.034 2.288.253z"
        clipRule="evenodd"
      />
    ),
  },

  instagram: {
    viewBox: "0 0 16 16",
    content: (
      <>
        <g clipPath="url(#a)">
          <path d="M13.656 0H2.344A2.347 2.347 0 0 0 0 2.344v11.312A2.346 2.346 0 0 0 2.344 16h11.312A2.346 2.346 0 0 0 16 13.656V2.344A2.346 2.346 0 0 0 13.656 0m1.406 13.656c0 .776-.63 1.406-1.406 1.406H2.344c-.776 0-1.406-.63-1.406-1.406V2.344c0-.776.63-1.406 1.406-1.406h11.312c.776 0 1.406.63 1.406 1.406z" />
          <path d="M13.156 1.906a.939.939 0 0 0 0 1.875.939.939 0 0 0 0-1.875M8 3.781A4.223 4.223 0 0 0 3.781 8 4.224 4.224 0 0 0 8 12.219 4.224 4.224 0 0 0 12.219 8 4.224 4.224 0 0 0 8 3.781m0 7.5A3.285 3.285 0 0 1 4.719 8 3.285 3.285 0 0 1 8 4.719 3.285 3.285 0 0 1 11.281 8 3.285 3.285 0 0 1 8 11.281" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </>
    ),
  },

  xitter: {
    viewBox: "0 0 300 271",
    content: (
      <path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6zm-16.1 244h25.5L80.4 26H53z" />
    ),
  },

  mail: {
    viewBox: "0 0 21 18",
    content: (
      <>
        <path
          d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
          stroke="#39425D"
          stroke-linecap="round"
        />
        <rect
          x="0.5"
          y="0.5"
          width="20"
          height="17"
          rx="4.5"
          stroke="#39425D"
        />
      </>
    ),
  },

  rings: {
    viewBox: "0 0 285 291",
    content: (
      <g stroke="#6246e5" opacity=".1">
        <circle cx="177.319" cy="195.537" r="91.803" />
        <circle cx="170.032" cy="185.821" r="102.734" />
        <circle cx="163.96" cy="177.927" r="112.45" />
        <circle cx="157.887" cy="166.389" r="120.952" />
        <circle cx="152.118" cy="155.155" r="129.15" />
        <circle cx="142.402" cy="142.402" r="141.902" />
      </g>
    ),
  },

  navArrow: {
    viewBox: "0 0 16 10",
    content: (
      <path
        stroke="#3e2e4d"
        stroke-linecap="round"
        stroke-width="2"
        d="m1 1 7 7 7-7"
      />
    ),
  },

  btnGooglePlay: {
    viewBox: "0 0 79 20",
    content: (
      <>
        <g clipPath="url(#a)">
          <path
            fill="#2196f3"
            d="M11.508 10.002 1.463 19.673a1.71 1.71 0 0 1-.745-1.426V1.757A1.71 1.71 0 0 1 1.464.33z"
          />
          <path
            fill="#4caf50"
            d="m15.022 6.624-3.515 3.378L1.464.33q.057-.045.118-.082A1.72 1.72 0 0 1 3.316.222z"
          />
          <path
            fill="#f0bb1f"
            d="M19.28 10.002a1.74 1.74 0 0 1-.908 1.543l-3.35 1.835-3.515-3.378 3.515-3.378 3.35 1.834c.566.307.915.9.909 1.544"
          />
          <path
            fill="#f15a2b"
            d="M15.022 13.38 3.316 19.782c-.541.3-1.202.29-1.734-.027a1 1 0 0 1-.118-.082l10.043-9.671z"
          />
        </g>
        <path
          fill="#fff"
          d="M31.024 4.88h-2.808V6h1.496c-.2.536-.688.864-1.432.864-1.088 0-1.76-.696-1.76-1.648 0-.984.704-1.68 1.648-1.68.632 0 1.136.288 1.368.656l1.088-.624c-.472-.752-1.376-1.28-2.448-1.28a2.904 2.904 0 0 0-2.936 2.92c0 1.608 1.264 2.904 3.024 2.904 1.568 0 2.76-1.04 2.76-2.752zM32.626 6.768v-.992h2V4.56h-2v-.928h2.2V2.4h-3.48V8h3.52V6.768z"
        />
        <path
          fill="#fff"
          d="M38.948 2.4h-4.16v1.232h1.44V8h1.28V3.632h1.44zM40.708 2.4V8h1.28V2.4zM46.31 2.4h-4.16v1.232h1.44V8h1.28V3.632h1.44zM50.743 8.112A2.887 2.887 0 0 0 53.655 5.2a2.887 2.887 0 0 0-2.912-2.912A2.887 2.887 0 0 0 47.83 5.2a2.887 2.887 0 0 0 2.912 2.912m0-1.248c-.912 0-1.632-.664-1.632-1.664s.72-1.664 1.632-1.664 1.632.664 1.632 1.664-.72 1.664-1.632 1.664M57.095 2.4v3.04l-2.16-3.04h-.96V8h1.28V4.96L57.415 8h.96V2.4zM31.024 14.392v.216q0 1.048-.744 1.768-.744.712-1.96.712-1.28 0-2.112-.832-.832-.84-.832-2.056 0-1.215.824-2.048.824-.84 2.088-.84.768 0 1.408.368.648.367 1 .984l-.376.224a2.1 2.1 0 0 0-.832-.848 2.3 2.3 0 0 0-1.2-.32q-1.088 0-1.792.72-.696.712-.696 1.76t.704 1.768q.705.712 1.816.712.984 0 1.592-.536a1.97 1.97 0 0 0 .68-1.352h-2.376v-.4zM36.703 16.248q-.84.84-2.048.84t-2.048-.84a2.8 2.8 0 0 1-.84-2.048q0-1.2.84-2.04a2.77 2.77 0 0 1 2.048-.848q1.208 0 2.048.848.84.84.84 2.04t-.84 2.048m-3.8-.288q.72.72 1.752.72t1.744-.72q.72-.728.72-1.76t-.72-1.752a2.35 2.35 0 0 0-1.744-.728q-1.032 0-1.752.728a2.4 2.4 0 0 0-.712 1.752q0 1.032.712 1.76M43.234 16.248q-.84.84-2.048.84t-2.048-.84a2.8 2.8 0 0 1-.84-2.048q0-1.2.84-2.04a2.77 2.77 0 0 1 2.048-.848q1.208 0 2.048.848.84.84.84 2.04t-.84 2.048m-3.8-.288q.72.72 1.752.72t1.744-.72q.72-.728.72-1.76t-.72-1.752a2.35 2.35 0 0 0-1.744-.728q-1.032 0-1.752.728a2.4 2.4 0 0 0-.712 1.752q0 1.032.712 1.76M50.477 14.392v.216q0 1.048-.744 1.768-.745.712-1.96.712-1.28 0-2.112-.832-.832-.84-.832-2.056 0-1.215.824-2.048.824-.84 2.088-.84.768 0 1.408.368.648.367 1 .984l-.376.224a2.1 2.1 0 0 0-.832-.848 2.3 2.3 0 0 0-1.2-.32q-1.088 0-1.792.72-.696.712-.696 1.76t.704 1.768q.705.712 1.816.712.984 0 1.592-.536a1.97 1.97 0 0 0 .68-1.352H47.67v-.4zM51.964 16.6h2.64v.4H51.54v-5.6h.424zM55.91 16.6h2.8v.4h-3.225v-5.6h3.184v.4h-2.76v2.176h2.56v.4h-2.56zM63.788 11.4q.75 0 1.248.496.495.495.495 1.24t-.496 1.24q-.495.488-1.247.488h-1.48V17h-.425v-5.6zm0 3.064q.575 0 .944-.376.376-.375.376-.952 0-.585-.377-.96-.368-.375-.943-.376h-1.48v2.664zM67.003 16.6h2.64v.4h-3.064v-5.6h.424zM74.448 17l-.544-1.424h-2.808L70.552 17h-.448l2.176-5.6h.448l2.168 5.6zm-3.192-1.824h2.496l-1.248-3.256zM78.88 11.4l-2.04 3.296V17h-.423v-2.304l-2.04-3.296h.48l1.776 2.888L78.4 11.4z"
        />
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </>
    ),
  },

  btnAppleStore: {
    viewBox: "0 0 74 18",
    content: (
      <path
        fill="#fff"
        d="M4.351 16C1.97 15.986 0 11.125 0 8.65c0-4.044 3.034-4.93 4.203-4.93.527 0 1.09.207 1.585.39.347.128.706.26.906.26.12 0 .4-.112.65-.21.53-.212 1.19-.474 1.957-.474h.005c.573 0 2.313.126 3.358 1.696l.245.368-.353.266c-.503.38-1.422 1.073-1.422 2.446 0 1.626 1.04 2.251 1.54 2.552.221.133.45.27.45.569 0 .195-1.56 4.393-3.826 4.393-.554 0-.946-.167-1.292-.314-.35-.149-.651-.277-1.15-.277-.252 0-.572.12-.91.246-.462.173-.986.369-1.58.369zM9.541 0c.06 2.127-1.462 3.603-2.982 3.51C6.31 1.814 8.08 0 9.541 0M21.592 5h1.05L21.214.8H19.99L18.562 5h1.05l.21-.66h1.56zM20.11 3.44l.492-1.542.492 1.542zM24.767 2l-.624 1.902L23.519 2h-.996l1.11 3h1.02l1.11-3zM28.154 2v.282c-.198-.228-.492-.366-.894-.366-.786 0-1.434.69-1.434 1.584s.648 1.584 1.434 1.584c.402 0 .696-.138.894-.366V5h.9V2zm-.714 2.232c-.414 0-.714-.282-.714-.732s.3-.732.714-.732.714.282.714.732-.3.732-.714.732M29.714 5h.9V.62h-.9zM31.723 1.736c.294 0 .54-.246.54-.54a.546.546 0 0 0-.54-.54.546.546 0 0 0-.54.54c0 .294.246.54.54.54M31.273 5h.9V2h-.9zM34.625 1.916c-.402 0-.696.138-.894.366V.8h-.9V5h.9v-.282c.198.228.492.366.894.366.786 0 1.434-.69 1.434-1.584s-.648-1.584-1.434-1.584m-.18 2.316c-.414 0-.714-.282-.714-.732s.3-.732.714-.732.714.282.714.732-.3.732-.714.732M36.57 5h.9V.62h-.9zM38.932 3.86h2.13q.036-.171.036-.36c0-.906-.648-1.584-1.524-1.584-.948 0-1.596.69-1.596 1.584s.636 1.584 1.662 1.584c.57 0 1.014-.21 1.308-.618l-.72-.414a.78.78 0 0 1-.576.228c-.33 0-.606-.108-.72-.42m-.018-.672c.084-.306.312-.474.654-.474.27 0 .54.126.636.474zM44.549 5.084c.882 0 1.59-.69 1.59-1.584s-.708-1.584-1.59-1.584-1.59.69-1.59 1.584.708 1.584 1.59 1.584m0-.876c-.39 0-.69-.282-.69-.708s.3-.708.69-.708.69.282.69.708-.3.708-.69.708M48.406 1.916c-.396 0-.696.144-.858.366V2h-.9v3h.9V3.362c0-.426.228-.618.558-.618.288 0 .522.174.522.546V5h.9V3.158c0-.81-.516-1.242-1.122-1.242M53.404 2.864V2h-.618v-.84l-.9.27V2h-.48v.864h.48v1.062c0 .84.342 1.194 1.518 1.074v-.816c-.396.024-.618 0-.618-.258V2.864zM55.671 1.916c-.396 0-.696.144-.858.366V.8h-.9V5h.9V3.362c0-.426.228-.618.558-.618.288 0 .522.174.522.546V5h.9V3.158c0-.81-.516-1.242-1.122-1.242M58.215 3.86h2.13q.036-.171.036-.36c0-.906-.648-1.584-1.524-1.584-.948 0-1.596.69-1.596 1.584s.636 1.584 1.662 1.584c.57 0 1.014-.21 1.308-.618l-.72-.414a.78.78 0 0 1-.576.228c-.33 0-.606-.108-.72-.42m-.018-.672c.084-.306.312-.474.654-.474.27 0 .54.126.636.474zM23.612 16h1.75l-2.38-7h-2.04l-2.38 7h1.75l.35-1.1h2.6zm-2.47-2.6.82-2.57.82 2.57zM28.899 10.86c-.67 0-1.16.23-1.49.61V11h-1.5v7h1.5v-2.47c.33.38.82.61 1.49.61 1.31 0 2.39-1.15 2.39-2.64s-1.08-2.64-2.39-2.64m-.3 3.86c-.69 0-1.19-.47-1.19-1.22s.5-1.22 1.19-1.22 1.19.47 1.19 1.22-.5 1.22-1.19 1.22M35.13 10.86c-.67 0-1.16.23-1.49.61V11h-1.5v7h1.5v-2.47c.33.38.82.61 1.49.61 1.31 0 2.39-1.15 2.39-2.64s-1.08-2.64-2.39-2.64m-.3 3.86c-.69 0-1.19-.47-1.19-1.22s.5-1.22 1.19-1.22 1.19.47 1.19 1.22-.5 1.22-1.19 1.22M38.37 16h1.5V8.7h-1.5zM42.307 14.1h3.55q.06-.285.06-.6c0-1.51-1.08-2.64-2.54-2.64-1.58 0-2.66 1.15-2.66 2.64s1.06 2.64 2.77 2.64c.95 0 1.69-.35 2.18-1.03l-1.2-.69c-.2.22-.55.38-.96.38-.55 0-1.01-.18-1.2-.7m-.03-1.12c.14-.51.52-.79 1.09-.79.45 0 .9.21 1.06.79zM51.768 16.14c1.52 0 2.6-.8 2.6-2.15 0-1.48-1.19-1.85-2.25-2.17-1.09-.33-1.26-.55-1.26-.87 0-.28.25-.53.75-.53.64 0 .97.31 1.21.81l1.35-.79c-.51-1.03-1.41-1.58-2.56-1.58-1.21 0-2.35.78-2.35 2.13 0 1.34 1.02 1.84 2.06 2.13 1.05.29 1.45.46 1.45.89 0 .27-.19.57-.95.57-.79 0-1.22-.39-1.47-.97l-1.38.8c.39 1.03 1.33 1.73 2.8 1.73M57.901 12.44V11h-1.03V9.6l-1.5.45V11h-.8v1.44h.8v1.77c0 1.4.57 1.99 2.53 1.79v-1.36c-.66.04-1.03 0-1.03-.43v-1.77zM61.053 16.14c1.47 0 2.65-1.15 2.65-2.64s-1.18-2.64-2.65-2.64-2.65 1.15-2.65 2.64 1.18 2.64 2.65 2.64m0-1.46c-.65 0-1.15-.47-1.15-1.18s.5-1.18 1.15-1.18 1.15.47 1.15 1.18-.5 1.18-1.15 1.18M66.051 11.89V11h-1.5v5h1.5v-2.26c0-.99.88-1.24 1.5-1.14v-1.7c-.63 0-1.3.32-1.5.99M69.446 14.1h3.55q.06-.285.06-.6c0-1.51-1.08-2.64-2.54-2.64-1.58 0-2.66 1.15-2.66 2.64s1.06 2.64 2.77 2.64c.95 0 1.69-.35 2.18-1.03l-1.2-.69c-.2.22-.55.38-.96.38-.55 0-1.01-.18-1.2-.7m-.03-1.12c.14-.51.52-.79 1.09-.79.45 0 .9.21 1.06.79z"
      />
    ),
  },
};

export default function Icons({
  name,
  size = 24,
  className = "",
  fill = "none",
  id = "",
  color = "currentColor",
  ...props
}: SvgProps) {
  const icon = svgIcons[name as keyof typeof svgIcons];

  if (!icon) {
    console.warn(
      `SVG icon "${name}" not found. Available icons: ${Object.keys(svgIcons).join(", ")}`
    );
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      id={id}
      fill={fill}
      viewBox={icon.viewBox}
      className={className}
      style={{ color }}
      {...props}
    >
      {icon.content}
    </svg>
  );
}

// Export individual icon components for better tree shaking
export const PlayIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="play" {...props} />
);
export const PlaneIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="plane" {...props} />
);
export const SatelliteIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="satellite" {...props} />
);
export const MicIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="mic" {...props} />
);
export const GearIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="gear" {...props} />
);
export const RectIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="rect" {...props} />
);
export const RectRedIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="rectRed" {...props} />
);
export const PointerIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="pointer" {...props} />
);
export const SwirlesIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="swirles" {...props} />
);
export const DestinationIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="destination" {...props} />
);
export const PaymentIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="payment" {...props} />
);
export const AirportIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="airport" {...props} />
);
export const LeafIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="leaf" {...props} />
);
export const MapIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="map" {...props} />
);
export const BuildingIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="building" {...props} />
);
export const PaperPlaneIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="paperPlane" {...props} />
);
export const HeartIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="heart" {...props} />
);
export const FacebookIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="facebook" {...props} />
);
export const InstagramIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="instagram" {...props} />
);
export const XitterIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="xitter" {...props} />
);
export const MailIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="mail" {...props} />
);
export const RingsImg = (props: Omit<SvgProps, "name">) => (
  <Icons name="rings" {...props} />
);
export const NavArrowIcon = (props: Omit<SvgProps, "name">) => (
  <Icons name="navArrow" {...props} />
);
export const BtnGooglePlay = (props: Omit<SvgProps, "name">) => (
  <Icons name="btnGooglePlay" {...props} />
);
export const BtnAppleStore = (props: Omit<SvgProps, "name">) => (
  <Icons name="btnAppleStore" {...props} />
);
