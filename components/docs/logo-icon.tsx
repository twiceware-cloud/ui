import { cn } from '@/lib/utils'

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'fill-black stroke-0 stroke-white transition-all duration-300 dark:fill-white dark:stroke-black',
        className
      )}
    >
      <g clipPath="url(#clip0_184_19)">
        <path
          d="M256 0C51.2 0 0 51.2 0 256C0 460.8 51.2 512 256 512C460.8 512 512 460.8 512 256C512 51.2 460.8 0 256 0Z"
          fill="inherit"
        />
        <g filter="url(#filter0_d_184_19)">
          <path
            d="M376.611 97.322L163.067 228.262C161.386 229.308 159.8 230.783 158.465 232.542C157.13 234.301 156.09 236.285 155.447 238.301C154.808 240.26 154.616 242.181 154.893 243.84C155.166 245.414 155.915 246.638 157.037 247.341L250.409 278.195L134.318 408.893C133.733 409.684 133.302 410.582 133.078 411.476C132.856 412.327 132.869 413.131 133.116 413.76C133.349 414.414 133.774 414.798 134.389 414.913C134.998 415.032 135.708 414.876 136.41 414.468L349.965 283.511C351.647 282.465 353.232 280.99 354.567 279.231C355.903 277.472 356.942 275.488 357.585 273.472C358.218 271.518 358.406 269.604 358.128 267.951C357.86 266.371 357.115 265.141 355.996 264.432L273.221 222.129L378.714 102.88C379.299 102.088 379.73 101.19 379.955 100.297C380.177 99.4459 380.163 98.642 379.917 98.0128C379.673 97.4115 379.227 97.007 378.643 96.8593C378.035 96.7403 377.313 96.9143 376.611 97.322Z"
            fill="inherit"
          />
          <path
            d="M376.611 97.322L163.067 228.262C161.386 229.308 159.8 230.783 158.465 232.542C157.13 234.301 156.09 236.285 155.447 238.301C154.808 240.26 154.616 242.181 154.893 243.84C155.166 245.414 155.915 246.638 157.037 247.341L250.409 278.195L134.318 408.893C133.733 409.684 133.302 410.582 133.078 411.476C132.856 412.327 132.869 413.131 133.116 413.76C133.349 414.414 133.774 414.798 134.389 414.913C134.998 415.032 135.708 414.876 136.41 414.468L349.965 283.511C351.647 282.465 353.232 280.99 354.567 279.231C355.903 277.472 356.942 275.488 357.585 273.472C358.218 271.518 358.406 269.604 358.128 267.951C357.86 266.371 357.115 265.141 355.996 264.432L273.221 222.129L378.714 102.88C379.299 102.088 379.73 101.19 379.955 100.297C380.177 99.4459 380.163 98.642 379.917 98.0128C379.673 97.4115 379.227 97.007 378.643 96.8593C378.035 96.7403 377.313 96.9143 376.611 97.322Z"
            stroke="inherit"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_184_19"
          x="82.9219"
          y="51.8201"
          width="347.191"
          height="418.135"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_184_19" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_184_19"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_184_19">
          <rect width="512" height="512" fill="inherit" />
        </clipPath>
      </defs>
    </svg>
  )
}
