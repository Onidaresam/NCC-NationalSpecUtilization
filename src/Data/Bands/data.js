const BandsData = [
    {
      id: 1,
      location: "Lagos",
      region: [
        {
          region:"VI",
          bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.32",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "97.60",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "98.13",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "66.04",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "O",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["","",""],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
        },
        {
          region:"Airport",
          bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "96.71",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "97.40",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "66.29",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "O.046",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
        },
        {
          region:"Alausa",
          bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz

        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "97.37",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "97.97",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "66.15",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "O.0021",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0.0005",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0.0013",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
        },
      ],

    },
    {
      id: 2,
      location: "University of Ilorin",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHZ - 60.00MHZ",
              "result": {
                "utilization": "42.38",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHZ - 90.00MHZ",
              "result": {
                "utilization": "43.15",
                "frequencies": {
                  "utilized": ["65.32MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHZ - 120.00MHZ",
              "result": {
                "utilization": "43.15",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHZ - 150.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHZ - 180.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHZ - 210.00MHZ",
              "result": {
                "utilization": "0.0013",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHZ - 240.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHZ - 270.00MHZ",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.01MHZ","287.05MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]


    },
    {
      id: 3,
      location: "Asadam",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "31.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "94.82",
                "frequencies": {
                  "utilized": ["39.23MHZ","52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "95.54",
                "frequencies": {
                  "utilized": ["65.31MHHZ","78.35MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "64.05",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ", "195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.83MHZ", "234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHZ","287.05MHZ","300.00MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]


    },
    {
      id: 4,
      location: "Ibadan",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ", "26.19MHZ"]
            }
          }
        },
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "96.44",
                "frequencies": {
                  "utilized": ["39.23MHZ", "52.27MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "97.13",
                "frequencies": {
                  "utilized": ["65.31MHZ","78.36MHZ"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "65.12",
                "frequencies": {
                  "utilized": ["91.40MHZ","104.45MHZ"],
                  "notutilized": ["117.48MHZ"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ", "169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.70MHZ","195.74MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.83MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.97MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHZ","287.05MHZ","300.00MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]
    },
    {
      id: 5,
      location: "Lokoja Kogi",
      bands: [
        //0hz to 30Mhz
        {
          range: "100KHZ-30MHZ",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHZ","26.19MHZ"]
            }
          }
        },
        //30Mhz to 300Mhz
        {
          range: "30MHZ-300MHZ",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "0.16",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["39.23MHZ","53.27MHZ", ]
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "0.40",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["65.32MHZ","78.36MHZ"]
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "0.51",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["91.40MHZ","104.45MHZ","117.49MHZ"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["130.53MHZ","143.58MHZ"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["156.62MHZ","169.66MHZ"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["182.71MHZ","195.75MHZ","208.79MHZ"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["221.84MHZ","234.88MHZ"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["247.92MHZ","260.87MHZ"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["274.00MHZ","287.05MHZ", "300.00MHZ"]
                }
              }
            }
          ]
        },
        //300Mhz to 3Ghz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "",
                  frequencies: {
                    utilized: [],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3Ghz to 6Ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "", frequencies: { utilized: [], notutilized: [] } } },
          ]
        },
        ]


    },
  ];
export default BandsData