const BandsData = [
  {
    id: 1,
    location: 'Lagos',
    region: [
      {
        region: 'VI',
        bands: [
          //0hz to 30MHz
          {
            range: '0-30MHz',
            result: {
              utilization: '90',
              frequencies: {
                utilized: [
                  '100MHz',
                  '6000MHz',
                  '7000MHz',
                  '4000MHz',
                  '600MHz',
                  '3060MHz',
                  '200MHz',
                ],
                notutilized: [
                  '900MHz',
                  '5000MHz',
                  '700MHz',
                  '5000MHz',
                  '600MHz',
                  '4460MHz',
                  '8500MHz',
                ],
              },
            },
          },
          //30MHz to 300MHz
          {
            range: '30MHz-300MHz',
            subbands: [
              {
                range: '30.00MHz-60.00MHz',
                result: {
                  utilization: '40',
                  frequencies: {
                    utilized: [
                      '1500MHz',
                      '6060MHz',
                      '5805MHz',
                      '45000MHz',
                      '630MHz',
                      '56060MHz',
                      '5800MHz',
                    ],
                    notutilized: [
                      '100MHz',
                      '6000MHz',
                      '7000MHz',
                      '4000MHz',
                      '600MHz',
                      '3060MHz',
                      '200MHz',
                    ],
                  },
                },
              },
              {
                range: '60.00MHz-90.00MHz',
                result: {
                  utilization: '60',
                  frequencies: {
                    utilized: [
                      '5500MHz',
                      '4500MHz',
                      '54000MHz',
                      '5000MHz',
                      '50MHz',
                      '6060MHz',
                      '500MHz',
                    ],
                    notutilized: [
                      '5400MHz',
                      '450MHz',
                      '79500MHz',
                      '4000MHz',
                      '4300MHz',
                      '3450MHz',
                      '2340MHz',
                    ],
                  },
                },
              },
              {
                range: '90.00MHz-120.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
            ],
          },
          //300MHz to 3Ghz
          {
            range: '300MHz-3Ghz',
            subbands: [
              {
                range: '300.00-330.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '330.00-360.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '360.00-390.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '390.00-420.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '420.00-450.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '450.00-480.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '480.00-510.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '510.00-540.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '540.00-570.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '570.00-600.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '600.00-630.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '630.00-660.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '660.00-690.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '690.00-720.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '720.00-750.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '750.00-780.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '780.00-810.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '810.00-840.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '840.00-870.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '870.00-900.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '900.00-930.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '930.00-960.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '960.00-990.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '990.00-1020.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1020.00-1050.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1050.00-1080.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1080.00-1110.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1110.00-1140.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1140.00-1170.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1170.00-1200.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1200.00-1230.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1230.00-1260.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1260.00-1290.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1290.00-1320.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1320.00-1350.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1350.00-1380.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1380.00-1410.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1410.00-1440.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1440.00-1470.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1470.00-1500.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1500.00-1530.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1530.00-1560.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1560.00-1590.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1590.00-1620.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1620.00-1650.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1650.00-1680.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1680.00-1710.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1710.00-1740.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1740.00-1770.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1770.00-1800.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1800.00-1830.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1830.00-1860.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1860.00-1890.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1890.00-1920.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1920.00-1950.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1950.00-1980.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1980.00-2010.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2010.00-2040.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2040.00-2070.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2070.00-2100.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2100.00-2130.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2130.00-2160.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2160.00-2190.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2190.00-2220.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2220.00-2250.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2250.00-2280.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2280.00-2310.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2310.00-2340.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2340.00-2370.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2370.00-2400.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2400.00-2430.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2430.00-2460.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2460.00-2490.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2490.00-2520.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2520.00-2550.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2550.00-2580.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2580.00-2610.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2610.00-2640.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2640.00-2670.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2670.00-2700.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2700.00-2730.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2730.00-2760.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2760.00-2790.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2790.00-2820.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2820.00-2850.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2850.00-2880.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2880.00-2910.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2910.00-2940.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2940.00-2970.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2970.00-3000.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
            ],
          },
          //3Ghz to 6Ghz
          {
            range: '3Ghz-6Ghz',
            subbands: [
              {
                range: '3000.00MHz-3030.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3030.00MHz-3060.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3060.00MHz-3090.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3090.00MHz-3120.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3120.00MHz-3150.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3150.00MHz-3180.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3180.00MHz-3210.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3210.00MHz-3240.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3240.00MHz-3270.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3270.00MHz-3300.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3300.00MHz-3330.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3330.00MHz-3360.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3360.00MHz-3390.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3390.00MHz-3420.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3420.00MHz-3450.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3450.00MHz-3480.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3480.00MHz-3510.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3510.00MHz-3540.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3540.00MHz-3570.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3570.00MHz-3600.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3600.00MHz-3630.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3630.00MHz-3660.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3660.00MHz-3690.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3690.00MHz-3720.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3720.00MHz-3750.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3750.00MHz-3780.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3780.00MHz-3810.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3810.00MHz-3840.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3840.00MHz-3870.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3870.00MHz-3900.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3900.00MHz-3930.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3930.00MHz-3960.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3960.00MHz-3990.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3990.00MHz-4020.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4020.00MHz-4050.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4050.00MHz-4080.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4080.00MHz-4110.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4110.00MHz-4140.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4140.00MHz-4170.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4170.00MHz-4200.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4200.00MHz-4230.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4230.00MHz-4260.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4260.00MHz-4290.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4290.00MHz-4320.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4320.00MHz-4350.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4350.00MHz-4380.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4380.00MHz-4410.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4410.00MHz-4440.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4440.00MHz-4470.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4470.00MHz-4500.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4500.00MHz-4530.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4530.00MHz-4560.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4560.00MHz-4590.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4590.00MHz-4620.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4620.00MHz-4650.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4650.00MHz-4680.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4680.00MHz-4710.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4710.00MHz-4740.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4740.00MHz-4770.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4770.00MHz-4800.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4800.00MHz-4830.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4830.00MHz-4860.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4860.00MHz-4890.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4890.00MHz-4920.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4920.00MHz-4950.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4950.00MHz-4980.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4980.00MHz-5010.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5010.00MHz-5040.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5040.00MHz-5070.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5070.00MHz-5100.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5100.00MHz-5130.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5130.00MHz-5160.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5160.00MHz-5190.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5190.00MHz-5220.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5220.00MHz-5250.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5250.00MHz-5280.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5280.00MHz-5310.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5310.00MHz-5340.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5340.00MHz-5370.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5370.00MHz-5400.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5400.00MHz-5430.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5430.00MHz-5460.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5460.00MHz-5490.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5490.00MHz-5520.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5520.00MHz-5550.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5550.00MHz-5580.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5580.00MHz-5610.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5610.00MHz-5640.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5640.00MHz-5670.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5670.00MHz-5700.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5700.00MHz-5730.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5730.00MHz-5760.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5760.00MHz-5790.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5790.00MHz-5820.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5820.00MHz-5850.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5850.00MHz-5880.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5880.00MHz-5910.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5910.00MHz-5940.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5940.00MHz-5970.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5970.00MHz-6000.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
            ],
          },
        ],
      },
      {
        region: 'Airport',
        bands: [
          //0hz to 30MHz
          {
            range: '0-30MHz',
            result: {
              utilization: '50',
              frequencies: {
                utilized: [
                  '100MHz',
                  '6000MHz',
                  '7000MHz',
                  '4000MHz',
                  '600MHz',
                  '3060MHz',
                  '200MHz',
                ],
                notutilized: [
                  '900MHz',
                  '5000MHz',
                  '700MHz',
                  '5000MHz',
                  '600MHz',
                  '4460MHz',
                  '8500MHz',
                ],
              },
            },
          },
          //30MHz to 300MHz
          {
            range: '30MHz-300MHz',
            subbands: [
              {
                range: '30.00MHz-60.00MHz',
                result: {
                  utilization: '40',
                  frequencies: {
                    utilized: [
                      '1500MHz',
                      '6060MHz',
                      '5805MHz',
                      '45000MHz',
                      '630MHz',
                      '56060MHz',
                      '5800MHz',
                    ],
                    notutilized: [
                      '100MHz',
                      '6000MHz',
                      '7000MHz',
                      '4000MHz',
                      '600MHz',
                      '3060MHz',
                      '200MHz',
                    ],
                  },
                },
              },
              {
                range: '60.00MHz-90.00MHz',
                result: {
                  utilization: '60',
                  frequencies: {
                    utilized: [
                      '5500MHz',
                      '4500MHz',
                      '54000MHz',
                      '5000MHz',
                      '50MHz',
                      '6060MHz',
                      '500MHz',
                    ],
                    notutilized: [
                      '5400MHz',
                      '450MHz',
                      '79500MHz',
                      '4000MHz',
                      '4300MHz',
                      '3450MHz',
                      '2340MHz',
                    ],
                  },
                },
              },
              {
                range: '90.00MHz-120.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
            ],
          },
          //300MHz to 3Ghz
          {
            range: '300MHz-3Ghz',
            subbands: [
              {
                range: '300.00-330.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '330.00-360.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '360.00-390.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '390.00-420.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '420.00-450.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '450.00-480.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '480.00-510.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '510.00-540.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '540.00-570.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '570.00-600.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '600.00-630.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '630.00-660.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '660.00-690.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '690.00-720.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '720.00-750.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '750.00-780.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '780.00-810.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '810.00-840.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '840.00-870.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '870.00-900.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '900.00-930.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '930.00-960.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '960.00-990.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '990.00-1020.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1020.00-1050.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1050.00-1080.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1080.00-1110.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1110.00-1140.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1140.00-1170.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1170.00-1200.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1200.00-1230.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1230.00-1260.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1260.00-1290.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1290.00-1320.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1320.00-1350.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1350.00-1380.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1380.00-1410.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1410.00-1440.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1440.00-1470.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1470.00-1500.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1500.00-1530.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1530.00-1560.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1560.00-1590.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1590.00-1620.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1620.00-1650.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1650.00-1680.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1680.00-1710.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1710.00-1740.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1740.00-1770.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1770.00-1800.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1800.00-1830.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1830.00-1860.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1860.00-1890.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1890.00-1920.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1920.00-1950.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1950.00-1980.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1980.00-2010.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2010.00-2040.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2040.00-2070.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2070.00-2100.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2100.00-2130.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2130.00-2160.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2160.00-2190.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2190.00-2220.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2220.00-2250.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2250.00-2280.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2280.00-2310.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2310.00-2340.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2340.00-2370.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2370.00-2400.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2400.00-2430.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2430.00-2460.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2460.00-2490.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2490.00-2520.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2520.00-2550.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2550.00-2580.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2580.00-2610.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2610.00-2640.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2640.00-2670.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2670.00-2700.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2700.00-2730.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2730.00-2760.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2760.00-2790.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2790.00-2820.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2820.00-2850.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2850.00-2880.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2880.00-2910.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2910.00-2940.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2940.00-2970.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2970.00-3000.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
            ],
          },
          //3Ghz to 6Ghz
          {
            range: '3Ghz-6Ghz',
            subbands: [
              {
                range: '3000.00MHz-3030.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3030.00MHz-3060.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3060.00MHz-3090.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3090.00MHz-3120.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3120.00MHz-3150.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3150.00MHz-3180.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3180.00MHz-3210.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3210.00MHz-3240.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3240.00MHz-3270.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3270.00MHz-3300.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3300.00MHz-3330.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3330.00MHz-3360.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3360.00MHz-3390.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3390.00MHz-3420.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3420.00MHz-3450.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3450.00MHz-3480.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3480.00MHz-3510.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3510.00MHz-3540.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3540.00MHz-3570.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3570.00MHz-3600.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3600.00MHz-3630.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3630.00MHz-3660.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3660.00MHz-3690.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3690.00MHz-3720.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3720.00MHz-3750.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3750.00MHz-3780.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3780.00MHz-3810.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3810.00MHz-3840.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3840.00MHz-3870.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3870.00MHz-3900.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3900.00MHz-3930.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3930.00MHz-3960.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3960.00MHz-3990.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3990.00MHz-4020.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4020.00MHz-4050.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4050.00MHz-4080.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4080.00MHz-4110.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4110.00MHz-4140.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4140.00MHz-4170.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4170.00MHz-4200.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4200.00MHz-4230.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4230.00MHz-4260.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4260.00MHz-4290.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4290.00MHz-4320.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4320.00MHz-4350.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4350.00MHz-4380.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4380.00MHz-4410.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4410.00MHz-4440.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4440.00MHz-4470.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4470.00MHz-4500.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4500.00MHz-4530.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4530.00MHz-4560.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4560.00MHz-4590.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4590.00MHz-4620.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4620.00MHz-4650.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4650.00MHz-4680.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4680.00MHz-4710.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4710.00MHz-4740.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4740.00MHz-4770.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4770.00MHz-4800.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4800.00MHz-4830.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4830.00MHz-4860.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4860.00MHz-4890.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4890.00MHz-4920.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4920.00MHz-4950.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4950.00MHz-4980.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4980.00MHz-5010.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5010.00MHz-5040.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5040.00MHz-5070.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5070.00MHz-5100.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5100.00MHz-5130.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5130.00MHz-5160.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5160.00MHz-5190.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5190.00MHz-5220.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5220.00MHz-5250.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5250.00MHz-5280.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5280.00MHz-5310.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5310.00MHz-5340.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5340.00MHz-5370.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5370.00MHz-5400.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5400.00MHz-5430.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5430.00MHz-5460.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5460.00MHz-5490.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5490.00MHz-5520.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5520.00MHz-5550.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5550.00MHz-5580.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5580.00MHz-5610.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5610.00MHz-5640.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5640.00MHz-5670.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5670.00MHz-5700.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5700.00MHz-5730.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5730.00MHz-5760.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5760.00MHz-5790.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5790.00MHz-5820.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5820.00MHz-5850.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5850.00MHz-5880.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5880.00MHz-5910.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5910.00MHz-5940.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5940.00MHz-5970.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5970.00MHz-6000.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
            ],
          },
        ],
      },
      {
        region: 'Alausa',
        bands: [
          //0hz to 30MHz
          {
            range: '0-30MHz',
            result: {
              utilization: '50',
              frequencies: {
                utilized: [
                  '100MHz',
                  '6000MHz',
                  '7000MHz',
                  '4000MHz',
                  '600MHz',
                  '3060MHz',
                  '200MHz',
                ],
                notutilized: [
                  '900MHz',
                  '5000MHz',
                  '700MHz',
                  '5000MHz',
                  '600MHz',
                  '4460MHz',
                  '8500MHz',
                ],
              },
            },
          },
          //30MHz to 300MHz
          {
            range: '30MHz-300MHz',
            subbands: [
              {
                range: '30.00MHz-60.00MHz',
                result: {
                  utilization: '40',
                  frequencies: {
                    utilized: [
                      '1500MHz',
                      '6060MHz',
                      '5805MHz',
                      '45000MHz',
                      '630MHz',
                      '56060MHz',
                      '5800MHz',
                    ],
                    notutilized: [
                      '100MHz',
                      '6000MHz',
                      '7000MHz',
                      '4000MHz',
                      '600MHz',
                      '3060MHz',
                      '200MHz',
                    ],
                  },
                },
              },
              {
                range: '60.00MHz-90.00MHz',
                result: {
                  utilization: '60',
                  frequencies: {
                    utilized: [
                      '5500MHz',
                      '4500MHz',
                      '54000MHz',
                      '5000MHz',
                      '50MHz',
                      '6060MHz',
                      '500MHz',
                    ],
                    notutilized: [
                      '5400MHz',
                      '450MHz',
                      '79500MHz',
                      '4000MHz',
                      '4300MHz',
                      '3450MHz',
                      '2340MHz',
                    ],
                  },
                },
              },
              {
                range: '90.00MHz-120.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
            ],
          },
          //300MHz to 3Ghz
          {
            range: '300MHz-3Ghz',
            subbands: [
              {
                range: '300.00-330.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '330.00-360.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '360.00-390.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '390.00-420.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '420.00-450.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '450.00-480.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '480.00-510.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '510.00-540.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '540.00-570.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '570.00-600.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '600.00-630.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '630.00-660.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '660.00-690.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '690.00-720.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '720.00-750.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '750.00-780.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '780.00-810.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '810.00-840.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '840.00-870.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '870.00-900.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '900.00-930.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '930.00-960.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '960.00-990.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '990.00-1020.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1020.00-1050.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1050.00-1080.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1080.00-1110.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1110.00-1140.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1140.00-1170.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1170.00-1200.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1200.00-1230.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1230.00-1260.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1260.00-1290.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1290.00-1320.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1320.00-1350.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1350.00-1380.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1380.00-1410.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1410.00-1440.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1440.00-1470.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1470.00-1500.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1500.00-1530.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1530.00-1560.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1560.00-1590.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1590.00-1620.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1620.00-1650.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1650.00-1680.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1680.00-1710.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1710.00-1740.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1740.00-1770.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1770.00-1800.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1800.00-1830.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1830.00-1860.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1860.00-1890.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1890.00-1920.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1920.00-1950.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1950.00-1980.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '1980.00-2010.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2010.00-2040.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2040.00-2070.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2070.00-2100.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2100.00-2130.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2130.00-2160.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2160.00-2190.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2190.00-2220.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2220.00-2250.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2250.00-2280.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2280.00-2310.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2310.00-2340.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2340.00-2370.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2370.00-2400.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2400.00-2430.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2430.00-2460.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2460.00-2490.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2490.00-2520.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2520.00-2550.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2550.00-2580.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2580.00-2610.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2610.00-2640.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2640.00-2670.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2670.00-2700.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2700.00-2730.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2730.00-2760.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2760.00-2790.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2790.00-2820.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2820.00-2850.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2850.00-2880.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2880.00-2910.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2910.00-2940.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2940.00-2970.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
              {
                range: '2970.00-3000.00MHz',
                result: {
                  utilization: '',
                  frequencies: {
                    utilized: [],
                    notutilized: [],
                  },
                },
              },
            ],
          },
          //3Ghz to 6Ghz
          {
            range: '3Ghz-6Ghz',
            subbands: [
              {
                range: '3000.00MHz-3030.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3030.00MHz-3060.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3060.00MHz-3090.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3090.00MHz-3120.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3120.00MHz-3150.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3150.00MHz-3180.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3180.00MHz-3210.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3210.00MHz-3240.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3240.00MHz-3270.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3270.00MHz-3300.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3300.00MHz-3330.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3330.00MHz-3360.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3360.00MHz-3390.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3390.00MHz-3420.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3420.00MHz-3450.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3450.00MHz-3480.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3480.00MHz-3510.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3510.00MHz-3540.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3540.00MHz-3570.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3570.00MHz-3600.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3600.00MHz-3630.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3630.00MHz-3660.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3660.00MHz-3690.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3690.00MHz-3720.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3720.00MHz-3750.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3750.00MHz-3780.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3780.00MHz-3810.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3810.00MHz-3840.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3840.00MHz-3870.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3870.00MHz-3900.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3900.00MHz-3930.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3930.00MHz-3960.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3960.00MHz-3990.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '3990.00MHz-4020.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4020.00MHz-4050.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4050.00MHz-4080.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4080.00MHz-4110.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4110.00MHz-4140.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4140.00MHz-4170.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4170.00MHz-4200.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4200.00MHz-4230.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4230.00MHz-4260.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4260.00MHz-4290.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4290.00MHz-4320.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4320.00MHz-4350.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4350.00MHz-4380.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4380.00MHz-4410.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4410.00MHz-4440.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4440.00MHz-4470.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4470.00MHz-4500.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4500.00MHz-4530.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4530.00MHz-4560.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4560.00MHz-4590.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4590.00MHz-4620.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4620.00MHz-4650.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4650.00MHz-4680.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4680.00MHz-4710.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4710.00MHz-4740.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4740.00MHz-4770.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4770.00MHz-4800.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4800.00MHz-4830.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4830.00MHz-4860.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4860.00MHz-4890.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4890.00MHz-4920.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4920.00MHz-4950.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4950.00MHz-4980.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '4980.00MHz-5010.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5010.00MHz-5040.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5040.00MHz-5070.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5070.00MHz-5100.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5100.00MHz-5130.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5130.00MHz-5160.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5160.00MHz-5190.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5190.00MHz-5220.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5220.00MHz-5250.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5250.00MHz-5280.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5280.00MHz-5310.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5310.00MHz-5340.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5340.00MHz-5370.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5370.00MHz-5400.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5400.00MHz-5430.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5430.00MHz-5460.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5460.00MHz-5490.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5490.00MHz-5520.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5520.00MHz-5550.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5550.00MHz-5580.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5580.00MHz-5610.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5610.00MHz-5640.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5640.00MHz-5670.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5670.00MHz-5700.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5700.00MHz-5730.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5730.00MHz-5760.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5760.00MHz-5790.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5790.00MHz-5820.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5820.00MHz-5850.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5850.00MHz-5880.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5880.00MHz-5910.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5910.00MHz-5940.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5940.00MHz-5970.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
              {
                range: '5970.00MHz-6000.00MHz',
                result: {
                  utilization: '',
                  frequencies: { utilized: [], notutilized: [] },
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    location: 'Ilorin',
    bands: [
      //0hz to 30MHz
      {
        range: '0-30MHz',
        result: {
          utilization: '50',
          frequencies: {
            utilized: [
              '100MHz',
              '6000MHz',
              '7000MHz',
              '4000MHz',
              '600MHz',
              '3060MHz',
              '200MHz',
            ],
            notutilized: [
              '900MHz',
              '5000MHz',
              '700MHz',
              '5000MHz',
              '600MHz',
              '4460MHz',
              '8500MHz',
            ],
          },
        },
      },
      //30MHz to 300MHz
      {
        range: '30MHz-300MHz',
        subbands: [
          {
            range: '30.00MHz-60.00MHz',
            result: {
              utilization: '40',
              frequencies: {
                utilized: [
                  '1500MHz',
                  '6060MHz',
                  '5805MHz',
                  '45000MHz',
                  '630MHz',
                  '56060MHz',
                  '5800MHz',
                ],
                notutilized: [
                  '100MHz',
                  '6000MHz',
                  '7000MHz',
                  '4000MHz',
                  '600MHz',
                  '3060MHz',
                  '200MHz',
                ],
              },
            },
          },
          {
            range: '60.00MHz-90.00MHz',
            result: {
              utilization: '60',
              frequencies: {
                utilized: [
                  '5500MHz',
                  '4500MHz',
                  '54000MHz',
                  '5000MHz',
                  '50MHz',
                  '6060MHz',
                  '500MHz',
                ],
                notutilized: [
                  '5400MHz',
                  '450MHz',
                  '79500MHz',
                  '4000MHz',
                  '4300MHz',
                  '3450MHz',
                  '2340MHz',
                ],
              },
            },
          },
          {
            range: '90.00MHz-120.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
        ],
      },
      //300MHz to 3Ghz
      {
        range: '300MHz-3Ghz',
        subbands: [
          {
            range: '300.00-330.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '330.00-360.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '360.00-390.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '390.00-420.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '420.00-450.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '450.00-480.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '480.00-510.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '510.00-540.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '540.00-570.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '570.00-600.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '600.00-630.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '630.00-660.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '660.00-690.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '690.00-720.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '720.00-750.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '750.00-780.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '780.00-810.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '810.00-840.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '840.00-870.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '870.00-900.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '900.00-930.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '930.00-960.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '960.00-990.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '990.00-1020.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1020.00-1050.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1050.00-1080.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1080.00-1110.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1110.00-1140.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1140.00-1170.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1170.00-1200.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1200.00-1230.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1230.00-1260.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1260.00-1290.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1290.00-1320.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1320.00-1350.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1350.00-1380.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1380.00-1410.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1410.00-1440.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1440.00-1470.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1470.00-1500.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1500.00-1530.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1530.00-1560.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1560.00-1590.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1590.00-1620.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1620.00-1650.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1650.00-1680.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1680.00-1710.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1710.00-1740.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1740.00-1770.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1770.00-1800.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1800.00-1830.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1830.00-1860.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1860.00-1890.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1890.00-1920.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1920.00-1950.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1950.00-1980.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '1980.00-2010.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2010.00-2040.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2040.00-2070.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2070.00-2100.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2100.00-2130.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2130.00-2160.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2160.00-2190.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2190.00-2220.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2220.00-2250.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2250.00-2280.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2280.00-2310.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2310.00-2340.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2340.00-2370.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2370.00-2400.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2400.00-2430.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2430.00-2460.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2460.00-2490.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2490.00-2520.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2520.00-2550.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2550.00-2580.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2580.00-2610.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2610.00-2640.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2640.00-2670.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2670.00-2700.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2700.00-2730.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2730.00-2760.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2760.00-2790.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2790.00-2820.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2820.00-2850.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2850.00-2880.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2880.00-2910.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2910.00-2940.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2940.00-2970.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
          {
            range: '2970.00-3000.00MHz',
            result: {
              utilization: '',
              frequencies: {
                utilized: [],
                notutilized: [],
              },
            },
          },
        ],
      },
      //3Ghz to 6Ghz
      {
        range: '3Ghz-6Ghz',
        subbands: [
          {
            range: '3000.00MHz-3030.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3030.00MHz-3060.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3060.00MHz-3090.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3090.00MHz-3120.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3120.00MHz-3150.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3150.00MHz-3180.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3180.00MHz-3210.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3210.00MHz-3240.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3240.00MHz-3270.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3270.00MHz-3300.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3300.00MHz-3330.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3330.00MHz-3360.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3360.00MHz-3390.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3390.00MHz-3420.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3420.00MHz-3450.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3450.00MHz-3480.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3480.00MHz-3510.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3510.00MHz-3540.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3540.00MHz-3570.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3570.00MHz-3600.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3600.00MHz-3630.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3630.00MHz-3660.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3660.00MHz-3690.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3690.00MHz-3720.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3720.00MHz-3750.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3750.00MHz-3780.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3780.00MHz-3810.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3810.00MHz-3840.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3840.00MHz-3870.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3870.00MHz-3900.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3900.00MHz-3930.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3930.00MHz-3960.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3960.00MHz-3990.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '3990.00MHz-4020.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4020.00MHz-4050.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4050.00MHz-4080.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4080.00MHz-4110.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4110.00MHz-4140.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4140.00MHz-4170.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4170.00MHz-4200.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4200.00MHz-4230.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4230.00MHz-4260.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4260.00MHz-4290.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4290.00MHz-4320.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4320.00MHz-4350.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4350.00MHz-4380.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4380.00MHz-4410.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4410.00MHz-4440.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4440.00MHz-4470.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4470.00MHz-4500.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4500.00MHz-4530.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4530.00MHz-4560.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4560.00MHz-4590.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4590.00MHz-4620.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4620.00MHz-4650.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4650.00MHz-4680.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4680.00MHz-4710.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4710.00MHz-4740.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4740.00MHz-4770.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4770.00MHz-4800.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4800.00MHz-4830.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4830.00MHz-4860.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4860.00MHz-4890.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4890.00MHz-4920.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4920.00MHz-4950.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4950.00MHz-4980.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '4980.00MHz-5010.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5010.00MHz-5040.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5040.00MHz-5070.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5070.00MHz-5100.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5100.00MHz-5130.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5130.00MHz-5160.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5160.00MHz-5190.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5190.00MHz-5220.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5220.00MHz-5250.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5250.00MHz-5280.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5280.00MHz-5310.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5310.00MHz-5340.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5340.00MHz-5370.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5370.00MHz-5400.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5400.00MHz-5430.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5430.00MHz-5460.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5460.00MHz-5490.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5490.00MHz-5520.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5520.00MHz-5550.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5550.00MHz-5580.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5580.00MHz-5610.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5610.00MHz-5640.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5640.00MHz-5670.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5670.00MHz-5700.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5700.00MHz-5730.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5730.00MHz-5760.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5760.00MHz-5790.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5790.00MHz-5820.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5820.00MHz-5850.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5850.00MHz-5880.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5880.00MHz-5910.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5910.00MHz-5940.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5940.00MHz-5970.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
          {
            range: '5970.00MHz-6000.00MHz',
            result: {
              utilization: '',
              frequencies: { utilized: [], notutilized: [] },
            },
          },
        ],
      },
    ],
  },
];

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

// Usage examples:

const dataWithRegion = {
  location: 'Lagos',
  region: 'VI',
  bands: '30MHz-300MHz',
  subbandss: '60.00MHz-90.00MHz',
};

const dataWithoutRegion = {
  location: 'Ilorin',
  bands: '0-30MHz',
};

const dataWithoutSubband = {
  location: 'Lagos',
  region: 'VI',
  bands: '0-30MHz',
};

const resultWithRegion = getResultObject(dataWithRegion);
const resultWithoutRegion = getResultObject(dataWithoutRegion);
const resultWithoutSubband = getResultObject(dataWithoutSubband);

console.log(resultWithRegion); // This will give you the corresponding result object for Lagos, VI, 30MHz-300MHz, 60.00MHz-90.00MHz
console.log(resultWithoutRegion); // This will give you the corresponding result object for ilorin, 0-30MHz
console.log(resultWithoutSubband); // This will give you null since subbands are not provided
