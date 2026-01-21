const BandsData = [
    {
      id: 1,
      location: "Lagos",
      region: [
        {
          region:"VI",
          bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.32",
            frequencies: {
              utilized: ["100KHZ-13.14MHz(99.98%)"],
              notutilized: ["13.14MHz-26.19MHz(0%)","26.19MHz-30.00MHz(0%)"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "97.60",
                frequencies: {
                  utilized: ["30.23MHz-52.27MHz-60.00MHz(97.45%)","52.27MHz-60.00MHz-60.00MHz(97.75%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "98.13",
                frequencies: {
                  utilized: ["60.00MHz-78.36MHz(98%)","78.36MHz-90.00MHz(98.23%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "66.04",
                frequencies: {
                  utilized: ["90.00MHz-104.45MHz(99.49%)","104.45MHz-117.49MHz(98.63%)"],
                  notutilized: ["117.49MHz-120.00MHz(0%)"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "O",
                frequencies: {
                  utilized: [],
                  notutilized: ["120.00MHz - 150.00MHz(0%)"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["150.00MHz - 180.00MHz(0%)"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["180.00MHz - 210.00MHz(0%)"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["210.00MHz - 240.00MHz(0%)"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["240.00MHz - 270.00MHz(0%)"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["270.00MHz - 300.00MHz(0%)"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
          range: "300MHz-3GHz",
          subbands: [
            {
              range: "300.00-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "390.00-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00-480.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["450.00-480.00MHz(0%"]
                }
              }
            },
            {
              range: "480.00-510.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["480.00-510.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00-540.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["510.00-540.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00-570.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["540.00-570.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00-600.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["570.00-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00-690.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["660.00-690.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00-720.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["690.00-720.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00-750.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["720.00-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00-780.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["750.00-780.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00-810.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: ["783.00MHz- 796.00MHz(0.05%)"],
                  notutilized: ["780MHz- 783MHz(0%)", "796MHz- 810MHz(0%)"]
                }
              }
            },
            {
              range: "810.00-840.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["810.00-840.00MHz(0%)"]
                }
              }
            },
            {
              range: "840.00-870.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["840.00-870.00MHz(0%)"]
                }
              }
            },
            {
              range: "870.00-900.00MHz",
              result: {
                utilization: "24.58",
                frequencies: {
                  utilized: ["874MHz- 887MHz(73.72%)", "887MHz- 900MHz(99.98%)"],
                  notutilized: ["870MHz- 874MHz(0%)"]
                }
              }
            },
            {
              range: "900.00-930.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["900MHz- 930MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00-960.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["930MHz- 950MHz(100%)", "950MHz- 960MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00-990.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["960MHz- 965MHz(99.92%)", "965MHz- 990MHz(99.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00-1020.00MHz",
              result: {
                utilization: "99.86",
                frequencies: {
                  utilized: ["990MHz- 1004MHz(99.86%)", "1004MHz- 1017MHz(99.84%)", "1017MHz- 1020MHz(99.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00-1050.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1020MHz- 1030MHz(99.87%)", "1030MHz- 1043MHz(99.89%)", "1043MHz- 1050MHz(99.91%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1050.00-1080.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["1050MHz- 1056MHz(99.91%)", "1056MHz- 1070MHz(99.92%)", "1070MHz- 1080MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00-1110.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1080MHz-1083MHz(99.94%)", "1083MHz-1096MHz(99.95%)", "1095MHz-1110MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00-1140.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["1110MHz-1122MHz(99.97%)", "1122MHz-1135MHz(99.97%)", "1135MHz-1140MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00-1170.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1140MHz-1148MHz(99.97%)", "1148MHz-1161MHz(99.98%)", "1161MHz-1170MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00-1200.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1170MHz-1174MHz(99.98%)", "1174MHz-1187MHz(99.97%)", "1187MHz-1200MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00-1230.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1200MHz-1213MHz(99.98%)", "1213MHz-1226MHz(99.98%)", "1226MHz-1230MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00-1260.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["230MHz-1239MHz(99.97%)", "1239MHz-1252MHz(99.97%)", "1252MHz-1260MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00-1290.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1260MHz-1265MHz(99.96%), 1265MHz-1278MHz(99.97%), 1278MHz-1290MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00-1320.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1290MHz-1304MHz(99.95%)", "1304MHz-1317MHz(99.96%)", "1317MHz-1320MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00-1350.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1320MHz-1331MHz(99.94%)", "1331MHz-1344MHz(99.95%)", "1344MHz-1350MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00-1380.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1350MHz-1357MHz(99.96%)", "1357MHz-1370MHz(99.95%)", "1370MHz-1380MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00-1410.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1380MHz-1383MHz(99.97%)"," 1383MHz-1396MHz(99.98%)", "1396MHz-1408MHz(99.98%)", "1408MHz-1410MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00-1440.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1410MHz-1422MHz(99.98%)", "1422MHz-1435MHz(99.99%)", "1435MHz-1440MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1440.00-1470.00MHz",
              result: {
                utilization: "99.99%",
                frequencies: {
                  utilized: ["1440MHz-1448MHz(99.99%)", "1448MHz-1461MHz(99.99%)", "1461MHz-1470MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1470.00-1500.00MHz",
              result: {
                utilization: "99.99%",
                frequencies: {
                  utilized: ["1470MHz-1474MHz(99.99%)",
                  "1474MHz-1487MHz(99.99%)",
                  "1487MHz-1500MHz(99.99%)"]
                  ,
                  notutilized: []
                }
              }
            },
            {
              range: "1500.00-1530.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1500MHz-1513MHz(99.99%)"," 1513MHz-1526MHz(99.99%)", "1526MHz-1530MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1530.00-1560.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1530MHz-1539MHz(99.99%)", "1539MHz-1552MHz(99.99%)", "1552MHz-1560MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1560.00-1590.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1560MHz-1565MHz(99.99%)", "1565MHz-1578MHz(99.99%)", "1578MHz-1590MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1590.00-1620.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1590MHz-1604MHz(99.97%)", "1604MHz-1617MHz(99.98%)", "1617MHz-1620MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1620.00-1650.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1620MHz-1631MHz(99.97%)", "1631MHz-1644MHz(99.97%)", "1644MHz-1650MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1650.00-1680.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1650MHz-1657MHz(99.98%)", "1657MHz-1669MHz(99.97%)", "1669MHz-1680MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1680.00-1710.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1680MHz-1683MHz(99.99%)", "1683MHz-1696MHz(99.98%)", "1696MHz-1708MHz(99.98%)", "1708MHz-1710MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1710.00-1740.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1710MHz-1722MHz(99.99%)", "1722MHz-1735MHz(99.99%)", "1735MHz-1740MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1740.00-1770.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1740MHz-1748MHz(99.99%)", "1748MHz-1761MHz(99.99%)", "1761MHz-1770MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1770.00-1800.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1770MHz-1774MHz(99.99%)", "1774MHz-1787MHz(100%)", "1787MHz-1800MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1800.00-1830.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1800MHz-1813MHz(100%)", "1813MHz-1826MHz(100%)", "1826MHz-1830MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1830.00-1860.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1830MHz-1839MHz(100%)", "1839MHz-1852MHz(100%)", "1852MHz-1860MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1860.00-1890.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1860MHz-1865MHz(100%)", "1865MHz-1878MHz(100%)", "1878MHz-1890MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1890.00-1920.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1890MHz-1904MHz(99.99%)", "1904MHz-1917MHz(99.99%)", "1917MHz-1920MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1920.00-1950.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1920MHz-1931MHz(99.98%)", "1931MHz-1944MHz(100%)", "1944MHz-1950MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1950.00-1980.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1950MHz-1957MHz(100%)", "1957MHz-1970MHz(100%)", "1970MHz-1980MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1980.00-2010.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1980MHz-1996MHz(100%)", "1996MHz-2009MHz(100%)", "2009MHz-2010MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2010.00-2040.00MHz",
              result: {
                utilization: "95.62",
                frequencies: {
                  utilized: ["2010MHz-2022MHz(100%)", "2022MHz-2035MHz(100%)", "2035MHz-2040MHz(86.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2040.00-2070.00MHz",
              result: {
                utilization: "87.20",
                frequencies: {
                  utilized: ["2040MHz-2048MHz(86.87%)", "2048MHz-2061MHz(86.65%)", "2061MHz-2070MHz(88.10%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2070.00-2100.00MHz",
              result: {
                utilization: "88.52",
                frequencies: {
                  utilized: ["2070MHz- 2074MHz(88.10%)", "2074MHz- 2087MHz(88.30%)", "2087MHz- 2100MHz(89.16%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2100.00-2130.00MHz",
              result: {
                utilization: "96.56",
                frequencies: {
                  utilized: ["2100MHz- 2113MHz(89.68%)", "2113MHz- 2126MHz(100%)", "2126MHz-2130MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2130.00-2160.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["2130MHz-2139MHz(100%)", "2139MHz-2152MHz(100%)", "2152MHz-2160MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2160.00-2190.00MHz",
              result: {
                utilization: "94.60",
                frequencies: {
                  utilized: ["2160MHz-2165MHz(100%)", "2165MHz-2178MHz(91.77%)", "2178MHz- 2190MHz(92.02%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2190.00-2220.00MHz",
              result: {
                utilization: "76.74",
                frequencies: {
                  utilized: ["2190MHz-2204MHz(91.97%)", "2204MHz-2217MHz(69.81%)", "2217MHz-2220MHz(68.44%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2220.00-2250.00MHz",
              result: {
                utilization: "66.78",
                frequencies: {
                  utilized: ["2220MHz-2230MHz(68.44%)", "2230MHz-2244MHz(68.33%)", "2244MHz-2250MHz(66.56%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2250.00-2280.00MHz",
              result: {
                utilization: "66.35",
                frequencies: {
                  utilized: ["2250MHz- 2256MHz(66.56%)", "2256MHz-2270MHz(67.12%)", "2270MHz-2280MHz(65.36%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2280.00-2310.00MHz",
              result: {
                utilization: "82.15",
                frequencies: {
                  utilized: ["2280MHz-2295MHz(65.67%)", "2295MHz-2308MHz(87.44%)", "2290MHz-2310MHz(93.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2310.00-2340.00MHz",
              result: {
                utilization: "93.77",
                frequencies: {
                  utilized: ["2310MHz-2322MHz(93.34%)", "2322MHz-2335MHz(93.05%)", "2335MHz-2340MHz(94.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2340.00-2370.00MHz",
              result: {
                utilization: "93.87",
                frequencies: {
                  utilized: ["2340MHz-2360MHz(93.95%)", "2360MHz-2370MHz(91.75%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2370.00-2400.00MHz",
              result: {
                utilization: "82.75",
                frequencies: {
                  utilized: ["2370MHz-2387MHz(91.75%)", "2387MHz-2400MHz(73.75%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2400.00-2430.00MHz",
              result: {
                utilization: "81.48",
                frequencies: {
                  utilized: ["2400MHz-2413MHz(81.41%)", "2413MHz-2426MHz(83.52%)", "2426MHz- 2430MHz(79.49%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2430.00-2460.00MHz",
              result: {
                utilization: "81.59",
                frequencies: {
                  utilized: ["2430MHz- 2439MHz(79.49%)", "2439MHz- 2452MHz(80.13%)", "2452MHz- 2460MHz(85.13%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2460.00-2490.00MHz",
              result: {
                utilization: "83.51",
                frequencies: {
                  utilized: ["2460MHz- 2465MHz(85.13%)", "2465MHz- 2478MHz(86.29%)", "2478MHz- 2490MHz(79.10%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2490.00-2520.00MHz",
              result: {
                utilization: "76.11",
                frequencies: {
                  utilized: ["2490MHz- 2450MHz(77.15%)", "2450MHz- 2517MHz(78.18%)", "2517MHz- 2520MHz(78.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2520.00-2550.00MHz",
              result: {
                utilization: "79.77",
                frequencies: {
                  utilized: ["2520MHz- 2530MHz(78.98%)", "2530MHz- 2453MHz(79.77%)", "2453MHz- 2550MHz(80.53%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2550.00-2580.00MHz",
              result: {
                utilization: "81.18",
                frequencies: {
                  utilized: ["2550MHz- 2556MHz(80.53%)", "2556MHz- 2569MHz(80.63%)", "2569MHz- 2580MHz(82.37%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2580.00-2610.00MHz",
              result: {
                utilization: "89.63",
                frequencies: {
                  utilized: ["2580MHz- 2583MHz(82.37%)", "2583MHz- 2596MHz(93.27%)", "2596MHz- 2610MHz(93.25%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2610.00-2640.00MHz",
              result: {
                utilization: "97.41",
                frequencies: {
                  utilized: ["2610MHz- 2622MHz(92.22%)", "2622MHz- 2634Hz(100%)", "2634Hz- 2640MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2640.00-2670.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["2640Hz- 2660MHz(100%)", "2660Hz- 2670MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2670.00-2700.00MHz",
              result: {
                utilization: "92.44",
                frequencies: {
                  utilized: ["2670MHz- 2674MHz(100%)", "2674MHz- 2687MHz(99.97%)", "2687MHz - 2700MHz(77.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2700.00-2730.00MHz",
              result: {
                utilization: "67.05",
                frequencies: {
                  utilized: ["2700MHz - 2713MHz(66.84%)", "2713MHz- 2726MHz(66.56%)", "2726MHz 2730MHz(67.73%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2730.00-2760.00MHz",
              result: {
                utilization: "68.82",
                frequencies: {
                  utilized: ["2730MHz- 2739MHz(67.73%)", "2739MHz- 2752MHz(68.76%)", "2752MHz- 2760MHz(69.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2760.00-2790.00MHz",
              result: {
                utilization: "71.05",
                frequencies: {
                  utilized: ["2760MHz- 2765MHz(69.96%)", "2765MHz- 2778MHz(70.89%)", "2778MHz- 2790MHz(%),(72.29%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2790.00-2820.00MHz",
              result: {
                utilization: "74.32",
                frequencies: {
                  utilized: ["2790MHz- 2791MHz(72.29%)", "2791MHz- 2804MHz(73..30%)", "2804MHz- 2817MHz(75.83%)", "2817MHz- 2820MHz(75.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2820.00-2850.00MHz",
              result: {
                utilization: "77.18",
                frequencies: {
                  utilized: ["2820MHz- 2830MHz(75.87%)", "2830MHz- 2844MHz(77.52%)", "2844MHz- 2850MHz(78.14%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2850.00-2880.00MHz",
              result: {
                utilization: "78.74",
                frequencies: {
                  utilized: ["2850MHz- 2857MHz(78.14%)", "2857MHz- 2870MHz(78.97%)", "2870MHz- 2880MHz(79.12%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2880.00-2910.00MHz",
              result: {
                utilization: "78.80",
                frequencies: {
                  utilized: ["2880MHz- 2883MHz(79.12%)", "2883MHz- 2896MHz(78.61%)", "2896MHz- 2909MHz(78.46%)", "2909MHz- 2910MHz(78.00%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2910.00-2940.00MHz",
              result: {
                utilization: "77.66",
                frequencies: {
                  utilized: ["2910MHz- 2922MHz(78.00%)",  "2922MHz- 2935MHz(77.74%)", "2935MHz- 2940MHz(77.24%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2940.00-2970.00MHz",
              result: {
                utilization: "76.90",
                frequencies: {
                  utilized: ["2940MHz- 2948MHz(77.24%)", "2948MHz- 2961MHz(76.84%)", "2961MHz- 2970MHz(76.62%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2970.00-3000.00MHz",
              result: {
                utilization: "76.80",
                frequencies: {
                  utilized: ["2970MHz- 2974MHz(76.62%)", "2974MHz- 2987MHz(77.83%)", "2987MHz- 3000MHz(75.93%)"],
                  notutilized: []
                }
              }
            }
          ]
        },
        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "42.20", frequencies: { utilized: ["3000MHz-3013MHz(48.64%)", "3013MHz-3026MHz(46.64%)", "3026MHz- 3030MHz(49.60%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "52.34", frequencies: { utilized: ["3030MHz-3039MHz(49.60%),  3039MHz-3052MHz(51.99%), 3052MHz-3060MHz(55.44%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "55.37", frequencies: { utilized: ["3060MHz-3065MHz(55.44%)", "3065MHz-3078MHz(54.26%)", "3078MHz-3090MHz(56.42%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "60.21", frequencies: { utilized: ["3090MHz-3104MHz(57.76%)", "3104MHz-3117MHz(61.44%)", "3117MHz-3120MHz(61.44%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "63.32", frequencies: { utilized: ["3120MHz-3130MHz(61.44%)", "3130MHz-3143MHz(63.41%)", "3143MHz-3150MHz(65.12%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "66.61", frequencies: { utilized: ["3150MHz-3156MHz(65.12%)", "3156MHz-3169MHz(67.20%)",  "3169MHz-3180MHz(67.51%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "67.22", frequencies: { utilized: ["3180MHz-3182MHz(67.51%)", "3182MHz-3195MHz(66.54%)",  "3195MHz-3210MHz(67.61%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "67.85", frequencies: { utilized: ["3210MHz-3221MHz(67.45%)", "3221MHz-3234MHz(68.13%)",  "3224MHz-3240MHz(67.98%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "68.05", frequencies: { utilized: ["3240MHz-3247MHz(67.98%)", "3247MHz-3260MHz(68.47%)",  "3260MHz-3270MHz(67.71%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "67.88", frequencies: { utilized: ["3270MHz- 3273MHz(67.71%)", "3273MHz-3287MHz(68.44%)", "3287MHz-3300MHz(67.50%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "67.46", frequencies: { utilized: ["300MHz-3313MHz(68.16%)", "3313MHz-3326MHz(66.75%)",  "3326MHz-3330MHz(67.46%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "67.67", frequencies: { utilized: ["3330MHz-3339MHz(67.46%)", "3339MHz-3352MHz(67.16%)", "3352MHz-3360MHz(68.39%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "68.13", frequencies: { utilized: ["3360MHz-3365MHz(68.39%)", "3365MHz-3378MHz(68.17%)",  "3378MHz-3390MHz(67.83%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "69.47", frequencies: { utilized: ["3390MHz-3391MHz(67.83%)", "3391MHz-3404MHz(67.96%)", "3404MHz-3420MHz(62.61%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "70.02", frequencies: { utilized: ["3420MHz-3430MHz(70.53%)",  "3430MHz-3443MHz(69.58%)", "3443MHz-3450MHz(69.96%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "69.57", frequencies: { utilized: ["3450MHz-3456MHz(69.96%)", "3456MHz-3469MHz(69.40%)", "3469MHz-3480MHz(69.34%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "72.42", frequencies: { utilized: ["3480MHz-3482MHz(69.34%)", "3482MHz-3495MHz(67.76%)", "3495MHz - 3508MHz(72.26%)", "3508MHz-3510MHz(80.31%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "80.17", frequencies: { utilized: ["3510MHz-3521MHz(80.31%)",   "3521MHz-3534MHz(79.79%)", "3534MHz-3540MHz(80.41%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "80.44", frequencies: { utilized: ["3540MHz-3547MHz(80.41%)",  "3547MHz-3560MHz(80.80%)", "3560MHz-3570MHz(80.10%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "80.35", frequencies: { utilized: ["3570MHz-3573MHz(80.10%)", "3573MHz-3586MHz(80.69%)", "3586MHz-3600MHz(80.26%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "65.09", frequencies: { utilized: ["3600MHz- 3613MHz(74.08%)", "3613MHz-3626MHz(60.76%)", "3626MHz-3630MHz(60.43%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "58.47", frequencies: { utilized: ["3630MHz-3639MHz(60.43%)", "3639MHz-3652MHz(58.71%)", "3652MHz-3660MHz(56.28%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "54.17", frequencies: { utilized: ["3660MHz-3665MHz(56.28%)", "3665MHz-3678MHz(53.74%)", "3678MHz-3690MHz(52.49%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "51.18", frequencies: { utilized: ["3690MHz-3691MHz(52.49%)", "3691MHz-3704MHz(51.48%)", "3704MHz-3720MHz(51.91%)"], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "51.27", frequencies: { utilized: ["3720MHz-3730MHz(51.91%)", "3730MHz-3743MHz(50.22%)", "3743MHz-3750MHz(52.67%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "52.56", frequencies: { utilized: ["3750MHz-3756MHz(52.67%)",  "3756MHz-3769MHz(52.20%)", "3769MHz-3780MHz(52.82%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "54.79", frequencies: { utilized: [" 3780MHz-3782MHz(52.82%)", "3782MHz-3795MHz(53.51%)", "3795MHz-3808MHz(55.91%)"," 3808MHz-3810MHz(56.93%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "58.32", frequencies: { utilized: ["3810MHz-3821MHz(56.93%)"," 3821MHz-3835MHz(58.54%)"," 3835MHz-3840MHz(59.48%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "60.44", frequencies: { utilized: ["3840MHz-3847MHz(59.48%)"," 3847MHz-3860MHz(60.78%)", "3860MHz-3870MHz(61.07%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "61.46", frequencies: { utilized: ["3870MHz-3873MHz(61.07%)", "3873MHz-3886MHz(62.07%)", "3886MHz-3900MHz(61.25%"], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "58.06", frequencies: { utilized: ["3900MHz-3913MHz(60.03%)", "3913MHz-3926MHz(58.14%)", "3926MHz-3930MHz(56.03%)"], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "54.79", frequencies: { utilized: ["3930MHz-3939MHz(56.03%)", "3939MHz-3952MHz(54.51%)", "3952MHz-3960MHz(53.82%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "54.32", frequencies: { utilized: ["960MHz-3965MHz(53.82%)",  "3965MHz-3978MHz(54.07%)", "3978MHz-3990MHz(55.05%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "57.45", frequencies: { utilized: ["3990MHz-3991MHz(55.05%)", "3991MHz-4004MHz(56.69%)", "4004MHz-4017MHz(58.30%)", "4017MHz-4020MHz(59.76%"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "61.27", frequencies: { utilized: ["4020MHz- 4030MHz(59.76%)", "4030MHz-4043MHz(60.98%)", "4043MHz-4050MHz(63.08%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "64.76", frequencies: { utilized: ["4050MHz-4056MHz(63.08%)", "4056MHz-4069MHz(64.69%)", "4069MHz-4080MHz(66.54%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "68.34", frequencies: { utilized: ["4080MHz-4082MHz(66.54%)", "4082MHz-4095MHz(68.22%)", "4095MHz-4110MHz(69.38%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "69.99", frequencies: { utilized: ["4110MHz-4121MHz(69.38%)",  "4121MHz-4134MHz(69.98%)", "4134MHz-4140MHz(70.60%)"], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "71.49", frequencies: { utilized: ["4140MHz-4147MHz(70.60%)", "4147MHz-4160MHz(71.02%)", "4160MHz-4170MHz(72.86%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "74.09", frequencies: { utilized: ["4170MHz-4173MHz(72.86%)", "4173MHz-4186MHz(74.42%)", "4186MHz-4200MHz(74.98%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "76.63", frequencies: { utilized: ["4200MHz-4213MHz(76.15%)", "4213MHz-4226MHz(76.41%)", "4226MHz-4230MHz(77.31%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "78.61", frequencies: { utilized: ["4230MHz-4239MHz(77.31%)", "4239MHz-4252MHz(78.60%)", "4252MHz-4260MHz(79.90%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "81.07", frequencies: { utilized: ["4260MHz-4265MHz(79.90%)",  "4265MHz-4278MHz(80.99%)", "4278MHz-4290MHz(82.32%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "83.34", frequencies: { utilized: ["4290MHz-4291MHz(82.32%)",  "4291MHz-4304MHz(83.11%)", "4304MHz-4320MHz(84.54%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "85.67", frequencies: { utilized: ["4320MHz-4330MHz(84.54%)", "4330MHz-4343MHz(85.55%)", "4343MHz-4350MHz(86.92%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "88.27", frequencies: { utilized: ["4350MHz-4356MHz(86.92%)", "4356MHz-4369MHz(88.50%)", "4369MHz-4380MHz(89.39%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "91.08", frequencies: { utilized: ["4380MHz-4382MHz(89.39%)", "4382MHz-4395MHz(90.65%)", "4395MHz-4410MHz(92.66%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "93.939", frequencies: { utilized: ["4410MHz-4421MHz(92.66%)", "4421MHz-4434MHz(93.32%)", "4434MHz-4440MHz(94.20%)"], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "95.76", frequencies: { utilized: ["4440MHz-4447MHz(94.20%)", "4447MHz-4460MHz(94.70%)", "4460MHz-4470MHz(95.37%)"], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "95.74", frequencies: { utilized: ["4470MHz-4473MHz(95.37%)", "4473MHz-4486MHz(95.74%)", "4486MHz-4500MHz(96.10%)"], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "96.49", frequencies: { utilized: ["4500MHz-4513MHz(96.45%)", "4513MHz-4526MHz(96.56%)", "4526MHz-4530MHz(96.46%)"], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "96.36", frequencies: { utilized: ["4530MHz-4539MHz(96.46%)", "4539MHz-4552MHz(96.37%)", "4552MHz-4560MHz(96.26%)"], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "96.13", frequencies: { utilized: ["4560MHz-4565MHz(96.26%)", "4565MHz-4578MHz(96.14%)", "4578MHz-4590MHz(95.98%)"], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "95.65", frequencies: { utilized: ["4590MHz-4591MHz(95.98%)",  "4591MHz-4604MHz(95.87%)", "4604MHz-4620MHz(95.19%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "94.82", frequencies: { utilized: ["4620MHz-4630MHz(95.19%)",  "4630MHz-4643MHz(94.77%)","4643MHz- 4650MHz(94.51%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "94.44", frequencies: { utilized: ["4650MHz- 4656MHz(94.51%)", "4656MHz- 4670MHz(94.35%)", "4670MHz- 4680MHz(94.45%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "94.85", frequencies: { utilized: ["4680MHz- 4682MHz(94.45%)", "4682MHz-4695MHz(94.70%)", "4695MHz- 4708MHz(94.96%)", "4708MHz-4710MHz(95.28%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "95.64", frequencies: { utilized: ["4710MHz- 4721MHz(95.28%)", "4721MHz-4734MHz(95.56%)", "4734MHz-4740MHz(96.08%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "96.67", frequencies: { utilized: ["4740MHz-4747MHz(96.08%)", "4747MHz-4760MHz(96.72%)", "4760MHz-4770MHz(97.21%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "97.60", frequencies: { utilized: ["4770MHz-4773MHz(97.21%)", "4773MHz-4786MHz(97.66%)", "4786MHz-4800MHz(97.94%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "98.19", frequencies: { utilized: ["4800MHz-4813MHz(98.24%)", "4813MHz-4826MHz(98.38%)", "4826MHz-4830MHz(98.39%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "98.47", frequencies: { utilized: ["4830MHz-4839MHz(98.39%)", "4839MHz-4852MHz(98.51%)", "4852MHz-4860MHz(98.59%)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "98.54", frequencies: { utilized: ["4860MHz-4865MHz(98.59%)" ,"4865MHz-4878MHz(98.52%)", "4878MHz-4890MHz(98.52%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "98.54", frequencies: { utilized: ["4890MHz-4891MHz(98.52%)",  "4891MHz-4904MHz(98.54%)", "4904MHz-4920MHz(98.57%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "98.57", frequencies: { utilized: ["4920MHz-4930MHz(98.57%)", "4930MHz-4943MHz(98.51%)", "4943MHz-4950MHz(98.62%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.87", frequencies: { utilized: ["4950MHz-4956MHz(98.62%)",  "4956MHz-4969MHz(98.87%)", "4969MHz-4980MHz(99.11%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "99.29", frequencies: { utilized: ["4980MHz-4982MHz(99.11%)",  "4982MHz-4995MHz(99.22%)", "4999MHz-5010MHz(99.47%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "99.56", frequencies: { utilized: ["5010MHz-5021MHz(99.47%)",  "5021MHz-5034MHz(99.58%)", "5034MHz-5040MHz(99.65%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "99.79", frequencies: { utilized: ["5040MHz-5047MHz(99.65%)",  "5047MHz-5060MHz(99.74%)", "5060MHz-5070MHz(99.79%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5070MHz-5073MHz(99.79%)",  "5073MHz-5086MHz(99.84%)",  "5086MHz-5100MHz(99.89%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5100MHz-5113MHz(99.91%)", "5113MHz-5126MHz(99.94%)", "5126MHz-5130MHz(99.95%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5130MHz-5139MHz(99.95%)", "5139MHz-5152MHz(99.96%)", "5152MHz-5160MHz(99.96%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5160MHz-5165MHz(99.96%)",  "5165MHz-5178MHz(99.97%)","5178MHz-5190MHz(99.97%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5190MHz-5191MHz(99.97%)",  "5191MHz-5204MHz(99.98%)", "5204MHz-5220MHz(99.98%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5220MHz-5230MHz(99.98%)",  "5230MHz-5243MHz(99.98%)", "5243MHz-5250MHz(99.98%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5250MHz-5257MHz(99.98%)",  "5257MHz-5270MHz(99.97%)", "5270MHz-5220MHz(99.97%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5280MHz-5283MHz(99.97%)",  "5283MHz-5296MHz(99.97%)", "5296MHz-5308MHz(99.96%)", "5308MHz-5310MHz(99.96%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5310MHz- 5322MHz(99.96%)",  "5322MHz-5335MHz(99.95%)", "5335Hz-5340MHz(99.95%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5340MHz-5348MHz(99.95%)",  "5348MHz-5361MHz(99.92%)", "5361MHz-5370MHz(99.92%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5370MHz-5374MHz(99.92%)",  "5374MHz-5387MHz(99.92%)", "5387MHz- 5400MHz(99.94%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5400MHz-5413MHz(99.93%)",  "5413MHz-5426MHz(99.93%)", "5426MHz- 5400MHz(99.93%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5430MHz-5439MHz(99.93%)",  "5439MHz-5452MHz(99.92%)", "5452MHz- 5460MHz(99.93%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5460MHz-5465MHz(99.93%)",  "5465MHz-5478MHz(99.93%)", "5478MHz- 5490MHz(99.92%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5490MHz-5504MHz(99.94%)",  "5504MHz-5517MHz(99.94%)", "5517MHz- 5520MHz(99.93%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5520MHz-5530MHz(99.93%)",  "5530MHz-5543MHz(99.91%)", "5543MHz- 5550MHz(99.93%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5550MHz-5557MHz(99.93%)",  "5557MHz-5570MHz(99.94%)", "5570MHz- 5580MHz(99.92%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5580MHz-5583MHz(99.92%)",  "5583MHz-5596MHz(99.92%)", "5596MHz- 5610MHz(99.91%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5610MHz-5622MHz(99.91%)",  "5622MHz-5632MHz(99.92%)", "5635MHz- 5640MHz(99.92%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5640MHz-5648MHz(99.92%)",  "5648MHz-5661MHz(99.92%)", "5661MHz- 5670MHz(99.92%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5670MHz-5674MHz(99.92%)",  "5674MHz-5687MHz(99.93%)", "5687MHz- 5700MHz(99.93%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5700MHz-5713MHz(99.94%)",  "5713MHz-5726MHz(99.95%)", "5726MHz- 5730MHz(99.95%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5730MHz-5739MHz(99.95%)",  "5739MHz-5752MHz(99.96%)", "5752MHz- 5760MHz(99.97%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5760MHz-5765MHz(99.97%)",  "5765MHz-5778MHz(99.98%)", "5778MHz- 5790MHz(99.99%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5790MHz-5804MHz(99.99%)",  "5804MHz-5817MHz(99.99%)", "5817MHz- 5820MHz(99.99%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5820MHz-5830MHz(99.99%)",  "5830MHz-5843MHz(99.99%)", "5843MHz- 5850MHz(99.99%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "100", frequencies: { utilized: ["5850MHz-5857MHz(100%)",  "5857MHz-5870MHz(100%)", "5870MHz- 5880MHz(100%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "100", frequencies: { utilized: ["5880MHz-5883MHz(100%)",  "5883MHz-5896MHz(100%)", "5896MHz- 5910MHz(100%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "100", frequencies: { utilized: ["5910MHz-5922MHz(100%)",  "5922MHz-5935MHz(100%)", "5935MHz- 5940MHz(100%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "100", frequencies: { utilized: ["5940MHz-5948MHz(100%)",  "5948MHz-5961MHz(100%)", "5961MHz- 5970MHz(100%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "100", frequencies: { utilized: ["5970MHz-5974MHz(100%)",  "5974MHz-5987MHz(100%)", "5987MHz- 6000MHz(100%)"], notutilized: [] } } },
          ]
        },
        ]
        },
        {
          region:"Airport",
          bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz-26.19MHz","26.19MHz-30.00MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "96.71",
                frequencies: {
                  utilized: ["39.23MHz-52.27MHz-60.00MHz","52.27MHz-60.00MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "97.40",
                frequencies: {
                  utilized: ["65.32MHz","78.36MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "66.29",
                frequencies: {
                  utilized: ["91.40MHz","104.45MHz"],
                  notutilized: ["117.49MHz"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "O.046",
                frequencies: {
                  utilized: [],
                  notutilized: ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["274.01MHz","287.05MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
            range: "300MHz-3GHz",
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
        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        //30MHz to 300MHz

        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "97.37",
                frequencies: {
                  utilized: ["39.23MHz-52.27MHz","52.27MHz-60.00MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "97.97",
                frequencies: {
                  utilized: ["65.32MHz","78.36MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "66.15",
                frequencies: {
                  utilized: ["91.40MHz","104.45MHz"],
                  notutilized: ["117.49MHz"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "O.0021",
                frequencies: {
                  utilized: [],
                  notutilized: ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0.0005",
                frequencies: {
                  utilized: [],
                  notutilized: ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0.0013",
                frequencies: {
                  utilized: [],
                  notutilized: ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["274.01MHz","287.05MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
          range: "300MHz-3GHz",
          subbands: [
            {
              range: "300.00-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-313.00MHz(0%)","313.00MHz-326.00MHz(0%)","326.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-339.00MHz(0%)","339.00-352.00MHz(0%)","352.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["360.00-365.00MHz(0%)","365.00-378.00MHz(0%)","378.00-390.00MHz(0%)"]
                }
              }
            },
            {
              range: "390.00-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["390.00-391.00MHz(0%)","391.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00-430.00MHz(0%)","430.00-443.00MHz(0%)","443.00-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00-480.00MHz",
              result: {
                utilization: "0.068",
                frequencies: {
                  utilized: ["470.00-480.00MHz(2.04%)"],
                  notutilized: ["450.00-457.00MHz(0%)", "457.00-470.00MHz(0%)"]
                }
              }
            },
            {
              range: "480.00-510.00MHz",
              result: {
                utilization: "0.51",
                frequencies: {
                  utilized: ["480.00-483.00MHz(2.04%)"],
                  notutilized: ["483.00-496.00MHz(0%)","496.00-509.00MHz(0%)","509.00-510.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00-540.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["510.00-522.00MHz(0%)","522.00-534.00MHz(0%)","535.00-540.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00-570.00MHz",
              result: {
                utilization: "0.20",
                frequencies: {
                  utilized: ["561.00-570.00MHz(0.58%)"],
                  notutilized: ["540.00-548.00MHz(0%)","548.00-561.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00-600.00MHz",
              result: {
                utilization: "0.29",
                frequencies: {
                  utilized: ["570.00-574.00MHz(0.58%)","574.00-587.00MHz(0.28%)"],
                  notutilized: ["587.00-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","6520.00-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00-690.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["660.00-665.00MHz(0%)","665.00-678.00MHz(0%)","678.00-690.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00-720.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["690.00-691.00MHz(0%)","691.00-704.00MHz(0%)","717.00-720.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00-750.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["720.00-730.00MHz(0%)","730.00-743.00MHz(0%)","743.00-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00-780.00MHz",
              result: {
                utilization: "9.19",
                frequencies: {
                  utilized: ["770.00-780.00MHz(27.57%)"],
                  notutilized: ["750.00-757.00MHz(0%)","757.00-770.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00-810.00MHz",
              result: {
                utilization: "43.24",
                frequencies: {
                  utilized: ["780MHz- 783MHz(27.94%)","783.00MHz- 796.00MHz(27.94%)","796.00MHz- 809.00MHz(57.01%)","809.00MHz- 810.00MHz(60.43%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "810.00-840.00MHz",
              result: {
                utilization: "21.42",
                frequencies: {
                  utilized: ["810.00-822.00MHz(60.43%)","822MHz- 834MHz(3.82%)","834MHz- 840MHz(0%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "840.00-870.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["840MHz- 848MHz(0%)","848MHz- 860MHz(0%)","860MHz- 870MHz(0%)"]
                }
              }
            },
            {
              range: "870.00-900.00MHz",
              result: {
                utilization: "24.08",
                frequencies: {
                  utilized: ["874MHz- 887MHz(0%)", "887MHz- 900MHz(72.23%)"],
                  notutilized: ["870MHz- 874MHz(0%)"]
                }
              }
            },
            {
              range: "900.00-930.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["900MHz- 913MHz(99.96%)","913MHz- 926MHz(0%)","926MHz- 930MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00-960.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["930MHz- 939MHz(100%)", "939MHz- 952MHz(100%)","952MHz- 960MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00-990.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["960MHz- 965MHz(100%)", "965MHz- 978MHz(99.99%)","978MHz- 990MHz(99.78%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00-1020.00MHz",
              result: {
                utilization: "99.86",
                frequencies: {
                  utilized: ["990MHz- 991MHz(99.78%)", "991MHz- 1004MHz(99.78%)","1004MHz- 1017MHz(99.73%)", "1017MHz- 1020MHz(99.80%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00-1050.00MHz",
              result: {
                utilization: "99.82",
                frequencies: {
                  utilized: ["1020MHz- 1030MHz(99.80%)", "1030MHz- 1043MHz(99.89%)", "1043MHz- 1050MHz(99.84%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1050.00-1080.00MHz",
              result: {
                utilization: "99.84",
                frequencies: {
                  utilized: ["1050MHz- 1057MHz(99.84%)", "1057MHz- 1070MHz(99.84%)", "1070MHz- 1080MHz(99.84%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00-1110.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1080MHz-1083MHz(99.84%)", "1083MHz-1096MHz(99.88%)","1096MHz-1109MHz(99.94%)","1109MHz-1110MHz(99.91%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00-1140.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1110MHz-1122MHz(99.91%)", "1122MHz-1135MHz(99.90%)", "1135MHz-1140MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00-1170.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1140MHz-1148MHz(99.94%)", "1148MHz-1161MHz(99.95%)", "1161MHz-1170MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00-1200.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1170MHz-1174MHz(99.96%)", "1174MHz-1187MHz(99.94%)", "1187MHz-1200MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00-1230.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1200MHz-1213MHz(99.97%)", "1213MHz-1226MHz(99.95%)", "1226MHz-1230MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00-1260.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1230MHz-1239MHz(99.94%)", "1239MHz-1252MHz(99.94%)", "1252MHz-1260MHz(99.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00-1290.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1260MHz-1265MHz(99.92%), 1265MHz-1278MHz(99.93%), 1278MHz-1290MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00-1320.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1290MHz-1291MHz(99.93%)", "1291MHz-1304MHz(99.91%)", "1304MHz-1317MHz(99.92%)", "1317MHz-1320MHz(99.90%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00-1350.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1320MHz-1331MHz(99.90%)", "1331MHz-1344MHz(99.88%)", "1344MHz-1350MHz(99.89%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00-1380.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1350MHz-1357MHz(99.89%)", "1357MHz-1370MHz(99.91%)", "1370MHz-1380MHz(99.91%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00-1410.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1380MHz-1383MHz(99.91%)"," 1383MHz-1396MHz(99.98%)", "1396MHz-1408MHz(99.98%)", "1408MHz-1410MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00-1440.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1410MHz-1422MHz(99.94%)", "1422MHz-1435MHz(99.93%)", "1435MHz-1440MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1440.00-1470.00MHz",
              result: {
                utilization: "99.96%",
                frequencies: {
                  utilized: ["1440MHz-1448MHz(99.96%)", "1448MHz-1461MHz(99.96%)", "1461MHz-1470MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1470.00-1500.00MHz",
              result: {
                utilization: "99.98%",
                frequencies: {
                  utilized: ["1470MHz-1474MHz(99.98%)"," 1474MHz-1487MHz(99.98%)", "1487MHz-1500MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1500.00-1530.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1500MHz-1513MHz(99.98%)"," 1513MHz-1526MHz(99.97%)", "1526MHz-1530MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1530.00-1560.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1530MHz-1539MHz(99.98%)", "1539MHz-1552MHz(99.98%)", "1552MHz-1560MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1560.00-1590.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1560MHz-1565MHz(99.97%)", "1565MHz-1578MHz(99.97%)", "1578MHz-1590MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1590.00-1620.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1590MHz-1591MHz(99.95%)","1591MHz-1604MHz(99.95%)", "1604MHz-1617MHz(99.95%)", "1617MHz-1620MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1620.00-1650.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1620MHz-1631MHz(99.94%)", "1631MHz-1644MHz(99.94%)", "1644MHz-1650MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1650.00-1680.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1650MHz-1657MHz(99.95%)", "1657MHz-1669MHz(99.95%)", "1669MHz-1680MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1680.00-1710.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1680MHz-1683MHz(99.95%)", "1683MHz-1696MHz(99.95%)", "1696MHz-1708MHz(99.96%)", "1708MHz-1710MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1710.00-1740.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["1710MHz-1722MHz(99.96%)", "1722MHz-1735MHz(99.97%)", "1735MHz-1740MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1740.00-1770.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1740MHz-1748MHz(99.98%)", "1748MHz-1761MHz(99.97%)", "1761MHz-1770MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1770.00-1800.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1770MHz-1774MHz(99.98%)", "1774MHz-1787MHz(99.99%)", "1787MHz-1800MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1800.00-1830.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1800MHz-1813MHz(99.99%)", "1813MHz-1826MHz(100%)", "1826MHz-1830MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1830.00-1860.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1830MHz-1839MHz(100%)", "1839MHz-1852MHz(100%)", "1852MHz-1860MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1860.00-1890.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1860MHz-1865MHz(100%)", "1865MHz-1878MHz(100%)", "1878MHz-1890MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1890.00-1920.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1890MHz-1891MHz(99.99%)","1891MHz-1904MHz(99.98%)", "1904MHz-1917MHz(99.98%)", "1917MHz-1920MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1920.00-1950.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1920MHz-1931MHz(99.98%)", "1931MHz-1944MHz(100%)", "1944MHz-1950MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1950.00-1980.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1950MHz-1957MHz(100%)", "1957MHz-1970MHz(100%)", "1970MHz-1980MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1980.00-2010.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1980MHz-1983MHz(100%)","1983MHz-1996MHz(100%)", "1996MHz-2009MHz(100%)", "2009MHz-2010MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2010.00-2040.00MHz",
              result: {
                utilization: "98.48",
                frequencies: {
                  utilized: ["2010MHz-2022MHz(100%)", "2022MHz-2035MHz(100%)", "2035MHz-2040MHz(95.45%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2040.00-2070.00MHz",
              result: {
                utilization: "92.69",
                frequencies: {
                  utilized: ["2040MHz-2048MHz(95.45%)", "2048MHz-2061MHz(86.60%)", "2061MHz-2070MHz(96.02%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2070.00-2100.00MHz",
              result: {
                utilization: "90.99",
                frequencies: {
                  utilized: ["2070MHz- 2074MHz(96.02%)", "2074MHz- 2087MHz(85.54%)", "2087MHz- 2100MHz(91.42%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2100.00-2130.00MHz",
              result: {
                utilization: "96.29",
                frequencies: {
                  utilized: ["2100MHz- 2113MHz(88.88%)", "2113MHz- 2126MHz(100%)", "2126MHz-2130MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2130.00-2160.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["2130MHz-2139MHz(100%)", "2139MHz-2152MHz(100%)", "2152MHz-2160MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2160.00-2190.00MHz",
              result: {
                utilization: "94.63",
                frequencies: {
                  utilized: ["2160MHz-2165MHz(100%)", "2165MHz-2178MHz(91.32%)", "2178MHz- 2190MHz(92.57%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2190.00-2220.00MHz",
              result: {
                utilization: "76.74",
                frequencies: {
                  utilized: ["2190MHz-2204MHz(92.59%)", "2204MHz-2217MHz(90.50%)", "2217MHz-2220MHz(70.30%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2220.00-2250.00MHz",
              result: {
                utilization: "64.66",
                frequencies: {
                  utilized: ["2220MHz-2230MHz(70.30%)", "2230MHz-2244MHz(71.42%)", "2244MHz-2250MHz(59.40%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2250.00-2280.00MHz",
              result: {
                utilization: "63.81",
                frequencies: {
                  utilized: ["2250MHz- 2256MHz(59.40%)", "2256MHz-2270MHz(73.69%)", "2270MHz-2280MHz(58.33%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2280.00-2310.00MHz",
              result: {
                utilization: "75.34",
                frequencies: {
                  utilized: ["2280MHz-2282MHz(58.33%)","2282MHz-2295MHz(73.63%)", "2295MHz-2308MHz(80.53%)", "2290MHz-2310MHz(88.86%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2310.00-2340.00MHz",
              result: {
                utilization: "87.42",
                frequencies: {
                  utilized: ["2310MHz-2322MHz(86.86%)", "2322MHz-2335MHz(84.46%)", "2335MHz-2340MHz(88.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2340.00-2370.00MHz",
              result: {
                utilization: "88.20",
                frequencies: {
                  utilized: ["2340MHz-2348MHz(88.93%)","2348MHz-2361MHz(89.15%)", "2361MHz-2370MHz(86.58%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2370.00-2400.00MHz",
              result: {
                utilization: "77.14",
                frequencies: {
                  utilized: ["2370MHz-2374MHz(86.58%)","2370MHz-2387MHz(75.94%)", "2387MHz-2400MHz(68.85%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2400.00-2430.00MHz",
              result: {
                utilization: "71.72",
                frequencies: {
                  utilized: ["2400MHz-2413MHz(71.13%)", "2413MHz-2426MHz(71.17%)", "2426MHz- 2430MHz(72.84%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2430.00-2460.00MHz",
              result: {
                utilization: "75.61",
                frequencies: {
                  utilized: ["2430MHz- 2439MHz(72.84%)", "2439MHz- 2452MHz(73.70%)", "2452MHz- 2460MHz(80.28%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2460.00-2490.00MHz",
              result: {
                utilization: "75.27",
                frequencies: {
                  utilized: ["2460MHz- 2465MHz(80.28%)", "2465MHz- 2478MHz(73.48%)", "2478MHz- 2490MHz(72.04%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2490.00-2520.00MHz",
              result: {
                utilization: "70.33",
                frequencies: {
                  utilized: ["2490MHz- 2491MHz(72.04%)","2491MHz- 2504MHz(67.56%)", "2504MHz- 2517MHz(71.41%)", "2517MHz- 2520MHz(70.30%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2520.00-2550.00MHz",
              result: {
                utilization: "72.86",
                frequencies: {
                  utilized: ["2520MHz- 2530MHz(70.30%)", "2530MHz- 2543MHz(75.62%)", "2543MHz- 2550MHz(72.66%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2550.00-2580.00MHz",
              result: {
                utilization: "74.15",
                frequencies: {
                  utilized: ["2550MHz- 2556MHz(72.66%)", "2556MHz- 2569MHz(73.44%)", "2569MHz- 2580MHz(76.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2580.00-2610.00MHz",
              result: {
                utilization: "82.32",
                frequencies: {
                  utilized: ["2580MHz- 2583MHz(76.34%)", "2583MHz- 2596MHz(85.46%)", "2596MHz- 2608MHz(83.30%)","2608MHz- 2610MHz(84.18%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2610.00-2640.00MHz",
              result: {
                utilization: "94.72",
                frequencies: {
                  utilized: ["2610MHz- 2622MHz(84.18%)", "2622MHz- 2634Hz(100%)", "2634Hz- 2640MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2640.00-2670.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["2640Hz- 2648MHz(100%)", "2648Hz- 2661MHz(100%)","2661Hz- 2670MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2670.00-2700.00MHz",
              result: {
                utilization: "86.82",
                frequencies: {
                  utilized: ["2670MHz- 2674MHz(100%)", "2674MHz- 2687MHz(99.92%)", "2687MHz - 2700MHz(60.54%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2700.00-2730.00MHz",
              result: {
                utilization: "60.83",
                frequencies: {
                  utilized: ["2700MHz - 2713MHz(63.07%)", "2713MHz- 2726MHz(59.02%)", "2726MHz 2730MHz(60.41%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2730.00-2760.00MHz",
              result: {
                utilization: "68.82",
                frequencies: {
                  utilized: ["2730MHz- 2739MHz(60.41%)", "2739MHz- 2752MHz(60.74%)", "2752MHz- 2760MHz(62.39%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2760.00-2790.00MHz",
              result: {
                utilization: "64.20",
                frequencies: {
                  utilized: ["2760MHz- 2765MHz(62.39%)", "2765MHz- 2778MHz(64.98%)", "2778MHz- 2790MHz(%),(65.23%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2790.00-2820.00MHz",
              result: {
                utilization: "68.50",
                frequencies: {
                  utilized: ["2790MHz- 2791MHz(65.23%)", "2791MHz- 2804MHz(65.63%)", "2804MHz- 2817MHz(70.18%)", "2817MHz- 2820MHz(72.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2820.00-2850.00MHz",
              result: {
                utilization: "73.23",
                frequencies: {
                  utilized: ["2820MHz- 2830MHz(72.95%)", "2830MHz- 2844MHz(74.20%)", "2844MHz- 2850MHz(72.66%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2850.00-2880.00MHz",
              result: {
                utilization: "73.35",
                frequencies: {
                  utilized: ["2850MHz- 2857MHz(72.66%)", "2857MHz- 2870MHz(73.89%)", "2870MHz- 2880MHz(73.52%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2880.00-2910.00MHz",
              result: {
                utilization: "74.78",
                frequencies: {
                  utilized: ["2880MHz- 2883MHz(73.52%)", "2883MHz- 2896MHz(78.34%)", "2896MHz- 2909MHz(73.96%)", "2909MHz- 2910MHz(73.32%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2910.00-2940.00MHz",
              result: {
                utilization: "72.79",
                frequencies: {
                  utilized: ["2910MHz- 2922MHz(73.32%)",  "2922MHz- 2935MHz(7291%)", "2935MHz- 2940MHz(72.15%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2940.00-2970.00MHz",
              result: {
                utilization: "73.19",
                frequencies: {
                  utilized: ["2940MHz- 2948MHz(72.15%)", "2948MHz- 2961MHz(75.38%)", "2961MHz- 2970MHz(72.04%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2970.00-3000.00MHz",
              result: {
                utilization: "72.69",
                frequencies: {
                  utilized: ["2970MHz- 2974MHz(72.04%)", "2974MHz- 2987MHz(74.54%)", "2987MHz- 3000MHz(71.47%)"],
                  notutilized: []
                }
              }
            }
          ]
        },

        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "46.18", frequencies: { utilized: ["3000MHz-3013MHz(51.08%)", "3013MHz-3026MHz(41.33%)", "3026MHz- 3030MHz(46.12%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "49.20", frequencies: { utilized: ["3030MHz-3039MHz(46.12%),  3039MHz-3052MHz(47.96%), 3052MHz-3060MHz(53.52%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "52.79", frequencies: { utilized: ["3060MHz-3065MHz(53.52%)", "3065MHz-3078MHz(54.34%)", "3078MHz-3090MHz(50.52%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "53.88", frequencies: { utilized: ["3090MHz-30914MHz(53.52%)","3091MHz-3104MHz(54.34%)", "3104MHz-3117MHz(50.51%)", "3117MHz-3120MHz(57.17%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "57.85", frequencies: { utilized: ["3120MHz-3130MHz(57.17%)", "3130MHz-3143MHz(58.44%)", "3143MHz-3150MHz(57.84%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "59.25", frequencies: { utilized: ["3150MHz-3156MHz(57.94%)", "3156MHz-3169MHz(59.91%)",  "3169MHz-3180MHz(59.89%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "60.37", frequencies: { utilized: ["3180MHz-3182MHz(59.89%)", "3182MHz-3195MHz(61.99%)",  "3195MHz-3208MHz(59.75%)", "3208MHz-3210MHz(59.75%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "60.32", frequencies: { utilized: ["3210MHz-3221MHz(59.86%)", "3221MHz-3234MHz(61.16%)",  "3224MHz-3240MHz(59.94%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "61.81", frequencies: { utilized: ["3240MHz-3247MHz(59.94%)", "3247MHz-3260MHz(64.28%)",  "3260MHz-3270MHz(61.21%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "63.14", frequencies: { utilized: ["3270MHz- 3273MHz(61.21%)", "3273MHz-3287MHz(65.45%)", "3287MHz-3300MHz(62.77%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "65.17", frequencies: { utilized: ["300MHz-3313MHz(68.33%)", "3313MHz-3326MHz(62.39%)",  "3326MHz-3330MHz(64.77%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "64.25", frequencies: { utilized: ["3330MHz-3339MHz(67.44%)", "3339MHz-3352MHz(63.33%)", "3352MHz-3360MHz(64.66%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "65.03", frequencies: { utilized: ["3360MHz-3365MHz(64.66%)", "3365MHz-3378MHz(66.49%)",  "3378MHz-3390MHz(63.93%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "66.08", frequencies: { utilized: ["3390MHz-3391MHz(63.93%)", "3391MHz-3404MHz(64.40%)","3404MHz-3417MHz(68.21%)", "3417MHz-3420MHz(67.78%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "66.34", frequencies: { utilized: ["3420MHz-3430MHz(67.78%)",  "3430MHz-3443MHz(65.78%)", "3443MHz-3450MHz(65.46%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "70.33", frequencies: { utilized: ["3450MHz-3457MHz(65.46%)", "3457MHz-3470MHz(69.81%)", "3469MHz-3480MHz(69.34%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "71.07", frequencies: { utilized: ["3480MHz-3482MHz(69.34%)", "3482MHz-3495MHz(75.39%)", "3495MHz - 3508MHz(64.20%)", "3508MHz-3510MHz(68.95%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "67.63", frequencies: { utilized: ["3510MHz-3521MHz(68.95%)",   "3521MHz-3534MHz(67.75%)", "3534MHz-3540MHz(66.19%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "66.89", frequencies: { utilized: ["3540MHz-3547MHz(66.19%)",  "3547MHz-3560MHz(68.35%)", "3560MHz-3570MHz(66.11%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "66.63", frequencies: { utilized: ["3570MHz-3573MHz(66.11%)", "3573MHz-3586MHz(67.78%)", "3586MHz-3600MHz(66.01%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "65.09", frequencies: { utilized: ["3600MHz- 3613MHz(62.61%)", "3613MHz-3626MHz(54.18%)", "3626MHz-3630MHz(57.46%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "54.99", frequencies: { utilized: ["3630MHz-3639MHz(57.46%)", "3639MHz-3652MHz(55.47%)", "3652MHz-3660MHz(52.04%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "49.27", frequencies: { utilized: ["3660MHz-3665MHz(52.04%)", "3665MHz-3678MHz(48.62%)", "3678MHz-3690MHz(47.13%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "45.56", frequencies: { utilized: ["3690MHz-3691MHz(47.13%)", "3691MHz-3704MHz(46.75%)","3704MHz-3717MHz(45.00%)","3717MHz-3720MHz(45.00%)"], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "43.33", frequencies: { utilized: ["3720MHz-3730MHz(43.34%)", "3730MHz-3743MHz(42.30%)", "3743MHz-3750MHz(44.33%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "44.82", frequencies: { utilized: ["3750MHz-3756MHz(44.33%)",  "3756MHz-3769MHz(44.99%)", "3769MHz-3780MHz(45.16%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "46.03", frequencies: { utilized: [" 3780MHz-3782MHz(45.15%)", "3782MHz-3795MHz(43.94%)", "3795MHz-3808MHz(46.79%)"," 3808MHz-3810MHz(48.24%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "49.07", frequencies: { utilized: ["3810MHz-3821MHz(48.24%)"," 3821MHz-3835MHz(49.58%)"," 3835MHz-3840MHz(49.39%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "50.56", frequencies: { utilized: ["3840MHz-3847MHz(49.39%)"," 3847MHz-3860MHz(50.38%)", "3860MHz-3870MHz(51.91%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "52.63", frequencies: { utilized: ["3870MHz-3873MHz(51.90%)", "3873MHz-3886MHz(53.11%)", "3886MHz-3900MHz(52.85%"], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "51.45", frequencies: { utilized: ["3900MHz-3913MHz(52.51%)", "3913MHz-3926MHz(51.34%)", "3926MHz-3930MHz(50.51%)"], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "49.80", frequencies: { utilized: ["3930MHz-3939MHz(50.51%)", "3939MHz-3952MHz(49.82%)", "3952MHz-3960MHz(49.07%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "48.89", frequencies: { utilized: ["960MHz-3965MHz(49.07%)",  "3965MHz-3978MHz(48.70%)", "3978MHz-3990MHz(48.92%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "50.20", frequencies: { utilized: ["3990MHz-3991MHz(48.92%)", "3991MHz-4004MHz(50.19%)", "4004MHz-4017MHz(50.44%)", "4017MHz-4020MHz(51.26%"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "52.28", frequencies: { utilized: ["4020MHz- 4030MHz(51.26%)", "4030MHz-4043MHz(51.96%)", "4043MHz-4050MHz(63.63%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "55.24", frequencies: { utilized: ["4050MHz-4056MHz(53.63%)", "4056MHz-4069MHz(55.04%)", "4069MHz-4080MHz(57.05%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "59.42", frequencies: { utilized: ["4080MHz-4082MHz(57.04%)", "4082MHz-4095MHz(58.82%)", "4095MHz-4108MHz(59.59%)","4108MHz-4110MHz(59.84%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "60.67", frequencies: { utilized: ["4110MHz-4121MHz(59.84%)",  "4121MHz-4134MHz(60.63%)", "4134MHz-4140MHz(61.52%)"], fwnotutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "62.62", frequencies: { utilized: ["4140MHz-4147MHz(61.52%)", "4147MHz-4160MHz(61.99%)", "4160MHz-4170MHz(64.33%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "65.61", frequencies: { utilized: ["4170MHz-4173MHz(64.32%)", "4173MHz-4186MHz(65.89%)", "4186MHz-4200MHz(66.62%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "69.15", frequencies: { utilized: ["4200MHz-4213MHz(68.18%)", "4213MHz-4226MHz(69.10%)", "4226MHz-4230MHz(70.17%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "71.99", frequencies: { utilized: ["4230MHz-4239MHz(70.17%)", "4239MHz-4252MHz(72.07%)", "4252MHz-4260MHz(73.71%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "75.46", frequencies: { utilized: ["4260MHz-4265MHz(73.71%)",  "4265MHz-4278MHz(.38%)", "4278MHz-4290MHz(77.28%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "78.61", frequencies: { utilized: ["4290MHz-4291MHz(77.28%)",  "4291MHz-4304MHz(77.90%)","4304MHz-4317MHz(79.06%)","4317MHz-4320MHz(79.06%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "85.67", frequencies: { utilized: ["4320MHz-4330MHz(80.19%)", "4330MHz-4343MHz(81.59%)", "4343MHz-4350MHz(82.99%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "88.27", frequencies: { utilized: ["4350MHz-4356MHz(82.99%)", "4356MHz-4369MHz(85.35%)", "4369MHz-4380MHz(86.59%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "88.25", frequencies: { utilized: ["4380MHz-4382MHz(86.59%)", "4382MHz-4395MHz(87.72%)", "4395MHz-4408MHz(88.69%)","4408MHz-4410MHz(88.69%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "90.94", frequencies: { utilized: ["4410MHz-4421MHz(90.94%)", "4421MHz-4434MHz(90.88%)", "4434MHz-4440MHz(91.92%)"], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "92.52", frequencies: { utilized: ["4440MHz-4447MHz(91.92%)", "4447MHz-4460MHz(92.35%)", "4460MHz-4470MHz(93.30%)"], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "93.87", frequencies: { utilized: ["4470MHz-4473MHz(93.30%)", "4473MHz-4486MHz(94.00%)", "4486MHz-4500MHz(94.30%)"], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "94.73", frequencies: { utilized: ["4500MHz-4513MHz(94.62%)", "4513MHz-4526MHz(94.79%)", "4526MHz-4530MHz(94.79%)"], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "94.60", frequencies: { utilized: ["4530MHz-4539MHz(97.79%)", "4539MHz-4552MHz(94.72%)", "4552MHz-4560MHz(94.31%)"], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "94.21", frequencies: { utilized: ["4560MHz-4565MHz(94.31%)", "4565MHz-4578MHz(94.25%)", "4578MHz-4590MHz(94.06%)"], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "93.72", frequencies: { utilized: ["4590MHz-4591MHz(94.06%)",  "4591MHz-4604MHz(93.94%)","4604MHz-4617MHz(93.27%)","4617MHz-4620MHz(93.27%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "92.80", frequencies: { utilized: ["4620MHz-4630MHz(93.27%)",  "4630MHz-4643MHz(92.64%)","4643MHz- 4650MHz(92.49%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "92.46", frequencies: { utilized: ["4650MHz- 4656MHz(92.49%)", "4656MHz- 4670MHz(92.41%)", "4670MHz- 4680MHz(92.49%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "92.95", frequencies: { utilized: ["4680MHz- 4682MHz(92.49%)", "4682MHz-4695MHz(92.72%)", "4695MHz- 4708MHz(93.12%)", "4708MHz-4710MHz(93.50%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "93.95", frequencies: { utilized: ["4710MHz- 4721MHz(93.50%)", "4721MHz-4734MHz(93.98%)", "4734MHz-4740MHz(96.37%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "95.14", frequencies: { utilized: ["4740MHz-4747MHz(94.37%)", "4747MHz-4760MHz(95.19%)", "4760MHz-4770MHz(95.87%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "96.42", frequencies: { utilized: ["4770MHz-4773MHz(95.87%)", "4773MHz-4786MHz(96.45%)", "4786MHz-4800MHz(96.93%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "97.37", frequencies: { utilized: ["4800MHz-4813MHz(97.21%)", "4813MHz-4826MHz(97.43%)", "4826MHz-4830MHz(97.48%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "97.57", frequencies: { utilized: ["4830MHz-4839MHz(97.48%)", "4839MHz-4852MHz(97.57%)", "4852MHz-4860MHz(97.65%)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "97.69", frequencies: { utilized: ["4860MHz-4865MHz(97.65%)" ,"4865MHz-4878MHz(97.67%)", "4878MHz-4890MHz(97.74%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "97.73", frequencies: { utilized: ["4890MHz-4891MHz(97.75%)",  "4891MHz-4904MHz(97.69%)", "4904MHz-4917MHz(97.70%)","4917MHz-4920MHz(97.77%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "97.95", frequencies: { utilized: ["4920MHz-4930MHz(97.77%)", "4930MHz-4943MHz(97.92%)", "4943MHz-4950MHz(98.16%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.38", frequencies: { utilized: ["4950MHz-4956MHz(98.16%)",  "4956MHz-4969MHz(98.37%)", "4969MHz-4980MHz(99.61%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "98.98", frequencies: { utilized: ["4980MHz-4982MHz(98.61%)",  "4982MHz-4995MHz(98.90%)","4995MHz-5008MHz(99.13%)","5008MHz-5010MHz(99.28%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "99.40", frequencies: { utilized: ["5010MHz-5021MHz(99.28%)",  "5021MHz-5034MHz(99.40%)", "5034MHz-5040MHz(99.51%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "99.61", frequencies: { utilized: ["5040MHz-5047MHz(99.51%)",  "5047MHz-5060MHz(99.63%)", "5060MHz-5070MHz(99.71%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "99.77", frequencies: { utilized: ["5070MHz-5073MHz(99.71%)",  "5073MHz-5086MHz(99.76%)",  "5086MHz-5100MHz(99.83%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "99.90", frequencies: { utilized: ["5100MHz-5113MHz(99.89%)", "5113MHz-5126MHz(99.90%)", "5126MHz-5130MHz(99.91%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5130MHz-5139MHz(99.91%)", "5139MHz-5152MHz(99.94%)", "5152MHz-5160MHz(99.95%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5160MHz-5165MHz(99.95%)",  "5165MHz-5178MHz(99.95%)","5178MHz-5190MHz(99.96%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5190MHz-5191MHz(99.96%)",  "5191MHz-5204MHz(99.96%)","5204MHz-5217MHz(99.98%)","5217MHz-5220MHz(99.97%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5220MHz-5230MHz(99.97%)",  "5230MHz-5243MHz(99.96%)", "5243MHz-5250MHz(99.97%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5250MHz-5257MHz(99.97%)",  "5257MHz-5270MHz(99.96%)", "5270MHz-5220MHz(99.96%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5280MHz-5283MHz(99.96%)",  "5283MHz-5296MHz(99.95%)", "5296MHz-5308MHz(99.95)", "5308MHz-5310MHz(99.95%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5310MHz- 5322MHz(99.95%)",  "5322MHz-5335MHz(99.93%)", "5335Hz-5340MHz(99.91%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.90", frequencies: { utilized: ["5340MHz-5348MHz(99.91%)",  "5348MHz-5361MHz(99.88%)", "5361MHz-5370MHz(99.91%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5370MHz-5374MHz(99.90%)",  "5374MHz-5387MHz(99.87%)", "5387MHz- 5400MHz(99.88%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5400MHz-5413MHz(99.87%)",  "5413MHz-5426MHz(99.88%)", "5426MHz- 5400MHz(99.87%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5430MHz-5439MHz(99.87%)",  "5439MHz-5452MHz(99.86%)", "5452MHz- 5460MHz(99.83%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5460MHz-5465MHz(99.83%)",  "5465MHz-5478MHz(99.84%)", "5478MHz- 5490MHz(99.86%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5490MHz-5591MHz(99.86%)",  "5491MHz-5504MHz(99.87%)","5504MHz-5517MHz(99.88%)", "5517MHz- 5520MHz(99.86%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5520MHz-5530MHz(99.86%)",  "5530MHz-5543MHz(99.86%)", "5543MHz- 5550MHz(99.88%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5550MHz-5557MHz(99.88%)",  "5557MHz-5570MHz(99.87%)", "5570MHz- 5580MHz(99.87%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5580MHz-5583MHz(99.87%)",  "5583MHz-5596MHz(99.84%)", "5596MHz- 5608MHz(99.88%)","5608MHz- 5610MHz(99.84%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5610MHz-5622MHz(99.84%)",  "5622MHz-5632MHz(99.86%)", "5635MHz- 5640MHz(99.87%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5640MHz-5648MHz(99.87%)",  "5648MHz-5661MHz(99.87%)", "5661MHz- 5670MHz(99.87%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.88", frequencies: { utilized: ["5670MHz-5674MHz(99.88%)",  "5674MHz-5687MHz(99.88%)", "5687MHz- 5700MHz(99.90%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5700MHz-5713MHz(99.89%)",  "5713MHz-5726MHz(99.92%)", "5726MHz- 5730MHz(99.93%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5730MHz-5739MHz(99.93%)",  "5739MHz-5752MHz(99.93%)", "5752MHz- 5760MHz(99.95%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5760MHz-5765MHz(99.95%)",  "5765MHz-5778MHz(99.95%)", "5778MHz- 5790MHz(99.97%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5790MHz-57914MHz(99.97%)",  "5791MHz-5804MHz(99.97%)", "5804MHz- 5817MHz(99.98%)", "5817MHz- 5820MHz(99.99%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5820MHz-5830MHz(99.99%)",  "5830MHz-5843MHz(99.99%)", "5843MHz- 5850MHz(99.99%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5850MHz-5857MHz(99.99%)",  "5857MHz-5870MHz(99.99%)", "5870MHz- 5880MHz(99.99%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5880MHz-5883MHz(99.99%)",  "5883MHz-5896MHz(99.99%)", "5896MHz- 5908MHz(99.99%)","5908MHz- 5910MHz(100%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5910MHz-5922MHz(100%)",  "5922MHz-5935MHz(99.99%)", "5935MHz- 5940MHz(99.99%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5940MHz-5948MHz(99.99%)",  "5948MHz-5961MHz(99.99%)", "5961MHz- 5970MHz(99.99%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5970MHz-5974MHz(99.99%)",  "5974MHz-5987MHz(99.99%)", "5987MHz- 6000MHz(99.99%)"], notutilized: [] } } },
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "42.38",
                frequencies: {
                  utilized: ["39.23MHz-52.27MHz-60.00MHz","52.27MHz-60.00MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "43.15",
                frequencies: {
                  utilized: ["65.32MHz","78.36MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "43.15",
                frequencies: {
                  utilized: ["91.40MHz","104.45MHz"],
                  notutilized: ["117.49MHz"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0.0013",
                frequencies: {
                  utilized: [],
                  notutilized: ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["274.01MHz","287.05MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
            range: "300MHz-3GHz",
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
        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
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
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "31.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "94.82",
                frequencies: {
                  utilized: ["39.23MHz-52.27MHz-60.00MHz","52.27MHz-60.00MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "95.54",
                frequencies: {
                  utilized: ["65.31MHHZ","78.35MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "64.05",
                frequencies: {
                  utilized: ["91.40MHz","104.45MHz"],
                  notutilized: ["117.49MHz"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["182.71MHz", "195.75MHz","208.79MHz"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["221.83MHz", "234.88MHz"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["274.00MHz","287.05MHz","300.00MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
          range: "300MHz-3GHz",
          subbands: [
            {
              range: "300.00-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-313.00MHz(0%)","313.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-339.00MHz(0%)","339.00-352.00MHz(0%)","352.00-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["360.00-365.00MHz(0%)","365.00-378.00MHz(0%)","378.00-390.00MHz(0%)"]
                }
              }
            },
            {
              range: "390.00-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["390.00-391.00MHz(0%)","391.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00-431.00MHz(0%)","431.00-444.00MHz(0%)","444.00-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00-480.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["450.00-457.00MHz(0%","457.00-470.00MHz(0%","470.00-480.00MHz(0%"]
                }
              }
            },
            {
              range: "480.00-510.00MHz",
              result: {
                utilization: "0.36",
                frequencies: {
                  utilized: ["483.00-496.00MHz(1.01%)","496.00-509.00MHz(0.07%)"],
                  notutilized: ["480.00-483.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00-540.00MHz",
              result: {
                utilization: "1.25",
                frequencies: {
                  utilized: ["522.00-535.00MHz(2.39%)","535.00-540.00MHz(1.37%)"],
                  notutilized: ["510.00-522.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00-570.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["540.00-561.00MHz(0%)","561.00-570.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00-600.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["570.00-574.00MHz(0%)","574.00-587.00MHz(0%)","587.00-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","652.00-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00-690.00MHz",
              result: {
                utilization: "5.48",
                frequencies: {
                  utilized: ["665.00-678.00MHz(6.15%)","678.00-690.00MHz(10.30%)"],
                  notutilized: ["660.00-665.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00-720.00MHz",
              result: {
                utilization: "2.30",
                frequencies: {
                  utilized: ["690.00-691.00MHz(10.30%)","717.00-720.00MHz(0.08%)"],
                  notutilized: ["691.00-704.00MHz(0%)","704.00-717.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00-750.00MHz",
              result: {
                utilization: "0.03",
                frequencies: {
                  utilized: ["720.00-731.00MHz(0.08%)","731.00-744.00MHz(0.01%)"],
                  notutilized: ["744.00-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00-780.00MHz",
              result: {
                utilization: "4.90",
                frequencies: {
                  utilized: ["770.00-780.00MHz(14.71%)"],
                  notutilized: ["750.00-757.00MHz(0%)","757.00-770.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00-810.00MHz",
              result: {
                utilization: "13.70",
                frequencies: {
                  utilized: ["780.00MHz- 783.00MHz(14.71%)","783.00MHz- 796.00MHz(10.31%)","796.00MHz- 809.00MHz(14.93%)","809.00MHz- 810.00MHz(14.88%)"],
                  notutilized: ["780MHz- 783MHz(0%)", "796MHz- 810MHz(0%)"]
                }
              }
            },
            {
              range: "810.00-840.00MHz",
              result: {
                utilization: "5.04",
                frequencies: {
                  utilized: ["810.00-822.00MHz(14.88%)","835.00-840.00MHz(0.23%)"],
                  notutilized: ["822.00-835.00MHz(0%)"]
                }
              }
            },
            {
              range: "840.00-870.00MHz",
              result: {
                utilization: "0.15",
                frequencies: {
                  utilized: ["840.00-848.00MHz(0.22%)","848.00-861.00MHz(0.23%)"],
                  notutilized: ["861.00-870.00MHz(0%)"]
                }
              }
            },
            {
              range: "870.00-900.00MHz",
              result: {
                utilization: "24.58",
                frequencies: {
                  utilized: ["874MHz- 887MHz(73.72%)", "887MHz- 900MHz(99.98%)"],
                  notutilized: ["870MHz- 874MHz(0%)"]
                }
              }
            },
            {
              range: "900.00-930.00MHz",
              result: {
                utilization: "99.25",
                frequencies: {
                  utilized: ["900MHz- 913MHz(99.24%)","913MHz- 926MHz(99.04%)","926MHz- 930MHz(99.46)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00-960.00MHz",
              result: {
                utilization: "99.79",
                frequencies: {
                  utilized: ["930MHz- 939MHz(99.46%)", "939MHz- 952MHz(99.97%)","952MHz- 960MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00-990.00MHz",
              result: {
                utilization: "98.79",
                frequencies: {
                  utilized: ["960MHz- 965MHz(99.95%)", "965MHz- 978MHz(99.29%)","978MHz- 990MHz(98.11%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00-1020.00MHz",
              result: {
                utilization: "98.06",
                frequencies: {
                  utilized: ["990MHz- 991MHz(98.11%)", "991MHz- 1009MHz(98.10%)", "1009MHz- 1020MHz(98.01%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00-1050.00MHz",
              result: {
                utilization: "98.14",
                frequencies: {
                  utilized: ["1020MHz- 1030MHz(98.04%)", "1030MHz- 1043MHz(98.13%)", "1043MHz- 1050MHz(98.23%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1050.00-080.00MHz",
              result: {
                utilization: "98.36",
                frequencies: {
                  utilized: ["1050MHz- 1056MHz(98.24%)", "1056MHz- 1069MHz(98.34%)", "1069MHz- 1080MHz(98.51%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00-1110.00MHz",
              result: {
                utilization: "98.75",
                frequencies: {
                  utilized: ["1080MHz-1083MHz(98.51%)", "1083MHz-1095MHz(98.61%)", "1095MHz-1109MHz(98.76%)", "1109MHz-1110MHz(98.89%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00-1140.00MHz",
              result: {
                utilization: "98.97",
                frequencies: {
                  utilized: ["1110MHz-1112MHz(98.89%)", "1122MHz-1134MHz(98.96%)", "1134MHz-1140MHz(99.07%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00-1170.00MHz",
              result: {
                utilization: "99.11",
                frequencies: {
                  utilized: ["1140MHz-1148MHz(99.07%)", "1148MHz-1161MHz(99.13%)", "1161MHz-1170MHz(99.15%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00-1200.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1170MHz-1173MHz(99.15%)", "1173MHz-1187MHz(99.22%)", "1187MHz-1200MHz(99.24%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00-1230.00MHz",
              result: {
                utilization: "99.24",
                frequencies: {
                  utilized: ["1200MHz-1213MHz(99.24%)", "1213MHz-1226MHz(99.24%)", "1226MHz-1230MHz(99.24%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00-1260.00MHz",
              result: {
                utilization: "99.11",
                frequencies: {
                  utilized: ["230MHz-1239MHz(99.17%)", "1239MHz-1252MHz(99.12%)", "1252MHz-1260MHz(99.07%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00-1290.00MHz",
              result: {
                utilization: "98.95",
                frequencies: {
                  utilized: ["1260MHz-1265MHz(99.07%), 1265MHz-1278MHz(98.93%), 1278MHz-1290MHz(98.85%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00-1320.00MHz",
              result: {
                utilization: "98.68",
                frequencies: {
                  utilized: ["1290MHz-1304MHz(98.75%)", "1304MHz-1317MHz(98.69%)", "1317MHz-1320MHz(98.61%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00-1350.00MHz",
              result: {
                utilization: "98.61",
                frequencies: {
                  utilized: ["1320MHz-1330MHz(98.61%)", "1330MHz-1344MHz(98.59%)", "1344MHz-1350MHz(98.64%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00-1380.00MHz",
              result: {
                utilization: "98.70",
                frequencies: {
                  utilized: ["1350MHz-1356MHz(98.64%)", "1356MHz-1370MHz(98.71%)", "1370MHz-1380MHz(98.78%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00-1410.00MHz",
              result: {
                utilization: "99.11",
                frequencies: {
                  utilized: ["1380MHz-1383MHz(98.99%)"," 1383MHz-1396MHz(98.99%)", "1396MHz-1408MHz(99.12%)", "1408MHz-1410MHz(99.25%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00-1440.00MHz",
              result: {
                utilization: "99.28",
                frequencies: {
                  utilized: ["1410MHz-1421MHz(99.22%)", "1421MHz-1435MHz(99.28%)", "1435MHz-1440MHz(99.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1440.00-1470.00MHz",
              result: {
                utilization: "99.47%",
                frequencies: {
                  utilized: ["1440MHz-1448MHz(99.34%)", "1448MHz-1461MHz(99.50%)", "1461MHz-1470MHz(99.56%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1470.00-1500.00MHz",
              result: {
                utilization: "99.64%",
                frequencies: {
                  utilized: ["1470MHz-1474MHz(99.56%)"," 1474MHz-1487MHz(99.64%)", "1487MHz-1500MHz(99.74%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1500.00-1530.00MHz",
              result: {
                utilization: "99.67",
                frequencies: {
                  utilized: ["1500MHz-1513MHz(99.67%)"," 1513MHz-1526MHz(99.67%)", "1526MHz-1530MHz(99.66%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1530.00-1560.00MHz",
              result: {
                utilization: "99.57",
                frequencies: {
                  utilized: ["1530MHz-1539MHz(99.66%)", "1539MHz-1552MHz(99.56%)", "1552MHz-1560MHz(99.49%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1560.00-1590.00MHz",
              result: {
                utilization: "99.37",
                frequencies: {
                  utilized: ["1560MHz-1565MHz(99.45%)", "1565MHz-1578MHz(99.37%)", "1578MHz-1590MHz(99.24%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1590.00-1620.00MHz",
              result: {
                utilization: "99.09",
                frequencies: {
                  utilized: ["1590MHz-1604MHz(99.16%)", "1604MHz-1617MHz(99.09%)", "1617MHz-1620MHz(99.03%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1620.00-1650.00MHz",
              result: {
                utilization: "99.01",
                frequencies: {
                  utilized: ["1620MHz-1631MHz(99.03%)", "1631MHz-1644MHz(98.98%)", "1644MHz-1650MHz(98.02%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1650.00-1680.00MHz",
              result: {
                utilization: "99.21",
                frequencies: {
                  utilized: ["1650MHz-1657MHz(99.15%)", "1657MHz-1669MHz(99.17%)", "1669MHz-1680MHz(99.32%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1680.00-1710.00MHz",
              result: {
                utilization: "99.44",
                frequencies: {
                  utilized: ["1680MHz-1683MHz(99.32%)", "1683MHz-1696MHz(99.39%)", "1696MHz-1708MHz(99.43%)", "1708MHz-1710MHz(99.52%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1710.00-1740.00MHz",
              result: {
                utilization: "99.50",
                frequencies: {
                  utilized: ["1710MHz-1722MHz(99.43%)", "1722MHz-1735MHz(99.45%)", "1735MHz-1740MHz(99.56%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1740.00-1770.00MHz",
              result: {
                utilization: "99.61",
                frequencies: {
                  utilized: ["1740MHz-1748MHz(99.56%)", "1748MHz-1761MHz(99.63%)", "1761MHz-1770MHz(99.67%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1770.00-1800.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1770MHz-1774MHz(99.67%)", "1774MHz-1787MHz(99.99%)", "1787MHz-1800MHz(99.99)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1800.00-1830.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1800MHz-1813MHz(99.99%)", "1813MHz-1826MHz(99.99%)", "1826MHz-1830MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1830.00-1860.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1830MHz-1839MHz(99.99%)", "1839MHz-1852MHz(100%)", "1852MHz-1860MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1860.00-1890.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1860MHz-1865MHz(100%)", "1865MHz-1878MHz(100%)", "1878MHz-1890MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1890.00-1920.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1890MHz-1904MHz(99.99%)", "1904MHz-1917MHz(99.99%)", "1917MHz-1920MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1920.00-1950.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["1920MHz-1931MHz(99.98%)", "1931MHz-1944MHz(100%)", "1944MHz-1950MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1950.00-1980.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1950MHz-1957MHz(100%)", "1957MHz-1970MHz(100%)", "1970MHz-1980MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1980.00-2010.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: ["1980MHz-1996MHz(100%)", "1996MHz-2009MHz(100%)", "2009MHz-2010MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2010.00-2040.00MHz",
              result: {
                utilization: "95.62",
                frequencies: {
                  utilized: ["2010MHz-2022MHz(100%)", "2022MHz-2035MHz(100%)", "2035MHz-2040MHz(86.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2040.00-2070.00MHz",
              result: {
                utilization: "87.20",
                frequencies: {
                  utilized: ["2040MHz-2048MHz(86.87%)", "2048MHz-2061MHz(86.65%)", "2061MHz-2070MHz(88.10%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2070.00-2100.00MHz",
              result: {
                utilization: "88.52",
                frequencies: {
                  utilized: ["2070MHz- 2074MHz(88.10%)", "2074MHz- 2087MHz(88.30%)", "2087MHz- 2100MHz(89.16%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2100.00-2130.00MHz",
              result: {
                utilization: "96.56",
                frequencies: {
                  utilized: ["2100MHz- 2113MHz(89.68%)", "2113MHz- 2126MHz(100%)", "2126MHz-2130MHz(100%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2130.00-2160.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: ["2130MHz-2139MHz(99.99%)", "2139MHz-2152MHz(100%)", "2152MHz-2160MHz(99.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2160.00-2190.00MHz",
              result: {
                utilization: "94.60",
                frequencies: {
                  utilized: ["2160MHz-2165MHz(99.99%)", "2165MHz-2178MHz(91.77%)", "2178MHz- 2190MHz(92.02%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2190.00-2220.00MHz",
              result: {
                utilization: "76.74",
                frequencies: {
                  utilized: ["2190MHz-2204MHz(91.97%)", "2204MHz-2217MHz(69.81%)", "2217MHz-2220MHz(68.44%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2220.00-2250.00MHz",
              result: {
                utilization: "66.78",
                frequencies: {
                  utilized: ["2220MHz-2230MHz(68.44%)", "2230MHz-2244MHz(68.33%)", "2244MHz-2250MHz(66.56%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2250.00-2280.00MHz",
              result: {
                utilization: "66.35",
                frequencies: {
                  utilized: ["2250MHz- 2256MHz(66.56%)", "2256MHz-2270MHz(67.12%)", "2270MHz-2280MHz(65.36%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2280.00-2310.00MHz",
              result: {
                utilization: "61.80",
                frequencies: {
                  utilized: ["2280MHz-2295MHz(61.35%)", "2295MHz-2308MHz(60.84%)", "2290MHz-2310MHz(63.10%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2310.00-2340.00MHz",
              result: {
                utilization: "61.46",
                frequencies: {
                  utilized: ["2310MHz-2322MHz(64.33%)", "2322MHz-2335MHz(60.05%)", "2335MHz-2340MHz(60.84%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2340.00-2370.00MHz",
              result: {
                utilization: "62.80",
                frequencies: {
                  utilized: ["2340MHz-2360MHz(63.18%)", "2360MHz-2370MHz(64.33%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2370.00-2400.00MHz",
              result: {
                utilization: "64.48",
                frequencies: {
                  utilized: ["2370MHz-2387MHz(63.44%)", "2387MHz-2387MHz(64.33%)","2387MHz-2400MHz(65.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2400.00-2430.00MHz",
              result: {
                utilization: "68 12",
                frequencies: {
                  utilized: ["2400MHz-2413MHz(68.31%)", "2413MHz-2426MHz(68.60%)", "2426MHz- 2430MHz(69.71%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2430.00-2460.00MHz",
              result: {
                utilization: "70.54",
                frequencies: {
                  utilized: ["2430MHz- 2439MHz(69.30%)", "2439MHz- 2452MHz(70.94%)", "2452MHz- 2460MHz(70.61%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2460.00-2490.00MHz",
              result: {
                utilization: "70.77",
                frequencies: {
                  utilized: ["2460MHz- 2465MHz(70.55%)", "2465MHz- 2478MHz(70.87%)", "2478MHz- 2490MHz(70.60%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2490.00-2520.00MHz",
              result: {
                utilization: "70.98",
                frequencies: {
                  utilized: ["2490MHz- 2450MHz(70.60%)", "2450MHz- 2517MHz(71.48%)", "2517MHz- 2520MHz(72.37%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2520.00-2550.00MHz",
              result: {
                utilization: "74.79",
                frequencies: {
                  utilized: ["2520MHz- 2530MHz(72.37%)", "2530MHz- 2543MHz(74.55%)", "2543MHz- 2550MHz(74.55%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2550.00-2580.00MHz",
              result: {
                utilization: "74.68",
                frequencies: {
                  utilized: ["2550MHz- 2556MHz(74.45.53%)", "2556MHz- 2569MHz(74.77%)", "2569MHz- 2580MHz(74.32%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2580.00-2610.00MHz",
              result: {
                utilization: "75.09",
                frequencies: {
                  utilized: ["2580MHz- 2583MHz(75.65%)", "2583MHz- 2596MHz(75.10%)", "2596MHz- 2610MHz(75.30%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2610.00-2640.00MHz",
              result: {
                utilization: "91.10",
                frequencies: {
                  utilized: ["2610MHz- 2622MHz(75.31%)", "2622MHz- 2634Hz(98.32%)", "2634Hz- 2640MHz(99.04%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2640.00-2670.00MHz",
              result: {
                utilization: "85.67",
                frequencies: {
                  utilized: ["2640Hz- 2647MHz(99.07%)", "2647MHz- 2660MHz(99.00%)", "2660MHz- 2670MHz(60.29%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2670.00-2700.00MHz",
              result: {
                utilization: "85.58",
                frequencies: {
                  utilized: ["2670MHz- 2674MHz(99.00)", "2674MHz- 2687MHz(99.00%)", "2687MHz - 2700MHz(60.45%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2700.00-2730.00MHz",
              result: {
                utilization: "60.84",
                frequencies: {
                  utilized: ["2700MHz - 2713MHz(60.58%)", "2713MHz- 2726MHz(60.52%)", "2726MHz 2730MHz(61.44%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2730.00-2760.00MHz",
              result: {
                utilization: "62.51",
                frequencies: {
                  utilized: ["2730MHz- 2739MHz(61.44%)", "2739MHz- 2752MHz(62.39%)", "2752MHz- 2760MHz(63.71%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2760.00-2790.00MHz",
              result: {
                utilization: "64.71",
                frequencies: {
                  utilized: ["2760MHz- 2765MHz(63.71%)", "2765MHz- 2778MHz(64.47%)", "2778MHz- 2790MHz(%),(66.19%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2790.00-2820.00MHz",
              result: {
                utilization: "68.65",
                frequencies: {
                  utilized: ["2790MHz- 2791MHz(66.19%)", "2791MHz- 2804MHz(66.85%)", "2804MHz- 2817MHz(69.25%)", "2817MHz- 2820MHz(60.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2820.00-2850.00MHz",
              result: {
                utilization: "72.32",
                frequencies: {
                  utilized: ["2820MHz- 2830MHz(71.45%)", "2830MHz- 2844MHz(71.10%)", "2844MHz- 2850MHz(63.14%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2850.00-2880.00MHz",
              result: {
                utilization: "73.34",
                frequencies: {
                  utilized: ["2850MHz- 2857MHz(73.14%)", "2857MHz- 2870MHz(73.22%)", "2870MHz- 2880MHz(73.65%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2880.00-2910.00MHz",
              result: {
                utilization: "71.45",
                frequencies: {
                  utilized: ["2880MHz- 2883MHz(72.47%)", "2883MHz- 2896MHz(71.97%)", "2896MHz- 2909MHz(71. 29%)", "2909MHz- 2910MHz(71.00%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2910.00-2940.00MHz",
              result: {
                utilization: "70.61",
                frequencies: {
                  utilized: ["2910MHz- 2922MHz(70.79%)",  "2922MHz- 2935MHz(71.21%)", "2935MHz- 2940MHz(69.85%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2940.00-2970.00MHz",
              result: {
                utilization: "76.90",
                frequencies: {
                  utilized: ["2940MHz- 2948MHz(77.24%)", "2948MHz- 2961MHz(76.84%)", "2961MHz- 2970MHz(76.62%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2970.00-3000.00MHz",
              result: {
                utilization: "70.62",
                frequencies: {
                  utilized: ["2970MHz- 2974MHz(70.79%)", "2974MHz- 2987MHz(71.21%)", "2987MHz- 3000MHz(69.85%)"],
                  notutilized: []
                }
              }
            }
          ]
        },
        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "41.35", frequencies: { utilized: ["3000MHz-3013MHz(40.07%)", "3013MHz-3026MHz(40.47%)", "3026MHz- 3030MHz(43.50%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "46.70", frequencies: { utilized: ["3030MHz-3039MHz(45.26%),  3039MHz-3052MHz(47.07%), 3052MHz-3060MHz(47.76%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "50.71", frequencies: { utilized: ["3060MHz-3065MHz(49.31%)", "3065MHz-3078MHz(50.31%)", "3078MHz-3090MHz(52.53%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "55.19", frequencies: { utilized: ["3090MHz-3104MHz(53.94%)", "3104MHz-3117MHz(55.01%)", "3117MHz-3120MHz(56.59%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "5819", frequencies: { utilized: ["3120MHz-3130MHz(58.00%)", "3130MHz-3143MHz(58.42%)", "3143MHz-3150MHz(58.13%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "59.84", frequencies: { utilized: ["3150MHz-3156MHz(59.49%)", "3156MHz-3169MHz(59.73%)",  "3169MHz-3180MHz(60.28%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "60.67", frequencies: { utilized: ["3180MHz-3182MHz(60.78%)", "3182MHz-3195MHz(60.79%)",  "3195MHz-3210MHz(60.42%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "60,31", frequencies: { utilized: ["3210M60.79Hz-3221MHz(60.49%)", "3221MHz-3234MHz(60.35%)",  "3224MHz-3240MHz(60.06%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "59.835", frequencies: { utilized: ["3240MHz-3247MHz(59.47%)", "3247MHz-3260MHz(59.46%)",  "3260MHz-3270MHz(59.94%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "60.41", frequencies: { utilized: ["3270MHz- 3273MHz(59.53%)", "3273MHz-3287MHz(60.66%)", "3287MHz-3300MHz(60.23%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "51.91", frequencies: { utilized: ["300MHz-3313MHz(59.73%)", "3313MHz-3326MHz(59.56%)",  "3326MHz-3330MHz(67.46%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "60.37", frequencies: { utilized: ["3330MHz-3339MHz(60.33%)", "3339MHz-3352MHz(60.33%)", "3352MHz-3360MHz(60.34%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "68.13", frequencies: { utilized: ["3360MHz-3365MHz(68.39%)", "3365MHz-3378MHz(68.17%)",  "3378MHz-3390MHz(67.83%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "69.10", frequencies: { utilized: ["3390MHz-3391MHz(59.69%)", "3391MHz-3404MHz(59.48%)", "3404MHz-3420MHz(58.13%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "55.79", frequencies: { utilized: ["3420MHz-3430MHz(756.92%)",  "3430MHz-3443MHz(55.64%)", "3443MHz-3450MHz(54.80%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "55.41", frequencies: { utilized: ["3450MHz-3456MHz(654.80%)", "3456MHz-3469MHz(55.64%)", "3469MHz-3480MHz(55.18%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "54.20", frequencies: { utilized: ["3480MHz-3482MHz(55.00%)", "3482MHz-3495MHz(54.05%)", "3495MHz - 3508MHz(53.53%)", "3508MHz-3510MHz(80.31%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "52.23", frequencies: { utilized: ["3510MHz-3521MHz(52.90%)",   "3521MHz-3534MHz(52.38%)", "3534MHz-3540MHz(51.40%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "47.47", frequencies: { utilized: ["3540MHz-3547MHz(49.27%)",  "3547MHz-3560MHz(47.21%)", "3560MHz-3570MHz(45.95%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "44.77", frequencies: { utilized: ["3570MHz-3573MHz(45.46%)", "3573MHz-3586MHz(44.51%)", "3586MHz-3600MHz(44.32%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "44.61", frequencies: { utilized: ["3600MHz- 3613MHz(44.00%)", "3613MHz-3626MHz(44.38%)", "3626MHz-3630MHz(45.42%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "47.38", frequencies: { utilized: ["3630MHz-3639MHz(46.15%)", "3639MHz-3652MHz(46.95%)", "3652MHz-3660MHz(48.92%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "51.47", frequencies: { utilized: ["3660MHz-3665MHz(49.85%)", "3665MHz-3678MHz(51.64%)", "3678MHz-3690MHz(52.90%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "54.26", frequencies: { utilized: ["3690MHz-3691MHz(53.72%)", "3691MHz-3704MHz(54.52%)", "3704MHz-3720MHz(54.52%)"], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "54.74", frequencies: { utilized: ["3720MHz-3730MHz(55.17%)", "3730MHz-3743MHz(50.22%)", "3743MHz-3750MHz(52.67%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "52.96", frequencies: { utilized: ["3750MHz-3756MHz(54.48%)",  "3756MHz-3769MHz(53.01%)", "3769MHz-3780MHz(51.38%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "51.29", frequencies: { utilized: [" 3780MHz-3782MHz(50.16%)", "3782MHz-3795MHz(49.99%)", "3795MHz-3808MHz(49.84%)"," 3808MHz-3810MHz(56.93%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "51.64.", frequencies: { utilized: ["3810MHz-3821MHz(50.26%)"," 3821MHz-3835MHz(51.77%)"," 3835MHz-3840MHz(52.86%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "55.97", frequencies: { utilized: ["3840MHz-3847MHz(54.75%)"," 3847MHz-3860MHz(55.69%)", "3860MHz-3870MHz(57.48%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "61.46", frequencies: { utilized: ["3870MHz-3873MHz(58.98%)", "3873MHz-3886MHz61.15%)", "3886MHz-3900MHz(62.69%"], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "63.97", frequencies: { utilized: ["3900MHz-3913MHz(63.47%)", "3913MHz-3926MHz(63.97%)", "3926MHz-3930MHz(64.47%)"], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "66.03", frequencies: { utilized: ["3930MHz-3939MHz(65.12%)", "3939MHz-3952MHz(65.701%)", "3952MHz-3960MHz(67.25%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "70.03", frequencies: { utilized: ["960MHz-3965MHz(69.27%)",  "3965MHz-3978MHz(69.84%)", "3978MHz-3990MHz(71.01%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "73.15", frequencies: { utilized: ["3990MHz-3991MHz(71.62%)", "3991MHz-4004MHz(72.19%)", "4004MHz-4017MHz(73.64%)", "4017MHz-4020MHz(75.16%"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "77.40", frequencies: { utilized: ["4020MHz- 4030MHz(76.40%)", "4030MHz-4043MHz(77.73%)", "4043MHz-4050MHz(678.07%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "80.61", frequencies: { utilized: ["4050MHz-4056MHz(79.20%)", "4056MHz-4069MHz(79.99%)", "4069MHz-4080MHz(81.45%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "84.17", frequencies: { utilized: ["4080MHz-4082MHz(82.57%)", "4082MHz-4095MHz(84.48%)", "4095MHz-4110MHz(85.45%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "87.75", frequencies: { utilized: ["4110MHz-4121MHz(86.61%)",  "4121MHz-4134MHz(87.91%)", "4134MHz-4140MHz(88.72%)"], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "90.54", frequencies: { utilized: ["4140MHz-4147MHz(89.67%)", "4147MHz-4160MHz(90.66%)", "4160MHz-4170MHz(91.29%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "92.51", frequencies: { utilized: ["4170MHz-4173MHz(92.07%)", "4173MHz-4186MHz(92.59%)", "4186MHz-4200MHz(92.86%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "93.32", frequencies: { utilized: ["4200MHz-4213MHz(93.17%)", "4213MHz-4226MHz(93.38%)", "4226MHz-4230MHz(93.40%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "93.11", frequencies: { utilized: ["4230MHz-4239MHz(93.19%)", "4239MHz-4252MHz(93.15%)", "4252MHz-4260MHz(92.98%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "92.29", frequencies: { utilized: ["4260MHz-4265MHz(92.89%)",  "4265MHz-4278MHz(92.64%)", "4278MHz-4290MHz(92.23%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "91.48", frequencies: { utilized: ["4290MHz-4291MHz(91.86%)",  "4291MHz-4304MHz(91.44%)", "4304MHz-4320MHz(91.14%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "91.25", frequencies: { utilized: ["4320MHz-4330MHz(91.13%)", "4330MHz-4343MHz(91.23%)", "4343MHz-4350MHz(91.37%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "92.06", frequencies: { utilized: ["4350MHz-4356MHz(91.66%)", "4356MHz-4369MHz(92.03%)", "4369MHz-4380MHz(92.48%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "93.66", frequencies: { utilized: ["4380MHz-4382MHz(93.07%)", "4382MHz-4395MHz(93.59%)", "4395MHz-4410MHz(94.31%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "95.25", frequencies: { utilized: ["4410MHz-4421MHz(94.83%)", "4421MHz-4434MHz(95.34%)", "4434MHz-4440MHz(95.58%)"], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "95.85", frequencies: { utilized: ["4440MHz-4447MHz(95.59%)", "4447MHz-4460MHz(95.96%)", "4460MHz-4470MHz(96.01%)"], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "96.00", frequencies: { utilized: ["4470MHz-4473MHz95.97%)", "4473MHz-4486MHz(95.98%)", "4486MHz-4500MHz(96.05%)"], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "95.97", frequencies: { utilized: ["4500MHz-4513MHz(95.96%)", "4513MHz-4526MHz(95.99%)", "4526MHz-4530MHz(96.46%)"], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "96.15", frequencies: { utilized: ["4530MHz-4539MHz(95.98%)", "4539MHz-4552MHz(96.12%)", "4552MHz-4560MHz(96.35%)"], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "96.88", frequencies: { utilized: ["4560MHz-4565MHz(96.64%)", "4565MHz-4578MHz(96.93%)", "4578MHz-4590MHz(97.07%)"], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "97.23", frequencies: { utilized: ["4590MHz-4591MHz(97.20%)",  "4591MHz-4604MHz(95.87%)", "4604MHz-4620MHz(97.40%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "97.69", frequencies: { utilized: ["4620MHz-4630MHz(97.59%)",  "4630MHz-4643MHz(97.68%)","4643MHz- 4650MHz(97.80%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "98.11", frequencies: { utilized: ["4650MHz- 4656MHz(97.93%)", "4656MHz- 4670MHz(98.12%)", "4670MHz- 4680MHz(98.27%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "98.90", frequencies: { utilized: ["4680MHz- 4682MHz(98.53%)", "4682MHz-4695MHz(98.61%)", "4695MHz- 4708MHz(98.80%)", "4708MHz-4710MHz(95.28%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "99.06", frequencies: { utilized: ["4710MHz- 4721MHz(98.95%)", "4721MHz-4734MHz(99.01%)", "4734MHz-4740MHz(99.21%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "99.25", frequencies: { utilized: ["4740MHz-4747MHz(99.27%)", "4747MHz-4760MHz(99.25%)", "4760MHz-4770MHz(99.21%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "99.15", frequencies: { utilized: ["4770MHz-4773MHz(99.22%)", "4773MHz-4786MHz(99.15%)", "4786MHz-4800MHz(99.08%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "98.98", frequencies: { utilized: ["4800MHz-4813MHz(99.04%)", "4813MHz-4826MHz(98.95%)", "4826MHz-4830MHz(98.87%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "98.45", frequencies: { utilized: ["4830MHz-4839MHz(98.45%)", "4839MHz-4852MHz(98.43%)", "4852MHz-4860MHz(98.46%)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "98.44", frequencies: { utilized: ["4860MHz-4865MHz(98.45%)" ,"4865MHz-4878MHz(98.41%)", "4878MHz-4890MHz(98.48%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "98.44", frequencies: { utilized: ["4890MHz-4891MHz(98.47%)",  "4891MHz-4904MHz(98.44%)", "4904MHz-4920MHz(98.41%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "98.43", frequencies: { utilized: ["4920MHz-4930MHz(98.41%)", "4930MHz-4943MHz(98.43%)", "4943MHz-4950MHz(98.47%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.46", frequencies: { utilized: ["4950MHz-4956MHz(98.49%)",  "4956MHz-4969MHz(98.44%)", "4969MHz-4980MHz(98.46%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "99.44", frequencies: { utilized: ["4980MHz-4982MHz(98.48%)",  "4982MHz-4995MHz(98.39%)", "4999MHz-5010MHz(98.41%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "98.38", frequencies: { utilized: ["5010MHz-5021MHz(98.37%)",  "5021MHz-5034MHz(99.58%)", "5034MHz-5040MHz(98.36%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "98.40", frequencies: { utilized: ["5040MHz-5047MHz(98.35%)",  "5047MHz-5060MHz(98.38%)", "5060MHz-5070MHz(98.38%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "98.56", frequencies: { utilized: ["5070MHz-5073MHz(98.49%)",  "5073MHz-5086MHz(98.52%)",  "5086MHz-5100MHz(98.66%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "98.88", frequencies: { utilized: ["5100MHz-5113MHz(98.75%)", "5113MHz-5126MHz(98.83%)", "5126MHz-5130MHz(99.03%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.32", frequencies: { utilized: ["5130MHz-5139MHz(99.16%)", "5139MHz-5152MHz(99.30%)", "5152MHz-5160MHz(99.51%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.71", frequencies: { utilized: ["5160MHz-5165MHz(99.61%)",  "5165MHz-5178MHz(99.69%)","5178MHz-5190MHz(99.81%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5190MHz-5191MHz(99.85%)",  "5191MHz-5204MHz(99.89%)", "5204MHz-5220MHz(99.94%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5220MHz-5230MHz(99.93%)",  "5230MHz-5243MHz(99.96%)", "5243MHz-5250MHz(99.96%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5250MHz-5257MHz(99.97%)",  "5257MHz-5270MHz(99.96%)", "5270MHz-5220MHz(99.97%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5280MHz-5283MHz(99.97%)",  "5283MHz-5296MHz(99.97%)", "5296MHz-5308MHz(99.96%)", "5308MHz-5310MHz(99.96%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5310MHz- 5322MHz(99.98%)",  "5322MHz-5335MHz99.97%)", "5335Hz-5340MHz(99.98%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5340MHz-5348MHz(99.95%)",  "5348MHz-5361MHz(99.92%)", "5361MHz-5370MHz(99.92%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5370MHz-5374MHz(99.92%)",  "5374MHz-5387MHz(99.92%)", "5387MHz- 5400MHz(99.94%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5400MHz-5413MHz(99.93%)",  "5413MHz-5426MHz(99.93%)", "5426MHz- 5400MHz(99.93%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5430MHz-5439MHz(99.93%)",  "5439MHz-5452MHz(99.92%)", "5452MHz- 5460MHz(99.93%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5460MHz-5465MHz(99.93%)",  "5465MHz-5478MHz(99.93%)", "5478MHz- 5490MHz(99.92%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5490MHz-5504MHz(99.94%)",  "5504MHz-5517MHz(99.94%)", "5517MHz- 5520MHz(99.93%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5520MHz-5530MHz(99.93%)",  "5530MHz-5543MHz(99.91%)", "5543MHz- 5550MHz(99.93%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5550MHz-5557MHz(99.93%)",  "5557MHz-5570MHz(99.94%)", "5570MHz- 5580MHz(99.92%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5580MHz-5583MHz(99.92%)",  "5583MHz-5596MHz(99.92%)", "5596MHz- 5610MHz(99.91%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5610MHz-5622MHz(99.91%)",  "5622MHz-5632MHz(99.92%)", "5635MHz- 5640MHz(99.92%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5640MHz-5648MHz(99.92%)",  "5648MHz-5661MHz(99.92%)", "5661MHz- 5670MHz(99.92%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5670MHz-5674MHz(99.92%)",  "5674MHz-5687MHz(99.93%)", "5687MHz- 5700MHz(99.93%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5700MHz-5713MHz(99.94%)",  "5713MHz-5726MHz(99.95%)", "5726MHz- 5730MHz(99.95%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5730MHz-5739MHz(99.95%)",  "5739MHz-5752MHz(99.96%)", "5752MHz- 5760MHz(99.97%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5760MHz-5765MHz(99.97%)",  "5765MHz-5778MHz(99.98%)", "5778MHz- 5790MHz(99.99%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.23", frequencies: { utilized: ["5790MHz-5804MHz(99.99%)",  "5804MHz-5817MHz(98.99%)", "5817MHz- 5820MHz(99.93%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5820MHz-5830MHz(99.92%)",  "5830MHz-5843MHz(99.94%)", "5843MHz- 5850MHz(99.93%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5850MHz-5857MHz(99.85%)",  "5857MHz-5870MHz(99.83%)", "5870MHz- 5880MHz(99.84%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5880MHz-5883MHz(99.93%)",  "5883MHz-5896MHz(99.96%)", "5896MHz- 5910MHz(99.96%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5910MHz-5922MHz(100%)",  "5922MHz-5935MHz(99.97%)", "5935MHz- 5940MHz(99.96%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5940MHz-5948MHz(99.97%)",  "5948MHz-5961MHz(99.98%)", "5961MHz- 5970MHz(99.97%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5970MHz-5974MHz(99.98%)",  "5974MHz-5987MHz(99.96%)", "5987MHz- 6000MHz(99.98%)"], notutilized: [] } } },
          ]
        },

        ]


    },
    {
      id: 4,
      location: "Ibadan",
      bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz", "26.19MHz"]
            }
          }
        },
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "96.44",
                frequencies: {
                  utilized: ["39.23MHz-52.27MHz-60.00MHz", "52.27MHz-60.00MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "97.13",
                frequencies: {
                  utilized: ["65.31MHz","78.36MHz"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "65.12",
                frequencies: {
                  utilized: ["91.40MHz","104.45MHz"],
                  notutilized: ["117.48MHz"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["156.62MHz", "169.66MHz"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["182.70MHz","195.74MHz","208.79MHz"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["221.83MHz","234.88MHz"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["247.92MHz","260.97MHz"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["274.00MHz","287.05MHz","300.00MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
          range: "300MHz-3GHz",
          subbands: [
            {
              range: "300.00-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-313.00MHz(0%)","313.00MHz-326.00MHz(0%)","326.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00-339.00MHz(0%)","339.00MHz-352.00MHz(0%)","352.00MHz-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["360.00-365.00MHz(0%)","365.00MHz-378.00MHz(0%)","378.00MHz-390.00MHz(0%)",]
                }
              }
            },
            {
              range: "390.00-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["390.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00-430.00MHz(0%)","430.00-443.00MHz(0%)","443.00-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00-480.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["450.00-459.00MHz(0%)","459.00-469.00MHz(0%)","459.00-480.00MHz(0%)"]
                }
              }
            },
            {
              range: "480.00-510.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["480.00-482.00MHz(0%)", "482.00-495.00MHz(0%)","495.00-510.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00-540.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["510.00-521.00MHz(0%)","521.00-534.00MHz(0%)","534.00-540.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00-570.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["540.00-547.00MHz(0%)","547.00-560.00MHz(0%)","560.00-570.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00-600.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["570.00-574.00MHz(0%)","574.00-587.00MHz(0%)","587.00-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","652.00-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00-690.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["660.00-665.00MHz(0%)","665.00-678.00MHz(0%)","678.00-690.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00-720.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["690.00-691.00MHz(0%)","691.00-704.00MHz(0%)","704.00-717.00MHz(0%)","717.00-720.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00-750.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["720.00-730.00MHz(0%)","730.00-743.00MHz(0%)","743.00-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00-780.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["750.00-756.00MHz(0%)","756.00-769.00MHz(0%)","769.00-780.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00-810.00MHz",
              result: {
                utilization: "1.19",
                frequencies: {
                  utilized: ["782.00MHz- 795.00MHz(3.19%)","795MHz- 808MHz(0.40%)"],
                  notutilized: ["780MHz- 782MHz(0%)", "808MHz- 810MHz(0%)"]
                }
              }
            },
            {
              range: "810.00-840.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["810.00-821.00MHz(0%)","821.00-834.00MHz(0%)", "834.00-840.00MHz(0%)"]
                }
              }
            },
            {
              range: "840.00-870.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["840.00-847.00MHz(0%)","847.00-860.00MHz(0%)", "860.00-870.00MHz(0%)"]
                }
              }
            },
            {
              range: "870.00-900.00MHz",
              result: {
                utilization: "66.63",
                frequencies: {
                  utilized: ["873MHz- 887MHz(99.94%)", "887MHz- 900MHz(99.93%)"],
                  notutilized: ["870MHz- 873MHz(0%)"]
                }
              }
            },
            {
              range: "900.00-930.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["900MHz- 913MHz(99.91%)" ,"913MHz- 926MHz(99.95%)", ,"926MHz- 930MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00-960.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["930MHz- 939MHz(99.97%)", "939MHz- 952MHz(99.97%)", "952MHz- 960MHz(99.97%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00-990.00MHz",
              result: {
                utilization: "99.76",
                frequencies: {
                  utilized: ["965MHz- 978MHz(99.74%)","978MHz- 990MHz(99.74%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00-1020.00MHz",
              result: {
                utilization: "99.71",
                frequencies: {
                  utilized: ["990MHz- 991MHz(99.74%)","991MHz- 1004MHz(99.72%)","1004MHz- 1017MHz(99.69%)", "1017MHz- 1020MHz(99.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00-1050.00MHz",
              result: {
                utilization: "99.76",
                frequencies: {
                  utilized: ["1020MHz- 1030MHz(99.71%)", "1030MHz- 1043MHz(99.76%)","1043MHz- 1050MHz(99.76%)"


],                    notutilized: []
                }
              }
            },
            {
              range: "1050.00-1080.00MHz",
              result: {
                utilization: "99.83",
                frequencies: {
                  utilized: ["1050MHz- 1056MHz(99.79%)","1056MHz- 1069MHz(99.84%)","1069MHz- 1080MHz(99.85%)"




],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00-1110.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1080MHz-1082MHz(99.85%)", "1083MHz-1095MHz(99.88%)", "1095MHz-1110MHz(99.89%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00-1140.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["1110MHz-1121MHz(99.91%)", "1121MHz-1134MHz(99.92%)", "1134MHz-1140MHz(99.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00-1170.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1140MHz-1147MHz(99.92%)", "1147MHz-1160MHz(99.93%)", "1160MHz-1170MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00-1200.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1170MHz-1173MHz(99.93%)", "1173MHz-1187MHz(99.94%)", "1187MHz-1200MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00-1230.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1200MHz-1213MHz(99.93%)", "1213MHz-1226MHz(99.94%)", "1226MHz-1230MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00-1260.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1230MHz-1239MHz(99.94%)", "1239MHz-1252MHz(99.93%)", "1252MHz-1260MHz(99.91%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00-1290.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1260MHz-1265MHz(99.91%), 1265MHz-1278MHz(99.93%), 1278MHz-1290MHz(99.90%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00-1320.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: ["1290MHz-1291MHz(99.0%)", "1291MHz-1304MHz(99.91%)","1304MHz-1317MHz(99.87%)", "1317MHz-1320MHz(99.86%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00-1350.00MHz",
              result: {
                utilization: "99.86",
                frequencies: {
                  utilized: ["1320MHz-1330MHz(99.86%)", "1330MHz-1343MHz(99.87%)", "1343MHz-1350MHz(99.87%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00-1380.00MHz",
              result: {
                utilization: "99.88",
                frequencies: {
                  utilized: ["1350MHz-1356MHz(99.87%)", "1356MHz-1369MHz(99.89%)", "1369MHz-1380MHz(99.90%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00-1410.00MHz",
              result: {
                utilization: "99.91",
                frequencies: {
                  utilized: ["1380MHz-1382MHz(99.91%)"," 1382MHz-1395MHz(99.91%)", "1395MHz-1408MHz(99.30%)", "1408MHz-1410MHz(99.30%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00-1440.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1410MHz-1421MHz(99.93%)", "1421MHz-1434MHz(99.94%)", "1434MHz-1440MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1440.00-1470.00MHz",
              result: {
                utilization: "99.95%",
                frequencies: {
                  utilized: ["1440MHz-1449MHz(99.94%)", "1449MHz-1460MHz(99.95%)", "1460MHz-1470MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1470.00-1500.00MHz",
              result: {
                utilization: "99.96%",
                frequencies: {
                  utilized: ["1470MHz-1473MHz(99.95%)"," 1474MHz-1487MHz(99.96%)", "1487MHz-1500MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1500.00-1530.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1500MHz-1513MHz(99.96%)"," 1513MHz-1526MHz(99.96%)", "1526MHz-1530MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1530.00-1560.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: ["1530MHz-1539MHz(99.95%)" ,"1539MHz-1552MHz(99.94%)", "1552MHz-1560MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1560.00-1590.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1560MHz-1565MHz(99.94%)", "1565MHz-1578MHz(99.94%)", "1578MHz-1590MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1590.00-1620.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1590MHz-1591MHz(99.94%)","1591MHz-1604MHz(99.93%)", "1604MHz-1617MHz(99.93%)", "1617MHz-1620MHz(99.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1620.00-1650.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: ["1620MHz-1630MHz(99.92%)", "1630MHz-1643MHz(99.93%)", "1643MHz-1650MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1650.00-1680.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: ["1650MHz-1656MHz(99.93%)", "1656MHz-1669MHz(99.93%)", "1669MHz-1680MHz(99.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1680.00-1710.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1680MHz-1682MHz(99.93%)", "1682MHz-1695MHz(99.94%)", "1695MHz-1708MHz(99.95%)", "1708MHz-1710MHz(99.95%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1710.00-1740.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1710MHz-1721MHz(99.95%)", "1721MHz-1734MHz(99.95%)", "1745MHz-1740MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1740.00-1770.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1740MHz-1747MHz(99.95%)", "1747MHz-1760MHz(99.96)", "1760MHz-1770MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1770.00-1800.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1770MHz-1773MHz(99.96%)", "1773MHz-1787MHz(99.96%)", "1787MHz-1800MHz(99.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1800.00-1830.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: ["1800MHz-1813MHz(99.96%)", "1813MHz-1826MHz(99.98%)", "1826MHz-1830MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1830.00-1860.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1830MHz-1839MHz(99.98%)", "1839MHz-1852MHz(99.98%)", "1852MHz-1860MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1860.00-1890.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1860MHz-1865MHz(99.98%)", "1865MHz-1878MHz(99.98%)", "1878MHz-1890MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1890.00-1920.00MHz",
              result: {
                utilization: "99.94",
                frequencies: {
                  utilized: ["1890MHz-1904MHz(99.94%)", "1904MHz-1917MHz(99.93%)", "1917MHz-1920MHz(99.94%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1920.00-1950.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: ["1920MHz-1930MHz(99.94%)", "1931MHz-1943MHz(99.98%)", "1943MHz-1950MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1950.00-1980.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1950MHz-1956MHz(99.98%)", "1956MHz-1969MHz(99.98%)", "1969MHz-1980MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "1980.00-2010.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["1980MHz-1982MHz(99.98%)", "1982MHz-1995MHz(99.98%)", "1995MHz-2008MHz(99.98%)","2008MHz-2010MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2010.00-2040.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2010MHz-2021MHz(99.98%)", "2021MHz-2034MHz(99.98%)", "2034MHz-2040MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2040.00-2070.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2040MHz-2047MHz(99.98%)", "2047MHz-2060MHz(99.98%)", "2060MHz-2070MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2070.00-2100.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2070MHz- 2073MHz(99.98%)", "2073MHz- 2087MHz(99.98%)", "2087MHz- 2100MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2100.00-2130.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2100MHz- 2113MHz(99.98%)", "2113MHz- 2126MHz(99.98%)", "2126MHz-2130MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2130.00-2160.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2130MHz-2139MHz(99.98%)", "2139MHz-2152MHz(99.98%)", "2152MHz-2160MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2160.00-2190.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2160MHz-2165MHz(99.98%)", "2165MHz-2178MHz(99.98%)", "2178MHz- 2190MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2190.00-2220.00MHz",
              result: {
                utilization: "81.28",
                frequencies: {
                  utilized: ["2190MHz-2191MHz(99.98%)", "2191MHz-2204MHz(99.98%)", "2204MHz-2217MHz(63.24%)", "2217MHz-2220MHz(61.93%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2220.00-2250.00MHz",
              result: {
                utilization: "60.99",
                frequencies: {
                  utilized: ["2220MHz-2230MHz(61.93%)", "2230MHz-2243MHz(61.45%)", "2243MHz-2250MHz(59.61%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2250.00-2280.00MHz",
              result: {
                utilization: "59.77",
                frequencies: {
                  utilized: ["2250MHz- 2256MHz(59.61%)", "2256MHz-2269MHz(61.40%)", "2269MHz-2280MHz(58.31%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2280.00-2310.00MHz",
              result: {
                utilization: "59.39",
                frequencies: {
                  utilized: ["2280MHz-2282MHz(58.31%)", "2282MHz-2295MHz(60.42%)", "2295MHz-2308MHz(59.92%)", "2308MHz-2310MHz(59.92%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2310.00-2340.00MHz",
              result: {
                utilization: "69.96",
                frequencies: {
                  utilized: ["2310MHz-2321MHz(59.92%)", "2321MHz-2334MHz(58.64%)", "2334MHz-2340MHz(76.33%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2340.00-2370.00MHz",
              result: {
                utilization: "86.76",
                frequencies: {
                  utilized: ["2340MHz-2347MHz(76.33%)", "2347MHz-2360MHz(92.92%)","2360MHz-2370MHz(91.03%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2370.00-2400.00MHz",
              result: {
                utilization: "74.68",
                frequencies: {
                  utilized: ["2370MHz-2373MHz(91.03%)", "2373MHz-2387MHz(65.68%)","2387MHz-2400MHz(67.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2400.00-2430.00MHz",
              result: {
                utilization: "70.60",
                frequencies: {
                  utilized: ["2400MHz-2413MHz(69.97%)", "2413MHz-2426MHz(70.23%)", "2426MHz- 2430MHz(71.70%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2430.00-2460.00MHz",
              result: {
                utilization: "71.75",
                frequencies: {
                  utilized: ["2430MHz- 2439MHz(71.70%)", "2439MHz- 2452MHz(71.36%)", "2452MHz- 2460MHz(72.18%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2460.00-2490.00MHz",
              result: {
                utilization: "72.12",
                frequencies: {
                  utilized: ["2460MHz- 2465MHz(72.18%)", "2465MHz- 2478MHz(72.65%)", "2478MHz- 2490MHz(71.53%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2490.00-2520.00MHz",
              result: {
                utilization: "72.39",
                frequencies: {
                  utilized: ["2490MHz- 2491MHz(71.53%)", "2491MHz- 2504MHz(71.41%)", "2504MHz- 2517MHz(72.64%)" ,"2517MHz- 2520MHz(73.12%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2520.00-2550.00MHz",
              result: {
                utilization: "74.19",
                frequencies: {
                  utilized: ["2520MHz- 2530MHz(73.12%)", "2530MHz- 2453MHz(74.49%)", "2453MHz- 2550MHz(74.96%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2550.00-2580.00MHz",
              result: {
                utilization: "76.71",
                frequencies: {
                  utilized: ["2550MHz- 2556MHz(74.96%)", "2556MHz- 2569MHz(75.19%)", "2569MHz- 2580MHz(79.99%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2580.00-2610.00MHz",
              result: {
                utilization: "90.77",
                frequencies: {
                  utilized: ["2580MHz- 2582MHz(79.99%)", "2582MHz- 2595MHz(94.94%)", "2595MHz- 2608MHz(94.63%)","2608MHz- 2610MHz(93.52%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2610.00-2640.00MHz",
              result: {
                utilization: "97.82",
                frequencies: {
                  utilized: ["2610MHz- 2621MHz(93.52%)", "2621MHz- 2634Hz(99.98%)", "2634Hz- 2640MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2640.00-2670.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["2640Hz- 2647MHz(99.98%)", "2647Hz- 2660MHz(99.98%)","2660Hz- 2670MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2670.00-2700.00MHz",
              result: {
                utilization: "93.75",
                frequencies: {
                  utilized: ["2670MHz- 2673MHz(99.98%)", "2673MHz- 2687MHz(99.94%)", "2687MHz - 2700MHz(81.34%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2700.00-2730.00MHz",
              result: {
                utilization: "77.51",
                frequencies: {
                  utilized: ["2700MHz - 2713MHz(76.63%)", "2713MHz- 2726MHz(75.08%)", "2726MHz 2730MHz(78.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2730.00-2760.00MHz",
              result: {
                utilization: "77.51",
                frequencies: {
                  utilized: ["2730MHz- 2739MHz(76.05%)", "2739MHz- 2752MHz(77.75%)", "2752MHz- 2760MHz(78.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2760.00-2790.00MHz",
              result: {
                utilization: "79.40",
                frequencies: {
                  utilized: ["2760MHz- 2765MHz(78.72%)", "2765MHz- 2778MHz(78.79%)", "2778MHz- 2790MHz(%),(80.07%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2790.00-2820.00MHz",
              result: {
                utilization: "82.44",
                frequencies: {
                  utilized: ["2790MHz- 2791MHz(80.07%)", "2791MHz- 2804MHz(81.03%)", "2804MHz- 2817MHz(84.33%)", "2817MHz- 2820MHz(83.72%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2820.00-2850.00MHz",
              result: {
                utilization: "84.86",
                frequencies: {
                  utilized: ["2820MHz- 2830MHz(83.72%)", "2830MHz- 2843MHz(85.59%)", "2843MHz- 2850MHz(85.29%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2850.00-2880.00MHz",
              result: {
                utilization: "85.87",
                frequencies: {
                  utilized: ["2850MHz- 2856MHz(85.29%)", "2856MHz- 2869MHz(84.29%)", "2869MHz- 2880MHz(86.04%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2880.00-2910.00MHz",
              result: {
                utilization: "86.09",
                frequencies: {
                  utilized: ["2880MHz- 2882MHz(86.04%)", "2882MHz- 2895MHz(86.72%)", "2895MHz- 2908MHz(86.21%)", "2908MHz- 2910MHz(85.41%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2910.00-2940.00MHz",
              result: {
                utilization: "84.96",
                frequencies: {
                  utilized: ["2910MHz- 2921MHz(85.41%)",  "2921MHz- 2934MHz(84.89%)", "2934MHz- 2940MHz(84.57%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2940.00-2970.00MHz",
              result: {
                utilization: "84.25",
                frequencies: {
                  utilized: ["2940MHz- 2947MHz(84.57%)", "2947MHz- 2960MHz(84.49%)", "2960MHz- 2970MHz(83.69%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "2970.00-3000.00MHz",
              result: {
                utilization: "84.03",
                frequencies: {
                  utilized: ["2970MHz- 2973MHz(83.69%)", "2973MHz- 2987MHz(85.30%)", "2987MHz- 3000MHz(83.10%)"],
                  notutilized: []
                }
              }
            }
          ]
        },
        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "42.64", frequencies: { utilized: ["3000MHz-3013MHz(43.81%)", "3013MHz-3026MHz(40.28%)", "3026MHz- 3030MHz(43.81%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "52.34", frequencies: { utilized: ["3030MHz-3039MHz(46.74%),  3039MHz-3052MHz(45.49%), 3052MHz-3060MHz(50.90%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "49.94", frequencies: { utilized: ["3060MHz-3065MHz(50.90%)", "3065MHz-3078MHz(48.46%)", "3078MHz-3090MHz(50.43%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "53.54", frequencies: { utilized: ["3090MHz-3091MHz(50.43%)", "3091MHz-3104MHz(51.68%)", "3104MHz-3117MHz(56.73%)","3117MHz-3120MHz(55.31%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "56.82", frequencies: { utilized: ["3120MHz-3130MHz(55.31%)", "3130MHz-3143MHz(56.77%)", "3143MHz-3150MHz(58.39%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "59.53", frequencies: { utilized: ["3150MHz-3156MHz(58.39%)", "3156MHz-3169MHz(59.77%)",  "3169MHz-3180MHz(60.43%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "61.23", frequencies: { utilized: ["3180MHz-3182MHz(60.43%)", "3182MHz-3195MHz(60.59%)",  "3195MHz-3210MHz(62.72%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "62.11", frequencies: { utilized: ["3210MHz-3221MHz(61.63%)", "3221MHz-3234MHz(62.51%)",  "3234MHz-3240MHz(62.21%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "62.36", frequencies: { utilized: ["3240MHz-3247MHz(62.21%)", "3247MHz-3260MHz(62.77%)",  "3260MHz-3270MHz(62.08%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "62.19", frequencies: { utilized: ["3270MHz- 3273MHz(62.08%)", "3273MHz-3287MHz(62.22%)", "3287MHz-3300MHz(62.56%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "61.75", frequencies: { utilized: ["300MHz-3313MHz(62.56%)", "3313MHz-3326MHz(61.24%)",  "3326MHz-3330MHz(61.45%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "61.87", frequencies: { utilized: ["3330MHz-3339MHz(61.45%)", "3339MHz-3352MHz(61.65%)", "3352MHz-3360MHz(62.51%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "62.15", frequencies: { utilized: ["3360MHz-3365MHz(62.51%)", "3365MHz-3378MHz(62.03%)",  "3378MHz-3390MHz(61.94%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "62.76", frequencies: { utilized: ["3390MHz-3391MHz(61.94%)", "3391MHz-3404MHz(62.33%)", "3404MHz-3417MHz(63.71%)", "3417MHz-3420MHz(63.07%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "62.87", frequencies: { utilized: ["3420MHz-3430MHz(63.07%)",  "3430MHz-3443MHz(62.58%)", "3443MHz-3450MHz(62.97%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "62.40", frequencies: { utilized: ["3450MHz-3456MHz(62.97%)", "3456MHz-3469MHz(62.41%)", "3469MHz-3480MHz(61.83%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "65.00", frequencies: { utilized: ["3480MHz-3482MHz(61.83%)", "3482MHz-3495MHz(59.58%)", "3495MHz - 3508MHz(66.66%)", "3508MHz-3510MHz(71.83%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "70.85", frequencies: { utilized: ["3510MHz-3521MHz(71.83%)",   "3521MHz-3534MHz(68.24%)", "3534MHz-3540MHz(72.48%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "73.38", frequencies: { utilized: ["3540MHz-3547MHz(72.48%)",  "3547MHz-3560MHz(76.45%)", "3560MHz-3570MHz(71.22%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "71.84", frequencies: { utilized: ["3570MHz-3573MHz(71.22%)", "3573MHz-3586MHz(74.89%)", "3586MHz-3600MHz(69.42%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "56.70", frequencies: { utilized: ["3600MHz- 3613MHz(62.61%)", "3613MHz-3626MHz(53.98%)", "3626MHz-3630MHz(53.53%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "51.46", frequencies: { utilized: ["3630MHz-3639MHz(53.53%)", "3639MHz-3652MHz(51.58%)", "3652MHz-3660MHz(49.28%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "47.11", frequencies: { utilized: ["3660MHz-3665MHz(49.28%)", "3665MHz-3678MHz(47.11%)", "3678MHz-3690MHz(45.82%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "44.92", frequencies: { utilized: ["3690MHz-3691MHz(45.82%)", "3691MHz-3704MHz(45.00%)", "3704MHz-3717MHz(44.68%)" ,"3717MHz-3720MHz(44.20%)" ], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "44.67", frequencies: { utilized: ["3720MHz-3730MHz(44.20%)", "3730MHz-3743MHz(44.24%)", "3743MHz-3750MHz(44.95%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "45.81", frequencies: { utilized: ["3750MHz-3756MHz(44.95%)",  "3756MHz-3769MHz(45.60%)", "3769MHz-3780MHz(46.90%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "48.82", frequencies: { utilized: [" 3780MHz-3782MHz(46.90%)", "3782MHz-3795MHz(47.47%)", "3795MHz-3808MHz(50.20%)"," 3808MHz-3810MHz(50.71%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "52.18", frequencies: { utilized: ["3810MHz-3821MHz(50.71%)","3821MHz-3835MHz(52.81%)"," 3835MHz-3840MHz(53.02%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "53.74", frequencies: { utilized: ["3840MHz-3847MHz(53.02%)"," 3847MHz-3860MHz(53.72%)", "3860MHz-3870MHz(54.49%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "54.58", frequencies: { utilized: ["3870MHz-3873MHz(54.49%)", "3873MHz-3886MHz(55.05%)", "3886MHz-3900MHz(54.19%)"], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "51.32", frequencies: { utilized: ["3900MHz-3913MHz(53.01%)", "3913MHz-3926MHz(51.51%)", "3926MHz-3930MHz(49.43%)"], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "48.55", frequencies: { utilized: ["3930MHz-3939MHz(49.43%)", "3939MHz-3952MHz(48.04%)", "3952MHz-3960MHz(48.18%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "48.80", frequencies: { utilized: ["3960MHz-3965MHz(48.18%)",  "3965MHz-3978MHz(48.62%)", "3978MHz-3990MHz(49.60%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "52.13", frequencies: { utilized: ["3990MHz-3991MHz(49.60%)", "3991MHz-4004MHz(51.35%)", "4004MHz-4017MHz(53.18%)", "4017MHz-4020MHz(54.40%"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "55.90", frequencies: { utilized: ["4020MHz- 4030MHz(54.40%)", "4030MHz-4043MHz(55.49%)", "4043MHz-4050MHz(57.80%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "59.33", frequencies: { utilized: ["4050MHz-4056MHz(57.80%)", "4056MHz-4069MHz(62.08%)", "4069MHz-4080MHz(63.57%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "62.77", frequencies: { utilized: ["4080MHz-4082MHz(61.18%)", "4082MHz-4095MHz(68.22%)", "4095MHz-4110MHz(69.38%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "63.99", frequencies: { utilized: ["4110MHz-4121MHz(69.38%)",  "4121MHz-4134MHz(67.97%)", "4134MHz-4140MHz(64.57%)"], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "65.89", frequencies: { utilized: ["4140MHz-4147MHz(64.57%)", "4147MHz-4160MHz(65.33%)", "4160MHz-4170MHz(66.89%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "68.32", frequencies: { utilized: ["4170MHz-4173MHz(66.89%)", "4173MHz-4186MHz(68.49%)", "4186MHz-4200MHz(69.58%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "71.14", frequencies: { utilized: ["4200MHz-4213MHz(70.39%)", "4213MHz-4226MHz(71.26%)", "4226MHz-4230MHz(71.77%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "73.32", frequencies: { utilized: ["4230MHz-4239MHz(71.77%)", "4239MHz-4252MHz(73.32%)", "4252MHz-4260MHz(74.88%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "76.43", frequencies: { utilized: ["4260MHz-4265MHz(74.88%)",  "4265MHz-4278MHz(76.30%)", "4278MHz-4290MHz(78.11%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "79.28", frequencies: { utilized: ["4290MHz-4291MHz(78.11%)",  "4291MHz-4304MHz(78.67%)", "4304MHz-4317MHz(79.49%)","4317MHz-4320MHz(80.84%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "85.67", frequencies: { utilized: ["4320MHz-4330MHz(80.84%)", "4330MHz-4343MHz(82.00%)", "4343MHz-4350MHz(83.43%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "85.08", frequencies: { utilized: ["4350MHz-4356MHz(83.43%)", "4356MHz-4369MHz(85.38%)", "4369MHz-4380MHz(86.44%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "88.39", frequencies: { utilized: ["4380MHz-4382MHz(83.43%)", "4382MHz-4395MHz(87.84%)", "4395MHz-4408MHz(89.11%)" , "4408MHz-4410MHz(90.16%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "91.22", frequencies: { utilized: ["4410MHz-4421MHz(90.16%)", "4421MHz-4434MHz(91.18%)", "4434MHz-4440MHz(92.32%)"], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "92.94", frequencies: { utilized: ["4440MHz-4447MHz(92.32%)", "4447MHz-4460MHz(92.83%)", "4460MHz-4470MHz(93.68%)"], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "94.14", frequencies: { utilized: ["4470MHz-4473MHz(93.68%)", "4473MHz-4486MHz(94.29%)", "4486MHz-4500MHz(94.45%)"], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "94.91", frequencies: { utilized: ["4500MHz-4513MHz(94.81%)", "4513MHz-4526MHz(95.02%)", "4526MHz-4530MHz(94.89%)"], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "94.83", frequencies: { utilized: ["4530MHz-4539MHz(94.89%)", "4539MHz-4552MHz(94.93%)", "4552MHz-4560MHz(94.68%)"], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "94.44", frequencies: { utilized: ["4560MHz-4565MHz(94.68%)", "4565MHz-4578MHz(94.44%)", "4578MHz-4590MHz(94.20%)"], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "93.83", frequencies: { utilized: ["4590MHz-4591MHz(94.20%)",  "4591MHz-4604MHz(94.08%)", "4604MHz-4617MHz(93.74%)", "4617MHz-4620MHz(93.30%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "92.83", frequencies: { utilized: ["4620MHz-4630MHz(93.30%)",  "4630MHz-4643MHz(92.70%)","4643MHz- 4650MHz(92.48%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "92.38", frequencies: { utilized: ["4650MHz- 4656MHz(92.48%)", "4656MHz- 4670MHz(92.18%)", "4670MHz- 4680MHz(92.48%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "92.89", frequencies: { utilized: ["4680MHz- 4682MHz(92.48%)", "4682MHz-4695MHz(92.59%)", "4695MHz- 4708MHz(93.00%)", "4708MHz-4710MHz(93.49%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "93.99", frequencies: { utilized: ["4710MHz- 4721MHz(93.49%)", "4721MHz-4734MHz(93.96%)", "4734MHz-4740MHz(94.53%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "95.25", frequencies: { utilized: ["4740MHz-4747MHz(94.53%)", "4747MHz-4760MHz(95.34%)", "4760MHz-4770MHz(95.88%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "96.46", frequencies: { utilized: ["4770MHz-4773MHz(95.88%)", "4773MHz-4786MHz(96.50%)", "4786MHz-4800MHz(97.01%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "97.73", frequencies: { utilized: ["4800MHz-4813MHz(97.28%)", "4813MHz-4826MHz(97.65%)", "4826MHz-4830MHz(97.69%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "97.77", frequencies: { utilized: ["4830MHz-4839MHz(97.69%)", "4839MHz-4852MHz(97.86%)", "4852MHz-4860MHz(97.76)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "97.79", frequencies: { utilized: ["4860MHz-4865MHz(97.76%)", "4865MHz-4878MHz(97.80%)", "4878MHz-4890MHz(97.81%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "97.77", frequencies: { utilized: ["4890MHz-4891MHz(97.81%)",  "4891MHz-4904MHz(97.76%)", "4904MHz-4917MHz(97.75%)","4917MHz-4920MHz(97.75%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "97.95", frequencies: { utilized: ["4920MHz-4930MHz(97.75%)", "4930MHz-4943MHz(98.23%)", "4943MHz-4950MHz(98.23%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.21", frequencies: { utilized: ["4950MHz-4956MHz(97.88%)",  "4956MHz-4969MHz(98.23%)", "4969MHz-4980MHz(98.52%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "98.85", frequencies: { utilized: ["4980MHz-4982MHz(98.52%) ", "4982MHz-4995MHz(98.73%)", "4995MHz-5008MHz(98.99%)","5008MHz-5010MHz(99.18%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "99.34", frequencies: { utilized: ["5010MHz-5021MHz(99.18%)",  "5021MHz-5034MHz(99.37%)", "5034MHz-5040MHz(99.45%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "99.57", frequencies: { utilized: ["5040MHz-5047MHz(99.45%)",  "5047MHz-5060MHz(99.61%)", "5060MHz-5070MHz(99.65%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5070MHz-5073MHz(99.65%)",  "5073MHz-5086MHz(99.71%)",  "5086MHz-5100MHz(99.80%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5100MHz-5113MHz(99.86%)", "5113MHz-5126MHz(99.86%)", "5126MHz-5130MHz(99.89%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5130MHz-5139MHz(99.89%)", "5139MHz-5152MHz(99.91%)", "5152MHz-5160MHz(99.91%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5160MHz-5165MHz(99.91%)",  "5165MHz-5178MHz(99.90%)","5178MHz-5190MHz(99.92%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5190MHz-5191MHz(99.92%)",  "5191MHz-5204MHz(99.92%)", "5204MHz-5217MHz(99.94%)","5217MHz-5220MHz(99.94%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5220MHz-5230MHz(99.94%)",  "5230MHz-5243MHz(99.94%)", "5243MHz-5250MHz(99.94%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5250MHz-5256MHz(99.94%)",  "5256MHz-5269MHz(99.94%)", "5269MHz-5280MHz(99.93%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["5280MHz-5282MHz(99.93%)",  "5282MHz-5295MHz(99.92%)", "5295MHz-5308MHz(99.92%)", "5308MHz-5310MHz(99.91%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5310MHz- 5321MHz(99.89%)",  "5321MHz-5334MHz(99.89%)", "5335Hz-5340MHz(99.89%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5340MHz-5347MHz(99.89%)",  "5348MHz-5360MHz(99.86%)", "5361MHz-5370MHz(99.84%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5370MHz-5373MHz(99.84%)",  "5373MHz-5386MHz(99.85%)", "5386MHz- 5400MHz(99.85%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5400MHz-5413MHz(99.87%)",  "5413MHz-5426MHz(99.86%)", "5426MHz- 5430MHz(99.85%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5430MHz-5439MHz(99.85%)",  "5439MHz-5452MHz(99.86%)", "5452MHz- 5460MHz(99.86%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5460MHz-5465MHz(99.86%)",  "5465MHz-5478MHz(99.84%)", "5478MHz- 5490MHz(99.94%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5490MHz-5504MHz(99.84%)",  "5504MHz-5517MHz(99.85%)", "5517MHz- 5520MHz(99.85%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5520MHz-5530MHz(99.85%)",  "5530MHz-5543MHz(99.86%)", "5543MHz- 5550MHz(99.85%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5550MHz-5556MHz(99.85%)",  "5556MHz-5569MHz(99.85%)", "5569MHz- 5580MHz(99.83%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5580MHz-5582MHz(99.83%)",  "5582MHz-5595MHz(99.83%)", "5595MHz- 5608MHz(99.83%)","5608MHz-5610MHz(99.85%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5610MHz-5621MHz(99.85%)",  "5621MHz-5634MHz(99.82%)", "5634MHz- 5640MHz(99.84%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.84", frequencies: { utilized: ["5640MHz-5647MHz(99.84%)",  "5647MHz-5660MHz(99.84%)", "5660MHz- 5670MHz(99.83%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["5670MHz-5673MHz(99.83%)",  "5673MHz-5686MHz(99.86%)", "5686MHz- 5700MHz(99.86%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5700MHz-5713MHz(99.87%)",  "5713MHz-5726MHz(99.90%)", "5726MHz- 5730MHz(99.90%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5730MHz-5739MHz(99.90%)",  "5739MHz-5752MHz(99.90%)", "5752MHz- 5760MHz(99.92%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5760MHz-5765MHz(99.92%)",  "5765MHz-5778MHz(99.94%)", "5778MHz- 5790MHz(99.94%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5790MHz-5804MHz(99.94%)",  "5804MHz-5817MHz(99.95%)", "5817MHz- 5820MHz(99.96%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5820MHz-5830MHz(99.96%)",  "5830MHz-5843MHz(99.96%)", "5843MHz- 5850MHz(99.96%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5850MHz-5857MHz(99.96%)",  "5855MHz-5869MHz(99.96%)", "5869MHz- 5880MHz(99.97%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5880MHz-5882MHz(99.97%)",  "5882MHz-5895MHz(99.97%)", "5895MHz- 5908MHz(99.97%)","5908MHz- 5910MHz(99.97%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5910MHz-5921MHz(99.97%)",  "5922MHz-5934MHz(99.97%)", "5934MHz- 5940MHz(99.97%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5940MHz-5947MHz(99.97%)",  "5947MHz-5960MHz(99.97%)", "5960MHz- 5970MHz(99.97%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5970MHz-5973MHz(99.97%)",  "5973MHz-5986MHz(99.97%)", "5986MHz- 6000MHz(99.97%)"], notutilized: [] } } },
          ]
        },
        ]
    },
    {
      id: 5,
      location: "Lokoja Kogi",
      bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHZ"],
              notutilized: ["13.14MHz","26.19MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "0.16",
                frequencies: {
                  utilized: [],
                  notutilized: ["39.23MHz-52.27MHz-60.00MHz","53.27MHz", ]
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "0.40",
                frequencies: {
                  utilized: [],
                  notutilized: ["65.32MHz","78.36MHz"]
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "0.51",
                frequencies: {
                  utilized: [],
                  notutilized: ["91.40MHz","104.45MHz","117.49MHz"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["130.53MHz","143.58MHz"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["156.62MHz","169.66MHz"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["182.71MHz","195.75MHz","208.79MHz"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["221.84MHz","234.88MHz"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["247.92MHz","260.87MHz"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["274.00MHz","287.05MHz", "300.00MHz"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
            range: "300MHz-3GHz",
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
        //3GHz to 6GHz
        {
          range: "3GHz-6GHz",
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
      id: 6,
      location: "Warri",
      bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHz - 13.14MHz(100%)"],
              notutilized: ["13.14MHz - 26.19MHz","26.19MHz - 30.00MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "0.00",
                frequencies: {
                  utilized: [],
                  notutilized: ["30.00MHz - 39.23MHz (0%)”, “39.23MHz - 52.27MHz (0%)”, “53.27MHz - 60.00MHz(0%)"]
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "22.30",
                frequencies: {
                  utilized: [],
                  notutilized: ["60.00MHz - 65.32MHz(0%)","65.32MHz - 78.36MHz(0%)", "78.36MHz - 90.00MHz (66.85%)"]
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "16.79",
                frequencies: {
                  utilized: ["90.00MHz - 91.40MHz(66.85%)"],
                  notutilized: ["91.40MHz -104.45MHz (0.30%)","104.45MHz - 117.49MHz (0%)", "117.49MHz - 120.00MHz (0%)"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["120.00MHz - 130.53MHz (0%)","130.53MHz - 143.58MHz (0%)", "143.58MHz - 150.00MHz (0%)"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["150.00MHz - 156.62MHz (0%)", "156.62MHz - 169.66MHz (0%)","169.66MHz - 180.00MHz (0%)"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["180.00MHz -182.71MHz (0%)","182.71MHz - 195.75MHz (0%)","195.75MHz - 208.79MHz (0%)", "208.79MHz - 210.00MHz (0%)"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["210.00MHz - 221.84MHz (0%)","221.84MHz - 234.88MHz (0%)", "234.88MHz - 240.00MHz (0%)"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["240.00MHz - 247.92MHz (0%)", "247.92MHz - 260.87MHz (0%)", "260.87MHz - 270.00MHz (0%)"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["270.00MHz - 274.00MHz (0%)","274.00MHz - 287.05MHz (0%)", "287.05MHz - 300.00MHz (0%)"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["300.00MHz-313.00MHz(0%)","313.00MHz-326.00MHz(0%)", "326.00MHz-330.00MHz(0%)"]
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["330.00-339.00MHz(0%)","339.00-352.00MHz(0%)", "352.00-360(0%)"]
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["360.00-365.00MHz(0%)","365.00-378.00MHz(0%)", "378.00-390.00MHz(0%)"]
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["390.00-391.00MHz(0%)","391.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["420.00-431.00MHz(0%)","431.00-444.00MHz(0%)","444.00-457.00MHz(0%)"]
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["450.00-457.00MHz(0%)","457.00-470.00MHz(0%)","470.00-480.00MHz(0%)"]
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["480.00-483.00MHz(0%)","483.00-496.00MHz(0%)","496.00-509.00MHz(0%)","509.00-510.00MHz(0%)"]
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["510.00-522.00MHz(0%)","522.00-535.00MHz(0%)","535.00-540.00MHz(0%)"]
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["540.00-548.00MHz(0%)","548.00-561.00MHz(0%)","561.00-570.00MHz(0%)"]
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["570.00-574.00MHz(0%)","574.00-587.00MHz(0%)","587.00-600.00MHz(0%)"]
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","652.00-660.00MHz(0%)"]
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "0%",
                  frequencies: {
                    utilized: [],
                    notutilized: ["660.00-665.00MHz(0%)","665.00-678.00MHz(0%)","678.00-690.00MHz(0%)",]
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["690.00-691.00MHz(0%)","691.00-704.00MHz(0%)","704.00-717.00MHz(0%)","717.00-720.00MHz(0%)"]
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["720.00-731.00MHz(0%)","731.00-744.00MHz(0%)","744.00-750.00MHz(0%)"]
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["750.00-757.00MHz(0%)","757.00-770.00MHz(0%)","770.00-780.00MHz(0%)"]
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["780.00MHz-783.00MHz(0%)","783MHz- 796MHz(0%)","796MHz-809MHz(0%)","809MHz-810MHz(0%)"]
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["810.00-822.00MHz(0%)","822.00-835.00MHz(0%)","835.00-840.00MHz(0%)"]
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["840.00-848.00MHz(0%)","848.00-861.00MHz(0%)","861.00-870.00MHz(0%)"]
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "42.20%",
                  frequencies: {
                    utilized: ["870MHz- 874MHz(0%)", "874MHz- 887MHz(55.93%)", "887MHz- 900MHz(70.67%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "78.61",
                  frequencies: {
                    utilized: ["900MHz- 913MHz(70.67%)","913MHz- 926MHz(43.92%)","926MHz- 930MHz(99.85%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["930MHz-939MHz(100%)", "939MHz- 952MHz(100%)","952MHz-960MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "39.32",
                  frequencies: {
                    utilized: ["960MHz-965MHz(99.99%)","965MHz- 978MHz(9.17%)","978MHz-990MHz(8.79%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "8.66",
                  frequencies: {
                    utilized: ["990.00-991.00MHz (8.79%)","991.00-1000.00MHz(7.95%)","1000.00-1020.00MHz(9.24%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "13.96",
                  frequencies: {
                    utilized: ["1020.00-1030.00MHz(9.24%)","1030.00-1040.00MHz(11.20%)","1040.00-1050.00MHz(16.17%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "23.67",
                  frequencies: {
                    utilized: ["1050.00-1060.00MHz(19.22%)", "1060.00-1070.00MHz(23.76%)","1070.00-1080.00MHz(28.03%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "50.29",
                  frequencies: {
                    utilized: ["1080.00-1100.00MHz(28.03%)", "1100.00-1110.00MHz(85.32%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "40.92",
                  frequencies: {
                    utilized: ["1110.00-1120.00MHz(37.52%)", "1120.00-1130.00MHz(38.98%)", "1130.00-1140.00MHz(41.51%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "47.48",
                  frequencies: {
                    utilized: ["1140.00-1150.00MHz(45.68%)", "1150.00-1160.00MHz(48.89%)", "1160.00-1170.00MHz(47.88%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "50.88",
                  frequencies: {
                    utilized: ["1170.00-1190.00MHz(49.70%)","1190.00-1200.00MHz(55.06%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "52.16",
                  frequencies: {
                    utilized: ["1200.00-1210.00MHz(55.06%)", "1210.00-1230.00MHz(55.36%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "47.56",
                  frequencies: {
                    utilized: ["1230.00-1240.00MHz(46.06%)", "1240.00-1250.00MHz(56.71%)", "1250.00-1260.00MHz(39.10%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "38.39",
                  frequencies: {
                    utilized: ["1260.00-1270.00MHz(48.36%)","1270.00-1280.00MHz(32.38%)", "1280.00-1290.00MHz(34.42%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "30.87",
                  frequencies: {
                    utilized: ["1290.00-1300.00MHz(34.35%)", "1300.00-1320.00MHz(28.09%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "28.97",
                  frequencies: {
                    utilized: ["1320.00-1330.00MHz(26.61%)", "1330.00-1340.00MHz(29.01%)", "1340.00-1350.00MHz(31.28%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "37.89",
                  frequencies: {
                    utilized: ["1350.00-1360.00MHz(31.28%)","1360.00-1370.00MHz(38.52%)", "1370.00-1380.00MHz(43.87%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "49.85",
                  frequencies: {
                    utilized: ["1380.00-1400.00MHz(51.09%)","1400.00-1410.00MHz(54.59%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "60.33",
                  frequencies: {
                    utilized: ["1410.00-1420.00MHz(58.16%)","1420.00-1430.00MHz(63.31%)","1430.00-1440.00MHz(65.26%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "69.79",
                  frequencies: {
                    utilized: ["1440.00-1450.00MHz(65.26%)", "1450.00-1460.00MHz(70.48%)", "1460.00-1470.00MHz(73.64%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "75.69%",
                  frequencies: {
                    utilized: ["1470.00-1490.00MHz(75.63%)", "1490.00-1500.00MHz(77.81%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "74.59%",
                  frequencies: {
                    utilized: ["1500.00-1510.00MHz(74.27%)","1510.00-1530.00MHz(71.69%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "64.37%",
                  frequencies: {
                    utilized: ["1530.00-1540.00MHz(66.49%)", "1540.00-1550.00MHz(61.49%)", "1550.00-1560.00MHz(57.83%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "52.84%",
                  frequencies: {
                    utilized: ["1560.00-1570.00MHz(57.83%)", "1570.00-1580.00MHz(51.80%)","1580.00-1590.00MHz(48.89%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "48.85%",
                  frequencies: {
                    utilized: ["1590.00-1600.00MHz(53.06%)", "1600.00-1620.00MHz(44.59%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "46.70%",
                  frequencies: {
                    utilized: ["1620.00-1630.00MHz(44.24%)", "1630.00-1640.00MHz(47.29%)", "1640.00-1650.00MHz(50.70%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "54.59%",
                  frequencies: {
                    utilized: ["1650.00-1660.00MHz(50.70%)", "1660.00-1670.00MHz(54.29%)","1670.00-1680.00MHz(58.77%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "61.51%",
                  frequencies: {
                    utilized: ["1680.00-1700.00MHz(61.32%)", "1700.00-1710.00MHz(64.44%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "69.75",
                  frequencies: {
                    utilized: ["1710.00-1720.00MHz(67.50%)", "1720.00-1730.00MHz(72.35%)", "1730.00-1740.00MHz(74.69%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "76.20%",
                  frequencies: {
                    utilized: ["1740.00-1750.00MHz(74.69%)","1750.00-1760.00MHz(76.63%)", "1760.00-1770.00MHz(77.29%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "77.79%",
                  frequencies: {
                    utilized: ["1770.00-1790.00MHz(78.26%)","1790.00-1800.00MHz(77.82%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "92.41%",
                  frequencies: {
                    utilized: ["1800.00-1810.00MHz(99.41%)","1810.00-1830.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1830.00-1840.00MHz(100%)", "1840.00-1850.00MHz(100%)", "1850.00-1860.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "86.77",
                  frequencies: {
                    utilized: ["1860.00-1870.00MHz(100%)", "1870.00-1880.00MHz(99.88%)", "1880.00-1890.00MHz(60.44%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "58.15%",
                  frequencies: {
                    utilized: ["1890.00-1900.00MHz(58.19%)", "1900.00-1920.00MHz(55.83%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "88.96%",
                  frequencies: {
                    utilized: ["1920.00-1930.00MHz(100%)","1930.00-1940.00MHz(100%)", "1940.00-1950.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1950.00-1960.00MHz(100%)","1960.00-1970.00MHz(100%)", "1970.00-1980.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1980.00-2000.00MHz(100%)", "2000.00-2010.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2010.00-2020.00MHz(100%)","2020.00-2030.00MHz(100%)", "2030.00-2040.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2040.00-2050.00MHz(100%)", "2050.00-2060.00MHz(100%)", "2060.00-2070.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2070.00-2090.00MHz(100%)", "2090.00-2100.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2100.00-2110.00MHz(100%)", "2110.00-2130.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2130.00-2140.00MHz(100%)","2140.00-2150.00MHz(100%)", "2150.00-2160.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2160.00-2170.00MHz(100%)", "2170.00-2180.00MHz(100%)", "2180.00-2190.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "33.33",
                  frequencies: {
                    utilized: ["2190.00-2200.00MHz(0%)", "2200.00-2220.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2220.00-2230.00MHz(0%)", "2230.00-2240.00MHz(0%)", "2240.00-2250.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2250.00-2260.00MHz(0%)", "2260.00-2270.00MHz(0%)", "2270.00-2280.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2280.00-2300.00MHz(0%)", "2300.00-2310.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2310.00-2320.00MHz(0%)", "2320.00-2330.00MHz(0%)", "2330.00-2340.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2340.00-2350.00MHz(0%)", "2350.00-2360.00MHz(0%)","2360.00-2370.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "0.78",
                  frequencies: {
                    utilized: ["2370.00-2390.00MHz(0%)", "2390.00-2400.00MHz(2.34%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "4.08",
                  frequencies: {
                    utilized: ["2400.00-2410.00MHz(6.18%)", "2410.00-2430.00MHz(3.72%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "3.98",
                  frequencies: {
                    utilized: ["2430.00-2440.00MHz(4.32%)", "2440.00-2450.00MHz(3.49%)", "2450.00-2460.00MHz(4.41%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "1.62",
                  frequencies: {
                    utilized: ["2460.00-2470.00MHz(4.41%)" ,"2470.00-2480.00MHz(0.44%)" ,"2480.00-2490.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "0.02",
                  frequencies: {
                    utilized: ["2490.00-2500.00MHz(0.01%)","2500.00-2520.00MHz(0.05%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "0.09",
                  frequencies: {
                    utilized: [ "2520.00-2530.00MHz(0.15%)", "2530.00-2540.00MHz(0.12%)" , "2540.00-2550.00MHz(0.04%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "17.20",
                  frequencies: {
                    utilized: [ "2550.00-2560.00MHz(0.04%)" , "2560.00-2570.00MHz(0.34%)" ,"2570.00-2580.00MHz(51.22%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "47.18",
                  frequencies: {
                    utilized: [ "2580.00-2600.00MHz(41.71%)", "2600.00-2610.00MHz(48.62%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "78.24",
                  frequencies: {
                    utilized: ["2610.00-2620.00MHz(65.94%)","2620.00-2630.00MHz(98.41%)", "2630.00-2640.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "98.59",
                  frequencies: {
                    utilized: ["2640.00-2650.00MHz(100%)", "2650.00-2660.00MHz(98.86%)","2660.00-2670.00MHz(96.90%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "59.02",
                  frequencies: {
                    utilized: ["2670.00-2690.00MHz(80.15%)", "2690.00-2700.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2700.00-2710.00MHz(0%)","2710.00-2730.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2730.00-2740.00MHz(0%)","2740.00-2750.00MHz(0%)","2750.00-2760.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2760.00-2770.00MHz(0%)", "2770.00-2780.00MHz(67.11%)", "2780.00-2790.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2790.00-2800.00MHz(0%)","2800.00-2820.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "0",
               frequencies: {
                    utilized: ["2820.00-2830.00MHz(0%)", "2830.00-2840.00MHz(0%)","2840.00-2850.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2850.00-2860.00MHz(0%)","2860.00-2870.00MHz(0%)","2870.00-2880.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2880.00-2900.00MHz(0%)", "2900.00-2910.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2910.00-2920.00MHz(0%)", "2920.00-2930.00MHz(0%)", "2930.00-2940.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: ["2940.00-2950.00MHz(0%)","2950.00-2960.00MHz(0%)", "2960.00-2970.00MHz(0%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "73.15",
                  frequencies: {
                    utilized: ["2970.00-2974.00MHz(73.02%)","2974.00-2987.00MHz(73.48%)", "2987.00-3000.00MHz(72.95%)"],
                    notutilized: []
                  }
                }
              }
            ]
        },
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "0", frequencies: { utilized: ["3000.00MHz-3010.00MHz(0%)","3010.00MHz-3030.00MHz(0%)"], notutilized: [] } } },

            { range: "3030.00MHz-3060.00MHz", result: { utilization: "0", frequencies: { utilized: ["3030.00MHz-3040.00MHz(0%)",  "3040.00MHz-3050.00MHz(0%)", "3050.00MHz-3060.00MHz(0%)"], notutilized: [] } } },

            { range: "3060.00MHz-3090.00MHz", result: { utilization: "0", frequencies: { utilized: ["3060.00MHz-3070.00MHz(0%)","3070.00MHz-3080.00MHz(0%)","3080.00MHz-3090.00MHz(0%)"], notutilized: [] } } },


            { range: "3090.00MHz-3120.00MHz", result: { utilization: "15", frequencies: { utilized: ["3125.55MHz-3126.45MHz(15%)"], notutilized: [] } } },
            { range: "3125.55MHz-3126.45MHz", result: { utilization: "15", frequencies: { utilized: ["3125.55MHz-3126.45MHz(15%)"], notutilized: [] } } },

            { range: "3150.00MHz-3180.00MHz", result: { utilization: "0", frequencies: { utilized: ["3150.00MHz-3160.00MHz(0%)", "3160.00MHz-3170.00MHz(0%)",  "3170.00MHz-3180.00MHz(0%)"], notutilized: [] } } },


            { range: "3180.00MHz-3210.00MHz", result: { utilization: "0", frequencies: { utilized: ["3180.00MHz-3200.00MHz(0%)","3200.00MHz-3210.00MHz(0%)"], notutilized: [] } } },


            { range: "3210.00MHz-3240.00MHz", result: { utilization: "0", frequencies: { utilized: ["3210.00MHz-3220.00MHz(0%)", "3220.00MHz-3230.00MHz(0%)", "3230.00MHz-3240.00MHz(0%)"], notutilized: [] } } },


            { range: "3240.00MHz-3270.00MHz", result: { utilization: "0", frequencies: { utilized: ["3240.00MHz-3250.00MHz(0%)", "3250.00MHz-3260.00MHz(0%)", "3260.00MHz-3270.00MHz(0%)"],notutilized: [] } } },


            { range: "3270.00MHz-3300.00MHz", result: { utilization: "0", frequencies: { utilized: ["3270.00MHz-3290.00MHz(0%)", "3290.00MHz-3300.00MHz(0%)"], notutilized: [] } } },


            { range: "3300.00MHz-3330.00MHz", result: { utilization: "0", frequencies: { utilized: ["3300.00MHz-3310.00MHz(0%)", "3310.00MHz-3330.00MHz(0%)"], notutilized: [] } } },


            { range: "3330.00MHz-3360.00MHz", result: { utilization: "0", frequencies: { utilized: ["3330.00MHz-3340.00MHz(0%)", "3340.00MHz-3350.00MHz(0%)","3350.00MHz-3360.00MHz(0%)"], notutilized: [] } } },


            { range: "3360.00MHz-3390.00MHz", result: { utilization: "0", frequencies: { utilized: ["3360.00MHz-3370.00MHz(0%)", "3370.00MHz-3380.00MHz(0%)",  "3380.00MHz-3390.00MHz(0%)"], notutilized: [] } } },


            { range: "3390.00MHz-3420.00MHz", result: { utilization: "0", frequencies: { utilized: ["3390.00MHz-3400.00MHz(0%)", "3400.00MHz-3420.00MHz(0%)"], notutilized: [] } } },


            { range: "3420.00MHz-3450.00MHz", result: { utilization: "0", frequencies: { utilized: ["3420.00MHz-3430.00MHz(0%)", "3430.00MHz-3440.00MHz(0%)", "3440.00MHz-3450.00MHz(0%)"], notutilized: [] } } },


            { range: "3450.00MHz-3480.00MHz", result: { utilization: "0", frequencies: { utilized: ["3450.00MHz-3460.00MHz(0%)", "3460.00MHz-3470.00MHz(0%)", "3470.00MHz-3480.00MHz(0%)"], notutilized: [] } } },


            { range: "3480.00MHz-3510.00MHz", result: { utilization: "0", frequencies: { utilized: ["3480.00MHz-3500.00MHz(0%)","3500.00MHz-3510.00MHz(0%)"], notutilized: [] } } },


            { range: "3510.00MHz-3540.00MHz", result: { utilization: "0.17", frequencies: { utilized: ["3510.00MHz-3520.00MHz(0.16%)",   "3520.00MHz-3530.00MHz(0.15%)", "3530.00MHz-3540.00MHz(0.37%)"], notutilized: [] } } },


            { range: "3540.00MHz-3570.00MHz", result: { utilization: "0.34", frequencies: { utilized: ["3540.00MHz-3550.00MHz(0.37%)", "3550.00MHz-3560.00MHz(0.38%)", "3560.00MHz-3570.00MHz(0.26%)"], notutilized: [] } } },


            { range: "3570.00MHz-3600.00MHz", result: { utilization: "0.18", frequencies: { utilized: ["3570.00MHz-3590.00MHz(0.13%)", "3590.00MHz-3600.00MHz(0.14%)"], notutilized: [] } } },


            { range: "3600.00MHz-3630.00MHz", result: { utilization: "0.07", frequencies: { utilized: ["3600.00MHz-3610.00MHz(0.06%)", "3610.00MHz-3630.00MHz(0%)"], notutilized: [] } } },


            { range: "3630.00MHz-3660.00MHz", result: { utilization: "0", frequencies: { utilized: ["3630.00MHz-3640.00MHz(0%)", "3640.00MHz-3650.00MHz(0%)", "3650.00MHz-3660.00MHz(0%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "0", frequencies: { utilized: ["3660.00MHz-3670.00MHz(0%)", "3670.01MHz-3689.99MHz(1%)"], notutilized: [] } } },

            { range: "3690.00MHz-3720.00MHz", result: { utilization: "0", frequencies: { utilized: ["3690.00MHz-3700.00MHz(0%)","3700.00MHz-3720.00MHz(0%)"], notutilized: [] } } },


            { range: "3720.00MHz-3750.00MHz", result: { utilization: "0", frequencies: { utilized: ["3720.00MHz-3730.00MHz(0%)","3730.00MHz-3740.00MHz(0%)", "3740.00MHz-3750.00MHz(0%)"], notutilized: [] } } },


            { range: "3750.00MHz-3780.00MHz", result: { utilization: "0", frequencies: { utilized: ["3750.00MHz-3760.00MHz(0%)",  "3760.00MHz-3770.00MHz(0%)", "3770.00MHz-3780.00MHz(0%)"] ,notutilized: [] } } },


            { range: "3780.00MHz-3810.00MHz", result: { utilization: "0", frequencies: { utilized: ["3780.00MHz-3800.00MHz(0%)","3800.00MHz-3810.00MHz(0%)",], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "0", frequencies: { utilized: ["3810.00MHz-3820.00MHz(0%)","3820.00MHz-3830.00MHz(0%)","3830.00MHz-3840.00MHz(0%)"],notutilized: [] } } },


            { range: "3840.00MHz-3870.00MHz", result: { utilization: "0", frequencies: { utilized: ["3840.00MHz-3850.00MHz(0%)", "3850.00MHz-3860.00MHz(0%)", "3860.00MHz-3870.00MHz(0%)"], notutilized: [] } } },


            { range: "3870.00MHz-3900.00MHz", result: { utilization: "0", frequencies: { utilized: ["3870.00MHz-3890.00MHz(0%)", "3890.00MHz-3900.00MHz(0%)",], notutilized: [] } } },


            { range: "3900.00MHz-3930.00MHz", result: { utilization: "0", frequencies: { utilized: ["3900.00MHz-3910.00MHz(0%)", "3910.00MHz-3930.00MHz(0%)"], notutilized: [] } } },


            { range: "3930.00MHz-3960.00MHz", result: { utilization: "0", frequencies: { utilized: ["3930.00MHz-3940.00MHz(0%)", "3940.00MHz-3950.00MHz(0%)", "3950.00MHz-3960.00MHz(0%)"],notutilized: [] } } },


            { range: "3960.00MHz-3990.00MHz", result: { utilization: "0", frequencies: { utilized: ["3960.00MHz-3970.00MHz(0%)",  "3970.00MHz-3980.00MHz(0%)", "3980.00MHz-3990.00MHz(0%)"] ,notutilized: [] } } },


            { range: "3990.00MHz-4020.00MHz", result: { utilization: "0", frequencies: { utilized: [ "3990.00MHz-4000.00MHz(0%)",  "4000.00MHz-4020.00MHz(0%)",], notutilized: [] } } },


            { range: "4020.00MHz-4050.00MHz", result: { utilization: "0", frequencies: { utilized: ["4020.00MHz-4030.00MHz(0%)", "4030.00MHz-4040.00MHz(0%)", "4040.00MHz-4050.00MHz(0%)"],notutilized: [] } } },


            { range: "4050.00MHz-4080.00MHz", result: { utilization: "59.63", frequencies: { utilized: ["4050.00MHz-4060.00MHz(0%)", "4060.00MHz-4070.00MHz(0%)", "4070.00MHz-4080.00MHz(0%)"],notutilized: [] } } },


            { range: "4080.00MHz-4110.00MHz", result: { utilization: "0", frequencies: { utilized: ["4080.00MHz-4100.00MHz(63.28%)", "4100.00MHz-4110.00MHz(0%)"], notutilized: [] } } },


            { range: "4110.00MHz-4140.00MHz", result: { utilization: "0", frequencies: { utilized: ["4110.00MHz-4120.00MHz(0%)", "4120.00MHz-4130.00MHz(0%)", "4130.00MHz-4140.00MHz(0%)"], notutilized: [] } } },


            { range: "4140.00MHz-4170.00MHz", result: { utilization: "0", frequencies: { utilized: ["4140.00MHz-4150.00MHz(0%)","4150.00MHz-4160.00MHz(0%)","4160.00MHz-4170.00MHz(0%)"], notutilized: [] } } },


            { range: "4170.00MHz-4200.00MHz", result: { utilization: "0", frequencies: { utilized: ["4170.00MHz-4190.00MHz(0%)", "4190.00MHz-4200.00MHz(0%)"], notutilized: [] } } },


            { range: "4200.00MHz-4230.00MHz", result: { utilization: "0", frequencies: { utilized: [ "4200.00MHz-4210.00MHz(0%)", "4210.00MHz-4230.00MHz(0%)"], notutilized: [] } } },


            { range: "4230.00MHz-4260.00MHz", result: { utilization: "0", frequencies: { utilized: ["4230.00MHz-4240.00MHz(0%)","4240.00MHz-4250.00MHz(0%)", "4250.00MHz-4260.00MHz(0%)"], notutilized: [] } } },


            { range: "4260.00MHz-4290.00MHz", result: { utilization: "0", frequencies: { utilized: ["4260.00MHz-4270.00MHz(0%)",  "4270.00MHz-4280.00MHz(0%)", "4280.00MHz-4290.00MHz(0%)"],notutilized: [] } } },


            { range: "4290.00MHz-4320.00MHz", result: { utilization: "0", frequencies: { utilized: ["4290.00MHz-4300.00MHz(0%)",  "4300.00MHz-4320.00MHz(0%)"], notutilized: [] } } },


            { range: "4320.00MHz-4350.00MHz", result: { utilization: "86.21", frequencies: { utilized: ["4320.00MHz-4330.00MHz(0%)", "4330.00MHz-4340.00MHz(0%)", "4340.00MHz-4350.00MHz(0%)"], notutilized: [] } } },


            { range: "4350.00MHz-4380.00MHz", result: { utilization: "0", frequencies: { utilized: ["4350.00MHz-4360.00MHz(0%)", "4360.00MHz-4370.00MHz(0%)","4370.00MHz-4380.00MHz(0%)"], notutilized: [] } } },


            { range: "4380.00MHz-4410.00MHz", result: { utilization: "0", frequencies: { utilized: ["4380.00MHz-4400.00MHz(0%)", "4400.00MHz-4410.00MHz(0%)",], notutilized: [] } } },


            { range: "4410.00MHz-4440.00MHz", result: { utilization: "6.49", frequencies: { utilized: ["4410.00MHz-4420.00MHz(0%)", "4420.00MHz-4430.00MHz(0%)", "4430.00MHz-4440.00MHz(0%)"], notutilized: [] } } },


            { range: "4440.00MHz-4470.00MHz", result: { utilization: "0", frequencies: { utilized: ["4440.00MHz-4450.00MHz(0%)", "4450.00MHz-4460.00MHz(0%)", "4460.00MHz-4470.00MHz(0%)",], notutilized: [] } } },


            { range: "4470.00MHz-4500.00MHz", result: { utilization: "0", frequencies: { utilized: ["4470.00MHz-4490.00MHz(0%)", "4490.00MHz-4500.00MHz(0%)"] ,notutilized: [] } } },


            { range: "4500.00MHz-4530.00MHz", result: { utilization: "0", frequencies: { utilized: ["4500.00MHz-4510.00MHz(0%)", "4510.00MHz-4530.00MHz(0%)"], notutilized: [] } } },


            { range: "4530.00MHz-4560.00MHz", result: { utilization: "0", frequencies: { utilized: ["4530.00MHz-4540.00MHz(0.01%)", "4540.00MHz-4550.00MHz(0%)", "4550.00MHz-4560.00MHz(0%)",], notutilized: [] } } },


            { range: "4560.00MHz-4590.00MHz", result: { utilization: "0", frequencies: { utilized: ["4560.00MHz-4570.00MHz(0%)", "4570.00MHz-4580.00MHz(0%)","4580.00MHz-4590.00MHz(0%)",], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "0", frequencies: { utilized: ["4590.00MHz-4600.00MHz(0%)","4600.00MHz-4620.00MHz(0%)",], notutilized: [] } } },


            { range: "4620.00MHz-4650.00MHz", result: { utilization: "0", frequencies: { utilized: ["4620.00MHz-4630.00MHz(0%)", "4630.00MHz-4640.00MHz(0%)","4640.00MHz-4650.00MHz(0%)"], notutilized: [] } } },


            { range: "4650.00MHz-4680.00MHz", result: { utilization: "0", frequencies: { utilized: ["4650.00MHz-4660.00MHz(0%)", "4660.00MHz-4670.00MHz(0%)", "4670.00MHz-4680.00MHz(0%)"], notutilized: [] } } },


            { range: "4680.00MHz-4710.00MHz", result: { utilization: "0", frequencies: { utilized: ["4680.00MHz-4700.00MHz(0%)", "4700.00MHz-4710.00MHz(0%)",], notutilized: [] } } },




            { range: "4710.00MHz-4740.00MHz", result: { utilization: "0", frequencies: { utilized: ["4710.00MHz-4720.00MHz(0%)", "4720.00MHz-4730.00MHz(0%)", "4730.00MHz-4740.00MHz(0%)",], notutilized: [] } } },


            { range: "4740.00MHz-4770.00MHz", result: { utilization: "0", frequencies: { utilized: ["4740.00MHz-4750.00MHz(0%)", "4750.00MHz-4760.00MHz(0%)", "4760.00MHz-4770.00MHz(0.01%)",], notutilized: [] } } },


            { range: "4770.00MHz-4800.00MHz", result: { utilization: "0.04", frequencies: { utilized: ["4770.00MHz-4790.00MHz(0.03%)", "4790.00MHz-4800.00MHz(0.06%)",], notutilized: [] } } },


            { range: "4800.00MHz-4830.00MHz", result: { utilization: "0.12", frequencies: { utilized: ["4800.00MHz-4810.00MHz(0.11%)", "4810.00MHz-4830.00MHz(0.17%)",], notutilized: [] } } },


            { range: "4830.00MHz-4860.00MHz", result: { utilization: "0.24", frequencies: { utilized: ["4830.00MHz-4840.00MHz(0.23%)","4840.00MHz-4850.00MHz(0.27%)", "4850.00MHz-4860.00MHz(0.28%)",], notutilized: [] } } },


            { range: "4860.00MHz-4890.00MHz", result: { utilization: "0.27", frequencies: { utilized: ["4860.00MHz-4870.00MHz(0.28%)", "4870.00MHz-4880.00MHz(0.28%)", "4880.00MHz-4890.00MHz(0.27%)",], notutilized: [] } } },


            { range: "4890.00MHz-4920.00MHz", result: { utilization: "0.26", frequencies: { utilized: ["4890.00MHz-4900.00MHz(0.26%)",  "4900.00MHz-4920.00MHz(0.25%)",], notutilized: [] } } },


            { range: "4920.00MHz-4950.00MHz", result: { utilization: "0.28", frequencies: { utilized: ["4920.00MHz-4930.00MHz(0.25%)", "4930.00MHz-4940.00MHz(0.27%)", "4940.00MHz-4950.00MHz(0.36%)",], notutilized: [] } } },


            { range: "4950.00MHz-4980.00MHz", result: { utilization: "0.7", frequencies: { utilized: ["4950.00MHz-4960.00MHz(0.36%)",  "4960.00MHz-4970.00MHz(0.62%)", "4970.00MHz-4980.00MHz(1.12%)",], notutilized: [] } } },


            { range: "4980.00MHz-5010.00MHz", result: { utilization: "2.05", frequencies: { utilized: ["4980.00MHz-5000.00MHz(1.92%)",  "5000.00MHz-5010.00MHz(3.12%)",], notutilized: [] } } },


            { range: "5010.00MHz-5040.00MHz", result: { utilization: "6.85", frequencies: { utilized: ["5010.00MHz-5020.00MHz(5%)",  "5020.00MHz-5030.00MHz(7.78%)", "5030.00MHz-5040.00MHz(11.49%)",], notutilized: [] } } },


            { range: "5040.00MHz-5070.00MHz", result: { utilization: "16.51", frequencies: { utilized: ["5040.00MHz-5050.00MHz(11.49%)",  "5050.00MHz-5060.00MHz(16%)", "5060.00MHz-5070.00MHz(22.04%)",], notutilized: [] } } },


            { range: "5070.00MHz-5100.00MHz", result: { utilization: "30.29", frequencies: { utilized: ["5070.00MHz-5090.00MHz(30.02%)",  "5090.00MHz-5100.00MHz(38.8%)",], notutilized: [] } } },


            { range: "5100.00MHz-5130.00MHz", result: { utilization: "47.66", frequencies: { utilized: ["5100.00MHz-5110.00MHz(47.88%)", "5110.00MHz-5130.00MHz(56.30%)",], notutilized: [] } } },


            { range: "5130.00MHz-5160.00MHz", result: { utilization: "65.46", frequencies: { utilized: ["5130.00MHz-5140.00MHz(63.78%)", "5140.00MHz-5150.00MHz(68.71%)", "5150.00MHz-5160.00MHz(73.05%)",], notutilized: [] } } },


            { range: "5160.00MHz-5190.00MHz", result: { utilization: "76.65", frequencies: { utilized: ["5160.00MHz-5170.00MHz(73.05%)",  "5170.00MHz-5180.00MHz(76.87%)","5180.00MHz-5190.00MHz(80.04%)",], notutilized: [] } } },

 { range: "5190.00MHz-5220.00MHz", result: { utilization: "82.41", frequencies: { utilized: ["5190.00MHz-5200.00MHz(82.92%)",  "5200.00MHz-5220.00MHz(84.27%)",], notutilized: [] } } },


            { range: "5220.00MHz-5250.00MHz", result: { utilization: "84.29", frequencies: { utilized: ["5220.00MHz-5230.00MHz(84.91%)",  "5230.00MHz-5240.00MHz(84.88%)", "5240.00MHz-5250.00MHz(83.09%)",], notutilized: [] } } },


            { range: "5250.00MHz-5280.00MHz", result: { utilization: "81.07", frequencies: { utilized: ["5250.00MHz-5260.00MHz(83.09%)",  "5260.00MHz-5270.00MHz(81.47%)","5270.00MHz-5280.00MHz(78.66%)"], notutilized: [] } } },


            { range: "5280.00MHz-5310.00MHz", result: { utilization: "75.75", frequencies: { utilized: ["5280.00MHz-5300.00MHz(75.75%)",  "5300.00MHz-5310.00MHz(72.6%)",], notutilized: [] } } },


            { range: "5310.00MHz-5340.00MHz", result: { utilization: "65.71", frequencies: { utilized: ["5310.00MHz-5320.00MHz(68.83%)", "5320.00MHz-5330.00MHz(63.98%)", "5330.00MHz-5340.00MHz(57.42%)",], notutilized: [] } } },


            { range: "5340.00MHz-5370.00MHz", result: { utilization: "52.57", frequencies: { utilized: ["5340.00MHz-5350.00MHz(57.42%)",  "5350.00MHz-5360.00MHz(51.31%)", "5360.00MHz-5370.00MHz(48.98%)",], notutilized: [] } } },


            { range: "5370.00MHz-5400.00MHz", result: { utilization: "47.64", frequencies: { utilized: ["5370.00MHz-5390.00MHz(46.95%)",  "5390.00MHz-5400.00MHz(46.99%)",], notutilized: [] } } },


            { range: "5400.00MHz-5430.00MHz", result: { utilization: "47.43", frequencies: { utilized: ["5400.00MHz-5410.00MHz(47.48%)",  "5410.00MHz-5430.00MHz(47.83%)"] ,notutilized: [] } } },


            { range: "5430.00MHz-5460.00MHz", result: { utilization: "46.19", frequencies: { utilized: ["5430.00MHz-5440.00MHz(46.78%)",  "5440.00MHz-5450.00MHz(45.62%)", "5450.00MHz-5460.00MHz(44.51%)",], notutilized: [] } } },


            { range: "5460.00MHz-5490.00MHz", result: { utilization: "43.92", frequencies: { utilized: ["5460.00MHz-5470.00MHz(44.51%)",  "5470.00MHz-5480.00MHz(43.04%)", "5480.00MHz-5490.00MHz(44.19%)",], notutilized: [] } } },


            { range: "5490.00MHz-5520.00MHz", result: { utilization: "45.22", frequencies: { utilized: ["5490.00MHz-5500.00MHz(45.47%)",  "5500.00MHz-5520.00MHz(45.99%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "45.96", frequencies: { utilized: ["5520.00MHz-5530.00MHz(46.16%)",  "5530.00MHz-5540.00MHz(45.99%)", "5540.00MHz-5550.00MHz(45.72%)",], notutilized: [] } } },


            { range: "5550.00MHz-5580.00MHz", result: { utilization: "43.87", frequencies: { utilized: ["5550.00MHz-5560.00MHz(45.72%)",  "5560.00MHz-5570.00MHz(45.17%)", "5570.00MHz-5580.00MHz(40.73%)",], notutilized: [] } } },


            { range: "5580.00MHz-5610.00MHz", result: { utilization: "40.47", frequencies: { utilized: ["5580.00MHz-5600.00MHz(40.6%)","5600.00MHz-5610.00MHz(40.07%)",], notutilized: [] } } },


            { range: "5610.00MHz-5640.00MHz", result: { utilization: "39.53", frequencies: { utilized: ["5610.00MHz-5620.00MHz(39.57%)", "5620.00MHz-5630.00MHz(39.02%)","5630.00MHz-5640.00MHz(39.45%)",], notutilized: [] } } },


            { range: "5640.00MHz-5670.00MHz", result: { utilization: "40.64", frequencies: { utilized: ["5640.00MHz-5650.00MHz(39.45%)",  "5650.00MHz-5660.00MHz(40.55%)", "5660.00MHz-5670.00MHz(41.94%)",], notutilized: [] } } },


            { range: "5670.00MHz-5700.00MHz", result: { utilization: "43.87", frequencies: { utilized: ["5670.00MHz-5690.00MHz(43.76%)",  "5690.00MHz-5700.00MHz(45.93%)",], notutilized: [] } } },


            { range: "5700.00MHz-5730.00MHz", result: { utilization: "50.27", frequencies: { utilized: ["5700.00MHz-5710.00MHz(50.21%)",  "5710.00MHz-5730.00MHz(54.67%)",], notutilized: [] } } },


            { range: "5730.00MHz-5760.00MHz", result: { utilization: "62.59", frequencies: { utilized: ["5730.00MHz-5740.00MHz(59.84%)",  "5740.00MHz-5750.00MHz(65.02%)", "5750.00MHz-5760.00MHz(70.83%)",], notutilized: [] } } },


            { range: "5760.00MHz-5790.00MHz", result: { utilization: "76.75", frequencies: { utilized: ["5760.00MHz-5770.00MHz(70.83%)",  "5770.00MHz-5780.00MHz(77%)","5780.00MHz-5790.00MHz(82.41%)",], notutilized: [] } } },


            { range: "5790.00MHz-5820.00MHz", result: { utilization: "87.07", frequencies: { utilized: ["5790.00MHz-5800.00MHz(87.51%)",  "5800.00MHz-5820.00MHz(91.29%)",], notutilized: [] } } },


            { range: "5820.00MHz-5850.00MHz", result: { utilization: "94.70", frequencies: { utilized: ["5820.00MHz-5830.00MHz(94.09%)",  "5830.00MHz-5840.00MHz(96.09%)", "5840.00MHz-5850.00MHz(97.32%)",], notutilized: [] } } },


            { range: "5850.00MHz-5880.00MHz", result: { utilization: "98.06", frequencies: { utilized: [ "5850.00MHz-5860.00MHz(97.32%)",  "5860.00MHz-5870.00MHz(98.12%)", "5870.00MHz-5880.00MHz(98.74%)",], notutilized: [] } } },


            { range: "5880.00MHz-5910.00MHz", result: { utilization: "99.09", frequencies: { utilized: ["5880.00MHz-5900.00MHz(99.11%)",  "5900.00MHz-5910.00MHz(99.41%)",], notutilized: [] } } },


            { range: "5910.00MHz-5940.00MHz", result: { utilization: "99.50", frequencies: { utilized: ["5910.00MHz-5920.00MHz(99.51%)", "5920.00MHz-5930.00MHz(99.55%)", "5930.00MHz-5940.00MHz(99.54%)",], notutilized: [] } } },


            { range: "5940.00MHz-5970.00MHz", result: { utilization: "99.53", frequencies: { utilized: ["5940.00MHz-5950.00MHz(99.54%)",  "5950.00MHz-5960.00MHz(99.52%)", "5960.00MHz-5970.00MHz(99.52%)",], notutilized: [] } } },


            { range: "5970.00MHz-6000.00MHz", result: { utilization: "99.51", frequencies: { utilized: ["5970.00MHz-5990.00MHz(99.54%)",  "5990.00MHz-6000.00MHz(99.48%)",], notutilized: [] } } },
          ]
        }

        ]
      },
     {
      id: 7,
      location: "Kaduna",
       bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHz - 13.14MHz (100%)"],
              notutilized: ["13.14MHz - 26.19MHz","26.19MHz - 30.00MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz - 60.00MHz",
              result: {
                utilization: "98.48",
                frequencies: {
                  utilized: ["30.00MHz - 39.23MHz (98.25%)", "39.23MHz - 52.27MHz (98.47%)", "53.27MHz - 60.00MHz(98.71%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "98.90",
                frequencies: {
                  utilized: [],
                  notutilized: ["60.00MHz - 65.32MHz(98.71%)","65.32MHz - 78.36MHz(98.90%)", "78.36MHz - 90.00MHz (99.07%)"]
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "49.58",
                frequencies: {
                  utilized: ["90.00MHz - 91.40MHz(99.07%)", "91.40MHz -104.45MHz (99.24%)"],
                  notutilized: ["104.45MHz - 117.49MHz (0%)", "117.49MHz - 120.00MHz (0%)"]
                }
              }
            },
            {
              range: "120.00MHz - 150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["120.00MHz - 130.53MHz (0%)","130.53MHz - 143.58MHz (0%)", "143.58MHz - 150.00MHz (0%)"]
                }
              }
            },
            {
              range: "150.00MHz - 180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["150.00MHz - 156.62MHz (0%)", "156.62MHz - 169.66MHz (0%)","169.66MHz - 180.00MHz (0%)"]
                }
              }
            },
            {
              range: "180.00MHz - 210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["180.00MHz -182.71MHz (0%)","182.71MHz - 195.75MHz (0%)","195.75MHz - 208.79MHz (0%)", "208.79MHz - 210.00MHz (0%)"]
                }
              }
            },
            {
              range: "210.00MHz - 240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["210.00MHz - 221.84MHz (0%)","221.84MHz - 234.88MHz (0%)", "234.88MHz - 240.00MHz (0%)"]
                }
              }
            },
            {
              range: "240.00MHz - 270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["240.00MHz - 247.92MHz (0%)", "247.92MHz - 260.87MHz (0%)", "260.87MHz - 270.00MHz (0%)"]
                }
              }
            },
            {
              range: "270.00MHz - 300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["270.00MHz - 274.00MHz (0%)","274.00MHz - 287.05MHz (0%)", "287.05MHz - 300.00MHz (0%)"]
                }
              }
            }
          ]
        },
        //300MHz to 3GHz
        {
            range: "300MHZ-3GHZ",
            subbands: [
              {
                range: "300.00-330.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["300.00MHz-313.00MHz(0%)","313.00MHz-326.00MHz(0%)", "326.00MHz-330.00MHz(0%)"]
                  }
                }
              },
              {
                range: "330.00-360.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["330.00-339.00MHz(0%)","339.00-352.00MHz(0%)", "352.00-360.00MHz(0%)"]
                  }
                }
              },
              {
                range: "360.00-390.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["360.00-365.00MHz(0%)","365.00-378.00MHz(0%)", "378.00-390.00MHz(0%)"]
                  }
                }
              },
              {
                range: "390.00-420.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["390.00-391.00MHz(0%)","391.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                  }
                }
              },
              {
                range: "420.00-450.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["420.00-431.00MHz(0%)","431.00-444.00MHz(0%)","444.00-450.00MHz(0%)"]
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["450.00-457.00MHz(0%)","457.00-470.00MHz(0%)","470.00-480.00MHz(0%)"]
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["480.00-483.00MHz(0%)","482.00-496.00MHz(0%)","496.00-509.00MHz(0%)","509.00-510.00MHz(0%)"]
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["510.00-522.00MHz(0%)","522.00-535.00MHz(0%)","535.00-540.00MHz(0%)"]
                  }
                }
              },
              {
                range: "540.00-570.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["540.00-548.00MHz(0%)","548.00-561.00MHz(0%)","560.00-570.00MHz(0%)"]
                  }
                }
              },
              {
                range: "570.00-600.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["570.00-574.00MHz(0%)","574.00-587.00MHz(0%)","587.00-600.00MHz(0%)"]
                  }
                }
              },
              {
                range: "600.00-630.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                  }
                }
              },
              {
                range: "630.00-660.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","652.00-660.00MHz(0.01%)"]
                  }
                }
              },
              {
                range: "660.00-690.00MHz",
                result: {
                  utilization: "0.06%",
                  frequencies: {
                    utilized: [],
                    notutilized: ["660.00-665.00MHz(0.01%)","665.00-678.00MHz(0.06%)","678.00-690.00MHz(0.1%)",]
                  }
                }
              },
              {
                range: "690.00-720.00MHz",
                result: {
                  utilization: "0.03",
                  frequencies: {
                    utilized: [],
                    notutilized: ["690.00-691.00MHz(0.1%)","691.00-704.00MHz(0%)","704.00-717.00MHz(0%)","717.00-720.00MHz(0%)"]
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["720.00-731.00MHz(0%)","731.00-744.00MHz(0%)","744.00-750.00MHz(0%)"]
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["750.00-757.00MHz(0%)","757.00-770.00MHz(0%)","770.00-780.00MHz(0%)"]
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "0.19",
                  frequencies: {
                    utilized: [],
                    notutilized: ["780.00MHz-783.00MHz(0%)","783MHz- 796MHz(0.39%)","796MHz-809MHz(0.03%)","809MHz-810MHz(0.35%)"]
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "0.12",
                  frequencies: {
                    utilized: [],
                    notutilized: ["810.00-822.00MHz(0.35%)","822.00-835.00MHz(0%)","835.00-840.00MHz(0%)"]
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "0",
                  frequencies: {
                    utilized: [],
                    notutilized: ["840.00-848.00MHz(0%)","848.00-861.00MHz(0%)","861.00-870.00MHz(0%)"]
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "66.64%",
                  frequencies: {
                    utilized: ["870MHz- 874MHz(0%)", "874MHz- 887MHz(99.95%)", "887MHz- 900MHz(99.96%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "99.97",
                  frequencies: {
                    utilized: ["900MHz- 913MHz(99.97%)","913MHz- 926MHz(99.98%)","926MHz- 930MHz(99.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "99.98",
                  frequencies: {
                    utilized: ["930MHz-939MHz(99.98%)", "939MHz- 952MHz(99.99%)","952MHz-960MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["960MHz-965MHz(99.99%)","965MHz- 978MHz(99.99%)","978MHz-990MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["990.00-991.00MHz (99.99%)","991.00-1000.00MHz(99.99%)","1000.00-1020.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1020.00-1031.00MHz(99.99%)","1031.00-1044.00MHz(99.99%)","1044.00-1050.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1050.00-1161.00MHz(99.99%)", ,"1057.00-1070.00MHz(99.99%)","1070.00-1080.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1080.00-1083.00MHz(99.91%)", "1083.00-1096.00MHz(99.99%)","1096.00-1109.00MHz(99.99%)","1109.00-1110.00MHz(99.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "99.98",
                  frequencies: {
                    utilized: ["1110.00-1122.00MHz(99.98%)", "1122.00-1135.00MHz(99.98%)", "1135.00-1140.00MHz(99.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "99.98",
                  frequencies: {
                    utilized: ["1140.00-1148.00MHz(99.98%)", "1148.00-1161.00MHz(99.98%)", "1161.00-1170.00MHz(99.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1170.00-1174.00MHz(99.98%)","1174.00-1187.00MHz(99.99%)","1187.00-1200.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1200.00-1213.00MHz(99.99%)", "1213.00-1226.00MHz(100%)","1226.00-1230.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["1230.00-1239.00MHz(99.99%)", "1239.00-1252.00MHz(100%)", "1252.00-1260.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["1260.00-1265.00MHz(100%)","1265.00-1278.00MHz(100%)", "1278.00-1290.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["1290.00-1291.00MHz(100%)", "1291.00-1304.00MHz(100%)", "1304.00-1317.00MHz(100%)","1317.00-1320.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["1320.00-1330.00MHz(100%)", "1330.00-1344.00MHz(100%)", "1344.00-1350.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1350.00-1356.00MHz(99.99%)","1356.00-1369.00MHz(99.99%)", "1369.00-1380.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1380.00-1383.00MHz(99.99%)","1383.00-1396.00MHz(99.99%)","1369.00-1408.00MHz(99.99%)","1408.00-1410.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "99.99",
                  frequencies: {
                    utilized: ["1410.00-1422.00MHz(99.99%)","1422.00-1435.00MHz(99.99%)","1435.00-1440.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["1440.00-1448.00MHz(99.99%)", "1448.00-1461.00MHz(100%)", "1461.00-1470.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1470.00-1474.00MHz(100%)", "1474.00-1478.00MHz(100%)","1478.00-1500.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1500.00-1513.00MHz(100%)","1513.00-1526.00MHz(100%)", "1526.00-1530.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1530.00-1539.00MHz(100%)", "1539.00-1552.00MHz(100%)", "1552.00-1560.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1560.00-1565.00MHz(100%)", "1565.00-1578.00MHz(100%)","1578.00-1590.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1590.00-1591.00MHz(100%)", "1591.00-1604.00MHz(100%)", "1604.00-1617.00MHz(100%)","1617.00-1620.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "99.99%",
                  frequencies: {
                    utilized: ["1620.00-1631.00MHz(100%)", "1631.00-1644.00MHz(99.99%)", "1644.00-1650.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "99.99%",
                  frequencies: {
                    utilized: ["1650.00-1657.00MHz(99.99%)", "1657.00-1669.00MHz(99.99%)","1669.00-1680.00MHz(99.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "99.98%",
                  frequencies: {
                    utilized: ["1680.00-1682.00MHz(99.98%)", "1682.00-1696.00MHz(99.98%)", "1696.00-1708.00MHz(99.98%)", "1708.00-1710.00MHz(98.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "99.9",
                  frequencies: {
                    utilized: ["1710.00-1722.00MHz(99.99%)", "1722.00-1735.00MHz(99.99%)", "1735.00-1740.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "99.99%",
                  frequencies: {
                    utilized: ["1740.00-1748.00MHz(99.99%)","1748.00-1761.00MHz(99.99%)", "1761.00-1770.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1770.00-1774.00MHz(100%)","1774.00-1787.00MHz(100%)", "1787.00-1800.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1800.00-1813.00MHz(100%)","1813.00-1826.00MHz(100%)", "1826.00-1830.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1830.00-1860.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1830.00-1839.00MHz(100%)", "1839.00-1852.00MHz(100%)", "1852.00-1860.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1860.00-1890.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["1860.00-1865.00MHz(100%)", "1865.00-1878.00MHz(100%)", "1878.00-1890.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1890.00-1891.00MHz(100%)", "1891.00-1904.00MHz(100%)", "1904.00-1917.00MHz(100%)","1917.00-1920.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1920.00-1930.00MHz(100%)","1930.00-1944.00MHz(100%)", "1944.00-1950.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1950.00-1980.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1950.00-1956.00MHz(100%)","1957.00-1969.00MHz(100%)", "1969.00-1980.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1980.00-2010.00MHz",
                result: {
                  utilization: "100%",
                  frequencies: {
                    utilized: ["1980.00-1983.00MHz(100%)", "1983.00-1996.00MHz(100%)", "1996.00-2009.00MHz(100%)","2009.00-2010.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2010.00-2040.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2010.00-2022.00MHz(100%)","2022.00-2035.00MHz(100%)", "2035.00-2040.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2040.00-2070.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2040.00-2047.00MHz(100%)", "2048.00-2061.00MHz(100%)", "2061.00-2070.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2070.00-2100.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2070.00-2073.00MHz(100%)", "2074.00-2087.00MHz(100%)", "2087.00-2100.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2100.00-2130.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2100.00-2113.00MHz(100)", "2113.00-2126.00MHz(100%)","2126.00-2130.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2130.00-2160.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2130.00-2139.00MHz(100%)","2139.00-2152.00MHz(100%)", "2152.00-2160.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2160.00-2190.00MHz",
                result: {
                  utilization: "100",
                  frequencies: {
                    utilized: ["2160.00-2165.00MHz(100%)", "2165.00-2178.00MHz(100%)", "2178.00-2190.00MHz(100%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2190.00-2220.00MHz",
                result: {
                  utilization: "88.45",
                  frequencies: {
                    utilized: ["2190.00-2191.00MHz(100%)", "2191.00-2204.00MHz(83.1%)","2204.00-2217.00MHz(83.5%)","2217.00-2220.00MHz(83.1%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "94.25",
                  frequencies: {
                    utilized: ["2220.00-2230.00MHz(83.14%)", "2230.00-2243.00MHz(99.62%)", "2243.00-2250.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "99.91",
                  frequencies: {
                    utilized: ["2250.00-2256.00MHz(99.99%)", "2256.00-2269.00MHz(99.97%)", "2269.00-2280.00MHz(99.77%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "90.68",
                  frequencies: {
                    utilized: ["2280.00-2282.00MHz(99.77%)", "2282.00-2296.00MHz(99.2%)", "2296.00-2308.00MHz(83.6%)","2308.00-2310.00MHz(80.17%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "80.84",
                  frequencies: {
                    utilized: ["2310.00-2321.00MHz(80.17%)", "2321.00-2335.00MHz(80.71%)", "2335.00-2340.00MHz(81.65%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "82.7",
                  frequencies: {
                    utilized: ["2340.00-2347.00MHz(81.65%)", "2347.00-2361.00MHz(82.66%)","2361.00-2370.00MHz(83.78%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "85.05",
                  frequencies: {
                    utilized: ["2370.00-2374.00MHz(83.78%)", "2374.00-2387.00MHz(85.01%)","2387.00-2400.00MHz(86.35%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "88.32",
                  frequencies: {
                    utilized: ["2400.00-2413.00MHz(86.%)35", "2413.00-2426.00MHz(87.81%)","2426.00-2430.00MHz(89.08)",],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "90.2",
                  frequencies: {
                    utilized: ["2430.00-2439.00MHz(90.05%)", "2439.00-2452.00MHz(90.74%)", "2452.00-2460.00MHz(90.95%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "90.65",
                  frequencies: {
                    utilized: ["2460.00-2465.00MHz(90.95%)" ,"2465.00-2478.00MHz(90.60%)" ,"2478.00-2490.00MHz(90.39%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "89.77",
                  frequencies: {
                    utilized: ["2490.00-2491.00MHz(90.39%)" ,"2491.00-2504.00MHz(89.96%)" ,"2504.00-2517.00MHz(89.59%)" , "2517.00-2520.00MHz(89.13%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "88.93",
                  frequencies: {
                    utilized: [ "2520.00-2530.00MHz(89.13%)" ,"2530.00-2544.00MHz(88.88%)" , "2544.00-2550.00MHz(88.77%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "89.05",
                  frequencies: {
                    utilized: [ "2550.00-2556.00MHz(88.77%)" , "2556.00-2569.00MHz(88.93%)" , "2569.00-2580.00MHz(89.46%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "91.13",
                  frequencies: {
                    utilized: [ "2580.00-2582.00MHz(89.46%)", "2582.00-2595.00MHz(90.85%)",  "2595.00-2608.00MHz(91.87%)" ,"2608.00-2610.00MHz(92.32%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "93.12",
                  frequencies: {
                    utilized: ["2610.00-2622.00MHz(92.32%)","2622.00-2635.00MHz(93.08%)", "2635.00-2640.00MHz(93.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "94.45",
                  frequencies: {
                    utilized: ["2640.00-2648.00MHz(93.98%)", "2648.00-2661.00MHz(94.42%)","2661.00-2670.00MHz(94.95%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "95.57",
                  frequencies: {
                    utilized: ["2670.00-2674.00MHz(94.95%)", "2608.00-2687.00MHz(95.6%)", "2687.00-2700.00MHz(96.17%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "96.44",
                  frequencies: {
                    utilized: ["2700.00-2713.00MHz(96.53%)","2713.00-2726.00MHz(96.33%)","2726.00-2730.00MHz(96.46%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "96.61",
                  frequencies: {
                    utilized: ["2730.00-2739.00MHz(96.46%)","2739.00-2752.00MHz(96.6%)","2752.00-2760.00MHz(96.78%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "96.85",
                  frequencies: {
                    utilized: ["2760.00-2765.00MHz(96.78%)", "2765.00-2778.00MHz(96.9%)", "2778.00-2790.00MHz(96.88%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "96.75",
                  frequencies: {
                    utilized: ["2790.00-2791.00MHz(96.88%)","2791.00-2804.00MHz(96.8%)", "2804.00-2817.00MHz(96.7%)", "2817.00-2820.00MHz(96.63%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "96.59",
               frequencies: {
                    utilized: ["2820.00-2830.00MHz(96.63%)", "2830.00-2843.00MHz(96.6%)","2843.00-2850.00MHz(96.54%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "96.6",
                  frequencies: {
                    utilized: ["2850.00-2856.00MHz(96.54%)","2856.00-2869.00MHz(96.61%)","2869.00-2880.00MHz(96.65%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "96.65",
                  frequencies: {
                    utilized: ["2880.00-2882.00MHz(96.65%)", "2882.00-2896.00MHz(96.6%)","2896.00-2909.00MHz(96.69%)","2909.00-2910.00MHz(96.68%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "96.73",
                  frequencies: {
                    utilized: ["2910.00-2922.00MHz(96.68%)", "2922.00-2935.00MHz(96.71%)", "2935.00-2940.00MHz(96.81%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "96.74",
                  frequencies: {
                    utilized: ["2940.00-2948.00MHz(96.81%)","2948.00-2961.00MHz(96.75%)", "2961.00-2970.00MHz(96.65%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "89.43",
                  frequencies: {
                    utilized: ["2970.00-2974.00MHz(96.65%)","2974.00-2987.00MHz(96.17%)", "2987.00-3000.00MHz(75.47%)"],
                    notutilized: []
                  }
                }
              }
            ]
        },
        //3ghz to 6ghz
        {
          range: "3GHZ-6GHZ",
          subbands : [
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "78.64", frequencies: { utilized: ["3000.00MHz-3013.00MHz(78.09%)","3013.00MHz-3026.00MHz(78.13)", "3026.00MHz-3030.00MHz(82.88%)"], notutilized: [] } } },

            { range: "3030.00MHz-3060.00MHz", result: { utilization: "89.90", frequencies: { utilized: ["3030.00MHz-3039.00MHz(82.88%)",  "3039.00MHz-3052.00MHz(79.08%)", "3052.00MHz-3060.00MHz(83.74%)"], notutilized: [] } } },
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "76.71", frequencies: { utilized: ["3060.00MHz-3065.00MHz(83.74%)","3065.00MHz-3078.00MHz(80.60%)","3078.00MHz-3090.00MHz(66.37%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "63.07", frequencies: { utilized: ["3090.00MHz-3091.00MHz(66.37%)", "3091.00MHz-3104.00MHz(63.61%)", "3104.00MHz-3117.00MHz(62.62%)","3117.00MHz-3120.00MHz(59.67%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "56.84", frequencies: { utilized: ["3120.00MHz-3130.00MHz(59.67%)", "3130.00MHz-3144.00MHz(56.38%)","3144.00MHz-3150.00MHz(54.48%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "52.95", frequencies: { utilized: ["3150.00MHz-3156.00MHz(54.48%)", "3156.00MHz-3169.00MHz(52.91%)",  "3169.00MHz-3180.00MHz(51.48%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "51.29", frequencies: { utilized: ["3180.00MHz-3182.00MHz(51.48%)","3182.00MHz-3196.00MHz(50.95%)",  "3196.00MHz-3208.00MHz(50.93%)","3208.00MHz-3210.00MHz(51.79%)"], notutilized: [] } } },


            { range: "3210.00MHz-3240.00MHz", result: { utilization: "52.89", frequencies: { utilized: ["3210.00MHz-3222.00MHz(51.79%)", "3222.00MHz-3235.00MHz(52.75%)", "3235.00MHz-3240.00MHz(54.12%)"], notutilized: [] } } },


            { range: "3240.00MHz-3270.00MHz", result: { utilization: "56.38", frequencies: { utilized: ["3240.00MHz-3248.00MHz(54.12%)", "3248.00MHz-3260.00MHz(56.35%)", "3260.00MHz-3270.00MHz(58.67%)"], notutilized: [] } } },


            { range: "3270.00MHz-3300.00MHz", result: { utilization: "60.18", frequencies: { utilized: ["3270.00MHz-3274.00MHz(58.67%)", "3274.00MHz-3287.00MHz(60.11%)", "3287.00MHz-3300.00MHz(61.75%)"], notutilized: [] } } },


            { range: "3300.00MHz-3330.00MHz", result: { utilization: "63.52", frequencies: { utilized: ["3300.00MHz-3313.00MHz(63.57%)", "3313.00MHz-3326.00MHz(64.56%)", "3326.00MHz-3330.00MHz(64.22%)",], notutilized: [] } } },


            { range: "3330.00MHz-3360.00MHz", result: { utilization: "63", frequencies: { utilized: ["3330.00MHz-3339.00MHz(64.22%)", "3339.00MHz-3352.00MHz(63.27%)","3352.00MHz-3360.00MHz(61.5%)",], notutilized: [] } } },


            { range: "3360.00MHz-3390.00MHz", result: { utilization: "59.5", frequencies: { utilized: ["3360.00MHz-3365.00MHz(61.5%)", "3365.00MHz-3378.00MHz(59.27%)",  "3378.00MHz-3390.00MHz(57.75%)"], notutilized: [] } } },


            { range: "3390.00MHz-3420.00MHz", result: { utilization: "57.23", frequencies: { utilized: ["3390.00MHz-3391.00MHz(57.75%)", "3391.00MHz-3404.00MHz(56.6%)", "3404.00MHz-3417.00MHz(56.84%)","3417.00MHz-3420.00MHz(57.72%)"] ,notutilized: [] } } },


            { range: "3420.00MHz-3450.00MHz", result: { utilization: "59", frequencies: { utilized: ["3420.00MHz-3430.00MHz(57.72%)", "3430.00MHz-3444.00MHz(58.71%)", "3444.00MHz-3450.00MHz(60.58%)"], notutilized: [] } } },


            { range: "3450.00MHz-3480.00MHz", result: { utilization: "63.19", frequencies: { utilized: ["3450.00MHz-3457.00MHz(60.58%)", "3457.00MHz-3469.00MHz(63.21%)", "3469.00MHz-3480.00MHz(65.77%)"], notutilized: [] } } },


            { range: "3480.00MHz-3510.00MHz", result: { utilization: "68.78", frequencies: { utilized: ["3480.00MHz-3483.00MHz(65.77%)","3483.00MHz-3496.00MHz(68.45%)", "3496.00MHz-3508.00MHz(70.08%)", "3508.00MHz-3510.00MHz(70.83%)"], notutilized: [] } } },


            { range: "3510.00MHz-3540.00MHz", result: { utilization: "71.3", frequencies: { utilized: ["3510.00MHz-3522.00MHz(70.83%)",   "3522.00MHz-3535.00MHz(71.61%)", "3535.00MHz-3540.00MHz(72.66%)"], notutilized: [] } } },


            { range: "3540.00MHz-3570.00MHz", result: { utilization: "74.3", frequencies: { utilized: ["3540.00MHz-3548.00MHz(72.66%)", "3548.00MHz-3561.00MHz(74.15%)", "3561.00MHz-3570.00MHz(76.16%)"], notutilized: [] } } },


            { range: "3570.00MHz-3600.00MHz", result: { utilization: "77.56", frequencies: { utilized: ["3570.00MHz-3574.00MHz(76.16%)", "3574.00MHz-3587.00MHz(77.60%)", "3587.00MHz-3600.00MHz(78.91%)"], notutilized: [] } } },


            { range: "3600.00MHz-3630.00MHz", result: { utilization: "80.21", frequencies: { utilized: ["3600.00MHz-3613.00MHz(79.6%)", "3613.00MHz-3626.00MHz(80.5%)", "3626.00MHz-3630.00MHz(81.8%)"], notutilized: [] } } },


            { range: "3630.00MHz-3660.00MHz", result: { utilization: "83.15", frequencies: { utilized: ["3630.00MHz-3639.00MHz(81.8%)", "3639.00MHz-3652.00MHz(83.24%)", "3652.00MHz-3660.00MHz(84.39%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "84.87", frequencies: { utilized: ["3660.00MHz-3665.00MHz(84.39%)", "3665.00MHz-3678.00MHz(84.87%)", "3678.00MHz-3690.00MHz(85.35%)"], notutilized: [] } } },


            { range: "3690.00MHz-3720.00MHz", result: { utilization: "86.91", frequencies: { utilized: ["3690.00MHz-3691.00MHz(85.35%)","3691.00MHz-3704.00MHz(86.27%)","3704.00MHz-3717.00MHz(87.32%)","3717.00MHz-3720.00MHz(88.68%)"], notutilized: [] } } },


            { range: "3720.00MHz-3750.00MHz", result: { utilization: "89.79", frequencies: { utilized: ["3720.00MHz-3730.00MHz(88.68%)","3730.00MHz-3744.00MHz(89.69%)", "3744.00MHz-3750.00MHz(90.99%)"], notutilized: [] } } },


            { range: "3750.00MHz-3780.00MHz", result: { utilization: "92.04", frequencies: { utilized: ["3750.00MHz-3757.00MHz(90.99%)",  "3757.00MHz-3769.00MHz(92.06%)", "3769.00MHz-3780.00MHz(93.08%)"],notutilized: [] } } },


            { range: "3780.00MHz-3810.00MHz", result: { utilization: "94.29", frequencies: { utilized: ["3780.00MHz-3783.00MHz(93.08%)","3783.00MHz-3796.00MHz(93.79%)","3796.00MHz-3809.00MHz(94.72%)", "3809.00MHz-3810.00MHz(95.56%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "96.08", frequencies: { utilized: ["3810.00MHz-3822.00MHz(95.56%)","3822.00MHz-3839.00MHz(96.1%)","3839.00MHz-3840.00MHz(96.58%)"],notutilized: [] } } },


            { range: "3840.00MHz-3870.00MHz", result: { utilization: "96.78", frequencies: { utilized: ["3840.00MHz-3847.00MHz(96.58%)", "3847.00MHz-3861.00MHz(96.83%)", "3861.00MHz-3870.00MHz(96.93%)"], notutilized: [] } } },


            { range: "3870.00MHz-3900.00MHz", result: { utilization: "96.92", frequencies: { utilized: ["3870.00MHz-3874.00MHz(96.93%)", "3874.00MHz-3887.00MHz(96.94%)", "3887.00MHz-3900.00MHz(96.88%)" ], notutilized: [] } } },


            { range: "3900.00MHz-3930.00MHz", result: { utilization: "96.66", frequencies: { utilized: ["3900.00MHz-3913.00MHz(96.78%)", "3913.00MHz-3926.00MHz(96.58%)", "3926.00MHz-3930.00MHz(96.43%)" ],notutilized: [] } } },


            { range: "3930.00MHz-3960.00MHz", result: { utilization: "96.05", frequencies: { utilized: ["3930.00MHz-3939.00MHz(96.43%)", "3939.00MHz-3952.00MHz(96.08%)", "3952.00MHz-3960.00MHz(95.63%)"],notutilized: [] } } },


            { range: "3960.00MHz-3990.00MHz", result: { utilization: "95.27", frequencies: { utilized: ["3960.00MHz-3965.00MHz(95.63%)",  "3965.00MHz-3978.00MHz(95.15%)", "3978.00MHz-3990.00MHz(95.02%)"],notutilized: [] } } },


            { range: "3990.00MHz-4020.00MHz", result: { utilization: "95.13", frequencies: { utilized: [ "3990.00MHz-3991.00MHz(95.02%)",  "3991.00MHz-4004.00MHz(95.04%)", "4004.00MHz-4017.00MHz(95.17%)","4017.00MHz-4020.00MHz(95.31%)"], notutilized: [] } } },


            { range: "4020.00MHz-4050.00MHz", result: { utilization: "95.67", frequencies: { utilized: ["4020.00MHz-4030.00MHz(95.31%)", "4030.00MHz-4044.00MHz(95.57%)", "4044.00MHz-4050.00MHz(96.13%)"] ,notutilized: [] } } },


            { range: "4050.00MHz-4080.00MHz", result: { utilization: "96.78", frequencies: { utilized: ["4050.00MHz-4056.00MHz(96.13%)", "4056.00MHz-4069.00MHz(96.77%)", "4069.00MHz-4080.00MHz(97.43%)"], notutilized: [] } } },


            { range: "4080.00MHz-4110.00MHz", result: { utilization: "98.12", frequencies: { utilized: ["4080.00MHz-4083.00MHz(97.43%)", "4083.00MHz-4096.00MHz(98.03%)", "4069.00MHz-4109.00MHz(98.38%)", "4109.00MHz-4110.00MHz(98.65%)"], notutilized: [] } } },


            { range: "4110.00MHz-4140.00MHz", result: { utilization: "98.76", frequencies: { utilized: ["4110.00MHz-4122.00MHz(98.65%)", "4122.00MHz-4135.00MHz(98.78%)", "4135.00MHz-4140.00MHz(98.84%)"], notutilized: [] } } },


            { range: "4140.00MHz-4170.00MHz", result: { utilization: "98.86", frequencies: { utilized: ["4140.00MHz-4148.00MHz(98.84%)","4148.00MHz-4161.00MHz(98.89%)","4161.00MHz-4170.00MHz(98.86%)"], notutilized: [] } } },


            { range: "4170.00MHz-4200.00MHz", result: { utilization: "98.81", frequencies: { utilized: ["4170.00MHz-4174.00MHz(98.86%)", "4174.00MHz-4187.00MHz(98.81%)", "4187.00MHz-4200.00MHz(98.77%)"] ,notutilized: [] } } },


            { range: "4200.00MHz-4230.00MHz", result: { utilization: "98.8", frequencies: { utilized: [ "4200.00MHz-4213.00MHz(98.79%)" , "4213.00MHz-4226.00MHz(98.74%)", "4226.00MHz-4230.00MHz(98.87%)"] ,notutilized: [] } } },


            { range: "4230.00MHz-4260.00MHz", result: { utilization: "99.09", frequencies: { utilized: ["4230.00MHz-4239.00MHz(98.87%)","4239.00MHz-4252.00MHz(99.1%)", "4252.00MHz-4260.00MHz(99.3%)"], notutilized: [] } } },


            { range: "4260.00MHz-4290.00MHz", result: { utilization: "99.46", frequencies: { utilized: ["4260.00MHz-4265.00MHz(99.3%)",  "4265.00MHz-4278.00MHz(99.47%)", "4278.00MHz-4290.00MHz(99.60%)"] ,notutilized: [] } } },


            { range: "4290.00MHz-4320.00MHz", result: { utilization: "99.72", frequencies: { utilized: ["4290.00MHz-4291.00MHz(99.60%)",  "4291.00MHz-4304.00MHz(99.70%)", "4304.00MHz-4317.00MHz(99.76%)","4317.00MHz-4320.00MHz(99.81%)"], notutilized: [] } } },


            { range: "4320.00MHz-4350.00MHz", result: { utilization: "99.85", frequencies: { utilized: ["4320.00MHz-4330.00MHz(99.81%)", "4330.00MHz-4344.00MHz(99.85%)", "4344.00MHz-4350.00MHz(99.89%)"], notutilized: [] } } },


            { range: "4350.00MHz-4380.00MHz", result: { utilization: "99.92", frequencies: { utilized: ["4350.00MHz-4356.00MHz(99.89%)", "4356.00MHz-4369.00MHz(99.92%)","4369.00MHz-4380.00MHz(99.95%)"], notutilized: [] } } },


            { range: "4380.00MHz-4410.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["4380.00MHz-4383.00MHz(99.95%)", "4383.00MHz-4396.00MHz(99.97%)", "4396.00MHz-4408.00MHz(99.97%)","4408.00MHz-4410.00MHz(99.98%)"], notutilized: [] } } },


            { range: "4410.00MHz-4440.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["4410.00MHz-4422.00MHz(99.98%)", "4422.00MHz-4435.00MHz(99.98%)", "4435.00MHz-4440.00MHz(99.99%)",], notutilized: [] } } },


            { range: "4440.00MHz-4470.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["4440.00MHz-4448.00MHz(99.99%)", "4448.00MHz-4461.00MHz(99.98%)", "4461.00MHz-4470.00MHz(99.99%)",], notutilized: [] } } },


            { range: "4470.00MHz-4500.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["4470.00MHz-4474.00MHz(99.99%)", "4474.00MHz-4487.00MHz(99.99%)","4487.00MHz-4500.00MHz(99.99%)"], notutilized: [] } } },


            { range: "4500.00MHz-4530.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["4500.00MHz-4513.00MHz(99.99%)", "4513.00MHz-4526.00MHz(99.98%)","4526.00MHz-4530.00MHz(99.98%)",], notutilized: [] } } },


            { range: "4530.00MHz-4560.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["4530.00MHz-4539.00MHz(99.98%)", "4539.00MHz-4552.00MHz(99.97%)", "4552.00MHz-4560.00MHz(99.96%)",], notutilized: [] } } },


            { range: "4560.00MHz-4590.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4560.00MHz-4565.00MHz(99.96%)", "4565.00MHz-4578.00MHz(99.95%)","4578.00MHz-4590.00MHz(99.94%)",], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["4590.00MHz-4591.00MHz(99.94%)","4591.00MHz-4604.00MHz(99.94%)",  "4604.00MHz-4617.00MHz(99.94%)", "4617.00MHz-4590.00MHz(99.94%)"], notutilized: [] } } },


            { range: "4620.00MHz-4650.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4620.00MHz-4630.00MHz(99.94%)", "4630.00MHz-4644.00MHz(99.95%)","4644.00MHz-4650.00MHz(99.95%)",], notutilized: [] } } },


            { range: "4650.00MHz-4680.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4650.00MHz-4657.00MHz(99.95%)", "4657.00MHz-4708.00MHz(99.94%)", "4708.00MHz-4680.00MHz(99.95%)",],notutilized: [] } } },


            { range: "4680.00MHz-4710.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4680.00MHz-4683.00MHz(99.95%)", "4683.00MHz-4696.00MHz(99.95%)", "4669.00MHz-4708.00MHz(99.95%)","4708.00MHz-47100.00MHz(99.95%)",], notutilized: [] } } },




            { range: "4710.00MHz-4740.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4710.00MHz-4722.00MHz(99.95%)", "4722.00MHz-4735.00MHz(99.56%)", "4735.00MHz-4740.00MHz(99.95%)",], notutilized: [] } } },


            { range: "4740.00MHz-4770.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4740.00MHz-4748.00MHz(99.95%)", "4748.00MHz-4761.00MHz(99.96%)", "4761.00MHz-4770.00MHz(99.95%)",], notutilized: [] } } },


            { range: "4770.00MHz-4800.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4770.00MHz-4774.00MHz(99.95%)", "4774.00MHz-4787.00MHz(99.95%)", "4787.00MHz-4800.00MHz(99.95%)",], notutilized: [] } } },


            { range: "4800.00MHz-4830.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["4800.00MHz-4813.00MHz(99.94%)", "4813.00MHz-4826.00MHz(99.94%)", "4826.00MHz-4830.00MHz(99.94%)",], notutilized: [] } } },


            { range: "4830.00MHz-4860.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["4830.00MHz-4839.00MHz(99.94%)","4826.00MHz-4852.00MHz(99.94%)", "4852.00MHz-4860.00MHz(99.94%)",], notutilized: [] } } },


            { range: "4860.00MHz-4890.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["4860.00MHz-4865.00MHz(99.94%)", "4865.00MHz-4878.00MHz(99.94%)", "4878.00MHz-4890.00MHz(99.96%)",], notutilized: [] } } },


            { range: "4890.00MHz-4920.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["4890.00MHz-4891.00MHz(99.96%)",  "4891.00MHz-4904.00MHz(99.96%)","4904.00MHz-4917.00MHz(99.97%)","4917.00MHz-4920.00MHz(99.97%)",], notutilized: [] } } },


            { range: "4920.00MHz-4950.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["4920.00MHz-4930.00MHz(99.97%)", "4930.00MHz-4943.00MHz(99.98%)", "4943.00MHz-4950.00MHz(99.99%)",], notutilized: [] } } },


            { range: "4950.00MHz-4980.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["4950.00MHz-4957.00MHz(99.99%)",  "4943.00MHz-4969.00MHz(100%)", "4969.00MHz-4980.00MHz(100%)",], notutilized: [] } } },


            { range: "4980.00MHz-5010.00MHz", result: { utilization: "100", frequencies: { utilized: ["4980.00MHz-4983.00MHz(100%)",  "4983.00MHz-4996.00MHz(100%)","4996.00MHz-5009.00MHz(100%)","5009.00MHz-5010.00MHz(100%)",], notutilized: [] } } },


            { range: "5010.00MHz-5040.00MHz", result: { utilization: "100", frequencies: { utilized: ["5010.00MHz-5022.00MHz(100%)",  "5022.00MHz-5035.00MHz(100%)", "5035.00MHz-5040.00MHz(100%)",], notutilized: [] } } },


            { range: "5040.00MHz-5070.00MHz", result: { utilization: "100", frequencies: { utilized: ["5040.00MHz-5048.00MHz(100%)",  "5048.00MHz-5061.00MHz(100%)", "5061.00MHz-5070.00MHz(100%)",], notutilized: [] } } },


            { range: "5070.00MHz-5100.00MHz", result: { utilization: "100", frequencies: { utilized: ["5070.00MHz-5074.00MHz(100%)",  "5074.00MHz-5087.00MHz(100%)", "5087.00MHz-5100.00MHz(100%)",], notutilized: [] } } },


            { range: "5100.00MHz-5130.00MHz", result: { utilization: "100", frequencies: { utilized: ["5100.00MHz-5113.00MHz(100%)", "5113.00MHz-5126.00MHz(100%)", "5126.00MHz-5130.00MHz(100%)",], notutilized: [] } } },


            { range: "5130.00MHz-5160.00MHz", result: { utilization: "100", frequencies: { utilized: ["5130.00MHz-5139.00MHz(100%)", "5139.00MHz-5152.00MHz(100%)", "5152.00MHz-5160.00MHz(100%)",], notutilized: [] } } },


            { range: "5160.00MHz-5190.00MHz", result: { utilization: "100", frequencies: { utilized: ["5160.00MHz-5165.00MHz(100%)",  "5152.00MHz-5178.00MHz(100%)","5178.00MHz-5190.00MHz(100%)",], notutilized: [] } } },

 { range: "5190.00MHz-5220.00MHz", result: { utilization: "100", frequencies: { utilized: ["5190.00MHz-5191.00MHz(100%)",  "5191.00MHz-5204.00MHz(100%)", "5204.00MHz-5217.00MHz(100%)","5217.00MHz-5220.00MHz(100%)",], notutilized: [] } } },


            { range: "5220.00MHz-5250.00MHz", result: { utilization: "100", frequencies: { utilized: ["5220.00MHz-5230.00MHz(100%)",  "5230.00MHz-5234.00MHz(100%)", "5234.00MHz-5250.00MHz(100%)",], notutilized: [] } } },


            { range: "5250.00MHz-5280.00MHz", result: { utilization: "100", frequencies: { utilized: ["5250.00MHz-5257.00MHz(100%)",  "5257.00MHz-5269.00MHz(100%)","5269.00MHz-5280.00MHz(100%)"], notutilized: [] } } },


            { range: "5280.00MHz-5310.00MHz", result: { utilization: "100", frequencies: { utilized: ["5280.00MHz-5283.00MHz(100%)",  "5283.00MHz-5296.00MHz(100%)", "5296.00MHz-5308.00MHz(100%)", "5308.00MHz-5310.00MHz(100%)",], notutilized: [] } } },


            { range: "5310.00MHz-5340.00MHz", result: { utilization: "100", frequencies: { utilized: ["5310.00MHz-5322.00MHz(100%)", "5308.00MHz-5335.00MHz(100%)", "5335.00MHz-5340.00MHz(100%)",], notutilized: [] } } },


            { range: "5340.00MHz-5370.00MHz", result: { utilization: "100", frequencies: { utilized: ["5340.00MHz-5348.00MHz(100%)",  "5348.00MHz-5360.00MHz(100%)", "5361.00MHz-5370.00MHz(100%)",], notutilized: [] } } },


            { range: "5370.00MHz-5400.00MHz", result: { utilization: "100", frequencies: { utilized: ["5370.00MHz-5374.00MHz(100%)",  "5374.00MHz-5387.00MHz(100%)", "5387.00MHz-5400.00MHz(100%)",], notutilized: [] } } },


            { range: "5400.00MHz-5430.00MHz", result: { utilization: "100", frequencies: { utilized: ["5400.00MHz-5413.00MHz(100%)",  "5413.00MHz-5426.00MHz(100%)","5426.00MHz-5430.00MHz(100%)",],notutilized: [] } } },


            { range: "5430.00MHz-5460.00MHz", result: { utilization: "100", frequencies: { utilized: ["5430.00MHz-5439.00MHz(100%)",  "5439.00MHz-5452.00MHz(100%)", "5452.00MHz-5460.00MHz(100%)",], notutilized: [] } } },


            { range: "5460.00MHz-5490.00MHz", result: { utilization: "100", frequencies: { utilized: ["5460.00MHz-5465.00MHz(100%)",  "5465.00MHz-5478.00MHz(100%)", "5478.00MHz-5490.00MHz(100%)",], notutilized: [] } } },


            { range: "5490.00MHz-5520.00MHz", result: { utilization: "100", frequencies: { utilized: ["5490.00MHz-5491.00MHz(100%)",  "5491.00MHz-5504.00MHz(100%)", "5504.00MHz-5517.00MHz(100%)","5517.00MHz-5520.00MHz(100%)",], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "100", frequencies: { utilized: ["5520.00MHz-5530.00MHz(100%)",  "5530.00MHz-5543.00MHz(100%)", "5543.00MHz-5550.00MHz(100%)",], notutilized: [] } } },


            { range: "5550.00MHz-5580.00MHz", result: { utilization: "100", frequencies: { utilized: ["5550.00MHz-5557.00MHz(100%)",  "5557.00MHz-5569.00MHz(100%)", "5569.00MHz-5580.00MHz(100%)",], notutilized: [] } } },


            { range: "5580.00MHz-5610.00MHz", result: { utilization: "100", frequencies: { utilized: ["5580.00MHz-5583.00MHz(100%)",  "5583.00MHz-5596.00MHz(100%)","5596.00MHz-5609.00MHz(100%)","5609.00MHz-5610.00MHz(100%)",], notutilized: [] } } },


            { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.88", frequencies: { utilized: ["5610.00MHz-5622.00MHz(99.88%)", "5609.00MHz-5635.00MHz(99.88%)","5635.00MHz-5640.00MHz(99.88%)",], notutilized: [] } } },


            { range: "5640.00MHz-5670.00MHz", result: { utilization: "100", frequencies: { utilized: ["5640.00MHz-5648.00MHz(100%)",  "5648.00MHz-5661.00MHz(100%)", "5661.00MHz-5670.00MHz(100%)",], notutilized: [] } } },


            { range: "5670.00MHz-5700.00MHz", result: { utilization: "100", frequencies: { utilized: ["5670.00MHz-5674.00MHz(100%)",  "5674.00MHz-5687.00MHz(100%)", "5687.00MHz-5700.00MHz(100%)",], notutilized: [] } } },


            { range: "5700.00MHz-5730.00MHz", result: { utilization: "100", frequencies: { utilized: ["5700.00MHz-5713.00MHz(100%)",  "5713.00MHz-5726.00MHz(100%)","5726.00MHz-5730.00MHz(100%)",], notutilized: [] } } },


            { range: "5730.00MHz-5760.00MHz", result: { utilization: "100", frequencies: { utilized: ["5730.00MHz-5739.00MHz(100%)",  "5739.00MHz-5752.00MHz(100%)", "5752.00MHz-5760.00MHz(100%)",], notutilized: [] } } },


            { range: "5760.00MHz-5790.00MHz", result: { utilization: "100", frequencies: { utilized: ["5760.00MHz-5765.00MHz(100%)",  "5765.00MHz-5778.00MHz(100%)","5778.00MHz-5790.00MHz(100%)",], notutilized: [] } } },


            { range: "5790.00MHz-5820.00MHz", result: { utilization: "100", frequencies: { utilized: ["5790.00MHz-5791.00MHz(100%)",  "5791.00MHz-5804.00MHz(100%)", "5804.00MHz-5817.00MHz(100%)","5817.00MHz-5820.00MHz(100%)",], notutilized: [] } } },


            { range: "5820.00MHz-5850.00MHz", result: { utilization: "100", frequencies: { utilized: ["5820.00MHz-5830.00MHz(100%)",  "5830.00MHz-5843.00MHz(100%)", "5843.00MHz-5850.00MHz(100%)",], notutilized: [] } } },


            { range: "5850.00MHz-5880.00MHz", result: { utilization: "100", frequencies: { utilized: [ "5850.00MHz-5857.00MHz(100%)",  "5857.00MHz-5869.00MHz(100%)", "5869.00MHz-5880.00MHz(100%)",], notutilized: [] } } },


            { range: "5880.00MHz-5910.00MHz", result: { utilization: "100", frequencies: { utilized: ["5880.00MHz-5883.00MHz(100%)",  "5883.00MHz-5896.00MHz(100%)", "5896.00MHz-5908.00MHz(100%)","5908.00MHz-5910.00MHz(100%)",], notutilized: [] } } },


            { range: "5910.00MHz-5940.00MHz", result: { utilization: "100", frequencies: { utilized: ["5910.00MHz-5921.00MHz(100%)", "5921.00MHz-5935.00MHz(100%)", "5935.00MHz-5940.00MHz(100%)",], notutilized: [] } } },


            { range: "5940.00MHz-5970.00MHz", result: { utilization: "100", frequencies: { utilized: ["5940.00MHz-5948.00MHz(100%)",  "5948.00MHz-5961.00MHz(100%)", "5961.00MHz-5970.00MHz(100%)",], notutilized: [] } } },


            { range: "5970.00MHz-6000.00MHz", result: { utilization: "100", frequencies: { utilized: ["5970.00MHz-5974.00MHz(100%)",  "5974.00MHz-5987.00MHz(100%)", "5987.00MHz-6000.00MHz(100%)",], notutilized: [] } } },
          ]
        },


        ]
      },
      {
      id: 8,
      location: "Abuja",
     bands: [
        //0hz to 30MHz
{
  range: "100KHZ-30MHz",
  result: {
    utilization: "33.33",
    frequencies: {
      utilized: ["100KHz - 13.14MHz (100%)"],
      notutilized: ["13.14MHz - 26.19MHz", "26.19MHz - 30.00MHz"]
    }
  }
},
//30MHz to 300MHz
{
  range: "30MHz-300MHz",
  subbands: [
    {
      range: "30.00MHz - 60.00MHz",
      result: {
        utilization: "96.95",
        frequencies: {
          utilized: [
            "30.00MHz - 39.23MHz (96.55%)",
            "39.23MHz - 52.27MHz (97.00%)",
            "53.27MHz - 60.00MHz (97.30%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "60.00MHz - 90.00MHz",
      result: {
        utilization: "97.59",
        frequencies: {
          utilized: [
            "60.00MHz - 65.32MHz (97.30%)",
            "65.32MHz - 78.36MHz (97.61%)",
            "78.36MHz - 90.00MHz (97.84%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "90.00MHz - 120.00MHz",
      result: {
        utilization: "48.98",
        frequencies: {
          utilized: [
            "90.00MHz - 91.40MHz (97.84%)",
            "91.40MHz - 104.45MHz (98.09%)"
          ],
          notutilized: [
            "104.45MHz - 117.49MHz (0%)",
            "117.49MHz - 120.00MHz (0%)"
          ]
        }
      }
    },
    {
      range: "120.00MHz - 150.00MHz",
      result: {
        utilization: "0",
        frequencies: {
          utilized: [],
          notutilized: [
            "120.00MHz - 130.53MHz (0%)",
            "130.53MHz - 143.58MHz (0%)",
            "143.58MHz - 150.00MHz (0%)"
          ]
        }
      }
    },
    {
      range: "150.00MHz - 180.00MHz",
      result: {
        utilization: "0",
        frequencies: {
          utilized: [],
          notutilized: [
            "150.00MHz - 156.62MHz (0%)",
            "156.62MHz - 169.66MHz (0%)",
            "169.66MHz - 180.00MHz (0%)"
          ]
        }
      }
    },
    {
      range: "180.00MHz - 210.00MHz",
      result: {
        utilization: "0",
        frequencies: {
          utilized: [],
          notutilized: [
            "180.00MHz - 182.71MHz (0%)",
            "182.71MHz - 195.75MHz (0%)",
            "195.75MHz - 208.79MHz (0%)",
            "208.79MHz - 210.00MHz (0%)"
          ]
        }
      }
    },
    {
      range: "210.00MHz - 240.00MHz",
      result: {
        utilization: "0",
        frequencies: {
          utilized: [],
          notutilized: [
            "210.00MHz - 221.84MHz (0%)",
            "221.84MHz - 234.88MHz (0%)",
            "234.88MHz - 240.00MHz (0%)"
          ]
        }
      }
    },
    {
      range: "240.00MHz - 270.00MHz",
      result: {
        utilization: "0",
        frequencies: {
          utilized: [],
          notutilized: [
            "240.00MHz - 247.92MHz (0%)",
            "247.92MHz - 260.87MHz (0%)",
            "260.87MHz - 270.00MHz (0%)"
          ]
        }
      }
    },
    {
      range: "270.00MHz - 300.00MHz",
      result: {
        utilization: "0",
        frequencies: {
          utilized: [],
          notutilized: [
            "270.00MHz - 274.00MHz (0%)",
            "274.00MHz - 287.05MHz (0%)",
            "287.05MHz - 300.00MHz (0%)"
          ]
        }
      }
    }
  ]
},
        //300MHz to 3GHz
        {
            range: "300MHZ-3GHZ",
            subbands: [
               {
                  range: "300.00-330.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["300.00MHz - 313.00MHz (0%)", "313.00MHz - 326.00MHz (0%)", "326.00MHz - 330.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "330.00-360.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["330.00-339.00MHz(0%)", "339.00-352.00MHz(0%)", "352.00-360(0%)"]
                  }
                  }
               },
               {
                  range: "360.00-390.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["360.00-365.00MHz(0%)","365.00-378.00MHz(0%)", "378.00-390.00MHz(0%)"]
               }
                  }
               },
               {
                  range: "390.00-420.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["390.00-391.00MHz(0%)","391.00-404.00MHz(0%)","404.00-417.00MHz(0%)","417.00-420.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "420.00-450.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["420.00-431.00MHz(0%)","431.00-444.00MHz(0%)","444.00-450.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "450.00-480.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["450.00-457.00MHz(0%)","457.00-470.00MHz(0%)","470.00-480.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "480.00-510.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["480.00-483.00MHz(0%)","483.00-496.00MHz(0%)","496.00-509.00MHz(0%)","509.00-510.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "510.00-540.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["510.00-522.00MHz(0%)","522.00-535.00MHz(0%)","535.00-540.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "540.00-570.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["540.00-548.00MHz(0%)","548.00-561.00MHz(0%)","561.00-570.00MHz(0%)"]
                     }
                  }
               },
               {
                  range: "570.00-600.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["570.00-574.00MHz(0%)","574.00-587.00MHz(0%)","587.00-600.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "600.00-630.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["600.00-613.00MHz(0%)","613.00-626.00MHz(0%)","626.00-630.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "630.00-660.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["630.00-639.00MHz(0%)","639.00-652.00MHz(0%)","652.00-660.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "660.00-690.00MHz",
                  result: {
                  utilization: "0%",
                  frequencies: {
                     utilized: [],
                     notutilized: ["660.00-665.00MHz(0%)","665.00-678.00MHz(0%)","678.00-690.00MHz(0%)"]
                     }
                  }
               },
               {
                  range: "690.00-720.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["690.00-691.00MHz(0%)","691.00-704.00MHz(0%)","704.00-717.00MHz(0%)","717.00-720.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "720.00-750.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["720.00-731.00MHz(0%)","731.00-744.00MHz(0%)","744.00-750.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "750.00-780.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["750.00-757.00MHz(0%)","757.00-770.00MHz(0%)","770.00-780.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "780.00-810.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["780.00MHz-783.00MHz(0%)","783MHz- 796MHz(0%)","796MHz-809MHz(0%)","809MHz-810MHz(0%)"]
                  }
                  }
               },
               {
                  range: "810.00-840.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["810.00-822.00MHz(0%)","822.00-835.00MHz(0%)","835.00-840.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "840.00-870.00MHz",
                  result: {
                  utilization: "0",
                  frequencies: {
                     utilized: [],
                     notutilized: ["840.00-848.00MHz(0%)","848.00-861.00MHz(0%)","861.00-870.00MHz(0%)"]
                  }
                  }
               },
               {
                  range: "870.00-900.00MHz",
                  result: {
                  utilization: "66.65%",
                  frequencies: {
                     utilized: ["870MHz- 874MHz(0%)", "874MHz- 887MHz(99.98%)", "887MHz- 900MHz(99.97%)"],
                     notutilized: [""]
                  }
                  }
               },
               {
                  range: "900.00-930.00MHz",
                  result: {
                  utilization: "99.96",
                  frequencies: {
                     utilized: ["900MHz- 913MHz(99.96%)","913MHz- 926MHz(99.96%)","926MHz- 930MHz(99.95%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "930.00-960.00MHz",
                  result: {
                  utilization: "99.92",
                  frequencies: {
                     utilized: ["930MHz-939MHz(99.95%)", "939MHz- 952MHz(99.95%)","952MHz-960MHz(99.86%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "960.00-990.00MHz",
                  result: {
                  utilization: "39.32",
                  frequencies: {
                     utilized: ["960MHz-965MHz(99.86%)","965MHz- 978MHz(99.82%)","978MHz-990MHz(99.8%)"],
                     notutilized: []
                     }
                  }
               },
               {
                  range: "990.00-1020.00MHz",
                  result: {
                  utilization: "99.8",
                  frequencies: {
                     utilized: ["990.00-991.00MHz (99.8%)","991.00-1000.00MHz(99.79%)","1000.00-1020.00MHz(99.81%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1020.00-1050.00MHz",
                  result: {
                  utilization: "99.84",
                  Frequencies : {
                     utilized: ["1020.00-1030.00MHz(99.83%)","1030.00-1040.00MHz(99.85%)","1040.00-1050.00MHz(99.89%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1050.00-1080.00MHz",
                  result: {
                  utilization: "99.91",
                  frequencies: {
                     utilized: ["1050.00-1060.00MHz(99.89)", ,"1060.00-1070.00MHz(99.91%)","1070.00-1080.00MHz(99.92%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1080.00-1110.00MHz",
                  result: {
                  utilization: "99.94",
                  frequencies: {
                     utilized: ["1080.00-1100.00MHz(99.94%)", "1100.00-1110.00MHz(99.95%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1110.00-1140.00MHz",
                  result: {
                  utilization: "99.96",
                  frequencies: {
                     utilized: ["1110.00-1120.00MHz(99.95%)", "1120.00-1130.00MHz(99.96%)", "1130.00-1140.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1140.00-1170.00MHz",
                  result: {
                  utilization: "99.97",
                  frequencies: {
                     utilized: ["1140.00-1150.00MHz(99.97%)", "1150.00-1160.00MHz(99.97%)", "1160.00-1170.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1170.00-1200.00MHz",
                  result: {
                  utilization: "99.97",
                  frequencies: {
                     utilized: ["1170.00-1190.00MHz(99.97%)","1190.00-1200.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1200.00-1230.00MHz",
                  result: {
                  utilization: "99.97",
                  frequencies: {
                     utilized: ["1200.00-1210.00MHz(99.97%)", "1210.00-1230.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1230.00-1260.00MHz",
                  result: {
                  utilization: "99.96",
                  frequencies: {
                     utilized: ["1230.00-1240.00MHz(99.96%)", "1240.00-1250.00MHz(99.96%)", "1250.00-1260.00MHz(99.96%)",],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1260.00-1290.00MHz",
                  result: {
                  utilization: "99.95",
                  frequencies: {
                     utilized: ["1260.00-1270.00MHz(99.96%)","1270.00-1280.00MHz(99.95%)", "1280.00-1290.00MHz(99.94%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1290.00-1320.00MHz",
                  result: {
                  utilization: "99.93",
                  frequencies: {
                     utilized: ["1290.00-1300.00MHz(99.93%)", "1300.00-1320.00MHz(99.92%)"],
                     notutilized: []
                     }
                  }
               },
               {
                  range: "1320.00-1350.00MHz",
                  result: {
                  utilization: "99.93",
                  frequencies: {
                     utilized: ["1320.00-1330.00MHz(99.92%)", "1330.00-1340.00MHz(99.93%)", "1340.00-1350.00MHz(99.93%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1350.00-1380.00MHz",
                  result: {
                  utilization: "99.94",
                  frequencies: {
                     utilized: ["1350.00-1360.00MHz(99.93%)","1360.00-1370.00MHz(99.94%)", "1370.00-1380.00MHz(99.95%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1380.00-1410.00MHz",
                  result: {
                  utilization: "99.96",
                  frequencies: {
                     utilized: ["1380.00-1400.00MHz(99.96%)","1400.00-1410.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1410.00-1440.00MHz",
                  result: {
                  utilization: "99.97",
                  frequencies: {
                     utilized: ["1410.00-1420.00MHz(99.97%)","1420.00-1430.00MHz(99.97%)","1430.00-1440.00MHz(99.98%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1440.00-1470.00MHz",
                  result: {
                  utilization: "99.98",
                  frequencies: {
                     utilized: ["1440.00-1450.00MHz(99.98%)", "1450.00-1460.00MHz(99.98%)", "1460.00-1470.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1470.00-1500.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1470.00-1490.00MHz(99.99%)", "1490.00-1500.00MHz(99.99%)"],
                     notutilized: []
                     }
                  }
               },
               {
                  range: "1500.00-1530.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1500.00-1510.00MHz(99.99%)","1510.00-1530.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1530.00-1560.00MHz",
                  result: {
                  utilization: "99.98%",
                  frequencies: {
                     utilized: ["1530.00-1540.00MHz(99.99%)", "1540.00-1550.00MHz(99.99%)", "1550.00-1560.00MHz(99.98%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1560.00-1590.00MHz",
                  result: {
                  utilization: "99.97%",
                  frequencies: {
                     utilized: ["1560.00-1570.00MHz(99.98%)", "1570.00-1580.00MHz(99.97%)","1580.00-1590.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1590.00-1620.00MHz",
                  result: {
                  utilization: "99.96%",
                  frequencies: {
                     utilized: ["1590.00-1600.00MHz(99.96%)", "1600.00-1620.00MHz(99.95%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1620.00-1650.00MHz",
                  result: {
                  utilization: "99.96%",
                  frequencies: {
                     utilized: ["1620.00-1630.00MHz(99.95%)", "1630.00-1640.00MHz(99.96%)", "1640.00-1650.00MHz(99.96%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1650.00-1680.00MHz",
                  result: {
                  utilization: "99.96%",
                  frequencies: {
                     utilized: ["1650.00-1660.00MHz(99.96%)", "1660.00-1670.00MHz(99.96%)","1670.00-1680.00MHz(99.97%)"],
                     notutilized: []
                     }
                  }
               },
               {
                  range: "1680.00-1710.00MHz",
                  result: {
                  utilization: "99.97%",
                  frequencies: {
                     utilized: ["1680.00-1700.00MHz(99.98%)", "1700.00-1710.00MHz(99.98%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1710.00-1740.00MHz",
                  result: {
                  utilization: "99.98",
                  frequencies: {
                     utilized: ["1710.00-1720.00MHz(99.98%)", "1720.00-1730.00MHz(99.99%)", "1730.00-1740.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1740.00-1770.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1740.00-1750.00MHz(99.99%)","1750.00-1760.00MHz(99.99%)", "1760.00-1770.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1770.00-1800.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1770.00-1790.00MHz(99.99%)","1790.00-1800.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1800.00-1830.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1800.00-1810.00MHz(99.99%)","1810.00-1830.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1830.00-1860.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1830.00-1840.00MHz(99.99%)", "1840.00-1850.00MHz(99.99%)", "1850.00-1860.00MHz(99.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1860.00-1890.00MHz",
                  result: {
                  utilization: "99.98%",
                  frequencies: {
                     utilized: ["1860.00-1870.00MHz(99.99%)", "1870.00-1880.00MHz(99.98%)", "1880.00-1890.00MHz(99.98%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1890.00-1920.00MHz",
                  result: {
                  utilization: "99.98%",
                  frequencies: {
                     utilized: ["1890.00-1900.00MHz(99.98%)", "1900.00-1920.00MHz(99.97%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1920.00-1950.00MHz",
                  result: {
                  utilization: "99.99%",
                  frequencies: {
                     utilized: ["1920.00-1930.00MHz(100%)","1930.00-1940.00MHz(100%)", "1940.00-1950.00MHz(100%)"],
                     notutilized: []
                     }
                  }
               },
               {
                  range: "1950.00-1980.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["1950.00-1960.00MHz(100%)","1960.00-1970.00MHz(100%)", "1970.00-1980.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "1980.00-2010.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["1980.00-2000.00MHz(100%)", "2000.00-2010.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2010.00-2040.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["2010.00-2020.00MHz(100%)","2020.00-2030.00MHz(100%)", "2030.00-2040.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2040.00-2070.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["2040.00-2050.00MHz(100%)", "2050.00-2060.00MHz(100%)", "2060.00-2070.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2070.00-2100.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["2070.00-2090.00MHz(100%)", "2090.00-2100.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2100.00-2130.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["2100.00-2110.00MHz(100%)", "2110.00-2130.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2130.00-2160.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["2130.00-2140.00MHz(100%)","2140.00-2150.00MHz(100%)", "2150.00-2160.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2160.00-2190.00MHz",
                  result: {
                  utilization: "100%",
                  frequencies: {
                     utilized: ["2160.00-2170.00MHz(100%)", "2170.00-2180.00MHz(100%)", "2180.00-2190.00MHz(100%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2190.00-2220.00MHz",
                  result: {
                  utilization: "76.53%",
                  frequencies: {
                     utilized: ["2190.00-2200.00MHz(65.04%)", "2200.00-2220.00MHz(65.55%)"],
                     notutilized: []
                     }
                  }
               },
               {
                  range: "2220.00-2250.00MHz",
                  result: {
                  utilization: "63.43%",
                  frequencies: {
                     utilized: ["2220.00-2230.00MHz(63.87%)", "2230.00-2240.00MHz(63%)", "2240.00-2250.00MHz(62.31%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2250.00-2280.00MHz",
                  result: {
                  utilization: "61.55%",
                  frequencies: {
                     utilized: ["2250.00-2260.00MHz(62.31%)", "2260.00-2270.00MHz(61.48%)", "2270.00-2280.00MHz(60.86%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2280.00-2310.00MHz",
                  result: {
                  utilization: "60.33%",
                  frequencies: {
                     utilized: ["2280.00-2300.00MHz(60.19%)", "2300.00-2310.00MHz(59.95%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2310.00-2340.00MHz",
                  result: {
                  utilization: "61.13%",
                  frequencies: {
                     utilized: ["2310.00-2320.00MHz(60.11%)", "2320.00-2330.00MHz(61.21%)", "2330.00-2340.00MHz(63.27%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2340.00-2370.00MHz",
                  result: {
                  utilization: "64.93%",
                  frequencies: {
                     utilized: ["2340.00-2350.00MHz(63.27%)", "2350.00-2360.00MHz(64.95%)","2360.00-2370.00MHz(66.58%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2370.00-2400.00MHz",
                  result: {
                  utilization: "68.43%",
                  frequencies: {
                     utilized: ["2370.00-2390.00MHz(68.37%)", "2390.00-2400.00MHz(70.34%)"],
                     notutilized: []
                  }
                  }
                  },
               {
                  range: "2400.00-2430.00MHz",
                  result: {
                  utilization: "71.63%",
                  frequencies: {
                     utilized: ["2400.00-2410.00MHz(72.23%)", "2410.00-2430.00MHz(72.32%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2430.00-2460.00MHz",
                  result: {
                  utilization: "72.57%",
                  frequencies: {
                     utilized: ["2430.00-2440.00MHz(72.64%)", "2440.00-2450.00MHz(72.58%)", "2450.00-2460.00MHz(72.76%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2460.00-2490.00MHz",
                  result: {
                  utilization: "72.77%",
                  frequencies: {
                     utilized: ["2460.00-2470.00MHz(72.76%)", "2470.00-2480.00MHz(72.63%)" , "2480.00-2490.00MHz(72.93%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2490.00-2520.00MHz",
                  result: {
                  utilization: "73.73%",
                  frequencies: {
                     utilized: ["2490.00-2500.00MHz(73.64%)" ,"2500.00-2520.00MHz(74.61%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2520.00-2550.00MHz",
                  result: {
                  utilization: "75.91%",
                  frequencies: {
                     utilized: [ "2520.00-2530.00MHz(75.70%)", "2530.00-2540.00MHz(76,51%)" , "2540.00-2550.00MHz(76.81%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2550.00-2580.00MHz",
                  result: {
                  utilization: "77.14%",
                  frequencies: {
                     utilized: [ "2550.00-2560.00MHz(76.81%)" , "2560.00-2570.00MHz(77.31%)" , "2570.00-2580.00MHz(77.31%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2580.00-2610.00MHz",
                  result: {
                  utilization: "77.15%",
                  frequencies: {
                     utilized: [ "2580.00-2600.00MHz(77.14%)", "2600.00-2610.00MHz(76.99%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2610.00-2640.00MHz",
                  result: {
                  utilization: "82.07%",
                  frequencies: {
                     utilized: ["2610.00-2620.00MHz(82.66%)","2620.00-2630.00MHz(83.89%)", "2630.00-2640.00MHz(84.72%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2640.00-2670.00MHz",
                  result: {
                  utilization: "83.21%",
                  frequencies: {
                     utilized: ["2640.00-2650.00MHz(84.72%)", "2650.00-2660.00MHz(83.17%)","2660.00-2670.00MHz(81.75%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2670.00-2700.00MHz",
                  result: {
                  utilization: "79.06%",
                  frequencies: {
                     utilized: ["2670.00-2690.00MHz(81.24%)", "2690.00-2700.00MHz(74.19%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2700.00-2730.00MHz",
                  result: {
                  utilization: "74.46%",
                  frequencies: {
                     utilized: ["2700.00-2710.00MHz(74.25%)","2710.00-2730.00MHz(74.93%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2730.00-2760.00MHz",
                  result: {
                  utilization: "76.47%",
                  frequencies: {
                     utilized: ["2730.00-2740.00MHz(75.93%)","2740.00-2750.00MHz(76.95%)","2750.00-2760.00MHz(78.05%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2760.00-2790.00MHz",
                  result: {
                  utilization: "79.27%",
                  frequencies: {
                     utilized: ["2760.00-2770.00MHz(78.05%)", "2770.00-2780.00MHz(79.28%)", "2780.00-2790.00MHz(80.48%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2790.00-2820.00MHz",
                  result: {
                  utilization: "81.88%",
                  frequencies: {
                     utilized: ["2790.00-2800.00MHz(81.79%)","2800.00-2820.00MHz(83.36%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2820.00-2850.00MHz",
                  result: {
                  utilization: "85.05%",
               frequencies: {
                     utilized: ["2820.00-2830.00MHz(84.76%)", "2830.00-2840.00MHz(85.69%)","2840.00-2850.00MHz(86.38%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2850.00-2880.00MHz",
                  result: {
                  utilization: "86.70%",
                  frequencies: {
                     utilized: ["2850.00-2860.00MHz(86.38%)","2860.00-2870.00MHz(86.77%)","2870.00-2880.00MHz(86.96%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2880.00-2910.00MHz",
                  result: {
                  utilization: "86.25%",
                  frequencies: {
                     utilized: ["2880.00-2900.00MHz(85.96%)", "2900.00-2910.00MHz(85.85%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2910.00-2940.00MHz",
                  result: {
                  utilization: "85.23%",
                  frequencies: {
                     utilized: ["2910.00-2920.00MHz(85.51%)", "2920.00-2930.00MHz(85.03%)", "2930.00-2940.00MHz(84.52%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2940.00-2970.00MHz",
                  result: {
                  utilization: "84.28%",
                  frequencies: {
                     utilized: ["2940.00-2950.00MHz(84.52%)","2950.00-2960.00MHz(84.24%)", "2960.00-2970.00MHz(84.08%)"],
                     notutilized: []
                  }
                  }
               },
               {
                  range: "2970.00-3000.00MHz",
                  result: {
                  utilization: "69.38%",
                  frequencies: {
                     utilized: ["2970.00-2990.00MHz(83.88%)","2990.00-3000.00MHz(40.17%)"],
                     notutilized: []
                  }
                  }
               }
            ]
         },
               //3ghz to 6ghz
      {
               range: "3GHZ-6GHZ",
               subbands : [
                  { range: "3000.00MHz-3030.00MHz", result: { utilization: "42.02", frequencies: { utilized: ["3000.00MHz-3010.00MHz(40.17%)","3010.00MHz-3030.00MHz(41.62%)"], notutilized: [] } } },
                  { range: "3030.00MHz-3060.00MHz", result: { utilization: "47.01", frequencies: { utilized: ["3030.00MHz-3040.00MHz(44.27%)",  "3040.00MHz-3050.00MHz(46.72%)", "3050.00MHz-3060.00MHz(47.76%)"], notutilized: [] } } },
                  { range: "3060.00MHz-3090.00MHz", result: { utilization: "50.76", frequencies: { utilized: ["3060.00MHz-3070.00MHz(49.28%)","3070.00MHz-3080.00MHz(50.65%)","3080.00MHz-3090.00MHz(52.36%)"], notutilized: [] } } },
                  { range: "3090.00MHz-3120.00MHz", result: { utilization: "54.14", frequencies: { utilized: ["3090.00MHz-3010.00MHz(54.15%)", "3100.00MHz-3120.00MHz(55.9%)"], notutilized: [] } } },
                  { range: "3120.00MHz-3150.00MHz", result: { utilization: "58.68", frequencies: { utilized: ["3120.00MHz-3130.00MHz(57.87%)", "3130.00MHz-3140.00MHz(59.61%)","3140.00MHz-3150.00MHz(61.31%)"], notutilized: [] } } },
                  { range: "3150.00MHz-3180.00MHz", result: { utilization: "61.62", frequencies: { utilized: ["3150.00MHz-3160.00MHz(61.33%)", "3160.00MHz-3170.00MHz(62.1%)",  "3170.00MHz-3180.00MHz(61.44%)"], notutilized: [] } } },
                  { range: "3180.00MHz-3210.00MHz", result: { utilization: "62.39", frequencies: { utilized: ["3180.00MHz-3200.00MHz(62.65%)","3200.00MHz-3210.00MHz(63.08%)"],notutilized: [] } } },
                  { range: "3210.00MHz-3240.00MHz", result: { utilization: "63.83", frequencies: { utilized: ["3210.00MHz-3220.00MHz(63.73%)", "3220.00MHz-3230.00MHz(64.26%)", "3230.00MHz-3240.00MHz(64.25%)"], notutilized: [] } } },
                  { range: "3240.00MHz-3270.00MHz", result: { utilization: "64.19", frequencies: { utilized: ["3240.00MHz-3250.00MHz(64.25%)", "3250.00MHz-3260.00MHz(64.28%)", "3260.00MHz-3270.00MHz(64.04%)"], notutilized: [] } } },
                  { range: "3270.00MHz-3300.00MHz", result: { utilization: "63.74", frequencies: { utilized: ["3270.00MHz-3290.00MHz(63.72%)", "3290.00MHz-3300.00MHz(63.45%)"], notutilized: [] } } },
                  { range: "3300.00MHz-3330.00MHz", result: { utilization: "63.23", frequencies: { utilized: ["3300.00MHz-3310.00MHz(63.16%)", "3310.00MHz-3330.00MHz(63.08%)"], notutilized: [] } } },
                  { range: "3330.00MHz-3360.00MHz", result: { utilization: "63.31", frequencies: { utilized: ["3330.00MHz-3340.00MHz(63.10%)", "3340.00MHz-3350.00MHz(63.55%)","3350.00MHz-3360.00MHz(63.51%)"], notutilized: [] } } },
                  { range: "3360.00MHz-3390.00MHz", result: { utilization: "63.60", frequencies: { utilized: ["3360.00MHz-3370.00MHz(63.51%)", "3370.00MHz-3380.00MHz(63.61%)",  "3380.00MHz-3390.00MHz(63.68%)"], notutilized: [] } } },
                  { range: "3390.00MHz-3420.00MHz", result: { utilization: "63.78", frequencies: { utilized: ["3390.00MHz-3400.00MHz(63.69%)", "3400.00MHz-3420.00MHz(63.97%)"], notutilized: [] } } },
                  { range: "3420.00MHz-3450.00MHz", result: { utilization: "64.12", frequencies: { utilized: ["3420.00MHz-3430.00MHz(64.22%)", "3430.00MHz-3440.00MHz(64.43%)", "3440.00MHz-3450.00MHz(63.86%)"], notutilized: [] } } },
                  { range: "3450.00MHz-3480.00MHz", result: { utilization: "62.79", frequencies: { utilized: ["3450.00MHz-3460.00MHz(63.86%)", "3460.00MHz-3470.00MHz(63.19%)", "3470.00MHz-3480.00MHz(61.33%)"], notutilized: [] } } },
                  { range: "3480.00MHz-3510.00MHz", result: { utilization: "63.58", frequencies: { utilized: ["3480.00MHz-3500.00MHz(62.59%)","3500.00MHz-3510.00MHz(66.83%)"], notutilized: [] } } },
                  { range: "3510.00MHz-3540.00MHz", result: { utilization: "65.65", frequencies: { utilized: ["3510.00MHz-3520.00MHz(63.55%)",   "3520.00MHz-3530.00MHz(64.56%)", "3530.00MHz-3540.00MHz(67.66%)"], notutilized: [] } } },
                  { range: "3540.00MHz-3570.00MHz", result: { utilization: "66.20", frequencies: { utilized: ["3540.00MHz-3550.00MHz(67.66%)", "3550.00MHz-3560.00MHz(64.08%)", "3560.00MHz-3570.00MHz(66.86%)"], notutilized: [] } } },
                  { range: "3570.00MHz-3600.00MHz", result: { utilization: "64.27", frequencies: { utilized: ["3570.00MHz-3590.00MHz(64.96%)", "3590.00MHz-3600.00MHz(70%)",], notutilized: [] } } },
                  { range: "3600.00MHz-3630.00MHz", result: { utilization: "58.36", frequencies: { utilized: ["3600.00MHz-3610.00MHz(57.33%)", "3610.00MHz-3630.00MHz(56.74%)",], notutilized: [] } } },
                  { range: "3630.00MHz-3660.00MHz", result: { utilization: "53.71", frequencies: { utilized: ["3630.00MHz-3640.00MHz(55.31%)", "3640.00MHz-3650.00MHz(52.76%)", "3650.00MHz-3660.00MHz(50.04%)"], notutilized: [] } } },
                  { range: "3660.00MHz-3690.00MHz", result: { utilization: "48.39", frequencies: { utilized: ["3660.00MHz-3670.00MHz(50.04%)", "3670.00MHz-3680.00MHz(48.28%)", "3680.00MHz-3690.00MHz(46.85%)"], notutilized: [] } } },
                  { range: "3690.00MHz-3720.00MHz", result: { utilization: "45.77", frequencies: { utilized: ["3690.00MHz-3700.00MHz(45.61%)","3700.00MHz-3720.00MHz(44.86%)"], notutilized: [] } } },
                  { range: "3720.00MHz-3750.00MHz", result: { utilization: "44.80", frequencies: { utilized: ["3720.00MHz-3730.00MHz(44.57%)","3730.00MHz-3740.00MHz(44.56%)", "3740.00MHz-3750.00MHz(45.21%)"], notutilized: [] } } },
                  { range: "3750.00MHz-3780.00MHz", result: { utilization: "46.19", frequencies: { utilized: ["3750.00MHz-3760.00MHz(45.21%)",  "3760.00MHz-3770.00MHz(46.18%)", "3770.00MHz-3780.00MHz(47.17%)"], notutilized: [] } } },
                  { range: "3780.00MHz-3810.00MHz", result: { utilization: "48.90", frequencies: { utilized: ["3780.00MHz-3800.00MHz(48.8%)","3800.00MHz-3810.00MHz(50.72 %)"], notutilized: [] } } },
                  { range: "3810.00MHz-3840.00MHz", result: { utilization: "53.08", frequencies: { utilized: ["3810.00MHz-3820.00MHz(52.53%)","3820.00MHz-3830.00MHz(53.82%)","3830.00MHz-3840.00MHz(55.24%)"], notutilized: [] } } },
                  { range: "3840.00MHz-3870.00MHz", result: { utilization: "56.79", frequencies: { utilized: ["3840.00MHz-3850.00MHz(55.24%)", "3850.00MHz-3860.00MHz(56.83%)", "3860.00MHz-3870.00MHz(58.29%)"], notutilized: [] } } },
                  { range: "3870.00MHz-3900.00MHz", result: { utilization: "58.17", frequencies: { utilized: ["3870.00MHz-3890.00MHz(58.34%)", "3890.00MHz-3900.00MHz(57.89%)",], notutilized: [] } } },
                  { range: "3900.00MHz-3930.00MHz", result: { utilization: "56.54", frequencies: { utilized: ["3900.00MHz-3910.00MHz(56.77%)", "3910.00MHz-3930.00MHz(54.95%)"], notutilized: [] } } },
                  { range: "3930.00MHz-3960.00MHz", result: { utilization: "52.67", frequencies: { utilized: ["3930.00MHz-3940.00MHz(53.3%)", "3940.00MHz-3950.00MHz(51.7%)", "3950.00MHz-3960.00MHz(50.73%)"], notutilized: [] } } },
                  { range: "3960.00MHz-3990.00MHz", result: { utilization: "50.7", frequencies: { utilized: ["3960.00MHz-3970.00MHz(50.73%)",  "3970.00MHz-3980.00MHz(50.35%)", "3980.00MHz-3990.00MHz(51.02%)"], notutilized: [] } } },
                  { range: "3990.00MHz-4020.00MHz", result: { utilization: "51.78", frequencies: { utilized: [ "3990.00MHz-4000.00MHz(51.65%)",  "4000.00MHz-4020.00MHz(52.68%)"], notutilized: [] } } },
                  { range: "4020.00MHz-4050.00MHz", result: { utilization: "55.41", frequencies: { utilized: ["4020.00MHz-4030.00MHz(54.28%)", "4030.00MHz-4040.00MHz(56.36%)", "4040.00MHz-4050.00MHz(58.32%)"], notutilized: [] } } },
                  { range: "4050.00MHz-4080.00MHz", result: { utilization: "60.57", frequencies: { utilized: ["4050.00MHz-4060.00MHz(58.32%)", "4060.00MHz-4070.00MHz(60.67%)", "4070.00MHz-4080.00MHz(62.72%)"], notutilized: [] } } },
                  { range: "4080.00MHz-4110.00MHz", result: { utilization: "63.68", frequencies: { utilized: ["4080.00MHz-4100.00MHz(63.83%)", "4100.00MHz-4110.00MHz(64.51%)"], notutilized: [] } } },
                  { range: "4110.00MHz-4140.00MHz", result: { utilization: "65.66", frequencies: { utilized: ["4110.00MHz-4120.00MHz(65.17%)", "4120.00MHz-4130.00MHz(66.11%)", "4130.00MHz-4140.00MHz(66.84%)"], notutilized: [] } } },
                  { range: "4140.00MHz-4170.00MHz", result: { utilization: "68.86", frequencies: { utilized: ["4140.00MHz-4150.00MHz(66.84%)","4150.00MHz-4160.00MHz(68.93%)","4160.00MHz-4170.00MHz(70.82%)"], notutilized: [] } } },
                  { range: "4170.00MHz-4200.00MHz", result: { utilization: "71.87", frequencies: { utilized: ["4170.00MHz-4190.00MHz(71.8%)", "4190.00MHz-4200.00MHz(72.99%)"], notutilized: [] } } },
                  { range: "4200.00MHz-4230.00MHz", result: { utilization: "73.74", frequencies: { utilized: [ "4200.00MHz-4210.00MHz(73.79%)" , "4210.00MHz-4230.00MHz(74.46%)"], notutilized: [] } } },
                  { range: "4230.00MHz-4260.00MHz", result: { utilization: "76.57", frequencies: { utilized: ["4230.00MHz-4240.00MHz(76%)","4240.00MHz-4250.00MHz(77.38%)", "4250.00MHz-4260.00MHz(78.46%)"], notutilized: [] } } },
                  { range: "4260.00MHz-4290.00MHz", result: { utilization: "79.51", frequencies: { utilized: ["4260.00MHz-4270.00MHz(78.48%)",  "4270.00MHz-4280.00MHz(79.78%)", "4280.00MHz-4290.00MHz(80.28%)"], notutilized: [] } } },
                  { range: "4290.00MHz-4320.00MHz", result: { utilization: "80.92", frequencies: { utilized: ["4290.00MHz-4300.00MHz(80.8%)",  "4300.00MHz-4320.00MHz(81.67%)",], notutilized: [] } } },
                  { range: "4320.00MHz-4350.00MHz", result: { utilization: "83.47", frequencies: { utilized: ["4320.00MHz-4330.00MHz(82.74%)", "4330.00MHz-4340.00MHz(83.84%)", "4340.00MHz-4350.00MHz(85.64%)"], notutilized: [] } } },
                  { range: "4350.00MHz-4380.00MHz", result: { utilization: "86.62", frequencies: { utilized: ["4350.00MHz-4360.00MHz(85.64%)", "4360.00MHz-4370.00MHz(86.46%)","4370.00MHz-4380.00MHz(87.76%)"], notutilized: [] } } },
                  { range: "4380.00MHz-4410.00MHz", result: { utilization: "88.79", frequencies: { utilized: ["4380.00MHz-4400.00MHz(88.79%)", "4400.00MHz-4410.00MHz(89.83%)",], notutilized: [] } } },
                  { range: "4410.00MHz-4440.00MHz", result: { utilization: "91.18", frequencies: { utilized: ["4410.00MHz-4420.00MHz(90.74%)" ,"4420.00MHz-4430.00MHz(91.76%)", "4430.00MHz-4440.00MHz(92.41%)",], notutilized: [] } } },
                  { range: "4440.00MHz-4470.00MHz", result: { utilization: "93.28", frequencies: { utilized: ["4440.00MHz-4450.00MHz(92.41%)", "4450.00MHz-4460.00MHz(93.42%)", "4460.00MHz-4470.00MHz(94.01%)",], notutilized: [] } } },
                  { range: "4470.00MHz-4500.00MHz", result: { utilization: "94.48", frequencies: { utilized: ["4470.00MHz-4490.00MHz(94.53%)", "4490.00MHz-4500.00MHz(94.88%)"] ,notutilized: [] } } },
                  { range: "4500.00MHz-4530.00MHz", result: { utilization: "95.05", frequencies: { utilized: ["4500.00MHz-4510.00MHz(95.10%)", "4510.00MHz-4530.00MHz(95.15%)",], notutilized: [] } } },
                  { range: "4530.00MHz-4560.00MHz", result: { utilization: "95.06", frequencies: { utilized: ["4530.00MHz-4540.00MHz(95.12%)", "4540.00MHz-4550.00MHz(95.02%)", "4550.00MHz-4560.00MHz(94.92%)"], notutilized: [] } } },
                  { range: "4560.00MHz-4590.00MHz", result: { utilization: "94.77", frequencies: { utilized: ["4560.00MHz-4570.00MHz(94.92%)", "4570.00MHz-4580.00MHz(94.78%)","4580.00MHz-4590.00MHz(94.61%)"], notutilized: [] } } },
                  { range: "4590.00MHz-4620.00MHz", result: { utilization: "94.24", frequencies: { utilized: ["4590.00MHz-4600.00MHz(94.27%)","4600.00MHz-4620.00MHz(93.84%)"], notutilized: [] } } },
                  { range: "4620.00MHz-4650.00MHz", result: { utilization: "93.22", frequencies: { utilized: ["4620.00MHz-4630.00MHz(93.35%)", "4630.00MHz-4640.00MHz(92.93%)","4640.00MHz-4650.00MHz(92.76%)"], notutilized: [] } } },
                  { range: "4650.00MHz-4680.00MHz", result: { utilization: "92.73", frequencies: { utilized: ["4650.00MHz-4660.00MHz(92.76%)", "4660.00MHz-4670.00MHz(92.71%)", "4670.00MHz-4680.00MHz(92.73%)"], notutilized: [] } } },
                  { range: "4680.00MHz-4710.00MHz", result: { utilization: "92.92", frequencies: { utilized: ["4680.00MHz-4700.00MHz(92.89%)", "4700.00MHz-4710.00MHz(93.14%)",], notutilized: [] } } },
                  { range: "4710.00MHz-4740.00MHz", result: { utilization: "93.86", frequencies: { utilized: ["4710.00MHz-4720.00MHz(93.49%)", "4720.00MHz-4730.00MHz(94.01%)", "4730.00MHz-4740.00MHz(94.81%)"], notutilized: [] } } },
                  { range: "4740.00MHz-4770.00MHz", result: { utilization: "95.56", frequencies: { utilized: ["4740.00MHz-4750.00MHz(94.81%)", "4750.00MHz-4760.00MHz(95.57%)", "4760.00MHz-4770.00MHz(96.29%)"], notutilized: [] } } },
                  { range: "4770.00MHz-4800.00MHz", result: { utilization: "96.84", frequencies: { utilized: ["4770.00MHz-4790.00MHz(96.88%)", "4790.00MHz-4800.00MHz(97.36%)"], notutilized: [] } } },
                  { range: "4800.00MHz-4830.00MHz", result: { utilization: "97.62", frequencies: { utilized: ["4800.00MHz-4810.00MHz(97.66%)", "4810.00MHz-4830.00MHz(97.85%)"], notutilized: [] } } },
                  { range: "4830.00MHz-4860.00MHz", result: { utilization: "97.98", frequencies: { utilized: ["4830.00MHz-4840.00MHz(97.97%)","4840.00MHz-4850.00MHz(98.04%)", "4850.00MHz-4860.00MHz(98.05%)"], notutilized: [] } } },
                  { range: "4860.00MHz-4890.00MHz", result: { utilization: "98.03", frequencies: { utilized: ["4860.00MHz-4870.00MHz(98.05%)", "4870.00MHz-4880.00MHz(98.04%)", "4880.00MHz-4890.00MHz(97.99%)"], notutilized: [] } } },
                  { range: "4890.00MHz-4920.00MHz", result: { utilization: "97.94", frequencies: { utilized: ["4890.00MHz-4900.00MHz(97.93%)",  "4900.00MHz-4920.00MHz(97.91%)"], notutilized: [] } } },
                  { range: "4920.00MHz-4950.00MHz", result: { utilization: "98.02", frequencies: { utilized: ["4920.00MHz-4930.00MHz(97.88%)", "4930.00MHz-4940.00MHz(98.01%)", "4940.00MHz-4950.00MHz(98.29%)"], notutilized: [] } } },
                  { range: "4950.00MHz-4980.00MHz", result: { utilization: "98.56", frequencies: { utilized: ["4950.00MHz-4960.00MHz(98.29%)",  "4960.00MHz-4970.00MHz(98.59%)", "4970.00MHz-4980.00MHz(98.82%)"], notutilized: [] } } },
                  { range: "4980.00MHz-5010.00MHz", result: { utilization: "98.99", frequencies: { utilized: ["4980.00MHz-5000.00MHz(99%)",  "5000.00MHz-5010.00MHz(99.15%)"], notutilized: [] } } },
                  { range: "5010.00MHz-5040.00MHz", result: { utilization: "99.37", frequencies: { utilized: ["5010.00MHz-5020.00MHz(99.31%)",  "5020.00MHz-5030.00MHz(99.46%)", "5030.00MHz-5040.00MHz(99.56%)"], notutilized: [] } } },
                  { range: "5040.00MHz-5070.00MHz", result: { utilization: "99.65", frequencies: { utilized: ["5040.00MHz-5050.00MHz(99.56%)",  "5050.00MHz-5060.00MHz(99.65%)", "5060.00MHz-5070.00MHz(99.73%)"], notutilized: [] } } },
                  { range: "5070.00MHz-5100.00MHz", result: { utilization: "99.79", frequencies: { utilized: ["5070.00MHz-5090.00MHz(99.8%)",  "5090.00MHz-5100.00MHz(99,84%)"], notutilized: [] } } },
                  { range: "5100.00MHz-5130.00MHz", result: { utilization: "99.88", frequencies: { utilized: ["5100.00MHz-5110.00MHz(99.88%)", "5110.00MHz-5130.00MHz(99.91%)"], notutilized: [] } } },
                  { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5130.00MHz-5140.00MHz(99.92%)", "5140.00MHz-5150.00MHz(99.94%)", "5150.00MHz-5160.00MHz(99.95%)"], notutilized: [] } } },
                  { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5160.00MHz-5170.00MHz(99.95%)",  "5170.00MHz-5180.00MHz(99.95%)","5180.00MHz-5190.00MHz(99.96%)"], notutilized: [] } } },
                  { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5190.00MHz-5200.00MHz(99.96%)",  "5200.00MHz-5220.00MHz(99.97%)"], notutilized: [] } } },
                  { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5220.00MHz-5230.00MHz(99,97%)",  "5230.00MHz-5240.00MHz(99.96%)", "5240.00MHz-5250.00MHz(99.96%)"], notutilized: [] } } },
                  { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.95", frequencies: { utilized: ["5250.00MHz-5260.00MHz(99.96%)",  "5260.00MHz-5270.00MHz(99.95%)","5270.00MHz-5280.00MHz(99.95%)"], notutilized: [] } } },
                  { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.94", frequencies: { utilized: ["5280.00MHz-5300.00MHz(99.94%)",  "5300.00MHz-5310.00MHz(99.93%)",], notutilized: [] } } },
                  { range: "5310.00MHz-5340.00MHz", result: { utilization: "99.91", frequencies: { utilized: ["5310.00MHz-5320.00MHz(99.92%)", "5320.00MHz-5330.00MHz(99.89%)", "5330.00MHz-5340.00MHz(99.88%)"], notutilized: [] } } },
                  { range: "5340.00MHz-5370.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5340.00MHz-5350.00MHz(99.88%)",  "5350.00MHz-5360.00MHz(99.88%)", "5360.00MHz-5370.00MHz(99.87%)"], notutilized: [] } } },
                  { range: "5370.00MHz-5400.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5370.00MHz-5390.00MHz(99.86%)",  "5390.00MHz-5400.00MHz(99.87%)"], notutilized: [] } } },
                  { range: "5400.00MHz-5430.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5400.00MHz-5410.00MHz(99.87%)",  "5410.00MHz-5430.00MHz(99.87%)"], notutilized: [] } } },
                  { range: "5430.00MHz-5460.00MHz", result: { utilization: "", frequencies: { utilized: ["5430.00MHz-5440.00MHz(99.87%)",  "5440.00MHz-5450.00MHz(99.86%)", "5450.00MHz-5460.00MHz(99.87%)"], notutilized: [] } } },
                  { range: "5460.00MHz-5490.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5460.00MHz-5470.00MHz(99.87%)",  "5470.00MHz-5480.00MHz(99.87%)", "5480.00MHz-5490.00MHz(99.99%)"], notutilized: [] } } },
                  { range: "5490.00MHz-5520.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5490.00MHz-5500.00MHz(99.89%)",  "5500.00MHz-5520.00MHz(99.89%)"], notutilized: [] } } },
                  { range: "5520.00MHz-5550.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5520.00MHz-5530.00MHz(99.89%)",  "5530.00MHz-5540.00MHz(99.89%)", "5540.00MHz-5550.00MHz(99.88%)"], notutilized: [] } } },
                  { range: "5550.00MHz-5580.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5550.00MHz-5560.00MHz(99.88%)",  "5560.00MHz-5570.00MHz(99.87%)", "5570.00MHz-5580.00MHz(99.87%)"], notutilized: [] } } },
                  { range: "5580.00MHz-5610.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5580.00MHz-5600.00MHz(99.86%)",  "5600.00MHz-5610.00MHz(99.86%)"], notutilized: [] } } },
                  { range: "5610.00MHz-5640.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5610.00MHz-5620.00MHz(99.85%)", "5620.00MHz-5630.00MHz(99.85%)","5630.00MHz-5640.00MHz(99.86%)"], notutilized: [] } } },
                  { range: "5640.00MHz-5670.00MHz", result: { utilization: "99.86", frequencies: { utilized: ["5640.00MHz-5650.00MHz(99.86%)",  "5650.00MHz-5660.00MHz(99.85%)", "5660.00MHz-5670.00MHz(99.86%)"], notutilized: [] } } },
                  { range: "5670.00MHz-5700.00MHz", result: { utilization: "99.87", frequencies: { utilized: ["5670.00MHz-5690.00MHz(99.87%)",  "5690.00MHz-5700.00MHz(99.88%)"], notutilized: [] } } },
                  { range: "5700.00MHz-5730.00MHz", result: { utilization: "99.9", frequencies: { utilized: ["5700.00MHz-5710.00MHz(99.9%)",  "5710.00MHz-5730.00MHz(99.91%)"], notutilized: [] } } },
                  { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.93", frequencies: { utilized: ["5730.00MHz-5740.00MHz(99.92%)",  "5740.00MHz-5750.00MHz(99.94%)", "5750.00MHz-5760.00MHz(99.95%)"], notutilized: [] } } },
                  { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.96", frequencies: { utilized: ["5760.00MHz-5770.00MHz(99.95%)",  "5770.00MHz-5780.00MHz(99.96%)","5780.00MHz-5790.00MHz(99.98%)"], notutilized: [] } } },
                  { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.98", frequencies: { utilized: ["5790.00MHz-5800.00MHz(99.98%)",  "5800.00MHz-5820.00MHz(99.99%)"], notutilized: [] } } },
                  { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5820.00MHz-5830.00MHz(99.99%)",  "5830.00MHz-5840.00MHz(99.99%)", "5840.00MHz-5850.00MHz(99.99%)"], notutilized: [] } } },
                  { range: "5850.00MHz-5880.00MHz", result: { utilization: "100", frequencies: { utilized: [ "5850.00MHz-5860.00MHz(99.99%)",  "5860.00MHz-5870.00MHz(100%)", "5870.00MHz-5880.00MHz(100%)"], notutilized: [] } } },
                  { range: "5880.00MHz-5910.00MHz", result: { utilization: "100", frequencies: { utilized: ["5880.00MHz-5900.00MHz(100%)",  "5900.00MHz-5910.00MHz(100%)"], notutilized: [] } } },
                  { range: "5910.00MHz-5940.00MHz", result: { utilization: "100", frequencies: { utilized: ["5910.00MHz-5920.00MHz(100%)", "5920.00MHz-5930.00MHz(100%)", "5930.00MHz-5940.00MHz(100%)"], notutilized: [] } } },
                  { range: "5940.00MHz-5970.00MHz", result: { utilization: "100", frequencies: { utilized: ["5940.00MHz-5950.00MHz(100%)",  "5950.00MHz-5960.00MHz(100%)", "5960.00MHz-5970.00MHz(100%)"], notutilized: [] } } },
                  { range: "5970.00MHz-6000.00MHz", result: { utilization: "100", frequencies: { utilized: ["5970.00MHz-5990.00MHz(100%)",  "5990.00MHz-6000.00MHz(100%)"], notutilized: [] } } },
               ]
            },

      ]

      },
  {
      id: 9,
      location: "Owerri",
 bands: [
        //0hz to 30MHz
        {
          range: "100KHZ-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHz - 13.14MHz(100%)"],
              notutilized: ["13.14MHz - 26.19MHz","26.19MHz - 30.00MHz"]
            }
          }
        },
        //30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "0.00",
                "frequencies": {
                  "utilized": [],
                  "notutilized": [
  "30.00MHz - 39.23MHz (0%)",
  "39.23MHz - 52.27MHz (0%)",
  "53.27MHz - 60.00MHz (0%)"
]

                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "21.79",
                "frequencies": {
                  "utilized": ["78.36MHz - 90.00MHz (65.23%)"],
                  "notutilized": ["60.00MHz - 65.32MHz(0%)","65.32MHz - 78.36MHz(0%)"]
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "16.79",
                "frequencies": {
                  "utilized": ["90.00MHz - 91.40MHz(65.23%)", "91.40MHz -104.45MHz (0.60%)"],
                  "notutilized": ["104.45MHz - 117.49MHz (0%)", "117.49MHz - 120.00MHz (0%)"]
                }
              }
            },
            {
              "range": "120.00MHz - 150.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["120.00MHz - 130.53MHz (0%)","130.53MHz - 143.58MHz (0%)", "143.58MHz - 150.00MHz (0%)"]
                }
              }
            },
            {
              "range": "150.00MHz - 180.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["150.00MHz - 156.62MHz (0%)", "156.62MHz - 169.66MHz (0%)","169.66MHz - 180.00MHz (0%)"]
                }
              }
            },
            {
              "range": "180.00MHz - 210.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["180.00MHz -182.71MHz (0%)","182.71MHz - 195.75MHz (0%)","195.75MHz - 208.79MHz (0%)", "208.79MHz - 210.00MHz (0%)"]
                }
              }
            },
            {
              "range": "210.00MHz - 240.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["210.00MHz - 221.84MHz (0%)","221.84MHz - 234.88MHz (0%)", "234.88MHz - 240.00MHz (0%)"]
                }
              }
            },
            {
              "range": "240.00MHz - 270.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["240.00MHz - 247.92MHz (0%)", "247.92MHz - 260.87MHz (0%)", "260.87MHz - 270.00MHz (0%)"]
                }
              }
            },
            {
              "range": "270.00MHz - 300.00MHz",
              "result": {
                "utilization": "0",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["270.00MHz - 274.00MHz (0%)","274.00MHz - 287.05MHz (0%)", "287.05MHz - 300.00MHz (0%)"]
                }
              }
            }
          ]
        }
];
export default BandsData
