import React from 'react';

export default function Footer() {
  return (
    <>
      <div className=" flex flex-col lg:hidden  mt-[110px] space-y-[24px] px-[16px] pb-[40px]">
        <div className="flex flex-col space-y-[8px]">
          <p className="font-akira text-[20px] font-extrabold leading-[28px]">
            SPECPROFILE
          </p>
          <p className="font-graphik text-[16px] font-normal leading-[24px]">
            Copyright 2023. SpecProfile.
          </p>
          <p className="font-graphik text-[16px] font-normal leading-[24px]">
            This site is protected by the Google Privacy Policy and Terms of
            Service apply
          </p>
        </div>
        <div className="flex">
          <p className="font-graphik text-[16px] font-normal leading-[24px]">
            Created By The SpecProfile Group
          </p>
        </div>
      </div>
      <div className="hidden mt-[110px] lg:flex flex-row justify-between py-[24px] px-[80px]">
        <div className="flex flex-col space-y-[8px]">
          <p className="font-akira text-[20px] font-extrabold leading-[28px]">
            SPECPROFILE
          </p>
          <p className="font-graphik text-[16px] font-normal leading-[24px]">
            Copyright 2023. SpecProfile.
          </p>
          <p className="font-graphik text-[16px] font-normal leading-[24px]">
            This site is protected by the Google Privacy Policy and Terms of
            Service apply
          </p>
        </div>
        <div className="flex items-end">
          <p className="font-graphik text-[16px] font-normal leading-[24px]">
            Created By The SpecProfile Group
          </p>
        </div>
      </div>
    </>
  );
}
