import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Select, Button, useToast } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';

import HeroData from '../../Data/Hero/data';
import BandsData from '../../Data/Bands/data';
import none from '../../assets/none.svg';

export default function Hero() {
  let payload = {};
  const toast = useToast();
  const [state, setState] = useState('');
  const [region, setRegion] = useState(null);
  const [band, setBand] = useState('');
  const [sub, setSub] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const spectrumRef = useRef(null);

  const [utilizedPage, setUtilizedPage] = useState(0);
  const [notUtilizedPage, setNotUtilizedPage] = useState(0);
  const frequenciesPerPage = 4;

  const getUtilizedFrequenciesByPage = () => {
    const startIndex = utilizedPage * frequenciesPerPage;
    const endIndex = startIndex + frequenciesPerPage;
    return result?.frequencies.utilized.slice(startIndex, endIndex);
  };

  const getNotUtilizedFrequenciesByPage = () => {
    const startIndex = notUtilizedPage * frequenciesPerPage;
    const endIndex = startIndex + frequenciesPerPage;
    return result?.frequencies.notutilized.slice(startIndex, endIndex);
  };

  // Handler for utilized frequencies pagination
  const handleUtilizedPageChange = ({ selected }) => {
    setUtilizedPage(selected);
  };

  // Handler for not utilized frequencies pagination
  const handleNotUtilizedPageChange = ({ selected }) => {
    setNotUtilizedPage(selected);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
    setRegion(null);
    setBand(null);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleSubbandChange = (event) => {
    setSub(event.target.value);
  };
  const handleBandChange = (event) => {
    setBand(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult(null);
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    if (state === 'Lagos') {
      payload = {
        location: formData.get('location'),
        region: formData.get('region'),
        bands: formData.get('bands'),
        subbandss: formData.get('subbands'),
      };
    } else {
      payload = {
        location: formData.get('location'),
        bands: formData.get('bands'),
        subbandss: formData.get('subbands'),
      };
    }
    // Check if any of the required fields are missing
    if (
      !payload.location ||
      (!payload.region && state === 'Lagos') ||
      !payload.bands
    ) {
      setLoading(false);
      toast({
        title: 'Error',
        variant: 'top-accent',
        position: 'bottom-right',
        description: 'Please select all required fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        containerStyle: {
          width: '800px',
          maxWidth: '50%',
        },
      });

      return;
    }

    if (!payload.subbandss && band !== '100KHZ-30MHz') {
      setLoading(false);
      toast({
        title: 'Error',
        variant: 'top-accent',
        position: 'bottom-right',
        description: 'Subband is required. Please select a subband',
        status: 'error',
        duration: 3000,
        isClosable: true,
        containerStyle: {
          width: '800px',
          maxWidth: '50%',
        },
      });
      return;
    }
    function getResultObject(data) {
      const { location, region, bands, subbandss } = data;

      const locationData = BandsData.find((ld) => ld.location === location);
      if (!locationData) {
        return null; // Return null if the location is not found in BandsData
      }

      let band;
      if (region) {
        band = locationData.region
          .find((r) => r.region === region)
          ?.bands.find((b) => b.range === bands);
      } else {
        band = locationData.bands.find((b) => b.range === bands);
      }

      if (!band) {
        return null; // Return null if the band range is not found for the location and region
      }

      if (!band.subbands) {
        return band.result; // Return the result object for the band directly if it doesn't have any subbands
      }

      if (!subbandss) {
        return null; // Return null if subbands are not provided
      }

      const subband = band.subbands.find((sb) => sb.range === subbandss);
      if (!subband) {
        return null; // Return null if the subband range is not found for the band
      }

      return subband.result;
    }
    const res = await getResultObject(payload);
    setTimeout(() => {
      setResult(res);
      setLoading(false);
      // Scroll to the spectrum visualization section after setting the result
      spectrumRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };
  function checkStateAndRegion(state, region) {
    // Check if Lagos is selected and there is a region
    if (state === 'Lagos' && region) {
      return false;
    }

    // Check if any other state is selected (excluding Lagos)
    if (state && state !== 'Lagos') {
      return false;
    }

    // If no state is selected or Lagos is selected but no region, return true
    return true;
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    arrows: false,
    cssEase: 'linear',
    //fade: true,
  };
  return (
    <>
      <div className=" flex flex-col lg:hidden">
        <div className="!h-[700px] !w-full relative">
          <Slider {...settings}>
            {HeroData?.map((data) => (
              <div key={data.id} className="w-full">
                <img src={data.sm} className="w-full" alt={data.name} />
              </div>
            ))}
          </Slider>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative mx-[16px] bottom-[100px] left-0 right-0
      md:mx-[45px] py-[24px] px-[16px] rounded-[20px] border-2 border-[#EDEDF2] bg-white shadow-spec"
        >
          <div className="flex flex-col space-y-[24px]">
            {/*location */}
            <div>
              <h1>Location</h1>
              <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F]">
                <Select
                  name="location"
                  placeholder="Select State"
                  variant="unstyled"
                  size="lg"
                  className="w-full"
                  onChange={handleStateChange}
                >
                  {BandsData.map((Location) => (
                    <option key={Location.id} value={Location.location}>
                      {Location.location}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            {/*Region */}
            {state === 'Lagos' && (
              <div>
                <h1>Region</h1>
                <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F]">
                  <Select
                    name="region"
                    placeholder="Select Region"
                    variant="unstyled"
                    size="lg"
                    className="w-full"
                    onChange={handleRegionChange}
                  >
                    {BandsData.find(
                      (data) => data.location === state
                    )?.region?.map((region, index) => (
                      <option key={index} value={region.region}>
                        {region.region}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            )}
            {/* Bands*/}
            <div>
              <h1>Bands</h1>
              <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F]">
                {state === 'Lagos' ? (
                  <Select
                    name="bands"
                    placeholder="Select Band"
                    variant="unstyled"
                    size="lg"
                    isDisabled={checkStateAndRegion(state, region)}
                    className="w-full"
                    onChange={handleBandChange}
                  >
                    {BandsData.find((data) => data.location === state)
                      ?.region.find((r) => r.region === region)
                      ?.bands?.map((band) => (
                        <option key={band.range} value={band.range}>
                          {band.range}
                        </option>
                      ))}
                  </Select>
                ) : (
                  <Select
                    name="bands"
                    placeholder="Select Band"
                    variant="unstyled"
                    size="lg"
                    isDisabled={checkStateAndRegion(state, region)}
                    className="w-full"
                    onChange={handleBandChange}
                  >
                    {BandsData.find(
                      (data) => data.location === state
                    )?.bands?.map((band) => (
                      <option key={band.range} value={band.range}>
                        {band.range}
                      </option>
                    ))}
                  </Select>
                )}
              </div>
            </div>
            {/*Subbands */}
            <div>
              {band !== '100KHZ-30MHz' && state != 'Lagos' && (
                <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                  <Select
                    name="subbands"
                    placeholder="Select Sub-Band"
                    variant="unstyled"
                    size="lg"
                    isDisabled={band ? false : true}
                    className="w-full"
                    onChange={handleSubbandChange}
                  >
                    {BandsData.find((data) => data.location === state)
                      ?.bands?.find((bands) => bands.range === band)
                      ?.subbands?.map((subband) => (
                        <option key={subband.range} value={subband.range}>
                          {subband.range}
                        </option>
                      ))}
                  </Select>
                </div>
              )}
              {band !== '100KHZ-30MHz' && state === 'Lagos' && (
                <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                  <Select
                    name="subbands"
                    placeholder="Select Sub-Band"
                    variant="unstyled"
                    size="lg"
                    isDisabled={band ? false : true}
                    className="w-full"
                    onChange={handleSubbandChange}
                  >
                    {BandsData.find((data) => data.location === state)
                      ?.region.find((r) => r.region === region)
                      ?.bands?.find((bands) => bands.range === band)
                      ?.subbands?.map((subband) => (
                        <option key={subband.range} value={subband.range}>
                          {subband.range}
                        </option>
                      ))}
                  </Select>
                </div>
              )}
            </div>
          </div>
          <div className="pt-[60px]  flex items-center justify-center">
            {loading ? (
              <Button
                isLoading
                loadingText="Submitting"
                colorScheme="#4F00B6"
                size="lg"
                variant="solid"
                className="w-full h-[56px] rounded-[10px] bg-[#4F00B6]"
                type="submit"
              >
                Load Data
              </Button>
            ) : (
              <Button
                colorScheme="#4F00B6"
                size="lg"
                variant="solid"
                className="w-full h-[56px] rounded-[10px] bg-[#4F00B6]"
                type="submit"
              >
                Load Data
              </Button>
            )}
          </div>
        </form>
        {/*RESULT VISUAL*/}
        {result ? (
          <div
            ref={spectrumRef}
            className="mt-[100px] mx-[16px] md:mx-[45px] flex flex-col"
          >
            <div className="py-[20px] px-[40px] border bg-[#F6F6F8] rounded-[10px]">
              <h1 className="text-[#73FF0F] font-graphik text-[16px] font-medium leading-[32px]">
                Spectrum Visualization
              </h1>
            </div>
            <div className="border-2 rounded-[10px] py-[40px] px-[16px]">
              {/*Duty cycle */}
              <div className="flex flex-col space-y-[16px]">
                <h1 className="font-graphik font-semibold text-[20px] leading-[28px]">
                  Utilization
                </h1>
                <div className="flex flex-col p-[16px] space-y-[24px]">
                  <h1 className="font-graphik font-normal text-[20px] leading-[28px]">
                    Duty cycle (percentage)
                  </h1>
                  <p className="rounded-[8px] bg-[#F6F6F8] py-[12px] px-[24px] font-graphik font-normal text-[32px] leading-[40px] mr-[150px]">
                    {result?.utilization}%
                  </p>
                </div>
              </div>
              {/*Frequency */}
              <div className="flex flex-col space-y-[16px]">
                <h1></h1>
                <div className="flex flex-col space-y-[40px]">
                  {/*Utilized */}
                  <div>
                    <h1
                      className="font-graphik font-semibold leading-[24px] text-[16px] 
                    bg-[#F6F6F8] border rounded-[10px] py-[16px] px-[16px]"
                    >
                      Utilized
                    </h1>
                    <div className="border rounded-[10px] py-[24px] px-[16px] flex flex-col space-y-[24px]">
                      {getUtilizedFrequenciesByPage()?.map(
                        (frequency, index) => (
                          <p
                            key={index}
                            className="font-graphik text-[24px] font-normal leading-[32px]"
                          >
                            {frequency}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                  {/*Utilized */}
                  <div>
                    <h1
                      className="font-graphik font-semibold leading-[24px] text-[16px] 
                    bg-[#F6F6F8] border rounded-[10px] py-[16px] px-[16px]"
                    >
                      {' '}
                      Not Utilized
                    </h1>
                    <div className="border rounded-[10px] py-[24px] px-[16px] flex flex-col space-y-[24px]">
                      {getNotUtilizedFrequenciesByPage()?.map(
                        (frequency, index) => (
                          <p
                            key={index}
                            className="font-graphik text-[24px] font-normal leading-[32px]"
                          >
                            {frequency}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            ref={spectrumRef}
            className="mt-[100px] mx-[16px] md:mx-[45px] flex flex-col"
          >
            <div className="py-[20px] px-[40px] border bg-[#F6F6F8] rounded-[10px]">
              <h1 className="text-[#73FF0F] font-graphik text-[20px] font-medium leading-[32px]">
                Spectrum Visualization
              </h1>
            </div>
            <div className="border rounded-[10px] p-[40px]  h-[500px] flex flex-col items-center justify-center">
              <img src={none} />
              <p className="font-graphik font-medium text-[16px] leading-[24px]">
                No available data
              </p>
            </div>
          </div>
        )}
      </div>
      {/*Large Screen */}
      <div className="hidden lg:flex flex-col">
        <div className="!h-[600px] !w-full relative">
          <Slider {...settings}>
            {HeroData?.map((data) => (
              <div key={data.id} className="w-full">
                <img src={data.image} className="w-full" alt={data.name} />
              </div>
            ))}
          </Slider>
        </div>
        <form
          onSubmit={handleSubmit}
          className="relative lg:bottom-[250px] xl:bottom-[140px] left-0 right-0 mx-[172.5px] p-[40px] rounded-[20px] border-2 border-[#EDEDF2] bg-white shadow-spec"
        >
          <div className="flex flex-col space-y-[24px] ">
            {/*Location */}
            <div className="flex flex-col">
              <h1 className="text-[#060A23] font-graphik text-base font-medium leading-6">
                Location
              </h1>
              <div className="h-[86px] items-center justify-center flex flex-row space-x-[24px] w-full">
                <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                  <Select
                    name="location"
                    placeholder="Select State"
                    variant="unstyled"
                    size="lg"
                    className="w-full"
                    onChange={handleStateChange}
                  >
                    {BandsData.map((Location) => (
                      <option key={Location.id} value={Location.location}>
                        {Location.location}
                      </option>
                    ))}
                  </Select>
                </div>
                {state === 'Lagos' && (
                  <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                    <Select
                      name="region"
                      placeholder="Select Region"
                      variant="unstyled"
                      size="lg"
                      className="w-full"
                      onChange={handleRegionChange}
                    >
                      {BandsData.find(
                        (data) => data.location === state
                      )?.region?.map((region, index) => (
                        <option key={index} value={region.region}>
                          {region.region}
                        </option>
                      ))}
                    </Select>
                  </div>
                )}
              </div>
            </div>
            {/*Bands */}
            <div className="flex flex-col">
              <h1 className="text-[#060A23] font-graphik text-base font-medium leading-6">
                Bands
              </h1>
              <div className="h-[86px] items-center justify-center flex flex-row space-x-[24px] w-full">
                <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                  {state === 'Lagos' ? (
                    <Select
                      name="bands"
                      placeholder="Select Band"
                      variant="unstyled"
                      size="lg"
                      isDisabled={checkStateAndRegion(state, region)}
                      className="w-full"
                      onChange={handleBandChange}
                    >
                      {BandsData.find((data) => data.location === state)
                        ?.region.find((r) => r.region === region)
                        ?.bands?.map((band) => (
                          <option key={band.range} value={band.range}>
                            {band.range}
                          </option>
                        ))}
                    </Select>
                  ) : (
                    <Select
                      name="bands"
                      placeholder="Select Band"
                      variant="unstyled"
                      size="lg"
                      isDisabled={checkStateAndRegion(state, region)}
                      className="w-full"
                      onChange={handleBandChange}
                    >
                      {BandsData.find(
                        (data) => data.location === state
                      )?.bands?.map((band) => (
                        <option key={band.range} value={band.range}>
                          {band.range}
                        </option>
                      ))}
                    </Select>
                  )}
                </div>
                {band !== '100KHZ-30MHz' && state != 'Lagos' && (
                  <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                    <Select
                      name="subbands"
                      placeholder="Select Sub-Band"
                      variant="unstyled"
                      size="lg"
                      isDisabled={band ? false : true}
                      className="w-full"
                      onChange={handleSubbandChange}
                    >
                      {BandsData.find((data) => data.location === state)
                        ?.bands?.find((bands) => bands.range === band)
                        ?.subbands?.map((subband) => (
                          <option key={subband.range} value={subband.range}>
                            {subband.range}
                          </option>
                        ))}
                    </Select>
                  </div>
                )}
                {band !== '100KHZ-30MHz' && state === 'Lagos' && (
                  <div className="p-[16px] w-full rounded-[10px] border border-solid border-[#CECEDE] bg-white focus:border-[#73FF0F] ">
                    <Select
                      name="subbands"
                      placeholder="Select Sub-Band"
                      variant="unstyled"
                      size="lg"
                      isDisabled={band ? false : true}
                      className="w-full"
                      onChange={handleSubbandChange}
                    >
                      {BandsData.find((data) => data.location === state)
                        ?.region.find((r) => r.region === region)
                        ?.bands?.find((bands) => bands.range === band)
                        ?.subbands?.map((subband) => (
                          <option key={subband.range} value={subband.range}>
                            {subband.range}
                          </option>
                        ))}
                    </Select>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pt-[60px]  flex items-center justify-center">
            {loading ? (
              <Button
                isLoading
                loadingText="Submitting"
                colorScheme="#4F00B6"
                size="lg"
                variant="solid"
                className="w-full h-[56px] rounded-[10px] bg-[#4F00B6]"
                type="submit"
              >
                Load Data
              </Button>
            ) : (
              <Button
                colorScheme="#4F00B6"
                size="lg"
                variant="solid"
                className="w-full h-[56px] rounded-[10px] bg-[#4F00B6]"
                type="submit"
              >
                Load Data
              </Button>
            )}
          </div>
        </form>
        {/*RESULT VISUAL */}
        {result ? (
          <div
            ref={spectrumRef}
            className="mt-[100px] mx-[172.5px] flex flex-col"
          >
            <div className="py-[20px] px-[40px] border bg-[#F6F6F8] rounded-[10px]">
              <h1 className="text-[#73FF0F] font-graphik text-[20px] font-medium leading-[32px]">
                Spectrum Visualization
              </h1>
            </div>

            <div className="border-2 rounded-[10px] p-[40px]">
              <div className="flex flex-col space-y-[40px]">
                {/*DUTY CYCLE*/}
                <div className="flex flex-col">
                  <h1 className="font-graphik text-[24px] font-bold leading-[32px]">
                    Utilization
                  </h1>
                  <div className="p-[24px] flex flex-row space-x-[100px] items-center">
                    <p className="font-graphik text-[36px] font-normal leading-[44px]">
                      Duty cycle (percentage) :
                    </p>
                    <p className="rounded-[8px] bg-[#F6F6F8] py-[12px] px-[24px] font-graphik text-[48px] leading-[56px] font-normal">
                      {result?.utilization}%
                    </p>
                  </div>
                </div>
                {/*Frequency */}
                <div className="flex flex-col space-y-[16px]">
                  <h1 className="font-graphik text-[24px] font-bold leading-[32px]">
                    Frequencies
                  </h1>
                  <div className="flex flex-row space-x-[40px] w-full">
                    {/*Utilized */}
                    <div className="flex flex-col w-[50%]">
                      <p className="font-graphik font-bold leading-[28px] text-[20px] bg-[#F6F6F8] border rounded-[10px] py-[16px] px-[24px]">
                        Utilized
                      </p>
                      <div className="border rounded-[10px] p-[24px] flex flex-col space-y-[24px]">
                        {getUtilizedFrequenciesByPage().map(
                          (frequency, index) => (
                            <p
                              key={index}
                              className="font-graphik text-[24px] font-normal leading-[32px]"
                            >
                              {frequency}
                            </p>
                          )
                        )}
                      </div>
                      {/* Utilized frequencies pagination */}
                      <ReactPaginate
                        className="flex flex-row p-[15px] mt-[10px] justify-center space-x-[24px]"
                        previousLabel={'<<<'}
                        nextLabel={'>>>'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(
                          result?.frequencies.utilized.length /
                            frequenciesPerPage
                        )}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handleUtilizedPageChange}
                        containerClassName="pagination"
                        activeLinkClassName="active"
                        previousLinkClassName="page-num"
                        nextLinkClassName="page-num"
                        pageLinkClassName="page-num"
                      />
                    </div>

                    {/*UNUTILIZED */}
                    <div className="flex flex-col w-[50%]">
                      <p className="font-graphik font-bold leading-[28px] text-[20px] bg-[#F6F6F8] border rounded-[10px] py-[16px] px-[24px]">
                        Not Utilized
                      </p>
                      <div className="border rounded-[10px] p-[24px] flex flex-col space-y-[24px]">
                        {getNotUtilizedFrequenciesByPage().map(
                          (frequency, index) => (
                            <p
                              key={index}
                              className="font-graphik text-[24px] font-normal leading-[32px]"
                            >
                              {frequency}
                            </p>
                          )
                        )}
                      </div>
                      <ReactPaginate
                        className="flex flex-row p-[15px] mt-[10px] justify-center space-x-[24px]"
                        previousLabel={'<<<'}
                        nextLabel={'>>>'}
                        breakLabel={'...'}
                        pageCount={Math.ceil(
                          result?.frequencies.notutilized.length /
                            frequenciesPerPage
                        )}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handleNotUtilizedPageChange}
                        containerClassName="pagination"
                        activeLinkClassName="active"
                        previousLinkClassName="page-num"
                        nextLinkClassName="page-num"
                        pageLinkClassName="page-num"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            ref={spectrumRef}
            className="mt-[100px] mx-[172.5px]  flex flex-col"
          >
            <div className="py-[20px] px-[40px] border bg-[#F6F6F8] rounded-[10px]">
              <h1 className="text-[#73FF0F] font-graphik text-[20px] font-medium leading-[32px]">
                Spectrum Visualization
              </h1>
            </div>

            <div className="border rounded-[10px] p-[40px]  h-[500px] flex flex-col items-center justify-center">
              <img src={none} />
              <p className="font-graphik font-medium text-[16px] leading-[24px]">
                No available data
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
