'use client';

import Image from 'next/image';
import Link from 'next/link';
import HideLiveChat from '@/components/HideLiveChat';
import { SITE } from '@/lib/site';

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

function EnvelopeIcon({ className }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  );
}

const cardBase =
  'flex min-h-[46vh] w-full flex-col items-center justify-center rounded-[14px] px-4 py-6 md:min-h-[60vh] md:w-[40%]';
const cardHeading =
  'mt-3 max-w-[70%] text-center font-poppins text-[24px] font-bold capitalize leading-[30px] md:max-w-[61%] md:text-[34px] md:leading-[40px]';
const divider = 'mt-3 block h-[2.5px] w-[15%] bg-[#8C52F6] md:w-[14%]';
const cardAction =
  'mt-5 inline-flex w-[70%] items-center justify-center gap-[7px] rounded-[6px] border-2 border-[#5A23B9] bg-white px-2 py-2.5 md:w-[62%] md:gap-[14px]';
const cardActionText = 'font-montserrat text-[15px] font-semibold text-[#5A23B9] md:text-[22px]';

export default function ConnectOptions({ disclosure, showAddress = false }) {
  return (
    <div
      className="flex min-h-screen flex-col bg-[#efe8fb] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/support/bg-box.jpg')" }}
    >
      <HideLiveChat />

      <div className="mx-auto flex w-full max-w-[1340px] flex-1 flex-col px-2.5 pb-[18px] pt-2 md:py-[30px]">
        <div className="flex w-full flex-col items-center pt-4 md:pt-0">
          <h1 className="max-w-[97%] text-center font-poppins text-[24px] font-bold capitalize leading-[29px] text-black md:max-w-[67%] md:text-[45px] md:leading-[54px]">
            How would you like to connect for{' '}
            <span className="text-[#5A23B9]">Internet and TV Services?</span>
          </h1>
          <Image
            src="/images/support/underline.png"
            alt=""
            width={113}
            height={9}
            className="mt-3 hidden h-auto w-[94px] md:block"
          />
        </div>

        <div className="mt-6 flex w-full flex-wrap justify-center gap-x-[22px] gap-y-4 md:mt-8">
          <div
            className={`${cardBase} bg-cover bg-center shadow-[0_0_10px_0_rgba(0,0,0,0.28)]`}
            style={{ backgroundImage: "url('/images/support/card-box.png')" }}
          >
            <Image
              src="/images/support/human-agent-icon.png"
              alt=""
              width={218}
              height={216}
              className="h-auto w-[72px] md:w-[88px]"
              priority
            />
            <h2 className={`${cardHeading} text-white`}>Speak With A Human Agent</h2>
            <span className={divider} />
            <a href={`tel:${SITE.phoneTel}`} className={cardAction}>
              <PhoneIcon className="h-[18px] w-[18px] shrink-0 text-[#6713DB] md:h-6 md:w-6" />
              <span className={cardActionText}>{SITE.phoneDisplay}</span>
            </a>
          </div>

          <div className={`${cardBase} border-2 border-[#5C11CF] bg-white`}>
            <Image
              src="/images/support/automated-icon.png"
              alt=""
              width={119}
              height={119}
              className="h-auto w-[72px] md:w-[88px]"
            />
            <h2 className={`${cardHeading} text-black`}>Send a message</h2>
            <span className={divider} />
            <Link href="/contact" className={cardAction}>
              <EnvelopeIcon className="h-[18px] w-[18px] shrink-0 text-[#6713DB] md:h-6 md:w-6" />
              <span className={cardActionText}>Contact Form</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex w-full justify-center md:mt-4">
          <Link href="/" className="inline-flex justify-center">
            {/* Logo artwork is white, so it is forced to solid dark on this light background. */}
            <Image
              src="/images/logo.png"
              alt={`${SITE.brandFull} logo`}
              width={320}
              height={169}
              className="h-auto w-[150px] brightness-0 md:w-[190px]"
            />
          </Link>
        </div>

        <div className="mt-auto w-full pt-8">
          <p className="mx-auto max-w-3xl text-center text-[11px] leading-relaxed text-[#4b3f66] md:text-[12px]">
            {disclosure}
          </p>

          {showAddress && (
            <>
              {/*
                Kept in the markup but visually hidden, mirroring the reference site's
                agent pages. Do not "fix" the hidden class — it is intentional.
              */}
              <nav aria-label="Legal" className="hidden">
                <ul>
                  {SITE.legalLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="mt-3 text-center text-[11px] text-[#4b3f66] md:text-[12px]">
                {SITE.addressLine1}, {SITE.addressLine2}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
