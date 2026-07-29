'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

function PhoneIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 50 50"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M38.66 21.6564C37.5957 21.6564 36.7542 20.7901 36.7542 19.7506C36.7542 18.8349 35.8385 16.9291 34.304 15.2709C32.7942 13.6621 31.136 12.7216 29.75 12.7216C28.6857 12.7216 27.8442 11.8554 27.8442 10.8159C27.8442 9.7764 28.7105 8.91016 29.75 8.91016C32.225 8.91016 34.8237 10.2467 37.1007 12.6474C39.2292 14.8996 40.5905 17.6964 40.5905 19.7259C40.5905 20.7901 39.7242 21.6564 38.66 21.6564Z"
        fill="#6713DB"
      />
      <path
        d="M47.5939 21.6562C46.5296 21.6562 45.6881 20.7899 45.6881 19.7504C45.6881 10.9642 38.5354 3.83624 29.7739 3.83624C28.7097 3.83624 27.8682 2.96999 27.8682 1.93049C27.8682 0.890998 28.7097 0 29.7492 0C40.6391 0 49.4996 8.86047 49.4996 19.7504C49.4996 20.7899 48.6334 21.6562 47.5939 21.6562Z"
        fill="#6713DB"
      />
      <path
        d="M22.3987 32.0512L17.82 36.6299C16.8547 37.5951 15.3202 37.5951 14.3302 36.6546C14.058 36.3824 13.7857 36.1349 13.5135 35.8627C10.9642 33.2887 8.66248 30.5909 6.60823 27.7694C4.57874 24.9479 2.94524 22.1264 1.75725 19.3297C0.593998 16.5082 0 13.8105 0 11.2365C0 9.55347 0.296999 7.94473 0.890997 6.45973C1.485 4.94999 2.42549 3.56399 3.73724 2.32649C5.32124 0.767248 7.05373 0 8.88523 0C9.57822 0 10.2712 0.1485 10.89 0.445499C11.5335 0.742498 12.1027 1.188 12.5482 1.8315L18.2902 9.92472C18.7357 10.5435 19.0574 11.1127 19.2802 11.6572C19.5029 12.177 19.6267 12.6967 19.6267 13.167C19.6267 13.761 19.4534 14.355 19.1069 14.9242C18.7852 15.4935 18.3149 16.0875 17.721 16.6815L15.84 18.6367C15.5677 18.9089 15.444 19.2307 15.444 19.6267C15.444 19.8247 15.4687 19.9979 15.5182 20.1959C15.5925 20.3939 15.6667 20.5424 15.7162 20.6909C16.1617 21.5077 16.929 22.5719 18.018 23.8589C19.1317 25.1459 20.3197 26.4577 21.6067 27.7694C21.8542 28.0169 22.1264 28.2644 22.3739 28.5119C23.3639 29.4772 23.3887 31.0612 22.3987 32.0512Z"
        fill="#6713DB"
      />
      <path
        d="M49.4252 40.4165C49.4252 41.1095 49.3015 41.8273 49.054 42.5203C48.9797 42.7183 48.9055 42.9163 48.8065 43.1143C48.3857 44.0053 47.8412 44.8468 47.1235 45.6388C45.9107 46.9753 44.5742 47.9405 43.0645 48.5593C43.0398 48.5593 43.015 48.584 42.9903 48.584C41.53 49.178 39.946 49.4998 38.2383 49.4998C35.7138 49.4998 33.016 48.9058 30.1698 47.693C27.3235 46.4803 24.4773 44.8468 21.6558 42.7925C20.6906 42.0748 19.7253 41.357 18.8096 40.5898L26.9028 32.4966C27.5958 33.0163 28.2145 33.4123 28.7343 33.6846C28.858 33.7341 29.0065 33.8083 29.1798 33.8826C29.3778 33.9568 29.5758 33.9816 29.7985 33.9816C30.2193 33.9816 30.541 33.8331 30.8133 33.5608L32.6943 31.7046C33.313 31.0858 33.907 30.6156 34.4763 30.3186C35.0455 29.9721 35.6148 29.7988 36.2335 29.7988C36.7038 29.7988 37.1988 29.8978 37.7433 30.1206C38.2878 30.3433 38.857 30.6651 39.4758 31.0858L47.668 36.9021C48.3115 37.3476 48.757 37.8673 49.0292 38.4861C49.2767 39.1048 49.4252 39.7235 49.4252 40.4165Z"
        fill="#6713DB"
      />
    </svg>
  );
}

function PhoneButton() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="mt-5 inline-flex items-center justify-center gap-3 rounded-[6px] border-2 border-[#5A23B9] bg-white px-4 py-3 no-underline transition hover:brightness-95"
    >
      <PhoneIcon />
      <span
        className="text-[16px] font-semibold text-[#5A23B9] sm:text-[22px]"
        style={{ fontFamily: 'var(--font-support-montserrat), Montserrat, sans-serif' }}
      >
        {SITE.phoneDisplay}
      </span>
    </a>
  );
}

export default function IndependentSupportHelp({ fullscreen = false }) {
  return (
    <div
      className={`w-full bg-[#f4f1fb] bg-cover bg-center bg-no-repeat px-3 py-8 sm:px-4 sm:py-10 ${
        fullscreen ? 'min-h-full box-border' : 'min-h-screen'
      }`}
      style={{
        backgroundImage: "url('/images/support/bg-box.jpg')",
        fontFamily: 'var(--font-support-poppins), Poppins, sans-serif',
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <h1 className="mb-2 max-w-4xl text-center text-[24px] font-bold capitalize leading-[29px] text-black md:text-[45px] md:leading-[54px]">
          How would you like to connect for{' '}
          <span className="text-[#5A23B9]">Internet Services and Assistance?</span>
        </h1>

        <Image
          src="/images/support/underline.png"
          alt=""
          width={113}
          height={9}
          className="mb-6 hidden w-[7%] max-w-[113px] md:mb-8 md:block"
        />

        <div className="flex w-full flex-col items-stretch justify-center gap-4 md:flex-row md:gap-6 lg:gap-[22px]">
          <div
            className="flex min-h-[46vh] w-full flex-col items-center justify-center rounded-[14px] px-4 py-6 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.28)] md:min-h-[60vh] md:w-[40%] md:px-5"
            style={{
              backgroundImage: "url('/images/support/card-box.png')",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Image
              src="/images/support/human-agent-icon.png"
              alt=""
              width={218}
              height={216}
              className="mb-2 w-[35%] max-w-[120px] md:w-[45%]"
            />
            <h2 className="mb-2 max-w-[70%] text-center text-[24px] font-bold capitalize leading-[30px] text-white md:max-w-[61%] md:text-[34px] md:leading-[40px]">
              Speak With A Human Agent
            </h2>
            <div className="mx-auto mb-1 h-[2.5px] w-[14%] bg-[#8C52F6]" />
            <PhoneButton />
          </div>

          <div className="flex min-h-[46vh] w-full flex-col items-center justify-center rounded-[14px] border-2 border-[#5C11CF] bg-white px-4 py-6 md:min-h-[60vh] md:w-[40%] md:px-5">
            <Image
              src="/images/support/automated-icon.png"
              alt=""
              width={119}
              height={119}
              className="mb-2 w-[57%] max-w-[110px] md:w-[74%]"
            />
            <h2 className="mb-2 max-w-[60%] text-center text-[24px] font-bold capitalize leading-[30px] text-black md:max-w-[61%] md:text-[34px] md:leading-[40px]">
              Automated Support Line
            </h2>
            <div className="mx-auto mb-1 h-[2.5px] w-[14%] bg-[#8C52F6]" />
            <PhoneButton />
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col items-center px-2 md:mt-8">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[#0c1c24] px-4 py-2">
            <Image
              src="/images/logo.png"
              alt={`${SITE.brandFull} logo`}
              width={160}
              height={84}
              className="h-10 w-auto sm:h-12"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
