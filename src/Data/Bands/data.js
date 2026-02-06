const BandsData = [
{
  id: 1,
  location: "Lagos",
  regions: [
    {
      region: "VI",
      bands: [
        // 0Hz to 30MHz
        {
          range: "100KHz-30MHz",
          result: {
            utilization: "33.32",
            frequencies: {
              utilized: ["100KHz-13.14MHz(99.98%)"],
              notutilized: [
                "13.14MHz-26.19MHz(0%)",
                "26.19MHz-30.00MHz(0%)"
              ]
            }
          }
        },

        // 30MHz to 300MHz
        {
          range: "30MHz-300MHz",
          subbands: [
            {
              range: "30.00MHz-60.00MHz",
              result: {
                utilization: "97.60",
                frequencies: {
                  utilized: [
                    "30.23MHz-52.27MHz(97.45%)",
                    "52.27MHz-60.00MHz(97.75%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz-90.00MHz",
              result: {
                utilization: "98.13",
                frequencies: {
                  utilized: [
                    "60.00MHz-78.36MHz(98%)",
                    "78.36MHz-90.00MHz(98.23%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz-120.00MHz",
              result: {
                utilization: "66.04",
                frequencies: {
                  utilized: [
                    "90.00MHz-104.45MHz(99.49%)",
                    "104.45MHz-117.49MHz(98.63%)"
                  ],
                  notutilized: ["117.49MHz-120.00MHz(0%)"]
                }
              }
            },
            {
              range: "120.00MHz-150.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["120.00MHz-150.00MHz(0%)"]
                }
              }
            },
            {
              range: "150.00MHz-180.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["150.00MHz-180.00MHz(0%)"]
                }
              }
            },
            {
              range: "180.00MHz-210.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["180.00MHz-210.00MHz(0%)"]
                }
              }
            },
            {
              range: "210.00MHz-240.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["210.00MHz-240.00MHz(0%)"]
                }
              }
            },
            {
              range: "240.00MHz-270.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["240.00MHz-270.00MHz(0%)"]
                }
              }
            },
            {
              range: "270.00MHz-300.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["270.00MHz-300.00MHz(0%)"]
                }
              }
            }
          ]
        },

        // 300MHz to 3GHz
        {
          range: "300MHz-3GHz",
          subbands: [
            {
              range: "300.00MHz-330.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["300.00MHz-330.00MHz(0%)"]
                }
              }
            },
            {
              range: "330.00MHz-360.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["330.00MHz-360.00MHz(0%)"]
                }
              }
            },
            {
              range: "360.00MHz-390.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["360.00MHz-390.00MHz(0%)"]
                }
              }
            },
            {
              range: "390.00MHz-420.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["390.00MHz-420.00MHz(0%)"]
                }
              }
            },
            {
              range: "420.00MHz-450.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["420.00MHz-450.00MHz(0%)"]
                }
              }
            },
            {
              range: "450.00MHz-480.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["450.00MHz-480.00MHz(0%)"]
                }
              }
            },
            {
              range: "480.00MHz-510.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["480.00MHz-510.00MHz(0%)"]
                }
              }
            },
            {
              range: "510.00MHz-540.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["510.00MHz-540.00MHz(0%)"]
                }
              }
            },
            {
              range: "540.00MHz-570.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["540.00MHz-570.00MHz(0%)"]
                }
              }
            },
            {
              range: "570.00MHz-600.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["570.00MHz-600.00MHz(0%)"]
                }
              }
            },
            {
              range: "600.00MHz-630.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["600.00MHz-630.00MHz(0%)"]
                }
              }
            },
            {
              range: "630.00MHz-660.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["630.00MHz-660.00MHz(0%)"]
                }
              }
            },
            {
              range: "660.00MHz-690.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["660.00MHz-690.00MHz(0%)"]
                }
              }
            },
            {
              range: "690.00MHz-720.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["690.00MHz-720.00MHz(0%)"]
                }
              }
            },
            {
              range: "720.00MHz-750.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["720.00MHz-750.00MHz(0%)"]
                }
              }
            },
            {
              range: "750.00MHz-780.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["750.00MHz-780.00MHz(0%)"]
                }
              }
            },
            {
              range: "780.00MHz-810.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: ["783.00MHz-796.00MHz(0.05%)"],
                  notutilized: [
                    "780.00MHz-783.00MHz(0%)",
                    "796.00MHz-810.00MHz(0%)"
                  ]
                }
              }
            },
            {
              range: "810.00MHz-840.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["810.00MHz-840.00MHz(0%)"]
                }
              }
            },
            {
              range: "840.00MHz-870.00MHz",
              result: {
                utilization: "0",
                frequencies: {
                  utilized: [],
                  notutilized: ["840.00MHz-870.00MHz(0%)"]
                }
              }
            },
            {
              range: "870.00MHz-900.00MHz",
              result: {
                utilization: "24.58",
                frequencies: {
                  utilized: [
                    "874.00MHz-887.00MHz(73.72%)",
                    "887.00MHz-900.00MHz(99.98%)"
                  ],
                  notutilized: ["870.00MHz-874.00MHz(0%)"]
                }
              }
            },
            {
              range: "900.00MHz-930.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: ["900.00MHz-930.00MHz(99.98%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "930.00MHz-960.00MHz",
              result: {
                utilization: "100",
                frequencies: {
                  utilized: [
                    "930.00MHz-950.00MHz(100%)",
                    "950.00MHz-960.00MHz(99.95%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "960.00MHz-990.00MHz",
              result: {
                utilization: "99.93",
                frequencies: {
                  utilized: [
                    "960.00MHz-965.00MHz(99.92%)",
                    "965.00MHz-990.00MHz(99.87%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "990.00MHz-1020.00MHz",
              result: {
                utilization: "99.86",
                frequencies: {
                  utilized: [
                    "990.00MHz-1004.00MHz(99.86%)",
                    "1004.00MHz-1017.00MHz(99.84%)",
                    "1017.00MHz-1020.00MHz(99.87%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1020.00MHz-1050.00MHz",
              result: {
                utilization: "99.89",
                frequencies: {
                  utilized: [
                    "1020.00MHz-1030.00MHz(99.87%)",
                    "1030.00MHz-1043.00MHz(99.89%)",
                    "1043.00MHz-1050.00MHz(99.91%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1050.00MHz-1080.00MHz",
              result: {
                utilization: "99.92",
                frequencies: {
                  utilized: [
                    "1050.00MHz-1056.00MHz(99.91%)",
                    "1056.00MHz-1070.00MHz(99.92%)",
                    "1070.00MHz-1080.00MHz(99.94%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1080.00MHz-1110.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: [
                    "1080.00MHz-1083.00MHz(99.94%)",
                    "1083.00MHz-1096.00MHz(99.95%)",
                    "1096.00MHz-1110.00MHz(99.96%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1110.00MHz-1140.00MHz",
              result: {
                utilization: "99.97",
                frequencies: {
                  utilized: [
                    "1110.00MHz-1122.00MHz(99.97%)",
                    "1122.00MHz-1135.00MHz(99.97%)",
                    "1135.00MHz-1140.00MHz(99.97%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1140.00MHz-1170.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: [
                    "1140.00MHz-1148.00MHz(99.97%)",
                    "1148.00MHz-1161.00MHz(99.98%)",
                    "1161.00MHz-1170.00MHz(99.98%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1170.00MHz-1200.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: [
                    "1170.00MHz-1174.00MHz(99.98%)",
                    "1174.00MHz-1187.00MHz(99.97%)",
                    "1187.00MHz-1200.00MHz(99.97%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1200.00MHz-1230.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: [
                    "1200.00MHz-1213.00MHz(99.98%)",
                    "1213.00MHz-1226.00MHz(99.98%)",
                    "1226.00MHz-1230.00MHz(99.97%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1230.00MHz-1260.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: [
                    "1230.00MHz-1239.00MHz(99.97%)",
                    "1239.00MHz-1252.00MHz(99.97%)",
                    "1252.00MHz-1260.00MHz(99.96%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1260.00MHz-1290.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: [
                    "1260.00MHz-1265.00MHz(99.96%)",
                    "1265.00MHz-1278.00MHz(99.97%)",
                    "1278.00MHz-1290.00MHz(99.96%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1290.00MHz-1320.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: [
                    "1290.00MHz-1304.00MHz(99.95%)",
                    "1304.00MHz-1317.00MHz(99.96%)",
                    "1317.00MHz-1320.00MHz(99.94%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1320.00MHz-1350.00MHz",
              result: {
                utilization: "99.95",
                frequencies: {
                  utilized: [
                    "1320.00MHz-1331.00MHz(99.94%)",
                    "1331.00MHz-1344.00MHz(99.95%)",
                    "1344.00MHz-1350.00MHz(99.96%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1350.00MHz-1380.00MHz",
              result: {
                utilization: "99.96",
                frequencies: {
                  utilized: [
                    "1350.00MHz-1357.00MHz(99.96%)",
                    "1357.00MHz-1370.00MHz(99.95%)",
                    "1370.00MHz-1380.00MHz(99.97%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1380.00MHz-1410.00MHz",
              result: {
                utilization: "99.98",
                frequencies: {
                  utilized: [
                    "1380.00MHz-1383.00MHz(99.97%)",
                    "1383.00MHz-1396.00MHz(99.98%)",
                    "1396.00MHz-1408.00MHz(99.98%)",
                    "1408.00MHz-1410.00MHz(99.98%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
              range: "1410.00MHz-1440.00MHz",
              result: {
                utilization: "99.99",
                frequencies: {
                  utilized: [
                    "1410.00MHz-1422.00MHz(99.98%)",
                    "1422.00MHz-1435.00MHz(99.99%)",
                    "1435.00MHz-1440.00MHz(99.99%)"
                  ],
                  notutilized: []
                }
              }
            },
            {
  range: "1440.00MHz-1470.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1440.00MHz-1448.00MHz(99.99%)",
        "1448.00MHz-1461.00MHz(99.99%)",
        "1461.00MHz-1470.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1470.00MHz-1500.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1470.00MHz-1474.00MHz(99.99%)",
        "1474.00MHz-1487.00MHz(99.99%)",
        "1487.00MHz-1500.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1500.00MHz-1530.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1500.00MHz-1513.00MHz(99.99%)",
        "1513.00MHz-1526.00MHz(99.99%)",
        "1526.00MHz-1530.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1530.00MHz-1560.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1530.00MHz-1539.00MHz(99.99%)",
        "1539.00MHz-1552.00MHz(99.99%)",
        "1552.00MHz-1560.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1560.00MHz-1590.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1560.00MHz-1565.00MHz(99.99%)",
        "1565.00MHz-1578.00MHz(99.99%)",
        "1578.00MHz-1590.00MHz(99.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1590.00MHz-1620.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "1590.00MHz-1604.00MHz(99.97%)",
        "1604.00MHz-1617.00MHz(99.98%)",
        "1617.00MHz-1620.00MHz(99.97%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1620.00MHz-1650.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "1620.00MHz-1631.00MHz(99.97%)",
        "1631.00MHz-1644.00MHz(99.97%)",
        "1644.00MHz-1650.00MHz(99.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1650.00MHz-1680.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "1650.00MHz-1657.00MHz(99.98%)",
        "1657.00MHz-1669.00MHz(99.97%)",
        "1669.00MHz-1680.00MHz(99.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1680.00MHz-1710.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "1680.00MHz-1683.00MHz(99.99%)",
        "1683.00MHz-1696.00MHz(99.98%)",
        "1696.00MHz-1708.00MHz(99.98%)",
        "1708.00MHz-1710.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1710.00MHz-1740.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1710.00MHz-1722.00MHz(99.99%)",
        "1722.00MHz-1735.00MHz(99.99%)",
        "1735.00MHz-1740.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1740.00MHz-1770.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1740.00MHz-1748.00MHz(99.99%)",
        "1748.00MHz-1761.00MHz(99.99%)",
        "1761.00MHz-1770.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1770.00MHz-1800.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1770.00MHz-1774.00MHz(99.99%)",
        "1774.00MHz-1787.00MHz(100%)",
        "1787.00MHz-1800.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1800.00MHz-1830.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "1800.00MHz-1813.00MHz(100%)",
        "1813.00MHz-1826.00MHz(100%)",
        "1826.00MHz-1830.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1830.00MHz-1860.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "1830.00MHz-1839.00MHz(100%)",
        "1839.00MHz-1852.00MHz(100%)",
        "1852.00MHz-1860.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1860.00MHz-1890.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "1860.00MHz-1865.00MHz(100%)",
        "1865.00MHz-1878.00MHz(100%)",
        "1878.00MHz-1890.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1890.00MHz-1920.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1890.00MHz-1904.00MHz(99.99%)",
        "1904.00MHz-1917.00MHz(99.99%)",
        "1917.00MHz-1920.00MHz(99.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1920.00MHz-1950.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "1920.00MHz-1931.00MHz(99.98%)",
        "1931.00MHz-1944.00MHz(100%)",
        "1944.00MHz-1950.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1950.00MHz-1980.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "1950.00MHz-1957.00MHz(100%)",
        "1957.00MHz-1970.00MHz(100%)",
        "1970.00MHz-1980.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1980.00MHz-2010.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "1980.00MHz-1996.00MHz(100%)",
        "1996.00MHz-2009.00MHz(100%)",
        "2009.00MHz-2010.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2010.00MHz-2040.00MHz",
  result: {
    utilization: "95.62",
    frequencies: {
      utilized: [
        "2010.00MHz-2022.00MHz(100%)",
        "2022.00MHz-2035.00MHz(100%)",
        "2035.00MHz-2040.00MHz(86.87%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2040.00MHz-2070.00MHz",
  result: {
    utilization: "87.20",
    frequencies: {
      utilized: [
        "2040.00MHz-2048.00MHz(86.87%)",
        "2048.00MHz-2061.00MHz(86.65%)",
        "2061.00MHz-2070.00MHz(88.10%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2070.00MHz-2100.00MHz",
  result: {
    utilization: "88.52",
    frequencies: {
      utilized: [
        "2070.00MHz-2074.00MHz(88.10%)",
        "2074.00MHz-2087.00MHz(88.30%)",
        "2087.00MHz-2100.00MHz(89.16%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2100.00MHz-2130.00MHz",
  result: {
    utilization: "96.56",
    frequencies: {
      utilized: [
        "2100.00MHz-2113.00MHz(89.68%)",
        "2113.00MHz-2126.00MHz(100%)",
        "2126.00MHz-2130.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2130.00MHz-2160.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "2130.00MHz-2139.00MHz(100%)",
        "2139.00MHz-2152.00MHz(100%)",
        "2152.00MHz-2160.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2160.00MHz-2190.00MHz",
  result: {
    utilization: "94.60",
    frequencies: {
      utilized: [
        "2160.00MHz-2165.00MHz(100%)",
        "2165.00MHz-2178.00MHz(91.77%)",
        "2178.00MHz-2190.00MHz(92.02%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2190.00MHz-2220.00MHz",
  result: {
    utilization: "76.74",
    frequencies: {
      utilized: [
        "2190.00MHz-2204.00MHz(91.97%)",
        "2204.00MHz-2217.00MHz(69.81%)",
        "2217.00MHz-2220.00MHz(68.44%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2220.00MHz-2250.00MHz",
  result: {
    utilization: "66.78",
    frequencies: {
      utilized: [
        "2220.00MHz-2230.00MHz(68.44%)",
        "2230.00MHz-2244.00MHz(68.33%)",
        "2244.00MHz-2250.00MHz(66.56%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2250.00MHz-2280.00MHz",
  result: {
    utilization: "66.35",
    frequencies: {
      utilized: [
        "2250.00MHz-2256.00MHz(66.56%)",
        "2256.00MHz-2270.00MHz(67.12%)",
        "2270.00MHz-2280.00MHz(65.36%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2280.00MHz-2310.00MHz",
  result: {
    utilization: "82.15",
    frequencies: {
      utilized: [
        "2280.00MHz-2295.00MHz(65.67%)",
        "2295.00MHz-2308.00MHz(87.44%)",
        "2308.00MHz-2310.00MHz(93.34%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2310.00MHz-2340.00MHz",
  result: {
    utilization: "93.77",
    frequencies: {
      utilized: [
        "2310.00MHz-2322.00MHz(93.34%)",
        "2322.00MHz-2335.00MHz(93.05%)",
        "2335.00MHz-2340.00MHz(94.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2340.00MHz-2370.00MHz",
  result: {
    utilization: "93.87",
    frequencies: {
      utilized: [
        "2340.00MHz-2360.00MHz(93.95%)",
        "2360.00MHz-2370.00MHz(91.75%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2370.00MHz-2400.00MHz",
  result: {
    utilization: "82.75",
    frequencies: {
      utilized: [
        "2370.00MHz-2387.00MHz(91.75%)",
        "2387.00MHz-2400.00MHz(73.75%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2400.00MHz-2430.00MHz",
  result: {
    utilization: "81.48",
    frequencies: {
      utilized: [
        "2400.00MHz-2413.00MHz(81.41%)",
        "2413.00MHz-2426.00MHz(83.52%)",
        "2426.00MHz-2430.00MHz(79.49%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2430.00MHz-2460.00MHz",
  result: {
    utilization: "81.59",
    frequencies: {
      utilized: [
        "2430.00MHz-2439.00MHz(79.49%)",
        "2439.00MHz-2452.00MHz(80.13%)",
        "2452.00MHz-2460.00MHz(85.13%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2460.00MHz-2490.00MHz",
  result: {
    utilization: "83.51",
    frequencies: {
      utilized: [
        "2460.00MHz-2465.00MHz(85.13%)",
        "2465.00MHz-2478.00MHz(86.29%)",
        "2478.00MHz-2490.00MHz(79.10%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2490.00MHz-2520.00MHz",
  result: {
    utilization: "76.11",
    frequencies: {
      utilized: [
        "2490.00MHz-2500.00MHz(77.15%)",
        "2500.00MHz-2517.00MHz(78.18%)",
        "2517.00MHz-2520.00MHz(78.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2520.00MHz-2550.00MHz",
  result: {
    utilization: "79.77",
    frequencies: {
      utilized: [
        "2520.00MHz-2530.00MHz(78.98%)",
        "2530.00MHz-2543.00MHz(79.77%)",
        "2543.00MHz-2550.00MHz(80.53%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2550.00MHz-2580.00MHz",
  result: {
    utilization: "81.18",
    frequencies: {
      utilized: [
        "2550.00MHz-2556.00MHz(80.53%)",
        "2556.00MHz-2569.00MHz(80.63%)",
        "2569.00MHz-2580.00MHz(82.37%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2580.00MHz-2610.00MHz",
  result: {
    utilization: "89.63",
    frequencies: {
      utilized: [
        "2580.00MHz-2583.00MHz(82.37%)",
        "2583.00MHz-2596.00MHz(93.27%)",
        "2596.00MHz-2610.00MHz(93.25%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2610.00MHz-2640.00MHz",
  result: {
    utilization: "97.41",
    frequencies: {
      utilized: [
        "2610.00MHz-2622.00MHz(92.22%)",
        "2622.00MHz-2634.00MHz(100%)",
        "2634.00MHz-2640.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2640.00MHz-2670.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "2640.00MHz-2660.00MHz(100%)",
        "2660.00MHz-2670.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2670.00MHz-2700.00MHz",
  result: {
    utilization: "92.44",
    frequencies: {
      utilized: [
        "2670.00MHz-2674.00MHz(100%)",
        "2674.00MHz-2687.00MHz(99.97%)",
        "2687.00MHz-2700.00MHz(77.34%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2700.00MHz-2730.00MHz",
  result: {
    utilization: "67.05",
    frequencies: {
      utilized: [
        "2700.00MHz-2713.00MHz(66.84%)",
        "2713.00MHz-2726.00MHz(66.56%)",
        "2726.00MHz-2730.00MHz(67.73%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2730.00MHz-2760.00MHz",
  result: {
    utilization: "68.82",
    frequencies: {
      utilized: [
        "2730.00MHz-2739.00MHz(67.73%)",
        "2739.00MHz-2752.00MHz(68.76%)",
        "2752.00MHz-2760.00MHz(69.96%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2760.00MHz-2790.00MHz",
  result: {
    utilization: "71.05",
    frequencies: {
      utilized: [
        "2760.00MHz-2765.00MHz(69.96%)",
        "2765.00MHz-2778.00MHz(70.89%)",
        "2778.00MHz-2790.00MHz(72.29%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2790.00MHz-2820.00MHz",
  result: {
    utilization: "74.32",
    frequencies: {
      utilized: [
        "2790.00MHz-2791.00MHz(72.29%)",
        "2791.00MHz-2804.00MHz(73.30%)",
        "2804.00MHz-2817.00MHz(75.83%)",
        "2817.00MHz-2820.00MHz(75.87%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2820.00MHz-2850.00MHz",
  result: {
    utilization: "77.18",
    frequencies: {
      utilized: [
        "2820.00MHz-2830.00MHz(75.87%)",
        "2830.00MHz-2844.00MHz(77.52%)",
        "2844.00MHz-2850.00MHz(78.14%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2850.00MHz-2880.00MHz",
  result: {
    utilization: "78.74",
    frequencies: {
      utilized: [
        "2850.00MHz-2857.00MHz(78.14%)",
        "2857.00MHz-2870.00MHz(78.97%)",
        "2870.00MHz-2880.00MHz(79.12%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2880.00MHz-2910.00MHz",
  result: {
    utilization: "78.80",
    frequencies: {
      utilized: [
        "2880.00MHz-2883.00MHz(79.12%)",
        "2883.00MHz-2896.00MHz(78.61%)",
        "2896.00MHz-2909.00MHz(78.46%)",
        "2909.00MHz-2910.00MHz(78.00%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2910.00MHz-2940.00MHz",
  result: {
    utilization: "77.66",
    frequencies: {
      utilized: [
        "2910.00MHz-2922.00MHz(78.00%)",
        "2922.00MHz-2935.00MHz(77.74%)",
        "2935.00MHz-2940.00MHz(77.24%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2940.00MHz-2970.00MHz",
  result: {
    utilization: "76.90",
    frequencies: {
      utilized: [
        "2940.00MHz-2948.00MHz(77.24%)",
        "2948.00MHz-2961.00MHz(76.84%)",
        "2961.00MHz-2970.00MHz(76.62%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2970.00MHz-3000.00MHz",
  result: {
    utilization: "76.80",
    frequencies: {
      utilized: [
        "2970.00MHz-2974.00MHz(76.62%)",
        "2974.00MHz-2987.00MHz(77.83%)",
        "2987.00MHz-3000.00MHz(75.93%)"
      ],
      notutilized: []
    }
  }
},
]
},
// 3GHz to 6GHz
{
  range: "3GHz-6GHz",
  subbands: [
    {
      range: "3000.00MHz-3030.00MHz",
      result: {
        utilization: "42.20",
        frequencies: {
          utilized: [
            "3000.00MHz-3013.00MHz(48.64%)",
            "3013.00MHz-3026.00MHz(46.64%)",
            "3026.00MHz-3030.00MHz(49.60%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3030.00MHz-3060.00MHz",
      result: {
        utilization: "52.34",
        frequencies: {
          utilized: [
            "3030.00MHz-3039.00MHz(49.60%)",
            "3039.00MHz-3052.00MHz(51.99%)",
            "3052.00MHz-3060.00MHz(55.44%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3060.00MHz-3090.00MHz",
      result: {
        utilization: "55.37",
        frequencies: {
          utilized: [
            "3060.00MHz-3065.00MHz(55.44%)",
            "3065.00MHz-3078.00MHz(54.26%)",
            "3078.00MHz-3090.00MHz(56.42%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3090.00MHz-3120.00MHz",
      result: {
        utilization: "60.21",
        frequencies: {
          utilized: [
            "3090.00MHz-3104.00MHz(57.76%)",
            "3104.00MHz-3117.00MHz(61.44%)",
            "3117.00MHz-3120.00MHz(61.44%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3120.00MHz-3150.00MHz",
      result: {
        utilization: "63.32",
        frequencies: {
          utilized: [
            "3120.00MHz-3130.00MHz(61.44%)",
            "3130.00MHz-3143.00MHz(63.41%)",
            "3143.00MHz-3150.00MHz(65.12%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3150.00MHz-3180.00MHz",
      result: {
        utilization: "66.61",
        frequencies: {
          utilized: [
            "3150.00MHz-3156.00MHz(65.12%)",
            "3156.00MHz-3169.00MHz(67.20%)",
            "3169.00MHz-3180.00MHz(67.51%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3180.00MHz-3210.00MHz",
      result: {
        utilization: "67.22",
        frequencies: {
          utilized: [
            "3180.00MHz-3182.00MHz(67.51%)",
            "3182.00MHz-3195.00MHz(66.54%)",
            "3195.00MHz-3210.00MHz(67.61%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3210.00MHz-3240.00MHz",
      result: {
        utilization: "67.85",
        frequencies: {
          utilized: [
            "3210.00MHz-3221.00MHz(67.45%)",
            "3221.00MHz-3234.00MHz(68.13%)",
            "3234.00MHz-3240.00MHz(67.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3240.00MHz-3270.00MHz",
      result: {
        utilization: "68.05",
        frequencies: {
          utilized: [
            "3240.00MHz-3247.00MHz(67.98%)",
            "3247.00MHz-3260.00MHz(68.47%)",
            "3260.00MHz-3270.00MHz(67.71%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3270.00MHz-3300.00MHz",
      result: {
        utilization: "67.88",
        frequencies: {
          utilized: [
            "3270.00MHz-3273.00MHz(67.71%)",
            "3273.00MHz-3287.00MHz(68.44%)",
            "3287.00MHz-3300.00MHz(67.50%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3300.00MHz-3330.00MHz",
      result: {
        utilization: "67.46",
        frequencies: {
          utilized: [
            "3300.00MHz-3313.00MHz(68.16%)",
            "3313.00MHz-3326.00MHz(66.75%)",
            "3326.00MHz-3330.00MHz(67.46%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3330.00MHz-3360.00MHz",
      result: {
        utilization: "67.67",
        frequencies: {
          utilized: [
            "3330.00MHz-3339.00MHz(67.46%)",
            "3339.00MHz-3352.00MHz(67.16%)",
            "3352.00MHz-3360.00MHz(68.39%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3360.00MHz-3390.00MHz",
      result: {
        utilization: "68.13",
        frequencies: {
          utilized: [
            "3360.00MHz-3365.00MHz(68.39%)",
            "3365.00MHz-3378.00MHz(68.17%)",
            "3378.00MHz-3390.00MHz(67.83%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3390.00MHz-3420.00MHz",
      result: {
        utilization: "69.47",
        frequencies: {
          utilized: [
            "3390.00MHz-3391.00MHz(67.83%)",
            "3391.00MHz-3404.00MHz(67.96%)",
            "3404.00MHz-3420.00MHz(62.61%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3420.00MHz-3450.00MHz",
      result: {
        utilization: "70.02",
        frequencies: {
          utilized: [
            "3420.00MHz-3430.00MHz(70.53%)",
            "3430.00MHz-3443.00MHz(69.58%)",
            "3443.00MHz-3450.00MHz(69.96%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3450.00MHz-3480.00MHz",
      result: {
        utilization: "69.57",
        frequencies: {
          utilized: [
            "3450.00MHz-3456.00MHz(69.96%)",
            "3456.00MHz-3469.00MHz(69.40%)",
            "3469.00MHz-3480.00MHz(69.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3480.00MHz-3510.00MHz",
      result: {
        utilization: "72.42",
        frequencies: {
          utilized: [
            "3480.00MHz-3482.00MHz(69.34%)",
            "3482.00MHz-3495.00MHz(67.76%)",
            "3495.00MHz-3508.00MHz(72.26%)",
            "3508.00MHz-3510.00MHz(80.31%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3510.00MHz-3540.00MHz",
      result: {
        utilization: "80.17",
        frequencies: {
          utilized: [
            "3510.00MHz-3521.00MHz(80.31%)",
            "3521.00MHz-3534.00MHz(79.79%)",
            "3534.00MHz-3540.00MHz(80.41%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3540.00MHz-3570.00MHz",
      result: {
        utilization: "80.44",
        frequencies: {
          utilized: [
            "3540.00MHz-3547.00MHz(80.41%)",
            "3547.00MHz-3560.00MHz(80.80%)",
            "3560.00MHz-3570.00MHz(80.10%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3570.00MHz-3600.00MHz",
      result: {
        utilization: "80.35",
        frequencies: {
          utilized: [
            "3570.00MHz-3573.00MHz(80.10%)",
            "3573.00MHz-3586.00MHz(80.69%)",
            "3586.00MHz-3600.00MHz(80.26%)"
          ],
          notutilized: []
        }
      }
    },
{
  range: "3600.00MHz-3630.00MHz",
  result: {
    utilization: "65.09%",
    frequencies: {
      utilized: [
        "3600.00MHz-3613.00MHz(74.08%)",
        "3613.00MHz-3626.00MHz(60.76%)",
        "3626.00MHz-3630.00MHz(60.43%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3630.00MHz-3660.00MHz",
  result: {
    utilization: "58.47%",
    frequencies: {
      utilized: [
        "3630.00MHz-3639.00MHz(60.43%)",
        "3639.00MHz-3652.00MHz(58.71%)",
        "3652.00MHz-3660.00MHz(56.28%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3660.00MHz-3690.00MHz",
  result: {
    utilization: "54.17%",
    frequencies: {
      utilized: [
        "3660.00MHz-3665.00MHz(56.28%)",
        "3665.00MHz-3678.00MHz(53.74%)",
        "3678.00MHz-3690.00MHz(52.49%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3690.00MHz-3720.00MHz",
  result: {
    utilization: "51.18%",
    frequencies: {
      utilized: [
        "3690.00MHz-3691.00MHz(52.49%)",
        "3691.00MHz-3704.00MHz(51.48%)",
        "3704.00MHz-3720.00MHz(51.91%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3720.00MHz-3750.00MHz",
  result: {
    utilization: "51.27%",
    frequencies: {
      utilized: [
        "3720.00MHz-3730.00MHz(51.91%)",
        "3730.00MHz-3743.00MHz(50.22%)",
        "3743.00MHz-3750.00MHz(52.67%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3750.00MHz-3780.00MHz",
  result: {
    utilization: "52.56%",
    frequencies: {
      utilized: [
        "3750.00MHz-3756.00MHz(52.67%)",
        "3756.00MHz-3769.00MHz(52.20%)",
        "3769.00MHz-3780.00MHz(52.82%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3780.00MHz-3810.00MHz",
  result: {
    utilization: "54.79%",
    frequencies: {
      utilized: [
        "3780.00MHz-3782.00MHz(52.82%)",
        "3782.00MHz-3795.00MHz(53.51%)",
        "3795.00MHz-3808.00MHz(55.91%)",
        "3808.00MHz-3810.00MHz(56.93%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3810.00MHz-3840.00MHz",
  result: {
    utilization: "58.32%",
    frequencies: {
      utilized: [
        "3810.00MHz-3821.00MHz(56.93%)",
        "3821.00MHz-3835.00MHz(58.54%)",
        "3835.00MHz-3840.00MHz(59.48%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3840.00MHz-3870.00MHz",
  result: {
    utilization: "60.44",
    frequencies: {
      utilized: [
        "3840.00MHz-3847.00MHz(59.48%)",
        "3847.00MHz-3860.00MHz(60.78%)",
        "3860.00MHz-3870.00MHz(61.07%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3870.00MHz-3900.00MHz",
  result: {
    utilization: "61.46",
    frequencies: {
      utilized: [
        "3870.00MHz-3873.00MHz(61.07%)",
        "3873.00MHz-3886.00MHz(62.07%)",
        "3886.00MHz-3900.00MHz(61.25%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3900.00MHz-3930.00MHz",
  result: {
    utilization: "58.06",
    frequencies: {
      utilized: [
        "3900.00MHz-3913.00MHz(60.03%)",
        "3913.00MHz-3926.00MHz(58.14%)",
        "3926.00MHz-3930.00MHz(56.03%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3930.00MHz-3960.00MHz",
  result: {
    utilization: "54.79",
    frequencies: {
      utilized: [
        "3930.00MHz-3939.00MHz(56.03%)",
        "3939.00MHz-3952.00MHz(54.51%)",
        "3952.00MHz-3960.00MHz(53.82%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3960.00MHz-3990.00MHz",
  result: {
    utilization: "54.32",
    frequencies: {
      utilized: [
        "3960.00MHz-3965.00MHz(53.82%)",
        "3965.00MHz-3978.00MHz(54.07%)",
        "3978.00MHz-3990.00MHz(55.05%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3990.00MHz-4020.00MHz",
  result: {
    utilization: "57.45",
    frequencies: {
      utilized: [
        "3990.00MHz-3991.00MHz(55.05%)",
        "3991.00MHz-4004.00MHz(56.69%)",
        "4004.00MHz-4017.00MHz(58.30%)",
        "4017.00MHz-4020.00MHz(59.76%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4020.00MHz-4050.00MHz",
  result: {
    utilization: "61.27",
    frequencies: {
      utilized: [
        "4020.00MHz-4030.00MHz(59.76%)",
        "4030.00MHz-4043.00MHz(60.98%)",
        "4043.00MHz-4050.00MHz(63.08%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4050.00MHz-4080.00MHz",
  result: {
    utilization: "64.76",
    frequencies: {
      utilized: [
        "4050.00MHz-4056.00MHz(63.08%)",
        "4056.00MHz-4069.00MHz(64.69%)",
        "4069.00MHz-4080.00MHz(66.54%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4080.00MHz-4110.00MHz",
  result: {
    utilization: "68.34",
    frequencies: {
      utilized: [
        "4080.00MHz-4082.00MHz(66.54%)",
        "4082.00MHz-4095.00MHz(68.22%)",
        "4095.00MHz-4110.00MHz(69.38%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4110.00MHz-4140.00MHz",
  result: {
    utilization: "69.99",
    frequencies: {
      utilized: [
        "4110.00MHz-4121.00MHz(69.38%)",
        "4121.00MHz-4134.00MHz(69.98%)",
        "4134.00MHz-4140.00MHz(70.60%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4140.00MHz-4170.00MHz",
  result: {
    utilization: "71.49",
    frequencies: {
      utilized: [
        "4140.00MHz-4147.00MHz(70.60%)",
        "4147.00MHz-4160.00MHz(71.02%)",
        "4160.00MHz-4170.00MHz(72.86%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4170.00MHz-4200.00MHz",
  result: {
    utilization: "74.09",
    frequencies: {
      utilized: [
        "4170.00MHz-4173.00MHz(72.86%)",
        "4173.00MHz-4186.00MHz(74.42%)",
        "4186.00MHz-4200.00MHz(74.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4200.00MHz-4230.00MHz",
  result: {
    utilization: "76.63",
    frequencies: {
      utilized: [
        "4200.00MHz-4213.00MHz(76.15%)",
        "4213.00MHz-4226.00MHz(76.41%)",
        "4226.00MHz-4230.00MHz(77.31%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4230.00MHz-4260.00MHz",
  result: {
    utilization: "78.61",
    frequencies: {
      utilized: [
        "4230.00MHz-4239.00MHz(77.31%)",
        "4239.00MHz-4252.00MHz(78.60%)",
        "4252.00MHz-4260.00MHz(79.90%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4260.00MHz-4290.00MHz",
  result: {
    utilization: "81.07",
    frequencies: {
      utilized: [
        "4260.00MHz-4265.00MHz(79.90%)",
        "4265.00MHz-4278.00MHz(80.99%)",
        "4278.00MHz-4290.00MHz(82.32%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4290.00MHz-4320.00MHz",
  result: {
    utilization: "83.34",
    frequencies: {
      utilized: [
        "4290.00MHz-4291.00MHz(82.32%)",
        "4291.00MHz-4304.00MHz(83.11%)",
        "4304.00MHz-4320.00MHz(84.54%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4320.00MHz-4350.00MHz",
  result: {
    utilization: "85.67",
    frequencies: {
      utilized: [
        "4320.00MHz-4330.00MHz(84.54%)",
        "4330.00MHz-4343.00MHz(85.55%)",
        "4343.00MHz-4350.00MHz(86.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4350.00MHz-4380.00MHz",
  result: {
    utilization: "88.27",
    frequencies: {
      utilized: [
        "4350.00MHz-4356.00MHz(86.92%)",
        "4356.00MHz-4369.00MHz(88.50%)",
        "4369.00MHz-4380.00MHz(89.39%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4380.00MHz-4410.00MHz",
  result: {
    utilization: "91.08",
    frequencies: {
      utilized: [
        "4380.00MHz-4382.00MHz(89.39%)",
        "4382.00MHz-4395.00MHz(90.65%)",
        "4395.00MHz-4410.00MHz(92.66%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4410.00MHz-4440.00MHz",
  result: {
    utilization: "93.94",
    frequencies: {
      utilized: [
        "4410.00MHz-4421.00MHz(92.66%)",
        "4421.00MHz-4434.00MHz(93.32%)",
        "4434.00MHz-4440.00MHz(94.20%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4440.00MHz-4470.00MHz",
  result: {
    utilization: "95.76",
    frequencies: {
      utilized: [
        "4440.00MHz-4447.00MHz(94.20%)",
        "4447.00MHz-4460.00MHz(94.70%)",
        "4460.00MHz-4470.00MHz(95.37%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4470.00MHz-4500.00MHz",
  result: {
    utilization: "95.74",
    frequencies: {
      utilized: [
        "4470.00MHz-4473.00MHz(95.37%)",
        "4473.00MHz-4486.00MHz(95.74%)",
        "4486.00MHz-4500.00MHz(96.10%)"
      ],
      notutilized: []
    }
  }
},
 {
  range: "4500.00MHz-4530.00MHz",
  result: {
    utilization: "96.49",
    frequencies: {
      utilized: [
        "4500.00MHz-4513.00MHz(96.45%)",
        "4513.00MHz-4526.00MHz(96.56%)",
        "4526.00MHz-4530.00MHz(96.46%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4530.00MHz-4560.00MHz",
  result: {
    utilization: "96.36",
    frequencies: {
      utilized: [
        "4530.00MHz-4539.00MHz(96.46%)",
        "4539.00MHz-4552.00MHz(96.37%)",
        "4552.00MHz-4560.00MHz(96.26%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4560.00MHz-4590.00MHz",
  result: {
    utilization: "96.13",
    frequencies: {
      utilized: [
        "4560.00MHz-4565.00MHz(96.26%)",
        "4565.00MHz-4578.00MHz(96.14%)",
        "4578.00MHz-4590.00MHz(95.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4590.00MHz-4620.00MHz",
  result: {
    utilization: "95.65",
    frequencies: {
      utilized: [
        "4590.00MHz-4591.00MHz(95.98%)",
        "4591.00MHz-4604.00MHz(95.87%)",
        "4604.00MHz-4620.00MHz(95.19%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4620.00MHz-4650.00MHz",
  result: {
    utilization: "94.82",
    frequencies: {
      utilized: [
        "4620.00MHz-4630.00MHz(95.19%)",
        "4630.00MHz-4643.00MHz(94.77%)",
        "4643.00MHz-4650.00MHz(94.51%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4650.00MHz-4680.00MHz",
  result: {
    utilization: "94.44",
    frequencies: {
      utilized: [
        "4650.00MHz-4656.00MHz(94.51%)",
        "4656.00MHz-4670.00MHz(94.35%)",
        "4670.00MHz-4680.00MHz(94.45%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4680.00MHz-4710.00MHz",
  result: {
    utilization: "94.85",
    frequencies: {
      utilized: [
        "4680.00MHz-4682.00MHz(94.45%)",
        "4682.00MHz-4695.00MHz(94.70%)",
        "4695.00MHz-4708.00MHz(94.96%)",
        "4708.00MHz-4710.00MHz(95.28%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4710.00MHz-4740.00MHz",
  result: {
    utilization: "95.64",
    frequencies: {
      utilized: [
        "4710.00MHz-4721.00MHz(95.28%)",
        "4721.00MHz-4734.00MHz(95.56%)",
        "4734.00MHz-4740.00MHz(96.08%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4740.00MHz-4770.00MHz",
  result: {
    utilization: "96.67",
    frequencies: {
      utilized: [
        "4740.00MHz-4747.00MHz(96.08%)",
        "4747.00MHz-4760.00MHz(96.72%)",
        "4760.00MHz-4770.00MHz(97.21%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4770.00MHz-4800.00MHz",
  result: {
    utilization: "97.60",
    frequencies: {
      utilized: [
        "4770.00MHz-4773.00MHz(97.21%)",
        "4773.00MHz-4786.00MHz(97.66%)",
        "4786.00MHz-4800.00MHz(97.94%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4800.00MHz-4830.00MHz",
  result: {
    utilization: "98.19",
    frequencies: {
      utilized: [
        "4800.00MHz-4813.00MHz(98.24%)",
        "4813.00MHz-4826.00MHz(98.38%)",
        "4826.00MHz-4830.00MHz(98.39%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4830.00MHz-4860.00MHz",
  result: {
    utilization: "98.47",
    frequencies: {
      utilized: [
        "4830.00MHz-4839.00MHz(98.39%)",
        "4839.00MHz-4852.00MHz(98.51%)",
        "4852.00MHz-4860.00MHz(98.59%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4860.00MHz-4890.00MHz",
  result: {
    utilization: "98.54",
    frequencies: {
      utilized: [
        "4860.00MHz-4865.00MHz(98.59%)",
        "4865.00MHz-4878.00MHz(98.52%)",
        "4878.00MHz-4890.00MHz(98.52%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4890.00MHz-4920.00MHz",
  result: {
    utilization: "98.54",
    frequencies: {
      utilized: [
        "4890.00MHz-4891.00MHz(98.52%)",
        "4891.00MHz-4904.00MHz(98.54%)",
        "4904.00MHz-4920.00MHz(98.57%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4920.00MHz-4950.00MHz",
  result: {
    utilization: "98.57",
    frequencies: {
      utilized: [
        "4920.00MHz-4930.00MHz(98.57%)",
        "4930.00MHz-4943.00MHz(98.51%)",
        "4943.00MHz-4950.00MHz(98.62%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4950.00MHz-4980.00MHz",
  result: {
    utilization: "98.87",
    frequencies: {
      utilized: [
        "4950.00MHz-4956.00MHz(98.62%)",
        "4956.00MHz-4969.00MHz(98.87%)",
        "4969.00MHz-4980.00MHz(99.11%)"
      ],
      notutilized: []
    }
  }
},
 {
  range: "4980.00MHz-5010.00MHz",
  result: {
    utilization: "99.29",
    frequencies: {
      utilized: [
        "4980.00MHz-4982.00MHz(99.11%)",
        "4982.00MHz-4995.00MHz(99.22%)",
        "4995.00MHz-5010.00MHz(99.47%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5010.00MHz-5040.00MHz",
  result: {
    utilization: "99.56",
    frequencies: {
      utilized: [
        "5010.00MHz-5021.00MHz(99.47%)",
        "5021.00MHz-5034.00MHz(99.58%)",
        "5034.00MHz-5040.00MHz(99.65%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5040.00MHz-5070.00MHz",
  result: {
    utilization: "99.79",
    frequencies: {
      utilized: [
        "5040.00MHz-5047.00MHz(99.65%)",
        "5047.00MHz-5060.00MHz(99.74%)",
        "5060.00MHz-5070.00MHz(99.79%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5070.00MHz-5100.00MHz",
  result: {
    utilization: "99.84",
    frequencies: {
      utilized: [
        "5070.00MHz-5073.00MHz(99.79%)",
        "5073.00MHz-5086.00MHz(99.84%)",
        "5086.00MHz-5100.00MHz(99.89%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5100.00MHz-5130.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5100.00MHz-5113.00MHz(99.91%)",
        "5113.00MHz-5126.00MHz(99.94%)",
        "5126.00MHz-5130.00MHz(99.95%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5130.00MHz-5160.00MHz",
  result: {
    utilization: "99.96",
    frequencies: {
      utilized: [
        "5130.00MHz-5139.00MHz(99.95%)",
        "5139.00MHz-5152.00MHz(99.96%)",
        "5152.00MHz-5160.00MHz(99.96%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5160.00MHz-5190.00MHz",
  result: {
    utilization: "99.97",
    frequencies: {
      utilized: [
        "5160.00MHz-5165.00MHz(99.96%)",
        "5165.00MHz-5178.00MHz(99.97%)",
        "5178.00MHz-5190.00MHz(99.97%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5190.00MHz-5220.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "5190.00MHz-5191.00MHz(99.97%)",
        "5191.00MHz-5204.00MHz(99.98%)",
        "5204.00MHz-5220.00MHz(99.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5220.00MHz-5250.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "5220.00MHz-5230.00MHz(99.98%)",
        "5230.00MHz-5243.00MHz(99.98%)",
        "5243.00MHz-5250.00MHz(99.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5250.00MHz-5280.00MHz",
  result: {
    utilization: "99.97",
    frequencies: {
      utilized: [
        "5250.00MHz-5257.00MHz(99.98%)",
        "5257.00MHz-5270.00MHz(99.97%)",
        "5270.00MHz-5280.00MHz(99.97%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5280.00MHz-5310.00MHz",
  result: {
    utilization: "99.97",
    frequencies: {
      utilized: [
        "5280.00MHz-5283.00MHz(99.97%)",
        "5283.00MHz-5296.00MHz(99.97%)",
        "5296.00MHz-5308.00MHz(99.96%)",
        "5308.00MHz-5310.00MHz(99.96%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5310.00MHz-5340.00MHz",
  result: {
    utilization: "99.95",
    frequencies: {
      utilized: [
        "5310.00MHz-5322.00MHz(99.96%)",
        "5322.00MHz-5335.00MHz(99.95%)",
        "5335.00MHz-5340.00MHz(99.95%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5340.00MHz-5370.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5340.00MHz-5348.00MHz(99.95%)",
        "5348.00MHz-5361.00MHz(99.92%)",
        "5361.00MHz-5370.00MHz(99.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5370.00MHz-5400.00MHz",
  result: {
    utilization: "99.92",
    frequencies: {
      utilized: [
        "5370.00MHz-5374.00MHz(99.92%)",
        "5374.00MHz-5387.00MHz(99.92%)",
        "5387.00MHz-5400.00MHz(99.94%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5400.00MHz-5430.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5400.00MHz-5413.00MHz(99.93%)",
        "5413.00MHz-5426.00MHz(99.93%)",
        "5426.00MHz-5430.00MHz(99.93%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5430.00MHz-5460.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5430.00MHz-5439.00MHz(99.93%)",
        "5439.00MHz-5452.00MHz(99.92%)",
        "5452.00MHz-5460.00MHz(99.93%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5460.00MHz-5490.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5460.00MHz-5465.00MHz(99.93%)",
        "5465.00MHz-5478.00MHz(99.93%)",
        "5478.00MHz-5490.00MHz(99.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5490.00MHz-5520.00MHz",
  result: {
    utilization: "99.94",
    frequencies: {
      utilized: [
        "5490.00MHz-5504.00MHz(99.94%)",
        "5504.00MHz-5517.00MHz(99.94%)",
        "5517.00MHz-5520.00MHz(99.93%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5520.00MHz-5550.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5520.00MHz-5530.00MHz(99.93%)",
        "5530.00MHz-5543.00MHz(99.91%)",
        "5543.00MHz-5550.00MHz(99.93%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5550.00MHz-5580.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5550.00MHz-5557.00MHz(99.93%)",
        "5557.00MHz-5570.00MHz(99.94%)",
        "5570.00MHz-5580.00MHz(99.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5580.00MHz-5610.00MHz",
  result: {
    utilization: "99.92",
    frequencies: {
      utilized: [
        "5580.00MHz-5583.00MHz(99.92%)",
        "5583.00MHz-5596.00MHz(99.92%)",
        "5596.00MHz-5610.00MHz(99.91%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5610.00MHz-5640.00MHz",
  result: {
    utilization: "99.92",
    frequencies: {
      utilized: [
        "5610.00MHz-5622.00MHz(99.91%)",
        "5622.00MHz-5632.00MHz(99.92%)",
        "5632.00MHz-5640.00MHz(99.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5640.00MHz-5670.00MHz",
  result: {
    utilization: "99.92",
    frequencies: {
      utilized: [
        "5640.00MHz-5648.00MHz(99.92%)",
        "5648.00MHz-5661.00MHz(99.92%)",
        "5661.00MHz-5670.00MHz(99.92%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5670.00MHz-5700.00MHz",
  result: {
    utilization: "99.93",
    frequencies: {
      utilized: [
        "5670.00MHz-5674.00MHz(99.92%)",
        "5674.00MHz-5687.00MHz(99.93%)",
        "5687.00MHz-5700.00MHz(99.93%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5700.00MHz-5730.00MHz",
  result: {
    utilization: "99.95",
    frequencies: {
      utilized: [
        "5700.00MHz-5713.00MHz(99.94%)",
        "5713.00MHz-5726.00MHz(99.95%)",
        "5726.00MHz-5730.00MHz(99.95%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5730.00MHz-5760.00MHz",
  result: {
    utilization: "99.96",
    frequencies: {
      utilized: [
        "5730.00MHz-5739.00MHz(99.95%)",
        "5739.00MHz-5752.00MHz(99.96%)",
        "5752.00MHz-5760.00MHz(99.97%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5760.00MHz-5790.00MHz",
  result: {
    utilization: "99.98",
    frequencies: {
      utilized: [
        "5760.00MHz-5765.00MHz(99.97%)",
        "5765.00MHz-5778.00MHz(99.98%)",
        "5778.00MHz-5790.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5790.00MHz-5820.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "5790.00MHz-5804.00MHz(99.99%)",
        "5804.00MHz-5817.00MHz(99.99%)",
        "5817.00MHz-5820.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5820.00MHz-5850.00MHz",
  result: {
    utilization: "99.99",
    frequencies: {
      utilized: [
        "5820.00MHz-5830.00MHz(99.99%)",
        "5830.00MHz-5843.00MHz(99.99%)",
        "5843.00MHz-5850.00MHz(99.99%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5850.00MHz-5880.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "5850.00MHz-5857.00MHz(100%)",
        "5857.00MHz-5870.00MHz(100%)",
        "5870.00MHz-5880.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5880.00MHz-5910.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "5880.00MHz-5883.00MHz(100%)",
        "5883.00MHz-5896.00MHz(100%)",
        "5896.00MHz-5910.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5910.00MHz-5940.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "5910.00MHz-5922.00MHz(100%)",
        "5922.00MHz-5935.00MHz(100%)",
        "5935.00MHz-5940.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5940.00MHz-5970.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "5940.00MHz-5948.00MHz(100%)",
        "5948.00MHz-5961.00MHz(100%)",
        "5961.00MHz-5970.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5970.00MHz-6000.00MHz",
  result: {
    utilization: "100",
    frequencies: {
      utilized: [
        "5970.00MHz-5974.00MHz(100%)",
        "5974.00MHz-5987.00MHz(100%)",
        "5987.00MHz-6000.00MHz(100%)"
      ],
      notutilized: []
    }
  }
},
]
},
]
},
{
      region: "Airport",
      bands: [
        // 0Hz to 30MHz
        {
          range: "100KHz-30MHz",
          result: {
            utilization: "33.33",
            frequencies: {
              utilized: ["100KHz-13.14MHz(100.00%)"],
              notutilized: [
                "13.14MHz-26.19MHz(0%)",
                "26.19MHz-30.00MHz(0%)"
              ]
            }
          }
        },

        // 30MHz to 300MHz
        {
  range: "30MHz-300MHz",
  subbands: [
    {
      range: "30.00MHz-60.00MHz",
      result: {
        utilization: "96.88%",
        frequencies: {
          utilized: [
            "30.00MHz-39.23MHz(96.52%)",
            "39.23MHz-52.27MHz(96.92%)",
            "52.27MHz-60.00MHz(97.22%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "60.00MHz-90.00MHz",
      result: {
        utilization: "98.83%",
        frequencies: {
          utilized: [
            "60.00MHz-65.32MHz(97.59%)",
            "65.32MHz-78.36MHz(99.33%)",
            "78.36MHz-90.00MHz(99.33%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "90.00MHz-120.00MHz",
      result: {
        utilization: "0.03%",
        frequencies: {
          utilized: [],
          notutilized: [
            "90.00MHz-91.40MHz(99.56%)",
            "91.40MHz-104.45MHz(0.00%)",
            "104.45MHz-117.49MHz(0.00%)",
            "117.49MHz-120.00MHz(0.09%)"
          ]
        }
      }
    },
    {
      range: "120.00MHz-150.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "120.00MHz-130.53MHz(0.00%)",
            "130.53MHz-143.58MHz(0.00%)",
            "143.58MHz-150.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "150.00MHz-180.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "150.00MHz-156.62MHz(0.00%)",
            "156.62MHz-169.66MHz(0.00%)",
            "169.66MHz-180.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "180.00MHz-210.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "180.00MHz-182.71MHz(0.00%)",
            "182.71MHz-195.75MHz(0.00%)",
            "195.75MHz-208.79MHz(0.00%)",
            "208.79MHz-210.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "210.00MHz-240.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "210.00MHz-221.84MHz(0.00%)",
            "221.84MHz-234.88MHz(0.00%)",
            "234.88MHz-240.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "240.00MHz-270.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "240.00MHz-247.92MHz(0.00%)",
            "247.92MHz-260.97MHz(0.00%)",
            "260.97MHz-270.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "270.00MHz-300.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "270.00MHz-274.01MHz(0.00%)",
            "274.01MHz-287.05MHz(0.00%)",
            "287.05MHz-300.00MHz(0.00%)"
          ]
        }
      }
    }
  ]
},

{
  range: "300MHz-3GHz",
  subbands: [
    {
      range: "300.00MHz-330.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "300.10MHz-313.14MHz(0.00%)",
            "313.14MHz-326.18MHz(0.00%)",
            "326.18MHz-330.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "330.00MHz-360.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "330.00MHz-339.22MHz(0.00%)",
            "339.22MHz-352.27MHz(0.00%)",
            "352.27MHz-360.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "360.00MHz-390.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "360.00MHz-365.31MHz(0.00%)",
            "365.31MHz-378.35MHz(0.00%)",
            "378.35MHz-390.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "390.00MHz-420.00MHz",
      result: {
        utilization: "0.83%",
        frequencies: {
          utilized: [
            "404.44MHz-417.48MHz(3.32%)"
          ],
          notutilized: [
            "390.00MHz-391.40MHz(0.00%)",
            "391.40MHz-404.44MHz(0.00%)",
            "417.48MHz-420.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "420.00MHz-450.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "420.00MHz-430.53MHz(0.00%)",
            "430.53MHz-443.57MHz(0.00%)",
            "443.57MHz-450.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "450.00MHz-480.00MHz",
      result: {
        utilization: "1.36%",
        frequencies: {
          utilized: [
            "456.61MHz-469.66MHz(4.09%)"
          ],
          notutilized: [
            "450.00MHz-456.61MHz(0.00%)",
            "469.66MHz-480.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "480.00MHz-510.00MHz",
      result: {
        utilization: "2.37%",
        frequencies: {
          utilized: [
            "508.79MHz-510.00MHz(8.95%)"
          ],
          notutilized: [
            "480.00MHz-482.70MHz(0.00%)",
            "482.70MHz-495.74MHz(0.00%)",
            "495.74MHz-508.79MHz(0.54%)"
          ]
        }
      }
    },
    {
      range: "510.00MHz-540.00MHz",
      result: {
        utilization: "6.64%",
        frequencies: {
          utilized: [
            "510.00MHz-521.83MHz(8.95%)",
            "521.83MHz-534.87MHz(6.47%)",
            "534.87MHz-540.00MHz(4.50%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "540.00MHz-570.00MHz",
      result: {
        utilization: "1.50%",
        frequencies: {
          utilized: [
            "540.00MHz-547.92MHz(4.50%)"
          ],
          notutilized: [
            "547.92MHz-560.96MHz(0.00%)",
            "560.96MHz-570.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "570.00MHz-600.00MHz",
      result: {
        utilization: "0.89%",
        frequencies: {
          utilized: [
            "587.05MHz-600.00MHz(2.66%)"
          ],
          notutilized: [
            "570.00MHz-574.00MHz(0.00%)",
            "574.00MHz-587.05MHz(0.02%)"
          ]
        }
      }
    },
    {
      range: "600.00MHz-630.00MHz",
      result: {
        utilization: "0.67%",
        frequencies: {
          utilized: [
            "600.00MHz-600.09MHz(2.66%)"
          ],
          notutilized: [
            "600.09MHz-613.13MHz(0.00%)",
            "613.13MHz-626.18MHz(0.00%)",
            "626.18MHz-630.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "630.00MHz-660.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "630.00MHz-639.22MHz(0.00%)",
            "639.22MHz-652.26MHz(0.00%)",
            "652.26MHz-660.00MHz(0.01%)"
          ]
        }
      }
    },
    {
      range: "660.00MHz-690.00MHz",
      result: {
        utilization: "0.33%",
        frequencies: {
          utilized: [],
          notutilized: [
            "660.00MHz-665.31MHz(0.01%)",
            "665.31MHz-678.35MHz(0.29%)",
            "678.35MHz-690.00MHz(0.70%)"
          ]
        }
      }
    },
    {
      range: "690.00MHz-720.00MHz",
      result: {
        utilization: "0.62%",
        frequencies: {
          utilized: [
            "717.48MHz-720.00MHz(1.44%)"
          ],
          notutilized: [
            "690.00MHz-691.39MHz(0.70%)",
            "691.39MHz-704.44MHz(0.01%)",
            "704.44MHz-717.48MHz(0.32%)"
          ]
        }
      }
    },
    {
      range: "720.00MHz-750.00MHz",
      result: {
        utilization: "6.18%",
        frequencies: {
          utilized: [
            "720.00MHz-730.52MHz(1.44%)",
            "730.52MHz-743.57MHz(1.58%)",
            "743.57MHz-750.00MHz(15.53%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "750.00MHz-780.00MHz",
      result: {
        utilization: "20.96%",
        frequencies: {
          utilized: [
            "750.00MHz-756.61MHz(15.53%)",
            "756.61MHz-769.65MHz(17.05%)",
            "769.65MHz-780.00MHz(30.29%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "780.00MHz-810.00MHz",
      result: {
        utilization: "18.73%",
        frequencies: {
          utilized: [
            "780.00MHz-782.70MHz(30.29%)",
            "782.70MHz-795.74MHz(33.10%)",
            "795.74MHz-808.78MHz(11.48%)"
          ],
          notutilized: [
            "808.78MHz-810.00MHz(0.03%)"
          ]
        }
      }
    },
    {
      range: "810.00MHz-840.00MHz",
      result: {
        utilization: "0.75%",
        frequencies: {
          utilized: [
            "834.87MHz-840.00MHz(2.18%)"
          ],
          notutilized: [
            "810.00MHz-821.83MHz(0.03%)",
            "821.83MHz-834.87MHz(0.03%)"
          ]
        }
      }
    },
    {
      range: "840.00MHz-870.00MHz",
      result: {
        utilization: "26.05%",
        frequencies: {
          utilized: [
            "840.00MHz-847.91MHz(2.18%)",
            "847.91MHz-860.96MHz(1.52%)",
            "860.96MHz-870.00MHz(74.44%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "870.00MHz-900.00MHz",
      result: {
        utilization: "91.46%",
        frequencies: {
          utilized: [
            "870.00MHz-874.00MHz(74.44%)",
            "874.00MHz-887.04MHz(99.97%)",
            "887.04MHz-900.00MHz(99.96%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "900.00MHz-930.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "900.00MHz-900.09MHz(99.96%)",
            "900.09MHz-913.13MHz(100.00%)",
            "913.13MHz-926.17MHz(100.00%)",
            "926.17MHz-930.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "930.00MHz-960.00MHz",
      result: {
        utilization: "99.94%",
        frequencies: {
          utilized: [
            "930.00MHz-939.21MHz(100.00%)",
            "939.21MHz-952.26MHz(99.99%)",
            "952.26MHz-960.00MHz(99.84%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "960.00MHz-990.00MHz",
      result: {
        utilization: "99.81%",
        frequencies: {
          utilized: [
            "960.00MHz-965.30MHz(99.84%)",
            "965.30MHz-978.34MHz(99.79%)",
            "978.34MHz-990.00MHz(99.80%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "990.00MHz-1020.00MHz",
      result: {
        utilization: "99.83%",
        frequencies: {
          utilized: [
            "990.00MHz-991.39MHz(99.80%)",
            "991.39MHz-1004.43MHz(99.82%)",
            "1004.43MHz-1017.47MHz(99.83%)",
            "1017.47MHz-1020.00MHz(99.87%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1020.00MHz-1050.00MHz",
      result: {
        utilization: "99.89%",
        frequencies: {
          utilized: [
            "1020.00MHz-1030.52MHz(99.87%)",
            "1030.52MHz-1043.56MHz(99.90%)",
            "1043.56MHz-1050.00MHz(99.91%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1050.00MHz-1080.00MHz",
      result: {
        utilization: "99.93%",
        frequencies: {
          utilized: [
            "1050.00MHz-1056.60MHz(99.91%)",
            "1056.60MHz-1069.65MHz(99.94%)",
            "1069.65MHz-1080.00MHz(99.95%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1080.00MHz-1110.00MHz",
      result: {
        utilization: "99.96%",
        frequencies: {
          utilized: [
            "1080.00MHz-1082.69MHz(99.95%)",
            "1082.69MHz-1095.73MHz(99.96%)",
            "1095.73MHz-1108.78MHz(99.97%)",
            "1108.78MHz-1110.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1110.00MHz-1140.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1110.00MHz-1121.82MHz(99.97%)",
            "1121.82MHz-1134.86MHz(99.97%)",
            "1134.86MHz-1140.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1140.00MHz-1170.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1140.00MHz-1147.91MHz(99.97%)",
            "1147.91MHz-1160.95MHz(99.98%)",
            "1160.95MHz-1170.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1170.00MHz-1200.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1170.00MHz-1173.99MHz(99.97%)",
            "1173.99MHz-1187.04MHz(99.97%)",
            "1187.04MHz-1200.00MHz(99.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1200.00MHz-1230.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1200.00MHz-1200.08MHz(99.98%)",
            "1200.08MHz-1213.12MHz(99.97%)",
            "1213.12MHz-1226.17MHz(99.96%)",
            "1226.17MHz-1230.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1230.00MHz-1260.00MHz",
      result: {
        utilization: "99.96%",
        frequencies: {
          utilized: [
            "1230.00MHz-1239.21MHz(99.97%)",
            "1239.21MHz-1252.25MHz(99.96%)",
            "1252.25MHz-1260.00MHz(99.95%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1260.00MHz-1290.00MHz",
      result: {
        utilization: "99.94%",
        frequencies: {
          utilized: [
            "1260.00MHz-1265.30MHz(99.95%)",
            "1265.30MHz-1278.34MHz(99.94%)",
            "1278.34MHz-1290.00MHz(99.94%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1290.00MHz-1320.00MHz",
      result: {
        utilization: "99.93%",
        frequencies: {
          utilized: [
            "1290.00MHz-1291.38MHz(99.94%)",
            "1291.38MHz-1304.43MHz(99.92%)",
            "1304.43MHz-1317.47MHz(99.92%)",
            "1317.47MHz-1320.00MHz(99.93%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1320.00MHz-1350.00MHz",
      result: {
        utilization: "99.94%",
        frequencies: {
          utilized: [
            "1320.00MHz-1330.51MHz(99.93%)",
            "1330.51MHz-1343.56MHz(99.94%)",
            "1343.56MHz-1350.00MHz(99.95%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1350.00MHz-1380.00MHz",
      result: {
        utilization: "99.96%",
        frequencies: {
          utilized: [
            "1350.00MHz-1356.60MHz(99.95%)",
            "1356.60MHz-1369.64MHz(99.96%)",
            "1369.64MHz-1380.00MHz(99.96%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1380.00MHz-1410.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1380.00MHz-1382.69MHz(99.96%)",
            "1382.69MHz-1395.73MHz(99.97%)",
            "1395.73MHz-1408.77MHz(99.98%)",
            "1408.77MHz-1410.00MHz(99.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1410.00MHz-1440.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1410.00MHz-1421.82MHz(99.98%)",
            "1421.82MHz-1434.86MHz(99.99%)",
            "1434.86MHz-1440.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1440.00MHz-1470.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1440.00MHz-1447.90MHz(99.99%)",
            "1447.90MHz-1460.95MHz(99.99%)",
            "1460.95MHz-1470.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1470.00MHz-1500.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1470.00MHz-1473.99MHz(99.99%)",
            "1473.99MHz-1487.03MHz(99.99%)",
            "1487.03MHz-1500.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1500.00MHz-1530.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1500.00MHz-1500.08MHz(99.99%)",
            "1500.08MHz-1513.12MHz(99.99%)",
            "1513.12MHz-1526.16MHz(99.99%)",
            "1526.16MHz-1530.00MHz(99.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1530.00MHz-1560.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1530.00MHz-1539.20MHz(99.98%)",
            "1539.20MHz-1552.25MHz(99.97%)",
            "1552.25MHz-1560.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1560.00MHz-1590.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1560.00MHz-1565.29MHz(99.97%)",
            "1565.29MHz-1578.33MHz(99.96%)",
            "1578.33MHz-1590.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1590.00MHz-1620.00MHz",
      result: {
        utilization: "99.96%",
        frequencies: {
          utilized: [
            "1590.00MHz-1591.38MHz(99.97%)",
            "1591.38MHz-1604.42MHz(99.97%)",
            "1604.42MHz-1617.46MHz(99.95%)",
            "1617.46MHz-1620.00MHz(99.96%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1620.00MHz-1650.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "1620.00MHz-1630.51MHz(99.96%)",
            "1630.51MHz-1643.55MHz(99.97%)",
            "1643.55MHz-1650.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1650.00MHz-1680.00MHz",
      result: {
        utilization: "99.98%",
        frequencies: {
          utilized: [
            "1650.00MHz-1656.59MHz(99.97%)",
            "1656.59MHz-1669.64MHz(99.98%)",
            "1669.64MHz-1680.00MHz(99.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1680.00MHz-1710.00MHz",
      result: {
        utilization: "99.98%",
        frequencies: {
          utilized: [
            "1680.00MHz-1682.68MHz(99.98%)",
            "1682.68MHz-1695.72MHz(99.98%)",
            "1695.72MHz-1708.77MHz(99.99%)",
            "1708.77MHz-1710.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1710.00MHz-1740.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1710.00MHz-1721.81MHz(99.99%)",
            "1721.81MHz-1734.85MHz(99.99%)",
            "1734.85MHz-1740.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1740.00MHz-1770.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1740.00MHz-1747.90MHz(99.99%)",
            "1747.90MHz-1760.94MHz(99.99%)",
            "1760.94MHz-1770.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1770.00MHz-1800.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1770.00MHz-1773.98MHz(100.00%)",
            "1773.98MHz-1787.03MHz(100.00%)",
            "1787.03MHz-1800.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1800.00MHz-1830.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1800.00MHz-1800.07MHz(100.00%)",
            "1800.07MHz-1813.11MHz(100.00%)",
            "1813.11MHz-1826.16MHz(100.00%)",
            "1826.16MHz-1830.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1830.00MHz-1860.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1830.00MHz-1839.20MHz(100.00%)",
            "1839.20MHz-1852.24MHz(100.00%)",
            "1852.24MHz-1860.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1860.00MHz-1890.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1860.00MHz-1865.29MHz(100.00%)",
            "1865.29MHz-1878.33MHz(99.99%)",
            "1878.33MHz-1890.00MHz(99.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1890.00MHz-1920.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "1890.00MHz-1891.37MHz(99.98%)",
            "1891.37MHz-1904.42MHz(99.98%)",
            "1904.42MHz-1917.46MHz(100.00%)",
            "1917.46MHz-1920.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1920.00MHz-1950.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1920.00MHz-1930.50MHz(100.00%)",
            "1930.50MHz-1943.55MHz(100.00%)",
            "1943.55MHz-1950.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1950.00MHz-1980.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1950.00MHz-1956.59MHz(100.00%)",
            "1956.59MHz-1969.63MHz(100.00%)",
            "1969.63MHz-1980.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1980.00MHz-2010.00MHz",
      result: {
        utilization: "96.91%",
        frequencies: {
          utilized: [
            "1980.00MHz-1982.68MHz(100.00%)",
            "1982.68MHz-1995.72MHz(100.00%)",
            "1995.72MHz-2008.76MHz(100.00%)",
            "2008.76MHz-2010.00MHz(87.66%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2010.00MHz-2040.00MHz",
      result: {
        utilization: "87.54%",
        frequencies: {
          utilized: [
            "2010.00MHz-2021.81MHz(87.66%)",
            "2021.81MHz-2034.85MHz(86.33%)",
            "2034.85MHz-2040.00MHz(88.63%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2040.00MHz-2070.00MHz",
      result: {
        utilization: "88.23%",
        frequencies: {
          utilized: [
            "2040.00MHz-2047.89MHz(88.63%)",
            "2047.89MHz-2060.94MHz(87.53%)",
            "2060.94MHz-2070.00MHz(88.52%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2070.00MHz-2100.00MHz",
      result: {
        utilization: "92.47%",
        frequencies: {
          utilized: [
            "2070.00MHz-2073.98MHz(88.52%)",
            "2073.98MHz-2087.02MHz(88.88%)",
            "2087.02MHz-2100.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2100.00MHz-2130.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "2100.00MHz-2100.07MHz(100.00%)",
            "2100.07MHz-2113.11MHz(100.00%)",
            "2113.11MHz-2126.15MHz(100.00%)",
            "2126.15MHz-2130.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2130.00MHz-2160.00MHz",
      result: {
        utilization: "94.17%",
        frequencies: {
          utilized: [
            "2130.00MHz-2139.19MHz(100.00%)",
            "2139.19MHz-2152.24MHz(91.34%)",
            "2152.24MHz-2160.00MHz(91.17%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2160.00MHz-2190.00MHz",
      result: {
        utilization: "82.68%",
        frequencies: {
          utilized: [
            "2160.00MHz-2165.28MHz(91.17%)",
            "2165.28MHz-2178.32MHz(91.11%)",
            "2178.32MHz-2190.00MHz(65.77%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2190.00MHz-2220.00MHz",
      result: {
        utilization: "64.03%",
        frequencies: {
          utilized: [
            "2190.00MHz-2191.37MHz(65.77%)",
            "2191.37MHz-2204.41MHz(64.00%)",
            "2204.41MHz-2217.45MHz(64.06%)",
            "2217.45MHz-2220.00MHz(62.30%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2220.00MHz-2250.00MHz",
      result: {
        utilization: "62.72%",
        frequencies: {
          utilized: [
            "2220.00MHz-2230.50MHz(62.30%)",
            "2230.50MHz-2243.54MHz(65.22%)",
            "2243.54MHz-2250.00MHz(60.65%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2250.00MHz-2280.00MHz",
      result: {
        utilization: "71.50%",
        frequencies: {
          utilized: [
            "2250.00MHz-2256.58MHz(60.65%)",
            "2256.58MHz-2269.63MHz(63.43%)",
            "2269.63MHz-2280.00MHz(90.41%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2280.00MHz-2310.00MHz",
      result: {
        utilization: "93.55%",
        frequencies: {
          utilized: [
            "2280.00MHz-2282.67MHz(90.41%)",
            "2282.67MHz-2295.71MHz(95.07%)",
            "2295.71MHz-2308.76MHz(93.55%)",
            "2308.76MHz-2310.00MHz(95.19%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2310.00MHz-2340.00MHz",
      result: {
        utilization: "94.26%",
        frequencies: {
          utilized: [
            "2310.00MHz-2321.80MHz(95.19%)",
            "2321.80MHz-2334.84MHz(93.59%)",
            "2334.84MHz-2340.00MHz(93.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2340.00MHz-2370.00MHz",
      result: {
        utilization: "91.36%",
        frequencies: {
          utilized: [
            "2340.00MHz-2347.89MHz(93.99%)",
            "2347.89MHz-2360.93MHz(93.94%)",
            "2360.93MHz-2370.00MHz(86.14%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2370.00MHz-2400.00MHz",
      result: {
        utilization: "80.25%",
        frequencies: {
          utilized: [
            "2370.00MHz-2373.97MHz(86.14%)",
            "2373.97MHz-2387.02MHz(77.26%)",
            "2387.02MHz-2400.00MHz(77.36%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2400.00MHz-2430.00MHz",
      result: {
        utilization: "77.55%",
        frequencies: {
          utilized: [
            "2400.00MHz-2400.06MHz(77.36%)",
            "2400.06MHz-2413.10MHz(76.08%)",
            "2413.10MHz-2426.15MHz(77.58%)",
            "2426.15MHz-2430.00MHz(79.20%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2430.00MHz-2460.00MHz",
      result: {
        utilization: "77.50%",
        frequencies: {
          utilized: [
            "2430.00MHz-2439.19MHz(79.20%)",
            "2439.19MHz-2452.23MHz(79.18%)",
            "2452.23MHz-2460.00MHz(74.13%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2460.00MHz-2490.00MHz",
      result: {
        utilization: "74.00%",
        frequencies: {
          utilized: [
            "2460.00MHz-2465.28MHz(74.13%)",
            "2465.28MHz-2478.32MHz(73.13%)",
            "2478.32MHz-2490.00MHz(74.73%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2490.00MHz-2520.00MHz",
      result: {
        utilization: "76.21%",
        frequencies: {
          utilized: [
            "2490.00MHz-2491.36MHz(74.73%)",
            "2491.36MHz-2504.41MHz(75.22%)",
            "2504.41MHz-2517.45MHz(77.24%)",
            "2517.45MHz-2520.00MHz(77.66%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2520.00MHz-2550.00MHz",
      result: {
        utilization: "81.89%",
        frequencies: {
          utilized: [
            "2520.00MHz-2530.49MHz(77.66%)",
            "2530.49MHz-2543.54MHz(77.20%)",
            "2543.54MHz-2550.00MHz(90.81%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2550.00MHz-2580.00MHz",
      result: {
        utilization: "94.35%",
        frequencies: {
          utilized: [
            "2550.00MHz-2556.58MHz(90.81%)",
            "2556.58MHz-2569.62MHz(96.17%)",
            "2569.62MHz-2580.00MHz(96.08%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2580.00MHz-2610.00MHz",
      result: {
        utilization: "97.99%",
        frequencies: {
          utilized: [
            "2580.00MHz-2582.67MHz(96.08%)",
            "2582.67MHz-2595.71MHz(95.87%)",
            "2595.71MHz-2608.75MHz(100.00%)",
            "2608.75MHz-2610.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2610.00MHz-2640.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "2610.00MHz-2621.80MHz(100.00%)",
            "2621.80MHz-2634.84MHz(100.00%)",
            "2634.84MHz-2640.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2640.00MHz-2670.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "2640.00MHz-2647.88MHz(100.00%)",
            "2647.88MHz-2660.93MHz(100.00%)",
            "2660.93MHz-2670.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2670.00MHz-2700.00MHz",
      result: {
        utilization: "75.80%",
        frequencies: {
          utilized: [
            "2670.00MHz-2673.97MHz(100.00%)",
            "2673.97MHz-2687.01MHz(63.97%)",
            "2687.01MHz-2700.00MHz(63.42%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2700.00MHz-2730.00MHz",
      result: {
        utilization: "67.39%",
        frequencies: {
          utilized: [
            "2700.00MHz-2700.06MHz(63.42%)",
            "2700.06MHz-2713.10MHz(63.91%)",
            "2713.10MHz-2726.14MHz(65.10%)",
            "2726.14MHz-2730.00MHz(77.14%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2730.00MHz-2760.00MHz",
      result: {
        utilization: "71.05%",
        frequencies: {
          utilized: [
            "2730.00MHz-2739.18MHz(77.14%)",
            "2739.18MHz-2752.23MHz(67.11%)",
            "2752.23MHz-2760.00MHz(68.89%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2760.00MHz-2790.00MHz",
      result: {
        utilization: "70.15%",
        frequencies: {
          utilized: [
            "2760.00MHz-2765.27MHz(68.89%)",
            "2765.27MHz-2778.31MHz(69.85%)",
            "2778.31MHz-2790.00MHz(71.71%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2790.00MHz-2820.00MHz",
      result: {
        utilization: "73.49%",
        frequencies: {
          utilized: [
            "2790.00MHz-2791.36MHz(71.71%)",
            "2791.36MHz-2804.40MHz(72.68%)",
            "2804.40MHz-2817.44MHz(74.59%)",
            "2817.44MHz-2820.00MHz(74.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2820.00MHz-2850.00MHz",
      result: {
        utilization: "75.62%",
        frequencies: {
          utilized: [
            "2820.00MHz-2830.49MHz(74.98%)",
            "2830.49MHz-2843.53MHz(75.78%)",
            "2843.53MHz-2850.00MHz(76.10%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2850.00MHz-2880.00MHz",
      result: {
        utilization: "75.71%",
        frequencies: {
          utilized: [
            "2850.00MHz-2856.57MHz(76.10%)",
            "2856.57MHz-2869.62MHz(75.94%)",
            "2869.62MHz-2880.00MHz(75.09%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2880.00MHz-2910.00MHz",
      result: {
        utilization: "74.61%",
        frequencies: {
          utilized: [
            "2880.00MHz-2882.66MHz(75.09%)",
            "2882.66MHz-2895.70MHz(74.83%)",
            "2895.70MHz-2908.75MHz(74.42%)",
            "2908.75MHz-2910.00MHz(74.08%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2910.00MHz-2940.00MHz",
      result: {
        utilization: "73.57%",
        frequencies: {
          utilized: [
            "2910.00MHz-2921.79MHz(74.08%)",
            "2921.79MHz-2934.83MHz(73.61%)",
            "2934.83MHz-2940.00MHz(73.02%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2940.00MHz-2970.00MHz",
      result: {
        utilization: "73.15%",
        frequencies: {
          utilized: [
            "2940.00MHz-2947.88MHz(73.02%)",
            "2947.88MHz-2960.92MHz(73.48%)",
            "2960.92MHz-2970.00MHz(72.95%)"
          ],
          notutilized: []
        }
      }
    },
    {
  range: "2970.00MHz-3000.00MHz",
  result: {
    utilization: "86.47%",
    frequencies: {
      utilized: [
        "2970.00MHz-2973.96MHz(72.95%)",
        "2973.96MHz-2987.01MHz(100.00%)"
      ],
      notutilized: []
    }
  }
}
]
},

// 3GHz to 6GHz
{
  range: "3GHz-6GHz",
  subbands: [
    {
      range: "3000.00MHz-3030.00MHz",
      result: {
        utilization: "44.72%",
        frequencies: {
          utilized: [
            "3000.05MHz-3013.09MHz(41.37%)",
            "3013.09MHz-3026.14MHz(45.23%)",
            "3026.14MHz-3030.00MHz(47.57%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3240.00MHz-3270.00MHz",
      result: {
        utilization: "63.62%",
        frequencies: {
          utilized: [
            "3240.00MHz-3247.87MHz(63.69%)",
            "3247.87MHz-3260.92MHz(63.38%)",
            "3260.92MHz-3270.00MHz(63.78%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3270.00MHz-3300.00MHz",
      result: {
        utilization: "63.21%",
        frequencies: {
          utilized: [
            "3270.00MHz-3273.96MHz(63.78%)",
            "3273.96MHz-3287.00MHz(62.78%)",
            "3287.00MHz-3300.00MHz(63.07%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3300.00MHz-3330.00MHz",
      result: {
        utilization: "62.52%",
        frequencies: {
          utilized: [
            "3300.00MHz-3300.05MHz(63.07%)",
            "3300.05MHz-3313.09MHz(62.22%)",
            "3313.09MHz-3326.13MHz(62.47%)",
            "3326.13MHz-3330.00MHz(62.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3330.00MHz-3360.00MHz",
      result: {
        utilization: "62.92%",
        frequencies: {
          utilized: [
            "3330.00MHz-3339.17MHz(62.34%)",
            "3339.17MHz-3352.22MHz(63.35%)",
            "3352.22MHz-3360.00MHz(63.06%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3360.00MHz-3390.00MHz",
      result: {
        utilization: "63.05%",
        frequencies: {
          utilized: [
            "3360.00MHz-3365.26MHz(63.06%)",
            "3365.26MHz-3378.30MHz(63.02%)",
            "3378.30MHz-3390.00MHz(63.08%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3390.00MHz-3420.00MHz",
      result: {
        utilization: "67.61%",
        frequencies: {
          utilized: [
            "3390.00MHz-3391.35MHz(63.08%)",
            "3391.35MHz-3404.39MHz(69.66%)",
            "3404.39MHz-3417.43MHz(69.49%)",
            "3417.43MHz-3420.00MHz(68.20%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3420.00MHz-3450.00MHz",
      result: {
        utilization: "68.24%",
        frequencies: {
          utilized: [
            "3420.00MHz-3430.48MHz(68.20%)",
            "3430.48MHz-3443.52MHz(68.73%)",
            "3443.52MHz-3450.00MHz(67.80%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3450.00MHz-3480.00MHz",
      result: {
        utilization: "80.69%",
        frequencies: {
          utilized: [
            "3450.00MHz-3456.56MHz(67.80%)",
            "3456.56MHz-3469.61MHz(88.01%)",
            "3469.61MHz-3480.00MHz(86.27%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3480.00MHz-3510.00MHz",
      result: {
        utilization: "86.59%",
        frequencies: {
          utilized: [
            "3480.00MHz-3482.65MHz(86.27%)",
            "3482.65MHz-3495.69MHz(80.52%)",
            "3495.69MHz-3508.74MHz(89.96%)",
            "3508.74MHz-3510.00MHz(89.60%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3510.00MHz-3540.00MHz",
      result: {
        utilization: "90.11%",
        frequencies: {
          utilized: [
            "3510.00MHz-3521.78MHz(89.60%)",
            "3521.78MHz-3534.82MHz(91.06%)",
            "3534.82MHz-3540.00MHz(89.68%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3540.00MHz-3570.00MHz",
      result: {
        utilization: "89.62%",
        frequencies: {
          utilized: [
            "3540.00MHz-3547.87MHz(89.68%)",
            "3547.87MHz-3560.91MHz(89.57%)",
            "3560.91MHz-3570.00MHz(89.62%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3570.00MHz-3600.00MHz",
      result: {
        utilization: "88.08%",
        frequencies: {
          utilized: [
            "3570.00MHz-3573.95MHz(89.62%)",
            "3573.95MHz-3587.00MHz(89.80%)",
            "3587.00MHz-3600.00MHz(84.83%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3600.00MHz-3630.00MHz",
      result: {
        utilization: "62.21%",
        frequencies: {
          utilized: [
            "3600.00MHz-3600.04MHz(84.83%)",
            "3600.04MHz-3613.08MHz(55.39%)",
            "3613.08MHz-3626.13MHz(55.25%)",
            "3626.13MHz-3630.00MHz(53.36%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3630.00MHz-3660.00MHz",
      result: {
        utilization: "51.07%",
        frequencies: {
          utilized: [
            "3630.00MHz-3639.17MHz(53.36%)",
            "3639.17MHz-3652.21MHz(51.19%)",
            "3652.21MHz-3660.00MHz(48.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3660.00MHz-3690.00MHz",
      result: {
        utilization: "47.38%",
        frequencies: {
          utilized: [
            "3660.00MHz-3665.26MHz(48.67%)",
            "3665.26MHz-3678.30MHz(47.14%)",
            "3678.30MHz-3690.00MHz(46.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3690.00MHz-3720.00MHz",
      result: {
        utilization: "45.63%",
        frequencies: {
          utilized: [
            "3690.00MHz-3691.34MHz(46.34%)",
            "3691.34MHz-3704.39MHz(45.70%)",
            "3704.39MHz-3717.43MHz(45.52%)",
            "3717.43MHz-3720.00MHz(44.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3720.00MHz-3750.00MHz",
      result: {
        utilization: "49.09%",
        frequencies: {
          utilized: [
            "3720.00MHz-3730.47MHz(44.98%)",
            "3730.47MHz-3743.52MHz(52.18%)",
            "3743.52MHz-3750.00MHz(50.12%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3750.00MHz-3780.00MHz",
      result: {
        utilization: "48.64%",
        frequencies: {
          utilized: [
            "3750.00MHz-3756.56MHz(50.12%)",
            "3756.56MHz-3769.60MHz(47.69%)",
            "3769.60MHz-3780.00MHz(48.10%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3780.00MHz-3810.00MHz",
      result: {
        utilization: "50.87%",
        frequencies: {
          utilized: [
            "3780.00MHz-3782.65MHz(48.10%)",
            "3782.65MHz-3795.69MHz(50.51%)",
            "3795.69MHz-3808.73MHz(51.50%)",
            "3808.73MHz-3810.00MHz(53.35%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3810.00MHz-3840.00MHz",
      result: {
        utilization: "54.04%",
        frequencies: {
          utilized: [
            "3810.00MHz-3821.78MHz(53.35%)",
            "3821.78MHz-3834.82MHz(53.91%)",
            "3834.82MHz-3840.00MHz(54.86%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3840.00MHz-3870.00MHz",
      result: {
        utilization: "55.55%",
        frequencies: {
          utilized: [
            "3840.00MHz-3847.86MHz(54.86%)",
            "3847.86MHz-3860.91MHz(55.56%)",
            "3860.91MHz-3870.00MHz(56.23%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3870.00MHz-3900.00MHz",
      result: {
        utilization: "55.18%",
        frequencies: {
          utilized: [
            "3870.00MHz-3873.95MHz(56.23%)",
            "3873.95MHz-3886.99MHz(55.07%)",
            "3886.99MHz-3900.00MHz(54.23%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3900.00MHz-3930.00MHz",
      result: {
        utilization: "51.31%",
        frequencies: {
          utilized: [
            "3900.00MHz-3900.04MHz(54.23%)",
            "3900.04MHz-3913.08MHz(52.42%)",
            "3913.08MHz-3926.12MHz(50.21%)",
            "3926.12MHz-3930.00MHz(48.36%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3930.00MHz-3960.00MHz",
      result: {
        utilization: "48.32%",
        frequencies: {
          utilized: [
            "3930.00MHz-3939.16MHz(48.36%)",
            "3939.16MHz-3952.21MHz(48.24%)",
            "3952.21MHz-3960.00MHz(48.35%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3960.00MHz-3990.00MHz",
      result: {
        utilization: "50.08%",
        frequencies: {
          utilized: [
            "3960.00MHz-3965.25MHz(48.35%)",
            "3965.25MHz-3978.29MHz(49.55%)",
            "3978.29MHz-3990.00MHz(52.33%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "3990.00MHz-4020.00MHz",
      result: {
        utilization: "53.80%",
        frequencies: {
          utilized: [
            "3990.00MHz-3991.34MHz(52.33%)",
            "3991.34MHz-4004.38MHz(52.99%)",
            "4004.38MHz-4017.42MHz(54.17%)",
            "4017.42MHz-4020.00MHz(55.69%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4020.00MHz-4050.00MHz",
      result: {
        utilization: "57.60%",
        frequencies: {
          utilized: [
            "4020.00MHz-4030.47MHz(55.69%)",
            "4030.47MHz-4043.51MHz(57.83%)",
            "4043.51MHz-4050.00MHz(59.29%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4050.00MHz-4080.00MHz",
      result: {
        utilization: "61.45%",
        frequencies: {
          utilized: [
            "4050.00MHz-4056.55MHz(59.29%)",
            "4056.55MHz-4069.60MHz(61.79%)",
            "4069.60MHz-4080.00MHz(63.28%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4080.00MHz-4110.00MHz",
      result: {
        utilization: "64.38%",
        frequencies: {
          utilized: [
            "4080.00MHz-4082.64MHz(63.28%)",
            "4082.64MHz-4095.68MHz(64.45%)",
            "4095.68MHz-4108.73MHz(64.67%)",
            "4108.73MHz-4110.00MHz(65.11%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4110.00MHz-4140.00MHz",
      result: {
        utilization: "65.51%",
        frequencies: {
          utilized: [
            "4110.00MHz-4121.77MHz(65.11%)",
            "4121.77MHz-4134.81MHz(65.44%)",
            "4134.81MHz-4140.00MHz(65.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4140.00MHz-4170.00MHz",
      result: {
        utilization: "67.88%",
        frequencies: {
          utilized: [
            "4140.00MHz-4147.86MHz(65.98%)",
            "4147.86MHz-4160.90MHz(67.89%)",
            "4160.90MHz-4170.00MHz(69.76%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4170.00MHz-4200.00MHz",
      result: {
        utilization: "70.66%",
        frequencies: {
          utilized: [
            "4170.00MHz-4173.94MHz(69.76%)",
            "4173.94MHz-4186.99MHz(70.49%)",
            "4186.99MHz-4200.00MHz(71.73%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4200.00MHz-4230.00MHz",
      result: {
        utilization: "74.53%",
        frequencies: {
          utilized: [
            "4200.00MHz-4200.03MHz(71.73%)",
            "4200.03MHz-4213.07MHz(72.76%)",
            "4213.07MHz-4226.12MHz(74.33%)",
            "4226.12MHz-4230.00MHz(79.31%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4230.00MHz-4260.00MHz",
      result: {
        utilization: "81.62%",
        frequencies: {
          utilized: [
            "4230.00MHz-4239.16MHz(79.31%)",
            "4239.16MHz-4252.20MHz(82.32%)",
            "4252.20MHz-4260.00MHz(83.24%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4260.00MHz-4290.00MHz",
      result: {
        utilization: "83.91%",
        frequencies: {
          utilized: [
            "4260.00MHz-4265.25MHz(83.24%)",
            "4265.25MHz-4278.29MHz(84.12%)",
            "4278.29MHz-4290.00MHz(84.37%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4290.00MHz-4320.00MHz",
      result: {
        utilization: "85.30%",
        frequencies: {
          utilized: [
            "4290.00MHz-4291.33MHz(84.37%)",
            "4291.33MHz-4304.38MHz(84.78%)",
            "4304.38MHz-4317.42MHz(85.44%)",
            "4317.42MHz-4320.00MHz(86.59%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4320.00MHz-4350.00MHz",
      result: {
        utilization: "86.57%",
        frequencies: {
          utilized: [
            "4320.00MHz-4330.46MHz(86.59%)",
            "4330.46MHz-4343.51MHz(86.59%)",
            "4343.51MHz-4350.00MHz(86.52%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4350.00MHz-4380.00MHz",
      result: {
        utilization: "86.86%",
        frequencies: {
          utilized: [
            "4350.00MHz-4356.55MHz(86.52%)",
            "4356.55MHz-4369.59MHz(86.59%)",
            "4369.59MHz-4380.00MHz(87.46%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4380.00MHz-4410.00MHz",
      result: {
        utilization: "89.08%",
        frequencies: {
          utilized: [
            "4380.00MHz-4382.64MHz(87.46%)",
            "4382.64MHz-4395.68MHz(88.53%)",
            "4395.68MHz-4408.72MHz(89.71%)",
            "4408.72MHz-4410.00MHz(90.63%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4410.00MHz-4440.00MHz",
      result: {
        utilization: "91.58%",
        frequencies: {
          utilized: [
            "4410.00MHz-4421.77MHz(90.63%)",
            "4421.77MHz-4434.81MHz(91.74%)",
            "4434.81MHz-4440.00MHz(92.36%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4440.00MHz-4470.00MHz",
      result: {
        utilization: "93.14%",
        frequencies: {
          utilized: [
            "4440.00MHz-4447.85MHz(92.36%)",
            "4447.85MHz-4460.90MHz(93.36%)",
            "4460.90MHz-4470.00MHz(93.71%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4470.00MHz-4500.00MHz",
      result: {
        utilization: "94.27%",
        frequencies: {
          utilized: [
            "4470.00MHz-4473.94MHz(93.71%)",
            "4473.94MHz-4486.98MHz(94.39%)",
            "4486.98MHz-4500.00MHz(94.72%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4500.00MHz-4530.00MHz",
      result: {
        utilization: "94.72%",
        frequencies: {
          utilized: [
            "4500.00MHz-4500.03MHz(94.72%)",
            "4500.03MHz-4513.07MHz(94.75%)",
            "4513.07MHz-4526.11MHz(94.72%)",
            "4526.11MHz-4530.00MHz(94.68%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4530.00MHz-4560.00MHz",
      result: {
        utilization: "94.45%",
        frequencies: {
          utilized: [
            "4530.00MHz-4539.15MHz(94.68%)",
            "4539.15MHz-4552.20MHz(94.46%)",
            "4552.20MHz-4560.00MHz(94.22%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4560.00MHz-4590.00MHz",
      result: {
        utilization: "94.04%",
        frequencies: {
          utilized: [
            "4560.00MHz-4565.24MHz(94.22%)",
            "4565.24MHz-4578.28MHz(94.08%)",
            "4578.28MHz-4590.00MHz(93.81%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4590.00MHz-4620.00MHz",
      result: {
        utilization: "93.18%",
        frequencies: {
          utilized: [
            "4590.00MHz-4591.33MHz(93.81%)",
            "4591.33MHz-4604.37MHz(93.40%)",
            "4604.37MHz-4617.41MHz(93.02%)",
            "4617.41MHz-4620.00MHz(92.49%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4620.00MHz-4650.00MHz",
      result: {
        utilization: "92.23%",
        frequencies: {
          utilized: [
            "4620.00MHz-4630.46MHz(92.49%)",
            "4630.46MHz-4643.50MHz(92.20%)",
            "4643.50MHz-4650.00MHz(92.01%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4650.00MHz-4680.00MHz",
      result: {
        utilization: "92.09%",
        frequencies: {
          utilized: [
            "4650.00MHz-4656.54MHz(92.01%)",
            "4656.54MHz-4669.59MHz(91.99%)",
            "4669.59MHz-4680.00MHz(92.26%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4680.00MHz-4710.00MHz",
      result: {
        utilization: "92.81%",
        frequencies: {
          utilized: [
            "4680.00MHz-4682.63MHz(92.26%)",
            "4682.63MHz-4695.67MHz(92.59%)",
            "4695.67MHz-4708.72MHz(92.94%)",
            "4708.72MHz-4710.00MHz(93.44%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4710.00MHz-4740.00MHz",
      result: {
        utilization: "94.15%",
        frequencies: {
          utilized: [
            "4710.00MHz-4721.76MHz(93.44%)",
            "4721.76MHz-4734.80MHz(94.11%)",
            "4734.80MHz-4740.00MHz(94.91%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4740.00MHz-4770.00MHz",
      result: {
        utilization: "95.63%",
        frequencies: {
          utilized: [
            "4740.00MHz-4747.85MHz(94.91%)",
            "4747.85MHz-4760.89MHz(95.64%)",
            "4760.89MHz-4770.00MHz(96.35%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4770.00MHz-4800.00MHz",
      result: {
        utilization: "96.80%",
        frequencies: {
          utilized: [
            "4770.00MHz-4773.93MHz(96.35%)",
            "4773.93MHz-4786.98MHz(96.81%)",
            "4786.98MHz-4800.00MHz(97.24%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4800.00MHz-4830.00MHz",
      result: {
        utilization: "97.52%",
        frequencies: {
          utilized: [
            "4800.00MHz-4800.02MHz(97.24%)",
            "4800.02MHz-4813.06MHz(97.66%)",
            "4813.06MHz-4826.11MHz(97.53%)",
            "4826.11MHz-4830.00MHz(97.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4830.00MHz-4860.00MHz",
      result: {
        utilization: "97.68%",
        frequencies: {
          utilized: [
            "4830.00MHz-4839.15MHz(97.67%)",
            "4839.15MHz-4852.19MHz(97.70%)",
            "4852.19MHz-4860.00MHz(97.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4860.00MHz-4890.00MHz",
      result: {
        utilization: "97.67%",
        frequencies: {
          utilized: [
            "4860.00MHz-4865.24MHz(97.67%)",
            "4865.24MHz-4878.28MHz(97.68%)",
            "4878.28MHz-4890.00MHz(97.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4890.00MHz-4920.00MHz",
      result: {
        utilization: "97.99%",
        frequencies: {
          utilized: [
            "4890.00MHz-4891.32MHz(97.67%)",
            "4891.32MHz-4904.37MHz(97.87%)",
            "4904.37MHz-4917.41MHz(98.40%)",
            "4917.41MHz-4920.00MHz(98.02%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4920.00MHz-4950.00MHz",
      result: {
        utilization: "98.26%",
        frequencies: {
          utilized: [
            "4920.00MHz-4930.45MHz(98.02%)",
            "4930.45MHz-4943.50MHz(98.18%)",
            "4943.50MHz-4950.00MHz(98.57%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4950.00MHz-4980.00MHz",
      result: {
        utilization: "98.64%",
        frequencies: {
          utilized: [
            "4950.00MHz-4956.54MHz(98.57%)",
            "4956.54MHz-4969.58MHz(98.43%)",
            "4969.58MHz-4980.00MHz(98.92%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "4980.00MHz-5010.00MHz",
      result: {
        utilization: "99.25%",
        frequencies: {
          utilized: [
            "4980.00MHz-4982.63MHz(98.92%)",
            "4982.63MHz-4995.67MHz(99.33%)",
            "4995.67MHz-5008.71MHz(99.30%)",
            "5008.71MHz-5010.00MHz(99.43%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5010.00MHz-5040.00MHz",
      result: {
        utilization: "99.51%",
        frequencies: {
          utilized: [
            "5010.00MHz-5021.76MHz(99.43%)",
            "5021.76MHz-5034.80MHz(99.48%)",
            "5034.80MHz-5040.00MHz(99.62%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5040.00MHz-5070.00MHz",
      result: {
        utilization: "99.66%",
        frequencies: {
          utilized: [
            "5040.00MHz-5047.84MHz(99.62%)",
            "5047.84MHz-5060.89MHz(99.64%)",
            "5060.89MHz-5070.00MHz(99.72%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5070.00MHz-5100.00MHz",
      result: {
        utilization: "99.82%",
        frequencies: {
          utilized: [
            "5070.00MHz-5073.93MHz(99.72%)",
            "5073.93MHz-5086.97MHz(99.84%)",
            "5086.97MHz-5100.00MHz(99.89%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5100.00MHz-5130.00MHz",
      result: {
        utilization: "99.92%",
        frequencies: {
          utilized: [
            "5100.00MHz-5100.02MHz(99.89%)",
            "5100.02MHz-5113.06MHz(99.89%)",
            "5113.06MHz-5126.10MHz(99.95%)",
            "5126.10MHz-5130.00MHz(99.95%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5130.00MHz-5160.00MHz",
      result: {
        utilization: "99.95%",
        frequencies: {
          utilized: [
            "5130.00MHz-5139.14MHz(99.95%)",
            "5139.14MHz-5152.19MHz(99.93%)",
            "5152.19MHz-5160.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5160.00MHz-5190.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "5160.00MHz-5165.23MHz(99.97%)",
            "5165.23MHz-5178.27MHz(99.97%)",
            "5178.27MHz-5190.00MHz(99.96%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5190.00MHz-5220.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "5190.00MHz-5191.32MHz(99.96%)",
            "5191.32MHz-5204.36MHz(99.97%)",
            "5204.36MHz-5217.40MHz(99.97%)",
            "5217.40MHz-5220.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5220.00MHz-5250.00MHz",
      result: {
        utilization: "99.97%",
        frequencies: {
          utilized: [
            "5220.00MHz-5230.45MHz(99.97%)",
            "5230.45MHz-5243.49MHz(99.98%)",
            "5243.49MHz-5250.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5250.00MHz-5280.00MHz",
      result: {
        utilization: "99.98%",
        frequencies: {
          utilized: [
            "5250.00MHz-5256.53MHz(99.97%)",
            "5256.53MHz-5269.58MHz(99.98%)",
            "5269.58MHz-5280.00MHz(99.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5280.00MHz-5310.00MHz",
      result: {
        utilization: "99.96%",
        frequencies: {
          utilized: [
            "5280.00MHz-5282.62MHz(99.98%)",
            "5282.62MHz-5295.66MHz(99.96%)",
            "5295.66MHz-5308.71MHz(99.96%)",
            "5308.71MHz-5310.00MHz(99.94%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5310.00MHz-5340.00MHz",
      result: {
        utilization: "99.91%",
        frequencies: {
          utilized: [
            "5310.00MHz-5321.75MHz(99.94%)",
            "5321.75MHz-5334.79MHz(99.92%)",
            "5334.79MHz-5340.00MHz(99.88%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5340.00MHz-5370.00MHz",
      result: {
        utilization: "99.87%",
        frequencies: {
          utilized: [
            "5340.00MHz-5347.84MHz(99.88%)",
            "5347.84MHz-5360.88MHz(99.88%)",
            "5360.88MHz-5370.00MHz(99.85%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5370.00MHz-5400.00MHz",
      result: {
        utilization: "99.89%",
        frequencies: {
          utilized: [
            "5370.00MHz-5373.92MHz(99.85%)",
            "5373.92MHz-5386.97MHz(99.89%)",
            "5386.97MHz-5400.00MHz(99.92%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5400.00MHz-5430.00MHz",
      result: {
        utilization: "99.89%",
        frequencies: {
          utilized: [
            "5400.00MHz-5400.01MHz(99.92%)",
            "5400.01MHz-5413.05MHz(99.91%)",
            "5413.05MHz-5426.10MHz(99.88%)",
            "5426.10MHz-5430.00MHz(99.87%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5430.00MHz-5460.00MHz",
      result: {
        utilization: "99.89%",
        frequencies: {
          utilized: [
            "5430.00MHz-5439.14MHz(99.87%)",
            "5439.14MHz-5452.18MHz(99.91%)",
            "5452.18MHz-5460.00MHz(99.88%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5460.00MHz-5490.00MHz",
      result: {
        utilization: "99.90%",
        frequencies: {
          utilized: [
            "5460.00MHz-5465.23MHz(99.88%)",
            "5465.23MHz-5478.27MHz(99.89%)",
            "5478.27MHz-5490.00MHz(99.94%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5490.00MHz-5520.00MHz",
      result: {
        utilization: "99.92%",
        frequencies: {
          utilized: [
            "5490.00MHz-5491.31MHz(99.94%)",
            "5491.31MHz-5504.36MHz(99.93%)",
            "5504.36MHz-5517.40MHz(99.91%)",
            "5517.40MHz-5520.00MHz(99.91%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5520.00MHz-5550.00MHz",
      result: {
        utilization: "99.90%",
        frequencies: {
          utilized: [
            "5520.00MHz-5530.44MHz(99.91%)",
            "5530.44MHz-5543.49MHz(99.90%)",
            "5543.49MHz-5550.00MHz(99.90%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5550.00MHz-5580.00MHz",
      result: {
        utilization: "99.89%",
        frequencies: {
          utilized: [
            "5550.00MHz-5556.53MHz(99.90%)",
            "5556.53MHz-5569.57MHz(99.88%)",
            "5569.57MHz-5580.00MHz(99.88%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5580.00MHz-5610.00MHz",
      result: {
        utilization: "99.88%",
        frequencies: {
          utilized: [
            "5580.00MHz-5582.62MHz(99.88%)",
            "5582.62MHz-5595.66MHz(99.89%)",
            "5595.66MHz-5608.70MHz(99.88%)",
            "5608.70MHz-5610.00MHz(99.88%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5610.00MHz-5640.00MHz",
      result: {
        utilization: "99.88%",
        frequencies: {
          utilized: [
            "5610.00MHz-5621.75MHz(99.88%)",
            "5621.75MHz-5634.79MHz(99.88%)",
            "5634.79MHz-5640.00MHz(99.87%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5640.00MHz-5670.00MHz",
      result: {
        utilization: "99.89%",
        frequencies: {
          utilized: [
            "5640.00MHz-5647.83MHz(99.87%)",
            "5647.83MHz-5660.88MHz(99.90%)",
            "5660.88MHz-5670.00MHz(99.90%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5670.00MHz-5700.00MHz",
      result: {
        utilization: "99.92%",
        frequencies: {
          utilized: [
            "5670.00MHz-5673.92MHz(99.90%)",
            "5673.92MHz-5686.96MHz(99.93%)",
            "5686.96MHz-5700.00MHz(99.93%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5700.00MHz-5730.00MHz",
      result: {
        utilization: "99.94%",
        frequencies: {
          utilized: [
            "5700.00MHz-5700.01MHz(99.93%)",
            "5700.01MHz-5713.05MHz(99.92%)",
            "5713.05MHz-5726.09MHz(99.95%)",
            "5726.09MHz-5730.00MHz(99.96%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5730.00MHz-5760.00MHz",
      result: {
        utilization: "99.96%",
        frequencies: {
          utilized: [
            "5730.00MHz-5739.13MHz(99.96%)",
            "5739.13MHz-5752.18MHz(99.96%)",
            "5752.18MHz-5760.00MHz(99.97%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5760.00MHz-5790.00MHz",
      result: {
        utilization: "99.98%",
        frequencies: {
          utilized: [
            "5760.00MHz-5765.22MHz(99.97%)",
            "5765.22MHz-5778.26MHz(99.98%)",
            "5778.26MHz-5790.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5790.00MHz-5820.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "5790.00MHz-5791.31MHz(99.99%)",
            "5791.31MHz-5804.35MHz(99.99%)",
            "5804.35MHz-5817.39MHz(99.99%)",
            "5817.39MHz-5820.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5820.00MHz-5850.00MHz",
      result: {
        utilization: "99.99%",
        frequencies: {
          utilized: [
            "5820.00MHz-5830.44MHz(99.99%)",
            "5830.44MHz-5843.48MHz(99.99%)",
            "5843.48MHz-5850.00MHz(99.99%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5850.00MHz-5880.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "5850.00MHz-5856.52MHz(99.99%)",
            "5856.52MHz-5869.57MHz(100.00%)",
            "5869.57MHz-5880.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5880.00MHz-5910.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "5880.00MHz-5882.61MHz(100.00%)",
            "5882.61MHz-5895.65MHz(100.00%)",
            "5895.65MHz-5908.70MHz(100.00%)",
            "5908.70MHz-5910.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5910.00MHz-5940.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "5910.00MHz-5921.74MHz(100.00%)",
            "5921.74MHz-5934.78MHz(100.00%)",
            "5934.78MHz-5940.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5940.00MHz-5970.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "5940.00MHz-5947.83MHz(100.00%)",
            "5947.83MHz-5960.87MHz(100.00%)",
            "5960.87MHz-5970.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "5970.00MHz-6000.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "5970.00MHz-5973.91MHz(100.00%)",
            "5973.91MHz-5986.96MHz(100.00%)",
            "5986.96MHz-6000.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    }
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
      ]
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
                utilization: "42.76",
                frequencies: {
                  utilized: ["30.00MHz-39.23MHz(42.24%)","39.23MHz- 52.27MHz(42.51%)","52.27MHz-60.00MHz(43.47%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "60.00MHz - 90.00MHz",
              result: {
                utilization: "44.11",
                frequencies: {
                  utilized: ["60.00MHz-65.32MHz(43.47%)","65.32MHz-(44.53%)","78.36MHz -90.00MHz(44,32%)"],
                  notutilized: []
                }
              }
            },
            {
              range: "90.00MHz - 120.00MHz",
              result: {
                utilization: "11.08",
                frequencies: {
                  utilized: ["91.40MHz(44.32%)"],
                  notutilized: ["104.45MHz","117.49MHz"]
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
                utilization: "22.26",
                frequencies: {
                  utilized: [],
                  notutilized: ["270.0MHz-274.01MHz(0.00%)","274.01MHz- 287.05MHz(0.00%)", "287.05MHz- 300.00MHz(0.00%)"]
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
      range: "300.00MHz-330.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "300.10MHz-313.14MHz(0.00%)",
            "313.14MHz-326.18MHz(0.00%)",
            "326.18MHz-330.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "330.00MHz-360.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "330.00MHz-339.22MHz(0.00%)",
            "339.22MHz-352.27MHz(0.00%)",
            "352.27MHz-360.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "360.00MHz-390.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "360.00MHz-365.31MHz(0.00%)",
            "365.31MHz-378.35MHz(0.00%)",
            "378.35MHz-390.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "390.00MHz-420.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "390.00MHz-391.40MHz(0.00%)",
            "391.40MHz-404.44MHz(0.00%)",
            "404.44MHz-417.48MHz(0.00%)",
            "417.48MHz-420.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "420.00MHz-450.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "420.00MHz-430.53MHz(0.00%)",
            "430.53MHz-443.57MHz(0.00%)",
            "443.57MHz-450.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "450.00MHz-480.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "450.00MHz-456.61MHz(0.00%)",
            "456.61MHz-469.66MHz(0.00%)",
            "469.66MHz-480.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "480.00MHz-510.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "480.00MHz-482.70MHz(0.00%)",
            "482.70MHz-495.74MHz(0.00%)",
            "495.74MHz-508.79MHz(0.00%)",
            "508.79MHz-510.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "510.00MHz-540.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "510.00MHz-521.83MHz(0.00%)",
            "521.83MHz-534.87MHz(0.00%)",
            "534.87MHz-540.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "540.00MHz-570.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "540.00MHz-547.92MHz(0.00%)",
            "547.92MHz-560.96MHz(0.00%)",
            "560.96MHz-570.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "570.00MHz-600.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "570.00MHz-574.00MHz(0.00%)",
            "574.00MHz-587.05MHz(0.00%)",
            "587.05MHz-600.09MHz(0.00%)",
            "600.09MHz-600.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "600.00MHz-630.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "600.00MHz-613.13MHz(0.00%)",
            "613.13MHz-626.18MHz(0.00%)",
            "626.18MHz-630.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "630.00MHz-660.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "630.00MHz-639.22MHz(0.00%)",
            "639.22MHz-652.26MHz(0.00%)",
            "652.26MHz-660.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "660.00MHz-690.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "660.00MHz-665.31MHz(0.00%)",
            "665.31MHz-678.35MHz(0.00%)",
            "678.35MHz-690.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "690.00MHz-720.00MHz",
      result: {
        utilization: "0.05%",
        frequencies: {
          utilized: [
            "769.65MHz-782.70MHz(0.14%)"
          ],
          notutilized: [
            "690.00MHz-691.39MHz(0.00%)",
            "691.39MHz-704.44MHz(0.00%)",
            "704.44MHz-717.48MHz(0.00%)",
            "717.48MHz-730.52MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "720.00MHz-750.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "720.00MHz-730.52MHz(0.00%)",
            "730.52MHz-743.57MHz(0.00%)",
            "743.57MHz-750.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "750.00MHz-780.00MHz",
      result: {
        utilization: "0.16%",
        frequencies: {
          utilized: [
            "769.65MHz-782.70MHz(0.14%)"
          ],
          notutilized: [
            "750.00MHz-756.61MHz(0.00%)",
            "756.61MHz-769.65MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "780.00MHz-810.00MHz",
      result: {
        utilization: "0.52%",
        frequencies: {
          utilized: [
            "795.74MHz-808.78MHz(0.33%)",
            "808.78MHz-821.83MHz(1.24%)"
          ],
          notutilized: [
            "780.00MHz-782.70MHz(0.00%)",
            "782.70MHz-795.74MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "810.00MHz-840.00MHz",
      result: {
        utilization: "0.41%",
        frequencies: {
          utilized: [
            "808.78MHz-821.83MHz(1.24%)"
          ],
          notutilized: [
            "810.00MHz-821.83MHz(0.00%)",
            "821.83MHz-834.87MHz(0.00%)",
            "834.87MHz-840.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "840.00MHz-870.00MHz",
      result: {
        utilization: "0.00%",
        frequencies: {
          utilized: [],
          notutilized: [
            "840.00MHz-847.91MHz(0.00%)",
            "847.91MHz-860.96MHz(0.00%)",
            "860.96MHz-874.00MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "870.00MHz-900.00MHz",
      result: {
        utilization: "52.63%",
        frequencies: {
          utilized: [
            "887.04MHz-900.09MHz(59.88%)"
          ],
          notutilized: [
            "870.00MHz-874.00MHz(0.00%)",
            "874.00MHz-887.04MHz(0.00%)"
          ]
        }
      }
    },
    {
      range: "900.00MHz-930.00MHz",
      result: {
        utilization: "98.39%",
        frequencies: {
          utilized: [
            "900.09MHz-913.13MHz(98.01%)",
            "913.13MHz-926.17MHz(97.02%)",
            "926.17MHz-939.21MHz(99.23%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "930.00MHz-960.00MHz",
      result: {
        utilization: "99.94%",
        frequencies: {
          utilized: [
            "939.21MHz-952.26MHz(99.91%)",
            "952.26MHz-965.30MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "960.00MHz-990.00MHz",
      result: {
        utilization: "84.04%",
        frequencies: {
          utilized: [
            "965.30MHz-978.34MHz(89.17%)",
            "978.34MHz-991.39MHz(83.33%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "990.00MHz-1020.00MHz",
      result: {
        utilization: "80.12%",
        frequencies: {
          utilized: [
            "991.39MHz-1004.43MHz(80.63%)",
            "1004.43MHz-1017.47MHz(79.60%)",
            "1017.47MHz-1030.52MHz(80.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1020.00MHz-1050.00MHz",
      result: {
        utilization: "85.08%",
        frequencies: {
          utilized: [
            "1030.52MHz-1043.56MHz(82.96%)",
            "1043.56MHz-1056.60MHz(85.42%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1050.00MHz-1080.00MHz",
      result: {
        utilization: "90.49%",
        frequencies: {
          utilized: [
            "1056.60MHz-1069.65MHz(88.49%)",
            "1069.65MHz-1082.69MHz(91.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1080.00MHz-1110.00MHz",
      result: {
        utilization: "94.24%",
        frequencies: {
          utilized: [
            "1082.69MHz-1095.73MHz(92.92%)",
            "1095.73MHz-1108.78MHz(94.94%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1110.00MHz-1140.00MHz",
      result: {
        utilization: "96.28%",
        frequencies: {
          utilized: [
            "1108.78MHz-1121.82MHz(95.87%)",
            "1121.82MHz-1134.86MHz(96.68%)",
            "1134.86MHz-1147.91MHz(97.12%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1140.00MHz-1170.00MHz",
      result: {
        utilization: "97.68%",
        frequencies: {
          utilized: [
            "1147.91MHz-1160.95MHz(97.59%)",
            "1160.95MHz-1173.99MHz(97.86%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1170.00MHz-1200.00MHz",
      result: {
        utilization: "98.00%",
        frequencies: {
          utilized: [
            "1173.99MHz-1187.04MHz(97.98%)",
            "1187.04MHz-1200.08MHz(98.03%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1200.00MHz-1230.00MHz",
      result: {
        utilization: "97.90%",
        frequencies: {
          utilized: [
            "1200.08MHz-1213.12MHz(97.99%)",
            "1213.12MHz-1226.17MHz(97.98%)",
            "1226.17MHz-1239.21MHz(97.73%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1230.00MHz-1260.00MHz",
      result: {
        utilization: "96.99%",
        frequencies: {
          utilized: [
            "1239.21MHz-1252.25MHz(97.39%)",
            "1252.25MHz-1265.30MHz(96.81%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1260.00MHz-1290.00MHz",
      result: {
        utilization: "95.68%",
        frequencies: {
          utilized: [
            "1265.30MHz-1278.34MHz(96.20%)",
            "1278.34MHz-1291.38MHz(95.36%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1290.00MHz-1320.00MHz",
      result: {
        utilization: "94.18%",
        frequencies: {
          utilized: [
            "1291.38MHz-1304.43MHz(94.48%)",
            "1304.43MHz-1317.47MHz(93.40%)",
            "1317.47MHz-1330.51MHz(92.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1320.00MHz-1350.00MHz",
      result: {
        utilization: "92.57%",
        frequencies: {
          utilized: [
            "1330.51MHz-1343.56MHz(92.40%)",
            "1343.56MHz-1356.60MHz(92.73%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1350.00MHz-1380.00MHz",
      result: {
        utilization: "94.20%",
        frequencies: {
          utilized: [
            "1356.60MHz-1369.64MHz(93.59%)",
            "1369.64MHz-1382.69MHz(94.80%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1380.00MHz-1410.00MHz",
      result: {
        utilization: "96.34%",
        frequencies: {
          utilized: [
            "1382.69MHz-1395.73MHz(96.22%)",
            "1395.73MHz-1408.77MHz(97.03%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1410.00MHz-1440.00MHz",
      result: {
        utilization: "97.88%",
        frequencies: {
          utilized: [
            "1408.77MHz-1421.82MHz(97.76%)",
            "1421.82MHz-1434.86MHz(98.24%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1440.00MHz-1470.00MHz",
      result: {
        utilization: "99.00%",
        frequencies: {
          utilized: [
            "1434.86MHz-1447.90MHz(98.64%)",
            "1447.90MHz-1460.95MHz(99.34%)",
            "1460.95MHz-1470.00MHz(99.55%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1470.00MHz-1500.00MHz",
      result: {
        utilization: "99.62%",
        frequencies: {
          utilized: [
            "1470.00MHz-1473.99MHz(99.55%)",
            "1473.99MHz-1487.03MHz(99.62%)",
            "1487.03MHz-1500.00MHz(99.69%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1500.00MHz-1530.00MHz",
      result: {
        utilization: "99.52%",
        frequencies: {
          utilized: [
            "1500.00MHz-1500.08MHz(99.69%)",
            "1500.08MHz-1513.12MHz(99.58%)",
            "1513.12MHz-1526.16MHz(99.52%)",
            "1526.16MHz-1530.00MHz(99.31%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1530.00MHz-1560.00MHz",
      result: {
        utilization: "98.93%",
        frequencies: {
          utilized: [
            "1530.00MHz-1539.20MHz(99.31%)",
            "1539.20MHz-1552.25MHz(98.98%)",
            "1552.25MHz-1560.00MHz(98.51%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1560.00MHz-1590.00MHz",
      result: {
        utilization: "97.84%",
        frequencies: {
          utilized: [
            "1560.00MHz-1565.29MHz(98.51%)",
            "1565.29MHz-1578.33MHz(97.90%)",
            "1578.33MHz-1590.00MHz(97.11%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1590.00MHz-1620.00MHz",
      result: {
        utilization: "96.45%",
        frequencies: {
          utilized: [
            "1590.00MHz-1591.38MHz(97.11%)",
            "1591.38MHz-1604.42MHz(96.60%)",
            "1604.42MHz-1617.46MHz(96.05%)",
            "1617.46MHz-1620.00MHz(96.04%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1620.00MHz-1650.00MHz",
      result: {
        utilization: "96.61%",
        frequencies: {
          utilized: [
            "1620.00MHz-1630.51MHz(96.04%)",
            "1630.51MHz-1643.55MHz(96.58%)",
            "1643.55MHz-1650.00MHz(97.21%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1650.00MHz-1680.00MHz",
      result: {
        utilization: "97.72%",
        frequencies: {
          utilized: [
            "1650.00MHz-1656.59MHz(97.21%)",
            "1656.59MHz-1669.64MHz(97.71%)",
            "1669.64MHz-1680.00MHz(98.23%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1680.00MHz-1710.00MHz",
      result: {
        utilization: "98.69%",
        frequencies: {
          utilized: [
            "1680.00MHz-1682.68MHz(98.23%)",
            "1682.68MHz-1695.72MHz(98.53%)",
            "1695.72MHz-1708.77MHz(98.89%)",
            "1708.77MHz-1710.00MHz(99.13%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1710.00MHz-1740.00MHz",
      result: {
        utilization: "99.30%",
        frequencies: {
          utilized: [
            "1710.00MHz-1721.81MHz(99.13%)",
            "1721.81MHz-1734.85MHz(99.31%)",
            "1734.85MHz-1740.00MHz(99.46%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1740.00MHz-1770.00MHz",
      result: {
        utilization: "99.68%",
        frequencies: {
          utilized: [
            "1740.00MHz-1747.90MHz(99.46%)",
            "1747.90MHz-1760.94MHz(99.59%)",
            "1760.94MHz-1770.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1770.00MHz-1800.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1770.00MHz-1773.98MHz(100.00%)",
            "1773.98MHz-1787.03MHz(100.00%)",
            "1787.03MHz-1800.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1800.00MHz-1830.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1800.00MHz-1800.07MHz(100.00%)",
            "1800.07MHz-1813.11MHz(100.00%)",
            "1813.11MHz-1826.16MHz(100.00%)",
            "1826.16MHz-1830.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1830.00MHz-1860.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1830.00MHz-1839.20MHz(100.00%)",
            "1839.20MHz-1852.24MHz(100.00%)",
            "1852.24MHz-1860.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1860.00MHz-1890.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1860.00MHz-1865.29MHz(100.00%)",
            "1865.29MHz-1878.33MHz(100.00%)",
            "1878.33MHz-1890.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1890.00MHz-1920.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1890.00MHz-1891.37MHz(100.00%)",
            "1891.37MHz-1904.42MHz(100.00%)",
            "1904.42MHz-1917.46MHz(100.00%)",
            "1917.46MHz-1920.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1920.00MHz-1950.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1920.00MHz-1930.50MHz(100.00%)",
            "1930.50MHz-1943.55MHz(100.00%)",
            "1943.55MHz-1950.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1950.00MHz-1980.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1950.00MHz-1956.59MHz(100.00%)",
            "1956.59MHz-1969.63MHz(100.00%)",
            "1969.63MHz-1980.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "1980.00MHz-2010.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "1980.00MHz-1982.68MHz(100.00%)",
            "1982.68MHz-1995.72MHz(100.00%)",
            "1995.72MHz-2008.76MHz(100.00%)",
            "2008.76MHz-2010.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2010.00MHz-2040.00MHz",
      result: {
        utilization: "73.56%",
        frequencies: {
          utilized: [
            "2010.00MHz-2021.81MHz(100.00%)",
            "2021.81MHz-2034.85MHz(60.34%)",
            "2034.85MHz-2040.00MHz(60.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2040.00MHz-2070.00MHz",
      result: {
        utilization: "60.34%",
        frequencies: {
          utilized: [
            "2040.00MHz-2047.89MHz(60.34%)",
            "2047.89MHz-2060.94MHz(60.34%)",
            "2060.94MHz-2070.00MHz(60.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2070.00MHz-2100.00MHz",
      result: {
        utilization: "60.34%",
        frequencies: {
          utilized: [
            "2070.00MHz-2073.98MHz(60.34%)",
            "2073.98MHz-2087.02MHz(60.34%)",
            "2087.02MHz-2100.00MHz(60.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2100.00MHz-2130.00MHz",
      result: {
        utilization: "90.09%",
        frequencies: {
          utilized: [
            "2100.00MHz-2100.07MHz(60.34%)",
            "2100.07MHz-2113.11MHz(100.00%)",
            "2113.11MHz-2126.15MHz(100.00%)",
            "2126.15MHz-2130.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2130.00MHz-2160.00MHz",
      result: {
        utilization: "86.78%",
        frequencies: {
          utilized: [
            "2130.00MHz-2139.19MHz(100.00%)",
            "2139.19MHz-2152.24MHz(100.00%)",
            "2152.24MHz-2160.00MHz(60.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2160.00MHz-2190.00MHz",
      result: {
        utilization: "60.34%",
        frequencies: {
          utilized: [
            "2160.00MHz-2165.28MHz(60.34%)",
            "2165.28MHz-2178.32MHz(60.34%)",
            "2178.32MHz-2190.00MHz(60.34%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2190.00MHz-2220.00MHz",
      result: {
        utilization: "38.00%",
        frequencies: {
          utilized: [
            "2190.00MHz-2191.37MHz(60.34%)",
            "2191.37MHz-2204.41MHz(31.03%)",
            "2204.41MHz-2217.45MHz(30.17%)",
            "2217.45MHz-2220.00MHz(30.44%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2220.00MHz-2250.00MHz",
      result: {
        utilization: "30.10%",
        frequencies: {
          utilized: [
            "2220.00MHz-2230.50MHz(30.44%)",
            "2230.50MHz-2243.54MHz(29.38%)",
            "2243.54MHz-2250.00MHz(30.47%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2250.00MHz-2280.00MHz",
      result: {
        utilization: "29.55%",
        frequencies: {
          utilized: [
            "2250.00MHz-2256.58MHz(30.47%)",
            "2256.58MHz-2269.63MHz(28.69%)",
            "2269.63MHz-2280.00MHz(29.49%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2280.00MHz-2310.00MHz",
      result: {
        utilization: "28.91%",
        frequencies: {
          utilized: [
            "2280.00MHz-2282.67MHz(29.49%)",
            "2282.67MHz-2295.71MHz(28.22%)",
            "2295.71MHz-2308.76MHz(29.33%)",
            "2308.76MHz-2310.00MHz(28.60%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2310.00MHz-2340.00MHz",
      result: {
        utilization: "29.39%",
        frequencies: {
          utilized: [
            "2310.00MHz-2321.80MHz(28.60%)",
            "2321.80MHz-2334.84MHz(29.86%)",
            "2334.84MHz-2340.00MHz(29.72%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2340.00MHz-2370.00MHz",
      result: {
        utilization: "30.71%",
        frequencies: {
          utilized: [
            "2340.00MHz-2347.89MHz(29.72%)",
            "2347.89MHz-2360.93MHz(30.90%)",
            "2360.93MHz-2370.00MHz(31.52%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2370.00MHz-2400.00MHz",
      result: {
        utilization: "32.72%",
        frequencies: {
          utilized: [
            "2370.00MHz-2373.97MHz(31.52%)",
            "2373.97MHz-2387.02MHz(32.28%)",
            "2387.02MHz-2400.00MHz(34.35%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2400.00MHz-2430.00MHz",
      result: {
        utilization: "36.82%",
        frequencies: {
          utilized: [
            "2400.00MHz-2400.06MHz(34.35%)",
            "2400.06MHz-2413.10MHz(44.72%)",
            "2413.10MHz-2426.15MHz(34.25%)",
            "2426.15MHz-2430.00MHz(33.98%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2430.00MHz-2460.00MHz",
      result: {
        utilization: "34.28%",
        frequencies: {
          utilized: [
            "2430.00MHz-2439.19MHz(33.98%)",
            "2439.19MHz-2452.23MHz(34.34%)",
            "2452.23MHz-2460.00MHz(34.51%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2460.00MHz-2490.00MHz",
      result: {
        utilization: "34.14%",
        frequencies: {
          utilized: [
            "2460.00MHz-2465.28MHz(34.51%)",
            "2465.28MHz-2478.32MHz(34.05%)",
            "2478.32MHz-2490.00MHz(33.86%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2490.00MHz-2520.00MHz",
      result: {
        utilization: "34.96%",
        frequencies: {
          utilized: [
            "2490.00MHz-2491.36MHz(33.86%)",
            "2491.36MHz-2504.41MHz(34.59%)",
            "2504.41MHz-2517.45MHz(34.80%)",
            "2517.45MHz-2520.00MHz(36.59%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2520.00MHz-2550.00MHz",
      result: {
        utilization: "36.20%",
        frequencies: {
          utilized: [
            "2520.00MHz-2530.49MHz(36.59%)",
            "2530.49MHz-2543.54MHz(36.44%)",
            "2543.54MHz-2550.00MHz(35.58%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2550.00MHz-2580.00MHz",
      result: {
        utilization: "35.82%",
        frequencies: {
          utilized: [
            "2550.00MHz-2556.58MHz(35.58%)",
            "2556.58MHz-2569.62MHz(35.39%)",
            "2569.62MHz-2580.00MHz(36.49%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2580.00MHz-2610.00MHz",
      result: {
        utilization: "52.07%",
        frequencies: {
          utilized: [
            "2580.00MHz-2582.67MHz(36.49%)",
            "2582.67MHz-2595.71MHz(35.88%)",
            "2595.71MHz-2608.75MHz(35.92%)",
            "2608.75MHz-2610.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2610.00MHz-2640.00MHz",
      result: {
        utilization: "100.00%",
        frequencies: {
          utilized: [
            "2610.00MHz-2621.80MHz(100.00%)",
            "2621.80MHz-2634.84MHz(100.00%)",
            "2634.84MHz-2640.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2640.00MHz-2670.00MHz",
      result: {
        utilization: "99.98%",
        frequencies: {
          utilized: [
            "2640.00MHz-2647.88MHz(100.00%)",
            "2647.88MHz-2660.93MHz(100.00%)",
            "2660.93MHz-2670.00MHz(99.94%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2670.00MHz-2700.00MHz",
      result: {
        utilization: "56.11%",
        frequencies: {
          utilized: [
            "2670.00MHz-2673.97MHz(99.94%)",
            "2673.97MHz-2687.01MHz(34.19%)",
            "2687.01MHz-2700.00MHz(34.20%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2700.00MHz-2730.00MHz",
      result: {
        utilization: "34.42%",
        frequencies: {
          utilized: [
            "2700.00MHz-2700.06MHz(34.20%)",
            "2700.06MHz-2713.10MHz(33.96%)",
            "2713.10MHz-2726.14MHz(34.71%)",
            "2726.14MHz-2730.00MHz(34.82%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2730.00MHz-2760.00MHz",
      result: {
        utilization: "35.29%",
        frequencies: {
          utilized: [
            "2730.00MHz-2739.18MHz(34.82%)",
            "2739.18MHz-2752.23MHz(35.44%)",
            "2752.23MHz-2760.00MHz(35.60%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2760.00MHz-2790.00MHz",
      result: {
        utilization: "36.19%",
        frequencies: {
          utilized: [
            "2760.00MHz-2765.27MHz(35.60%)",
            "2765.27MHz-2778.31MHz(36.41%)",
            "2778.31MHz-2790.00MHz(36.57%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2790.00MHz-2820.00MHz",
      result: {
        utilization: "37.45%",
        frequencies: {
          utilized: [
            "2790.00MHz-2791.36MHz(36.57%)",
            "2791.36MHz-2804.40MHz(37.55%)",
            "2804.40MHz-2817.44MHz(37.42%)",
            "2817.44MHz-2820.00MHz(38.27%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2820.00MHz-2850.00MHz",
      result: {
        utilization: "38.27%",
        frequencies: {
          utilized: [
            "2820.00MHz-2830.49MHz(38.27%)",
            "2830.49MHz-2843.53MHz(38.14%)",
            "2843.53MHz-2850.00MHz(38.41%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2850.00MHz-2880.00MHz",
      result: {
        utilization: "38.49%",
        frequencies: {
          utilized: [
            "2850.00MHz-2856.57MHz(38.41%)",
            "2856.57MHz-2869.62MHz(38.38%)",
            "2869.62MHz-2880.00MHz(38.67%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2880.00MHz-2910.00MHz",
      result: {
        utilization: "38.27%",
        frequencies: {
          utilized: [
            "2880.00MHz-2882.66MHz(38.67%)",
            "2882.66MHz-2895.70MHz(38.24%)",
            "2895.70MHz-2908.75MHz(38.03%)",
            "2908.75MHz-2910.00MHz(38.15%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2910.00MHz-2940.00MHz",
      result: {
        utilization: "37.97%",
        frequencies: {
          utilized: [
            "2910.00MHz-2921.79MHz(38.15%)",
            "2921.79MHz-2934.83MHz(37.95%)",
            "2934.83MHz-2940.00MHz(37.82%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2940.00MHz-2970.00MHz",
      result: {
        utilization: "37.98%",
        frequencies: {
          utilized: [
            "2940.00MHz-2947.88MHz(37.82%)",
            "2947.88MHz-2960.92MHz(37.83%)",
            "2960.92MHz-2970.00MHz(38.29%)"
          ],
          notutilized: []
        }
      }
    },
    {
      range: "2970.00MHz-3000.00MHz",
      result: {
        utilization: "58.64%",
        frequencies: {
          utilized: [
            "2970.00MHz-2973.96MHz(38.29%)",
            "2973.96MHz-2987.01MHz(37.63%)",
            "2987.01MHz-3000.00MHz(100.00%)"
          ],
          notutilized: []
        }
      }
    }
  ]
},
  {
    range: "3GHz-6GHz",
    subbands: [
      {
        range: "3000.00MHz-3030.00MHz",
        result: {
          utilization: "23.56%",
          frequencies: {
            utilized: [
              "3000.05MHz-3013.09MHz(22.02%)",
              "3013.09MHz-3026.14MHz(22.42%)",
              "3026.14MHz-3030.00MHz(26.23%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3030.00MHz-3060.00MHz",
        result: {
          utilization: "24.78%",
          frequencies: {
            utilized: [
              "3030.00MHz-3039.18MHz(26.23%)",
              "3039.18MHz-3052.22MHz(23.72%)",
              "3052.22MHz-3060.00MHz(24.40%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3060.00MHz-3090.00MHz",
        result: {
          utilization: "25.61%",
          frequencies: {
            utilized: [
              "3060.00MHz-3065.27MHz(24.40%)",
              "3065.27MHz-3078.31MHz(24.99%)",
              "3078.31MHz-3090.00MHz(27.43%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3090.00MHz-3120.00MHz",
        result: {
          utilization: "27.35%",
          frequencies: {
            utilized: [
              "3090.00MHz-3091.35MHz(27.43%)",
              "3091.35MHz-3104.40MHz(26.64%)",
              "3104.40MHz-3117.44MHz(27.36%)",
              "3117.44MHz-3120.00MHz(27.97%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3120.00MHz-3150.00MHz",
        result: {
          utilization: "28.52%",
          frequencies: {
            utilized: [
              "3120.00MHz-3130.48MHz(27.97%)",
              "3130.48MHz-3143.53MHz(28.77%)",
              "3143.53MHz-3150.00MHz(28.83%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3150.00MHz-3180.00MHz",
        result: {
          utilization: "29.29%",
          frequencies: {
            utilized: [
              "3150.00MHz-3156.57MHz(28.83%)",
              "3156.57MHz-3169.61MHz(29.15%)",
              "3169.61MHz-3180.00MHz(29.88%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3180.00MHz-3210.00MHz",
        result: {
          utilization: "29.75%",
          frequencies: {
            utilized: [
              "3180.00MHz-3182.66MHz(29.88%)",
              "3182.66MHz-3195.70MHz(29.54%)",
              "3195.70MHz-3208.74MHz(29.78%)",
              "3208.74MHz-3210.00MHz(29.78%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3210.00MHz-3240.00MHz",
        result: {
          utilization: "29.70%",
          frequencies: {
            utilized: [
              "3210.00MHz-3221.79MHz(29.78%)",
              "3221.79MHz-3234.83MHz(30.19%)",
              "3234.83MHz-3240.00MHz(29.14%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3240.00MHz-3270.00MHz",
        result: {
          utilization: "29.44%",
          frequencies: {
            utilized: [
              "3240.00MHz-3247.87MHz(29.14%)",
              "3247.87MHz-3260.92MHz(30.25%)",
              "3260.92MHz-3270.00MHz(28.92%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3270.00MHz-3300.00MHz",
        result: {
          utilization: "29.14%",
          frequencies: {
            utilized: [
              "3270.00MHz-3273.96MHz(28.92%)",
              "3273.96MHz-3287.00MHz(29.71%)",
              "3287.00MHz-3300.00MHz(28.80%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3300.00MHz-3330.00MHz",
        result: {
          utilization: "29.06%",
          frequencies: {
            utilized: [
              "3300.00MHz-3300.05MHz(28.80%)",
              "3300.05MHz-3313.09MHz(29.04%)",
              "3313.09MHz-3326.13MHz(28.87%)",
              "3326.13MHz-3330.00MHz(29.52%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3330.00MHz-3360.00MHz",
        result: {
          utilization: "29.30%",
          frequencies: {
            utilized: [
              "3330.00MHz-3339.17MHz(29.52%)",
              "3339.17MHz-3352.22MHz(29.24%)",
              "3352.22MHz-3360.00MHz(29.15%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3360.00MHz-3390.00MHz",
        result: {
          utilization: "29.31%",
          frequencies: {
            utilized: [
              "3360.00MHz-3365.26MHz(29.15%)",
              "3365.26MHz-3378.30MHz(29.10%)",
              "3378.30MHz-3390.00MHz(29.69%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3390.00MHz-3420.00MHz",
        result: {
          utilization: "29.63%",
          frequencies: {
            utilized: [
              "3390.00MHz-3391.35MHz(29.69%)",
              "3391.35MHz-3404.39MHz(29.60%)",
              "3404.39MHz-3417.43MHz(29.48%)",
              "3417.43MHz-3420.00MHz(29.76%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3420.00MHz-3450.00MHz",
        result: {
          utilization: "29.51%",
          frequencies: {
            utilized: [
              "3420.00MHz-3430.48MHz(29.76%)",
              "3430.48MHz-3443.52MHz(29.32%)",
              "3443.52MHz-3450.00MHz(29.44%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3450.00MHz-3480.00MHz",
        result: {
          utilization: "28.50%",
          frequencies: {
            utilized: [
              "3450.00MHz-3456.56MHz(29.44%)",
              "3456.56MHz-3469.61MHz(28.30%)",
              "3469.61MHz-3480.00MHz(27.77%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3480.00MHz-3510.00MHz",
        result: {
          utilization: "27.12%",
          frequencies: {
            utilized: [
              "3480.00MHz-3482.65MHz(27.77%)",
              "3482.65MHz-3495.69MHz(27.10%)",
              "3495.69MHz-3508.74MHz(26.86%)",
              "3508.74MHz-3510.00MHz(26.76%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3510.00MHz-3540.00MHz",
        result: {
          utilization: "26.75%",
          frequencies: {
            utilized: [
              "3510.00MHz-3521.78MHz(26.76%)",
              "3521.78MHz-3534.82MHz(26.98%)",
              "3534.82MHz-3540.00MHz(26.50%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3540.00MHz-3570.00MHz",
        result: {
          utilization: "26.43%",
          frequencies: {
            utilized: [
              "3540.00MHz-3547.87MHz(26.50%)",
              "3547.87MHz-3560.91MHz(26.67%)",
              "3560.91MHz-3570.00MHz(26.12%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3570.00MHz-3600.00MHz",
        result: {
          utilization: "26.25%",
          frequencies: {
            utilized: [
              "3570.00MHz-3573.95MHz(26.12%)",
              "3573.95MHz-3587.00MHz(26.69%)",
              "3587.00MHz-3600.00MHz(25.93%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3600.00MHz-3630.00MHz",
        result: {
          utilization: "25.19%",
          frequencies: {
            utilized: [
              "3600.00MHz-3600.04MHz(25.93%)",
              "3600.04MHz-3613.08MHz(25.63%)",
              "3613.08MHz-3626.13MHz(25.04%)",
              "3626.13MHz-3630.00MHz(24.16%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3630.00MHz-3660.00MHz",
        result: {
          utilization: "23.28%",
          frequencies: {
            utilized: [
              "3630.00MHz-3639.17MHz(24.16%)",
              "3639.17MHz-3652.21MHz(23.10%)",
              "3652.21MHz-3660.00MHz(22.59%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3660.00MHz-3690.00MHz",
        result: {
          utilization: "22.23%",
          frequencies: {
            utilized: [
              "3660.00MHz-3665.26MHz(22.59%)",
              "3665.26MHz-3678.30MHz(22.18%)",
              "3678.30MHz-3690.00MHz(21.93%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3690.00MHz-3720.00MHz",
        result: {
          utilization: "21.73%",
          frequencies: {
            utilized: [
              "3690.00MHz-3691.34MHz(21.93%)",
              "3691.34MHz-3704.39MHz(21.59%)",
              "3704.39MHz-3717.43MHz(21.55%)",
              "3717.43MHz-3720.00MHz(21.85%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3720.00MHz-3750.00MHz",
        result: {
          utilization: "22.06%",
          frequencies: {
            utilized: [
              "3720.00MHz-3730.47MHz(21.85%)",
              "3730.47MHz-3743.52MHz(21.89%)",
              "3743.52MHz-3750.00MHz(22.43%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3750.00MHz-3780.00MHz",
        result: {
          utilization: "22.86%",
          frequencies: {
            utilized: [
              "3750.00MHz-3756.56MHz(22.43%)",
              "3756.56MHz-3769.60MHz(22.62%)",
              "3769.60MHz-3780.00MHz(23.53%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3780.00MHz-3810.00MHz",
        result: {
          utilization: "24.45%",
          frequencies: {
            utilized: [
              "3780.00MHz-3782.65MHz(23.53%)",
              "3782.65MHz-3795.69MHz(24.13%)",
              "3795.69MHz-3808.73MHz(25.02%)",
              "3808.73MHz-3810.00MHz(25.10%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3810.00MHz-3840.00MHz",
        result: {
          utilization: "25.35%",
          frequencies: {
            utilized: [
              "3810.00MHz-3821.78MHz(25.10%)",
              "3821.78MHz-3834.82MHz(25.44%)",
              "3834.82MHz-3840.00MHz(25.50%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3840.00MHz-3870.00MHz",
        result: {
          utilization: "25.66%",
          frequencies: {
            utilized: [
              "3840.00MHz-3847.86MHz(25.50%)",
              "3847.86MHz-3860.91MHz(25.89%)",
              "3860.91MHz-3870.00MHz(25.60%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3870.00MHz-3900.00MHz",
        result: {
          utilization: "24.88%",
          frequencies: {
            utilized: [
              "3870.00MHz-3873.95MHz(25.60%)",
              "3873.95MHz-3886.99MHz(25.00%)",
              "3886.99MHz-3900.00MHz(24.03%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3900.00MHz-3930.00MHz",
        result: {
          utilization: "23.03%",
          frequencies: {
            utilized: [
              "3900.00MHz-3900.04MHz(24.03%)",
              "3900.04MHz-3913.08MHz(23.18%)",
              "3913.08MHz-3926.12MHz(22.65%)",
              "3926.12MHz-3930.00MHz(22.27%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3930.00MHz-3960.00MHz",
        result: {
          utilization: "22.47%",
          frequencies: {
            utilized: [
              "3930.00MHz-3939.16MHz(22.27%)",
              "3939.16MHz-3952.21MHz(22.45%)",
              "3952.21MHz-3960.00MHz(22.69%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3960.00MHz-3990.00MHz",
        result: {
          utilization: "23.47%",
          frequencies: {
            utilized: [
              "3960.00MHz-3965.25MHz(22.69%)",
              "3965.25MHz-3978.29MHz(23.61%)",
              "3978.29MHz-3990.00MHz(24.11%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "3990.00MHz-4020.00MHz",
        result: {
          utilization: "25.32%",
          frequencies: {
            utilized: [
              "3990.00MHz-3991.34MHz(24.11%)",
              "3991.34MHz-4004.38MHz(24.94%)",
              "4004.38MHz-4017.42MHz(25.51%)",
              "4017.42MHz-4020.00MHz(26.74%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4020.00MHz-4050.00MHz",
        result: {
          utilization: "27.45%",
          frequencies: {
            utilized: [
              "4020.00MHz-4030.47MHz(26.74%)",
              "4030.47MHz-4043.51MHz(27.35%)",
              "4043.51MHz-4050.00MHz(28.25%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4050.00MHz-4080.00MHz",
        result: {
          utilization: "28.93%",
          frequencies: {
            utilized: [
              "4050.00MHz-4056.55MHz(28.25%)",
              "4056.55MHz-4069.60MHz(28.94%)",
              "4069.60MHz-4080.00MHz(29.59%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4080.00MHz-4110.00MHz",
        result: {
          utilization: "29.80%",
          frequencies: {
            utilized: [
              "4080.00MHz-4082.64MHz(29.59%)",
              "4082.64MHz-4095.68MHz(29.71%)",
              "4095.68MHz-4108.73MHz(29.98%)",
              "4108.73MHz-4110.00MHz(29.92%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4110.00MHz-4140.00MHz",
        result: {
          utilization: "30.40%",
          frequencies: {
            utilized: [
              "4110.00MHz-4121.77MHz(29.92%)",
              "4121.77MHz-4134.81MHz(30.32%)",
              "4134.81MHz-4140.00MHz(30.97%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4140.00MHz-4170.00MHz",
        result: {
          utilization: "31.49%",
          frequencies: {
            utilized: [
              "4140.00MHz-4147.86MHz(30.97%)",
              "4147.86MHz-4160.90MHz(31.77%)",
              "4160.90MHz-4170.00MHz(31.73%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4170.00MHz-4200.00MHz",
        result: {
          utilization: "32.30%",
          frequencies: {
            utilized: [
              "4170.00MHz-4173.94MHz(31.73%)",
              "4173.94MHz-4186.99MHz(32.54%)",
              "4186.99MHz-4200.00MHz(32.63%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4200.00MHz-4230.00MHz",
        result: {
          utilization: "33.17%",
          frequencies: {
            utilized: [
              "4200.00MHz-4200.03MHz(32.63%)",
              "4200.03MHz-4213.07MHz(32.64%)",
              "4213.07MHz-4226.12MHz(33.54%)",
              "4226.12MHz-4230.00MHz(33.88%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4230.00MHz-4260.00MHz",
        result: {
          utilization: "34.38%",
          frequencies: {
            utilized: [
              "4230.00MHz-4239.16MHz(33.88%)",
              "4239.16MHz-4252.20MHz(34.40%)",
              "4252.20MHz-4260.00MHz(34.87%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4260.00MHz-4290.00MHz",
        result: {
          utilization: "35.15%",
          frequencies: {
            utilized: [
              "4260.00MHz-4265.25MHz(34.87%)",
              "4265.25MHz-4278.29MHz(35.21%)",
              "4278.29MHz-4290.00MHz(35.37%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4290.00MHz-4320.00MHz",
        result: {
          utilization: "35.88%",
          frequencies: {
            utilized: [
              "4290.00MHz-4291.33MHz(35.37%)",
              "4291.33MHz-4304.38MHz(35.67%)",
              "4304.38MHz-4317.42MHz(36.10%)",
              "4317.42MHz-4320.00MHz(36.40%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4320.00MHz-4350.00MHz",
        result: {
          utilization: "37.17%",
          frequencies: {
            utilized: [
              "4320.00MHz-4330.46MHz(36.40%)",
              "4330.46MHz-4343.51MHz(37.18%)",
              "4343.51MHz-4350.00MHz(37.92%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4350.00MHz-4380.00MHz",
        result: {
          utilization: "38.28%",
          frequencies: {
            utilized: [
              "4350.00MHz-4356.55MHz(37.92%)",
              "4356.55MHz-4369.59MHz(38.23%)",
              "4369.59MHz-4380.00MHz(38.68%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4380.00MHz-4410.00MHz",
        result: {
          utilization: "39.27%",
          frequencies: {
            utilized: [
              "4380.00MHz-4382.64MHz(38.68%)",
              "4382.64MHz-4395.68MHz(39.05%)",
              "4395.68MHz-4408.72MHz(39.49%)",
              "4408.72MHz-4410.00MHz(39.87%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4410.00MHz-4440.00MHz",
        result: {
          utilization: "40.18%",
          frequencies: {
            utilized: [
              "4410.00MHz-4421.77MHz(39.87%)",
              "4421.77MHz-4434.81MHz(40.19%)",
              "4434.81MHz-4440.00MHz(40.49%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4440.00MHz-4470.00MHz",
        result: {
          utilization: "40.70%",
          frequencies: {
            utilized: [
              "4440.00MHz-4447.85MHz(40.49%)",
              "4447.85MHz-4460.90MHz(40.74%)",
              "4460.90MHz-4470.00MHz(40.86%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4470.00MHz-4500.00MHz",
        result: {
          utilization: "41.04%",
          frequencies: {
            utilized: [
              "4470.00MHz-4473.94MHz(40.86%)",
              "4473.94MHz-4486.98MHz(41.07%)",
              "4486.98MHz-4500.00MHz(41.19%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4500.00MHz-4530.00MHz",
        result: {
          utilization: "41.11%",
          frequencies: {
            utilized: [
              "4500.00MHz-4500.03MHz(41.19%)",
              "4500.03MHz-4513.07MHz(41.21%)",
              "4513.07MHz-4526.11MHz(41.01%)",
              "4526.11MHz-4530.00MHz(41.03%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4530.00MHz-4560.00MHz",
        result: {
          utilization: "41.00%",
          frequencies: {
            utilized: [
              "4530.00MHz-4539.15MHz(41.03%)",
              "4539.15MHz-4552.20MHz(41.05%)",
              "4552.20MHz-4560.00MHz(40.92%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4560.00MHz-4590.00MHz",
        result: {
          utilization: "40.83%",
          frequencies: {
            utilized: [
              "4560.00MHz-4565.24MHz(40.92%)",
              "4565.24MHz-4578.28MHz(40.86%)",
              "4578.28MHz-4590.00MHz(40.70%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4590.00MHz-4620.00MHz",
        result: {
          utilization: "40.43%",
          frequencies: {
            utilized: [
              "4590.00MHz-4591.33MHz(40.70%)",
              "4591.33MHz-4604.37MHz(40.47%)",
              "4604.37MHz-4617.41MHz(40.34%)",
              "4617.41MHz-4620.00MHz(40.20%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4620.00MHz-4650.00MHz",
        result: {
          utilization: "40.10%",
          frequencies: {
            utilized: [
              "4620.00MHz-4630.46MHz(40.20%)",
              "4630.46MHz-4643.50MHz(40.02%)",
              "4643.50MHz-4650.00MHz(40.07%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4650.00MHz-4680.00MHz",
        result: {
          utilization: "40.21%",
          frequencies: {
            utilized: [
              "4650.00MHz-4656.54MHz(40.07%)",
              "4656.54MHz-4669.59MHz(40.21%)",
              "4669.59MHz-4680.00MHz(40.36%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4680.00MHz-4710.00MHz",
        result: {
          utilization: "40.63%",
          frequencies: {
            utilized: [
              "4680.00MHz-4682.63MHz(40.36%)",
              "4682.63MHz-4695.67MHz(40.53%)",
              "4695.67MHz-4708.72MHz(40.71%)",
              "4708.72MHz-4710.00MHz(40.91%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4710.00MHz-4740.00MHz",
        result: {
          utilization: "41.27%",
          frequencies: {
            utilized: [
              "4710.00MHz-4721.76MHz(40.91%)",
              "4721.76MHz-4734.80MHz(41.32%)",
              "4734.80MHz-4740.00MHz(41.58%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4740.00MHz-4770.00MHz",
        result: {
          utilization: "41.91%",
          frequencies: {
            utilized: [
              "4740.00MHz-4747.85MHz(41.58%)",
              "4747.85MHz-4760.89MHz(41.91%)",
              "4760.89MHz-4770.00MHz(42.25%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4770.00MHz-4800.00MHz",
        result: {
          utilization: "42.53%",
          frequencies: {
            utilized: [
              "4770.00MHz-4773.93MHz(42.25%)",
              "4773.93MHz-4786.98MHz(42.59%)",
              "4786.98MHz-4800.00MHz(42.74%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4800.00MHz-4830.00MHz",
        result: {
          utilization: "42.98%",
          frequencies: {
            utilized: [
              "4800.00MHz-4800.02MHz(42.74%)",
              "4800.02MHz-4813.06MHz(42.92%)",
              "4813.06MHz-4826.11MHz(43.07%)",
              "4826.11MHz-4830.00MHz(43.18%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4830.00MHz-4860.00MHz",
        result: {
          utilization: "43.15%",
          frequencies: {
            utilized: [
              "4830.00MHz-4839.15MHz(43.18%)",
              "4839.15MHz-4852.19MHz(43.19%)",
              "4852.19MHz-4860.00MHz(43.08%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4860.00MHz-4890.00MHz",
        result: {
          utilization: "43.09%",
          frequencies: {
            utilized: [
              "4860.00MHz-4865.24MHz(43.08%)",
              "4865.24MHz-4878.28MHz(43.12%)",
              "4878.28MHz-4890.00MHz(43.08%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4890.00MHz-4920.00MHz",
        result: {
          utilization: "43.06%",
          frequencies: {
            utilized: [
              "4890.00MHz-4891.32MHz(43.08%)",
              "4891.32MHz-4904.37MHz(42.99%)",
              "4904.37MHz-4917.41MHz(42.97%)",
              "4917.41MHz-4920.00MHz(43.20%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4920.00MHz-4950.00MHz",
        result: {
          utilization: "43.80%",
          frequencies: {
            utilized: [
              "4920.00MHz-4930.45MHz(43.20%)",
              "4930.45MHz-4943.50MHz(43.60%)",
              "4943.50MHz-4950.00MHz(44.61%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4950.00MHz-4980.00MHz",
        result: {
          utilization: "45.75%",
          frequencies: {
            utilized: [
              "4950.00MHz-4956.54MHz(44.61%)",
              "4956.54MHz-4969.58MHz(45.59%)",
              "4969.58MHz-4980.00MHz(47.05%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "4980.00MHz-5010.00MHz",
        result: {
          utilization: "50.56%",
          frequencies: {
            utilized: [
              "4980.00MHz-4982.63MHz(47.05%)",
              "4982.63MHz-4995.67MHz(49.07%)",
              "4995.67MHz-5008.71MHz(51.45%)",
              "5008.71MHz-5010.00MHz(54.67%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5010.00MHz-5040.00MHz",
        result: {
          utilization: "58.28%",
          frequencies: {
            utilized: [
              "5010.00MHz-5021.76MHz(54.67%)",
              "5021.76MHz-5034.80MHz(58.27%)",
              "5034.80MHz-5040.00MHz(61.91%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5040.00MHz-5070.00MHz",
        result: {
          utilization: "66.47%",
          frequencies: {
            utilized: [
              "5040.00MHz-5047.84MHz(61.91%)",
              "5047.84MHz-5060.89MHz(66.31%)",
              "5060.89MHz-5070.00MHz(71.18%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5070.00MHz-5100.00MHz",
        result: {
          utilization: "75.66%",
          frequencies: {
            utilized: [
              "5070.00MHz-5073.93MHz(71.18%)",
              "5073.93MHz-5086.97MHz(75.93%)",
              "5086.97MHz-5100.00MHz(79.86%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5100.00MHz-5130.00MHz",
        result: {
          utilization: "84.01%",
          frequencies: {
            utilized: [
              "5100.00MHz-5100.02MHz(79.86%)",
              "5100.02MHz-5113.06MHz(83.42%)",
              "5113.06MHz-5126.10MHz(85.48%)",
              "5126.10MHz-5130.00MHz(87.27%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5130.00MHz-5160.00MHz",
        result: {
          utilization: "89.03%",
          frequencies: {
            utilized: [
              "5130.00MHz-5139.14MHz(87.27%)",
              "5139.14MHz-5152.19MHz(89.28%)",
              "5152.19MHz-5160.00MHz(90.54%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5160.00MHz-5190.00MHz",
        result: {
          utilization: "91.70%",
          frequencies: {
            utilized: [
              "5160.00MHz-5165.23MHz(90.54%)",
              "5165.23MHz-5178.27MHz(91.96%)",
              "5178.27MHz-5190.00MHz(92.61%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5190.00MHz-5220.00MHz",
        result: {
          utilization: "92.84%",
          frequencies: {
            utilized: [
              "5190.00MHz-5191.32MHz(92.61%)",
              "5191.32MHz-5204.36MHz(92.96%)",
              "5204.36MHz-5217.40MHz(93.25%)",
              "5217.40MHz-5220.00MHz(92.53%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5220.00MHz-5250.00MHz",
        result: {
          utilization: "92.00%",
          frequencies: {
            utilized: [
              "5220.00MHz-5230.45MHz(92.53%)",
              "5230.45MHz-5243.49MHz(92.17%)",
              "5243.49MHz-5250.00MHz(91.30%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5250.00MHz-5280.00MHz",
        result: {
          utilization: "90.30%",
          frequencies: {
            utilized: [
              "5250.00MHz-5256.53MHz(91.30%)",
              "5256.53MHz-5269.58MHz(90.34%)",
              "5269.58MHz-5280.00MHz(89.27%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5280.00MHz-5310.00MHz",
        result: {
          utilization: "86.83%",
          frequencies: {
            utilized: [
              "5280.00MHz-5282.62MHz(89.27%)",
              "5282.62MHz-5295.66MHz(88.12%)",
              "5295.66MHz-5308.71MHz(86.26%)",
              "5308.71MHz-5310.00MHz(83.66%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5310.00MHz-5340.00MHz",
        result: {
          utilization: "81.68%",
          frequencies: {
            utilized: [
              "5310.00MHz-5321.75MHz(83.66%)",
              "5321.75MHz-5334.79MHz(81.13%)",
              "5334.79MHz-5340.00MHz(80.25%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5340.00MHz-5370.00MHz",
        result: {
          utilization: "79.85%",
          frequencies: {
            utilized: [
              "5340.00MHz-5347.84MHz(80.25%)",
              "5347.84MHz-5360.88MHz(79.42%)",
              "5360.88MHz-5370.00MHz(79.87%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5370.00MHz-5400.00MHz",
        result: {
          utilization: "80.22%",
          frequencies: {
            utilized: [
              "5370.00MHz-5373.92MHz(79.87%)",
              "5373.92MHz-5386.97MHz(80.17%)",
              "5386.97MHz-5400.00MHz(80.63%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5400.00MHz-5430.00MHz",
        result: {
          utilization: "80.35%",
          frequencies: {
            utilized: [
              "5400.00MHz-5400.01MHz(80.63%)",
              "5400.01MHz-5413.05MHz(80.65%)",
              "5413.05MHz-5426.10MHz(80.11%)",
              "5426.10MHz-5430.00MHz(80.03%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5430.00MHz-5460.00MHz",
        result: {
          utilization: "79.92%",
          frequencies: {
            utilized: [
              "5430.00MHz-5439.14MHz(80.03%)",
              "5439.14MHz-5452.18MHz(79.48%)",
              "5452.18MHz-5460.00MHz(80.26%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5460.00MHz-5490.00MHz",
        result: {
          utilization: "80.84%",
          frequencies: {
            utilized: [
              "5460.00MHz-5465.23MHz(80.26%)",
              "5465.23MHz-5478.27MHz(80.79%)",
              "5478.27MHz-5490.00MHz(81.47%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5490.00MHz-5520.00MHz",
        result: {
          utilization: "81.52%",
          frequencies: {
            utilized: [
              "5490.00MHz-5491.31MHz(81.47%)",
              "5491.31MHz-5504.36MHz(81.39%)",
              "5504.36MHz-5517.40MHz(81.48%)",
              "5517.40MHz-5520.00MHz(81.72%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5520.00MHz-5550.00MHz",
        result: {
          utilization: "80.81%",
          frequencies: {
            utilized: [
              "5520.00MHz-5530.44MHz(81.72%)",
              "5530.44MHz-5543.49MHz(81.62%)",
              "5543.49MHz-5550.00MHz(79.09%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5550.00MHz-5580.00MHz",
        result: {
          utilization: "79.31%",
          frequencies: {
            utilized: [
              "5550.00MHz-5556.53MHz(79.09%)",
              "5556.53MHz-5569.57MHz(79.37%)",
              "5569.57MHz-5580.00MHz(79.47%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5580.00MHz-5610.00MHz",
        result: {
          utilization: "79.28%",
          frequencies: {
            utilized: [
              "5580.00MHz-5582.62MHz(79.47%)",
              "5582.62MHz-5595.66MHz(79.41%)",
              "5595.66MHz-5608.70MHz(78.93%)",
              "5608.70MHz-5610.00MHz(79.31%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5610.00MHz-5640.00MHz",
        result: {
          utilization: "80.49%",
          frequencies: {
            utilized: [
              "5610.00MHz-5621.75MHz(79.31%)",
              "5621.75MHz-5634.79MHz(80.73%)",
              "5634.79MHz-5640.00MHz(81.44%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5640.00MHz-5670.00MHz",
        result: {
          utilization: "81.04%",
          frequencies: {
            utilized: [
              "5640.00MHz-5647.83MHz(81.44%)",
              "5647.83MHz-5660.88MHz(80.50%)",
              "5660.88MHz-5670.00MHz(81.18%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5670.00MHz-5700.00MHz",
        result: {
          utilization: "82.74%",
          frequencies: {
            utilized: [
              "5670.00MHz-5673.92MHz(81.18%)",
              "5673.92MHz-5686.96MHz(82.78%)",
              "5686.96MHz-5700.00MHz(84.27%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5700.00MHz-5730.00MHz",
        result: {
          utilization: "87.29%",
          frequencies: {
            utilized: [
              "5700.00MHz-5700.01MHz(84.27%)",
              "5700.01MHz-5713.05MHz(86.52%)",
              "5713.05MHz-5726.09MHz(88.05%)",
              "5726.09MHz-5730.00MHz(90.32%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5730.00MHz-5760.00MHz",
        result: {
          utilization: "92.40%",
          frequencies: {
            utilized: [
              "5730.00MHz-5739.13MHz(90.32%)",
              "5739.13MHz-5752.18MHz(92.45%)",
              "5752.18MHz-5760.00MHz(94.42%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5760.00MHz-5790.00MHz",
        result: {
          utilization: "95.99%",
          frequencies: {
            utilized: [
              "5760.00MHz-5765.22MHz(94.42%)",
              "5765.22MHz-5778.26MHz(96.20%)",
              "5778.26MHz-5790.00MHz(97.35%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5790.00MHz-5820.00MHz",
        result: {
          utilization: "98.45%",
          frequencies: {
            utilized: [
              "5790.00MHz-5791.31MHz(97.35%)",
              "5791.31MHz-5804.35MHz(98.28%)",
              "5804.35MHz-5817.39MHz(98.91%)",
              "5817.39MHz-5820.00MHz(99.26%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5820.00MHz-5850.00MHz",
        result: {
          utilization: "99.51%",
          frequencies: {
            utilized: [
              "5820.00MHz-5830.44MHz(99.26%)",
              "5830.44MHz-5843.48MHz(99.56%)",
              "5843.48MHz-5850.00MHz(99.71%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5850.00MHz-5880.00MHz",
        result: {
          utilization: "99.80%",
          frequencies: {
            utilized: [
              "5850.00MHz-5856.52MHz(99.71%)",
              "5856.52MHz-5869.57MHz(99.80%)",
              "5869.57MHz-5880.00MHz(99.88%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5880.00MHz-5910.00MHz",
        result: {
          utilization: "99.92%",
          frequencies: {
            utilized: [
              "5880.00MHz-5882.61MHz(99.88%)",
              "5882.61MHz-5895.65MHz(99.93%)",
              "5895.65MHz-5908.70MHz(99.94%)",
              "5908.70MHz-5910.00MHz(99.95%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5910.00MHz-5940.00MHz",
        result: {
          utilization: "99.95%",
          frequencies: {
            utilized: [
              "5910.00MHz-5921.74MHz(99.95%)",
              "5921.74MHz-5934.78MHz(99.95%)",
              "5934.78MHz-5940.00MHz(99.96%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5940.00MHz-5970.00MHz",
        result: {
          utilization: "99.95%",
          frequencies: {
            utilized: [
              "5940.00MHz-5947.83MHz(99.96%)",
              "5947.83MHz-5960.87MHz(99.95%)",
              "5960.87MHz-5970.00MHz(99.95%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "5970.00MHz-6000.00MHz",
        result: {
          utilization: "99.95%",
          frequencies: {
            utilized: [
              "5970.00MHz-5973.91MHz(99.95%)",
              "5973.91MHz-5986.96MHz(99.93%)",
              "5986.96MHz-6000.00MHz(99.96%)"
            ],
            notutilized: []
          }
        }
      }
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
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "58.19", frequencies: { utilized: ["3120MHz-3130MHz(58.00%)", "3130MHz-3143MHz(58.42%)", "3143MHz-3150MHz(58.13%)"], notutilized: [] } } },
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
      id: 6,
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
      location: "Bauchi",
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
              "range": "30.00MHz - 60.00MHz",
              "result": {
                "utilization": "77.08",
                "frequencies": {
                  "utilized": ["30.00MHz - 39.23MHz (76.12%)", "39.23MHz - 52.27MHz (77.19%)", "53.27MHz - 60.00MHz(77.94%)"],
                  "notutilized": []
                }
              }
            },
            {
              "range": "60.00MHz - 90.00MHz",
              "result": {
                "utilization": "79.35",
                "frequencies": {
                  "utilized": [],
                  "notutilized": ["60.00MHz - 65.32MHz(77.94%)","65.32MHz - 78.36MHz(79.07%)", "78.36MHz - 90.00MHz (81.04%)"]
                }
              }
            },
            {
              "range": "90.00MHz - 120.00MHz",
              "result": {
                "utilization": "49.58",
                "frequencies": {
                  "utilized": ["90.00MHz - 91.40MHz(81.04%)", "91.40MHz -104.45MHz (82.42%)"],
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
                    notutilized: ["420.00-431.00MHz(0%)","431.00-444.00MHz(0%)","444.00-450.00MHz(0%)"]
                  }
                }
              },
              {
                range: "450.00-480.00MHz",
                result: {
                  utilization: "0.05",
                  frequencies: {
                    utilized: [],
                    notutilized: ["450.00-457.00MHz(0%)","457.00-470.00MHz(0%)","470.00-480.00MHz(0.15%)"]
                  }
                }
              },
              {
                range: "480.00-510.00MHz",
                result: {
                  utilization: "0.08",
                  frequencies: {
                    utilized: [],
                    notutilized: ["480.00-483.00MHz(0.15%)","483.00-496.00MHz(0.16%)","496.00-509.00MHz(0.02%)","509.00-510.00MHz(0%)"]
                  }
                }
              },
              {
                range: "510.00-540.00MHz",
                result: {
                  utilization: "0.02",
                  frequencies: {
                    utilized: [],
                    notutilized: ["510.00-522.00MHz(0%)","522.00-535.00MHz(0.04%)","535.00-540.00MHz(0%)"]
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
                  utilization: "0.89",
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
                  utilization: "0.15",
                  frequencies: {
                    utilized: [],
                    notutilized: ["690.00-691.00MHz(0%)","691.00-704.00MHz(0.01%)","704.00-717.00MHz(0.53%)","717.00-720.00MHz(0.05%)"]
                  }
                }
              },
              {
                range: "720.00-750.00MHz",
                result: {
                  utilization: "0.02",
                  frequencies: {
                    utilized: [],
                    notutilized: ["720.00-731.00MHz(0.05%)","731.00-744.00MHz(0%)","744.00-750.00MHz(0%)"]
                  }
                }
              },
              {
                range: "750.00-780.00MHz",
                result: {
                  utilization: "30.08",
                  frequencies: {
                    utilized: [],
                    notutilized: ["750.00-757.00MHz(0%)","757.00-770.00MHz(56.62%)","770.00-780.00MHz(33.61%)"]
                  }
                }
              },
              {
                range: "780.00-810.00MHz",
                result: {
                  utilization: "35.88",
                  frequencies: {
                    utilized: [],
                    notutilized: ["780.00MHz-783.00MHz(33.61%)","783MHz- 796MHz(57.23%)","796MHz-809MHz(52.36%)","809MHz-810MHz(0.33%)"]
                  }
                }
              },
              {
                range: "810.00-840.00MHz",
                result: {
                  utilization: "0.48",
                  frequencies: {
                    utilized: [],
                    notutilized: ["810.00-822.00MHz(0.33%)","822.00-835.00MHz(0.49%)","835.00-840.00MHz(0.61%)"]
                  }
                }
              },
              {
                range: "840.00-870.00MHz",
                result: {
                  utilization: "0.22",
                  frequencies: {
                    utilized: [],
                    notutilized: ["840.00-848.00MHz(0.61%)","848.00-861.00MHz(0%)","861.00-870.00MHz(0.05%)"]
                  }
                }
              },
              {
                range: "870.00-900.00MHz",
                result: {
                  utilization: "66.47%",
                  frequencies: {
                    utilized: ["870MHz- 874MHz(0.05%)", "874MHz- 887MHz(99.54%)", "887MHz- 900MHz(99.82%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "900.00-930.00MHz",
                result: {
                  utilization: "99.77",
                  frequencies: {
                    utilized: ["900MHz- 913MHz(99.82%)","913MHz- 926MHz(99.33%)","926MHz- 930MHz(99.98%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "930.00-960.00MHz",
                result: {
                  utilization: "99.86",
                  frequencies: {
                    utilized: ["930MHz-939MHz(99.97%)", "939MHz- 952MHz(99.97%)","952MHz-960MHz(99.65%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "960.00-990.00MHz",
                result: {
                  utilization: "99.36",
                  frequencies: {
                    utilized: ["960MHz-965MHz(99.65%)","965MHz- 978MHz(96.33%)","978MHz-990MHz(96.11%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "990.00-1020.00MHz",
                result: {
                  utilization: "96.02",
                  frequencies: {
                    utilized: ["990.00-991.00MHz (96.11%)","991.00-1000.00MHz(95.90%)","1000.00-1020.00MHz(96.04%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1020.00-1050.00MHz",
                result: {
                  utilization: "99.90",
                  frequencies: {
                    utilized: ["1020.00-1030.00MHz(96.04%)","1030.00-1040.00MHz(96.69%)","1040.00-1050.00MHz(97.14%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1050.00-1080.00MHz",
                result: {
                  utilization: "98.23",
                  frequencies: {
                    utilized: ["1050.00-1060.00MHz(97.74%)", ,"1060.00-1070.00MHz(98.20%)","1070.00-1080.00MHz(98.73%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1080.00-1110.00MHz",
                result: {
                  utilization: "99.11",
                  frequencies: {
                    utilized: ["1080.00-1100.00MHz(98.73%)", "1100.00-1110.00MHz(99.69%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1110.00-1140.00MHz",
                result: {
                  utilization: "99.23",
                  frequencies: {
                    utilized: ["1110.00-1120.00MHz(98.92%)", "1120.00-1130.00MHz(99.05%)", "1130.00-1140.00MHz(99.38%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1140.00-1170.00MHz",
                result: {
                  utilization: "99.53",
                  frequencies: {
                    utilized: ["1140.00-1150.00MHz(99.57%)", "1150.00-1160.00MHz(99.43%)", "1160.00-1170.00MHz(99.58%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1170.00-1200.00MHz",
                result: {
                  utilization: "99.61",
                  frequencies: {
                    utilized: ["1170.00-1190.00MHz(99.58%)","1190.00-1200.00MHz(99.66%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1200.00-1230.00MHz",
                result: {
                  utilization: "99.54",
                  frequencies: {
                    utilized: ["1200.00-1210.00MHz(99.60%)", "1210.00-1230.00MHz(99.52%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1230.00-1260.00MHz",
                result: {
                  utilization: "99.38",
                  frequencies: {
                    utilized: ["1230.00-1240.00MHz(99.50%)", "1240.00-1250.00MHz(99.43%)", "1250.00-1260.00MHz(99.20%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1260.00-1290.00MHz",
                result: {
                  utilization: "99.02",
                  frequencies: {
                    utilized: ["1260.00-1270.00MHz(99.37%)","1270.00-1280.00MHz(98.83%)", "1280.00-1290.00MHz(98.87%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1290.00-1320.00MHz",
                result: {
                  utilization: "98.91",
                  frequencies: {
                    utilized: ["1290.00-1300.00MHz(98.87%)", "1300.00-1320.00MHz(99.26%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1320.00-1350.00MHz",
                result: {
                  utilization: "98.59",
                  frequencies: {
                    utilized: ["1320.00-1330.00MHz(98.61%)", "1330.00-1340.00MHz(98.32%)", "1340.00-1350.00MHz(98.72%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1350.00-1380.00MHz",
                result: {
                  utilization: "98.99",
                  frequencies: {
                    utilized: ["1350.00-1360.00MHz(98.73%)","1360.00-1370.00MHz(98.93%)", "1370.00-1380.00MHz(99.34%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1380.00-1410.00MHz",
                result: {
                  utilization: "99.53",
                  frequencies: {
                    utilized: ["1380.00-1400.00MHz(99.34%)","1400.00-1410.00MHz(99.60%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1410.00-1440.00MHz",
                result: {
                  utilization: "99.70",
                  frequencies: {
                    utilized: ["1410.00-1420.00MHz(99.64%)","1420.00-1430.00MHz(99.70%)","1430.00-1440.00MHz(99.79%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1440.00-1470.00MHz",
                result: {
                  utilization: "99.82",
                  frequencies: {
                    utilized: ["1440.00-1450.00MHz(99.67%)", "1450.00-1460.00MHz(99.89%)", "1460.00-1470.00MHz(99.89%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1470.00-1500.00MHz",
                result: {
                  utilization: "99.92%",
                  frequencies: {
                    utilized: ["1470.00-1490.00MHz(99.89%)", "1490.00-1500.00MHz(99.93%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1500.00-1530.00MHz",
                result: {
                  utilization: "99.91%",
                  frequencies: {
                    utilized: ["1500.00-1510.00MHz(99.96%)","1510.00-1530.00MHz(99.90%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1530.00-1560.00MHz",
                result: {
                  utilization: "99.81%",
                  frequencies: {
                    utilized: ["1530.00-1540.00MHz(99.88%)", "1540.00-1550.00MHz(99.86%)", "1550.00-1560.00MHz(99.77%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1560.00-1590.00MHz",
                result: {
                  utilization: "99.50%",
                  frequencies: {
                    utilized: ["1560.00-1570.00MHz(99.72%)", "1570.00-1580.00MHz(99.46%)","1580.00-1590.00MHz(99.32%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1590.00-1620.00MHz",
                result: {
                  utilization: "99.36%",
                  frequencies: {
                    utilized: ["1590.00-1600.00MHz(99.32%)", "1600.00-1620.00MHz(99.61%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1620.00-1650.00MHz",
                result: {
                  utilization: "99.34%",
                  frequencies: {
                    utilized: ["1620.00-1630.00MHz(99.15%)", "1630.00-1640.00MHz(99.37%)", "1640.00-1650.00MHz(99.24%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1650.00-1680.00MHz",
                result: {
                  utilization: "99.57%",
                  frequencies: {
                    utilized: ["1650.00-1660.00MHz(99.57%)", "1660.00-1670.00MHz(99.44%)","1670.00-1680.00MHz(99.71%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1680.00-1710.00MHz",
                result: {
                  utilization: "99.67%",
                  frequencies: {
                    utilized: ["1680.00-1700.00MHz(99.71%)", "1700.00-1710.00MHz(99.52%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1710.00-1740.00MHz",
                result: {
                  utilization: "99.84%",
                  frequencies: {
                    utilized: ["1710.00-1722.00MHz(99.79%)", "1722.00-1735.00MHz(99.82%)", "1735.00-1740.00MHz(99.86%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1740.00-1770.00MHz",
                result: {
                  utilization: "99.89%",
                  frequencies: {
                    utilized: ["1740.00-1748.00MHz(99.87%)","1748.00-1761.00MHz(99.88%)", "1761.00-1770.00MHz(99.89%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1770.00-1800.00MHz",
                result: {
                  utilization: "99.91%",
                  frequencies: {
                    utilized: ["1770.00-1774.00MHz(99.91%)","1774.00-1787.00MHz(99.92%)", "1787.00-1800.00MHz(99.92%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1800.00-1830.00MHz",
                result: {
                  utilization: "99.96%",
                  frequencies: {
                    utilized: ["1800.00-1813.00MHz(99.92%)","1813.00-1826.00MHz(99.97%)", "1826.00-1830.00MHz(99.99%)"],
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
                  utilization: "99.95",
                  frequencies: {
                    utilized: ["1860.00-1865.00MHz(100%)", "1865.00-1878.00MHz(100%)", "1878.00-1890.00MHz(99.99%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1890.00-1920.00MHz",
                result: {
                  utilization: "99.77%",
                  frequencies: {
                    utilized: ["1890.00-1891.00MHz(99.81%)", "1891.00-1904.00MHz(99.77%)", "1904.00-1917.00MHz(99.73%)","1917.00-1920.00MHz(99.73%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "1920.00-1950.00MHz",
                result: {
                  utilization: "99.93%",
                  frequencies: {
                    utilized: ["1920.00-1930.00MHz(99.73%)","1930.00-1944.00MHz(100%)", "1944.00-1950.00MHz(100%)"],
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
                  utilization: "95.89%",
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
                    utilized: ["2100.00-2113.00MHz(100%)", "2113.00-2126.00MHz(100%)","2126.00-2130.00MHz(100%)"],
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
                  utilization: "61.24%",
                  frequencies: {
                    utilized: ["2190.00-2191.00MHz(100%)", "2191.00-2204.00MHz(42.27%)","2204.00-2217.00MHz(42.27%)","2217.00-2220.00MHz(41.44%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2220.00-2250.00MHz",
                result: {
                  utilization: "41.78",
                  frequencies: {
                    utilized: ["2220.00-2230.00MHz(41.44%)", "2230.00-2243.00MHz(42.29%)", "2243.00-2250.00MHz(41.04%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2250.00-2280.00MHz",
                result: {
                  utilization: "41.55",
                  frequencies: {
                    utilized: ["2250.00-2256.00MHz(41.04%)", "2256.00-2269.00MHz(42.36%)", "2269.00-2280.00MHz(40.92%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2280.00-2310.00MHz",
                result: {
                  utilization: "42.75",
                  frequencies: {
                    utilized: ["2280.00-2282.00MHz(41.88%)", "2282.00-2296.00MHz(41.88%)", "2296.00-2308.00MHz(42.24%)","2308.00-2310.00MHz(44.12%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2310.00-2340.00MHz",
                result: {
                  utilization: "55.38",
                  frequencies: {
                    utilized: ["2310.00-2321.00MHz(44.12%)", "2321.00-2335.00MHz(42.21%)", "2335.00-2340.00MHz(52.47%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2340.00-2370.00MHz",
                result: {
                  utilization: "63.21",
                  frequencies: {
                    utilized: ["2340.00-2347.00MHz(52.47%)", "2347.00-2361.00MHz(82.74%)","2361.00-2370.00MHz(73.37%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2370.00-2400.00MHz",
                result: {
                  utilization: "45.95",
                  frequencies: {
                    utilized: ["2370.00-2374.00MHz(44.28%)", "2374.00-2387.00MHz(44.28%)","2387.00-2400.00MHz(45.68%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2400.00-2430.00MHz",
                result: {
                  utilization: "50.79",
                  frequencies: {
                    utilized: ["2400.00-2413.00MHz(47.88%)", "2413.00-2426.00MHz(51.18%)","2426.00-2430.00MHz(53.31%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2430.00-2460.00MHz",
                result: {
                  utilization: "52.93",
                  frequencies: {
                    utilized: ["2430.00-2439.00MHz(53.31%)", "2439.00-2452.00MHz(53.02%)", "2452.00-2460.00MHz(53.49%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2460.00-2490.00MHz",
                result: {
                  utilization: "50.75",
                  frequencies: {
                    utilized: ["2460.00-2465.00MHz(53.49%)", "2465.00-2478.00MHz(51.88%)" ,"2478.00-2490.00MHz(49.09%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2490.00-2520.00MHz",
                result: {
                  utilization: "50.18",
                  frequencies: {
                    utilized: ["2490.00-2491.00MHz(48.53%)", "2491.00-2504.00MHz(50.21%)", "2504.00-2517.00MHz(50.21%)",  "2517.00-2520.00MHz(51.80%)"],                    notutilized: []
                  }
                }
              },
              {
                range: "2520.00-2550.00MHz",
                result: {
                  utilization: "52.29",
                  frequencies: {
                    utilized: [ "2520.00-2530.00MHz(51.80%)", "2530.00-2544.00MHz(52.61%)", "2544.00-2550.00MHz(52.43%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2550.00-2580.00MHz",
                result: {
                  utilization: "54.04",
                  frequencies: {
                    utilized: [ "2550.00-2556.00MHz(52.43%)" , "2556.00-2569.00MHz(52.31%)", "2569.00-2580.00MHz(52.92%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2580.00-2610.00MHz",
                result: {
                  utilization: "57.02",
                  frequencies: {
                    utilized: [ "2580.00-2582.00MHz(58.49%)", "2582.00-2595.00MHz(58.49%)",  "2595.00-2608.00MHz(57.12%)", "2608.00-2610.00MHz(55.45%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2610.00-2640.00MHz",
                result: {
                  utilization: "76.30",
                  frequencies: {
                    utilized: ["2610.00-2622.00MHz(55.45%)","2622.00-2635.00MHz(81.47%)", "2635.00-2640.00MHz(83.10%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2640.00-2670.00MHz",
                result: {
                  utilization: "86.70",
                  frequencies: {
                    utilized: ["2640.00-2648.00MHz(183.10%)", "2648.00-2661.00MHz(85.16%)","2661.00-2670.00MHz(88.77%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2670.00-2700.00MHz",
                result: {
                  utilization: "76.41",
                  frequencies: {
                    utilized: ["2670.00-2674.00MHz(89.77%)", "2674.00-2687.00MHz(88.77%)", "2687.00-2700.00MHz(88.67%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2700.00-2730.00MHz",
                result: {
                  utilization: "51.16",
                  frequencies: {
                    utilized: ["2700.00-2713.00MHz(50.78%)","2713.00-2726.00MHz(51.11%)","2726.00-2730.00MHz(51.60%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2730.00-2760.00MHz",
                result: {
                  utilization: "52.77",
                  frequencies: {
                    utilized: ["2730.00-2739.00MHz(51.60%)","2739.00-2752.00MHz(52.76%)","2752.00-2760.00MHz(53.29%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2760.00-2790.00MHz",
                result: {
                  utilization: "54.64",
                  frequencies: {
                    utilized: ["2760.00-2765.00MHz(53.29%)", "2765.00-2778.00MHz(53.94%)", "2778.00-2790.00MHz(55.18%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2790.00-2820.00MHz",
                result: {
                  utilization: "57.37",
                  frequencies: {
                    utilized: ["2790.00-2791.00MHz(56.14%)","2791.00-2804.00MHz(57.43%)", "2804.00-2817.00MHz(57.43%)" ,"2817.00-2820.00MHz(58.55%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2820.00-2850.00MHz",
                result: {
                  utilization: "60.23",
               frequencies: {
                    utilized: ["2820.00-2830.00MHz(58.55%)", "2830.00-2843.00MHz(59.93%)","2843.00-2850.00MHz(60.86%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2850.00-2880.00MHz",
                result: {
                  utilization: "61.56",
                  frequencies: {
                    utilized: ["2850.00-2856.00MHz(60.86%)","2856.00-2869.00MHz(61.60%)","2869.00-2880.00MHz(61.92%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2880.00-2910.00MHz",
                result: {
                  utilization: "61.31",
                  frequencies: {
                    utilized: ["2880.00-2882.00MHz(61.87%)", "2882.00-2896.00MHz(61.87%)","2896.00-2909.00MHz(61.13%)","2909.00-2910.00MHz(60.92%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2910.00-2940.00MHz",
                result: {
                  utilization: "60.20",
                  frequencies: {
                    utilized: ["2910.00-2922.00MHz(60.92%)", "2922.00-2935.00MHz(60.56%)", "2935.00-2940.00MHz(59.89%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2940.00-2970.00MHz",
                result: {
                  utilization: "59.37",
                  frequencies: {
                    utilized: ["2940.00-2948.00MHz(59.89%)","2948.00-2961.00MHz(59.41%)", "2961.00-2970.00MHz(59.30%)"],
                    notutilized: []
                  }
                }
              },
              {
                range: "2970.00-3000.00MHz",
                result: {
                  utilization: "58.86",
                  frequencies: {
                    utilized: ["2970.00-2974.00MHz(58.87%)","2974.00-2987.00MHz(58.87%)", "2987.00-3000.00MHz(58.84%)"],
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
            { range: "3000.00MHz-3030.00MHz", result: { utilization: "26.18", frequencies: { utilized: ["3000.00MHz-3013.00MHz(24.88%)","3013.00MHz-3026.00MHz(25.79%)", "3026.00MHz-3030.00MHz(27.88%)"], notutilized: [] } } },
            { range: "3030.00MHz-3060.00MHz", result: { utilization: "29.87", frequencies: { utilized: ["3030.00MHz-3039.00MHz(27.88%)",  "3039.00MHz-3052.00MHz(29.59%)", "3052.00MHz-3060.00MHz(30.50%)"], notutilized: [] } } },       
            { range: "3060.00MHz-3090.00MHz", result: { utilization: "32.70", frequencies: { utilized: ["3060.00MHz-3065.00MHz(31.49%)","3065.00MHz-3078.00MHz(32.67%)","3078.00MHz-3090.00MHz(33.93%)"], notutilized: [] } } },
            { range: "3090.00MHz-3120.00MHz", result: { utilization: "35.08", frequencies: { utilized: ["3090.00MHz-3091.00MHz(33.93%)", "3091.00MHz-3104.00MHz(34.92%)", "3104.00MHz-3117.00MHz(36.39%)","3117.00MHz-3120.00MHz(36.39%)"], notutilized: [] } } },
            { range: "3120.00MHz-3150.00MHz", result: { utilization: "38.14", frequencies: { utilized: ["3120.00MHz-3130.00MHz(36.39%)", "3130.00MHz-3144.00MHz(37.45%)","3144.00MHz-3150.00MHz(38.76%)"], notutilized: [] } } },
            { range: "3150.00MHz-3180.00MHz", result: { utilization: "40.14", frequencies: { utilized: ["3150.00MHz-3156.00MHz(38.76%)", "3156.00MHz-3169.00MHz(39.97%)",  "3169.00MHz-3180.00MHz(40.49%)"], notutilized: [] } } },
            { range: "3180.00MHz-3210.00MHz", result: { utilization: "42.17", frequencies: { utilized: ["3180.00MHz-3182.00MHz(41.33%)","3182.00MHz-3196.00MHz(41.33%)",  "3196.00MHz-3208.00MHz(42.39%)","3208.00MHz-3210.00MHz(42.79%)"], notutilized: [] } } },
            { range: "3210.00MHz-3240.00MHz", result: { utilization: "43.44", frequencies: { utilized: ["3210.00MHz-3222.00MHz(42.79%)", "3222.00MHz-3235.00MHz(43.86%)", "3235.00MHz-3240.00MHz(43.86%)"], notutilized: [] } } },
            { range: "3240.00MHz-3270.00MHz", result: { utilization: "43.85", frequencies: { utilized: ["3240.00MHz-3248.00MHz(43.86%)", "3248.00MHz-3260.00MHz(43.89%)", "3260.00MHz-3270.00MHz(43.92%)"], notutilized: [] } } },
            { range: "3270.00MHz-3300.00MHz", result: { utilization: "43.53", frequencies: { utilized: ["3270.00MHz-3274.00MHz(43.75%)", "3274.00MHz-3287.00MHz(43.75%)", "3287.00MHz-3300.00MHz(43.44%)"], notutilized: [] } } },
            { range: "3300.00MHz-3330.00MHz", result: { utilization: "43.26", frequencies: { utilized: ["3300.00MHz-3313.00MHz(43.39%)", "3313.00MHz-3326.00MHz(43.15%)", "3326.00MHz-3330.00MHz(43.23%)"], notutilized: [] } } },
            { range: "3330.00MHz-3360.00MHz", result: { utilization: "43.40", frequencies: { utilized: ["3330.00MHz-3339.00MHz(43.23%)", "3339.00MHz-3352.00MHz(43.12%)","3352.00MHz-3360.00MHz(43.63%)"], notutilized: [] } } },
            { range: "3360.00MHz-3390.00MHz", result: { utilization: "43.57", frequencies: { utilized: ["3360.00MHz-3365.00MHz(43.63%)", "3365.00MHz-3378.00MHz(43.60%)",  "3378.00MHz-3390.00MHz(43.56%)"], notutilized: [] } } },
            { range: "3390.00MHz-3420.00MHz", result: { utilization: "44.70", frequencies: { utilized: ["3390.00MHz-3391.00MHz(43.51%)", "3391.00MHz-3404.00MHz(45.15%)", "3404.00MHz-3417.00MHz(45.15%)","3417.00MHz-3420.00MHz(45.43%)"], notutilized: [] } } },
            { range: "3420.00MHz-3450.00MHz", result: { utilization: "46.48", frequencies: { utilized: ["3420.00MHz-3430.00MHz(45.43%)", "3430.00MHz-3444.00MHz(45.62%)", "3444.00MHz-3450.00MHz(48.09%)"], notutilized: [] } } },
            { range: "3450.00MHz-3480.00MHz", result: { utilization: "46.35", frequencies: { utilized: ["3450.00MHz-3457.00MHz(48.09%)", "3457.00MHz-3469.00MHz(46.80%)", "3469.00MHz-3480.00MHz(45.80%)"], notutilized: [] } } },
            { range: "3480.00MHz-3510.00MHz", result: { utilization: "47.42", frequencies: { utilized: ["3480.00MHz-3483.00MHz(44.71%)","3483.00MHz-3496.00MHz(46.20%)", "3496.00MHz-3508.00MHz(46.20%)", "3508.00MHz-3510.00MHz(51.34%)"], notutilized: [] } } },
            { range: "3510.00MHz-3540.00MHz", result: { utilization: "48.19", frequencies: { utilized: ["3510.00MHz-3522.00MHz(51.34%)",   "3522.00MHz-3535.00MHz(46.08%)", "3535.00MHz-3540.00MHz(46.82%)"], notutilized: [] } } },
            { range: "3540.00MHz-3570.00MHz", result: { utilization: "46.55", frequencies: { utilized: ["3540.00MHz-3548.00MHz(46.82%)", "3548.00MHz-3561.00MHz(48.51%)", "3561.00MHz-3570.00MHz(45.32%)"], notutilized: [] } } },
            { range: "3570.00MHz-3600.00MHz", result: { utilization: "44.17", frequencies: { utilized: ["3570.00MHz-3574.00MHz(45.55%)", "3574.00MHz-3587.00MHz(45.55%)", "3587.00MHz-3600.00MHz(45.21%)"], notutilized: [] } } },
            { range: "3600.00MHz-3630.00MHz", result: { utilization: "39.12", frequencies: { utilized: ["3600.00MHz-3613.00MHz(41.76%)", "3613.00MHz-3626.00MHz(38.16%)", "3626.00MHz-3630.00MHz(37.44%)"], notutilized: [] } } },
            { range: "3630.00MHz-3660.00MHz", result: { utilization: "35.04", frequencies: { utilized: ["3630.00MHz-3639.00MHz(37.44%)", "3639.00MHz-3652.00MHz(36.12%)", "3652.00MHz-3660.00MHz(34.33%)"], notutilized: [] } } },
            { range: "3660.00MHz-3690.00MHz", result: { utilization: "32.07", frequencies: { utilized: ["3660.00MHz-3665.00MHz(34.33%)", "3665.00MHz-3678.00MHz(32.28%)", "3678.00MHz-3690.00MHz(31.23%)"], notutilized: [] } } },
            { range: "3690.00MHz-3720.00MHz", result: { utilization: "29.84", frequencies: { utilized: ["3690.00MHz-3691.00MHz(30.44%)","3691.00MHz-3704.00MHz(29.80%)","3704.00MHz-3717.00MHz(29.80%)","3717.00MHz-3720.00MHz(29.27%)"], notutilized: [] } } },
            { range: "3720.00MHz-3750.00MHz", result: { utilization: "29.58", frequencies: { utilized: ["3720.00MHz-3730.00MHz(29.27%)","3730.00MHz-3744.00MHz(29.26%)", "3744.00MHz-3750.00MHz(29.64%)"], notutilized: [] } } },
            { range: "3750.00MHz-3780.00MHz", result: { utilization: "30.61", frequencies: { utilized: ["3750.00MHz-3757.00MHz(29.64%)",  "3757.00MHz-3769.00MHz(30.15%)", "3769.00MHz-3780.00MHz(30.86%)"], notutilized: [] } } },
            { range: "3780.00MHz-3810.00MHz", result: { utilization: "33.09", frequencies: { utilized: ["3780.00MHz-3783.00MHz(31.79%)","3783.00MHz-3796.00MHz(31.79%)","3796.00MHz-3809.00MHz(32.96%)", "3809.00MHz-3810.00MHz(34.51%)"], notutilized: [] } } },
            { range: "3810.00MHz-3840.00MHz", result: { utilization: "36.08", frequencies: { utilized: ["3810.00MHz-3822.00MHz(34.51%)","3822.00MHz-3839.00MHz(35.70%)","3839.00MHz-3840.00MHz(36.56%)"], notutilized: [] } } },
            { range: "3840.00MHz-3870.00MHz", result: { utilization: "38.09", frequencies: { utilized: ["3840.00MHz-3847.00MHz(36.56%)", "3847.00MHz-3861.00MHz(37.54%)", "3861.00MHz-3870.00MHz(38.69%)"], notutilized: [] } } },
            { range: "3870.00MHz-3900.00MHz", result: { utilization: "39.40", frequencies: { utilized: ["3870.00MHz-3874.00MHz(39.57%)", "3874.00MHz-3887.00MHz(39.70%)", "3887.00MHz-3900.00MHz(38.94%)" ], notutilized: [] } } },
            { range: "3900.00MHz-3930.00MHz", result: { utilization: "38.14", frequencies: { utilized: ["3900.00MHz-3913.00MHz(38.94%)", "3913.00MHz-3926.00MHz(38.51%)", "3926.00MHz-3930.00MHz(36.96%)" ], notutilized: [] } } },
            { range: "3930.00MHz-3960.00MHz", result: { utilization: "35.52", frequencies: { utilized: ["3930.00MHz-3939.00MHz(36.96%)", "3939.00MHz-3952.00MHz(35.85%)", "3952.00MHz-3960.00MHz(34.82%)"], notutilized: [] } } },
            { range: "3960.00MHz-3990.00MHz", result: { utilization: "34.75", frequencies: { utilized: ["3960.00MHz-3965.00MHz(34.82%)",  "3965.00MHz-3978.00MHz(34.43%)", "3978.00MHz-3990.00MHz(34.56%)"], notutilized: [] } } },
            { range: "3990.00MHz-4020.00MHz", result: { utilization: "35.90", frequencies: { utilized: [ "3990.00MHz-3991.00MHz(35.20%)",  "3991.00MHz-4004.00MHz(35.95%)", "4004.00MHz-4017.00MHz(35.95%)", "4017.00MHz-4020.00MHz(36.55%)"], notutilized: [] } } },
            { range: "4020.00MHz-4050.00MHz", result: { utilization: "38.50", frequencies: { utilized: ["4020.00MHz-4030.00MHz(36.55%)", "4030.00MHz-4044.00MHz(37.76%)", "4044.00MHz-4050.00MHz(39.22%)"], notutilized: [] } } },
            { range: "4050.00MHz-4080.00MHz", result: { utilization: "41.22", frequencies: { utilized: ["4050.00MHz-4056.00MHz(39.22%)", "4056.00MHz-4069.00MHz(40.46%)", "4069.00MHz-4080.00MHz(41.89%)"], notutilized: [] } } },
            { range: "4080.00MHz-4110.00MHz", result: { utilization: "43.96", frequencies: { utilized: ["4080.00MHz-4083.00MHz(43.31%)", "4083.00MHz-4096.00MHz(43.31%)", "4069.00MHz-4109.00MHz(44.05%)", "4109.00MHz-4110.00MHz(44.51%)"], notutilized: [] } } },
            { range: "4110.00MHz-4140.00MHz", result: { utilization: "45.25", frequencies: { utilized: ["4110.00MHz-4122.00MHz(44.51%)", "4122.00MHz-4135.00MHz(44.98%)", "4135.00MHz-4140.00MHz(45.57%)"], notutilized: [] } } },
            { range: "4140.00MHz-4170.00MHz", result: { utilization: "47.00", frequencies: { utilized: ["4140.00MHz-4148.00MHz(45.57%)","4148.00MHz-4161.00MHz(45.95%)","4161.00MHz-4170.00MHz(47.45%)"], notutilized: [] } } },
            { range: "4170.00MHz-4200.00MHz", result: { utilization: "50.03", frequencies: { utilized: ["4170.00MHz-4174.00MHz(49.04%)", "4174.00MHz-4187.00MHz(49.99%)", "4187.00MHz-4200.00MHz(51.05%)"], notutilized: [] } } },
            { range: "4200.00MHz-4230.00MHz", result: { utilization: "51.74", frequencies: { utilized: ["4200.00MHz-4213.00MHz(51.05%)",  "4213.00MHz-4226.00MHz(51.87%)", "4226.00MHz-4230.00MHz(52.32%)"], notutilized: [] } } },
            { range: "4230.00MHz-4260.00MHz", result: { utilization: "54.53", frequencies: { utilized: ["4230.00MHz-4239.00MHz(52.32%)","4239.00MHz-4252.00MHz(53.90%)", "4252.00MHz-4260.00MHz(55.39%)"], notutilized: [] } } },
            { range: "4260.00MHz-4290.00MHz", result: { utilization: "57.08", frequencies: { utilized: ["4260.00MHz-4265.00MHz(55.39%)",  "4265.00MHz-4278.00MHz(56.50%)", "4278.00MHz-4290.00MHz(57.88%)"], notutilized: [] } } },
            { range: "4290.00MHz-4320.00MHz", result: { utilization: "59.39", frequencies: { utilized: ["4290.00MHz-4291.00MHz(58.57%)",  "4291.00MHz-4304.00MHz(59.39%)", "4304.00MHz-4317.00MHz(59.39%)","4317.00MHz-4320.00MHz(60.22%)"], notutilized: [] } } },
            { range: "4320.00MHz-4350.00MHz", result: { utilization: "62.10", frequencies: { utilized: ["4320.00MHz-4330.00MHz(60.22%)", "4330.00MHz-4344.00MHz(61.38%)", "4344.00MHz-4350.00MHz(62.55%)"], notutilized: [] } } },
            { range: "4350.00MHz-4380.00MHz", result: { utilization: "64.60", frequencies: { utilized: ["4350.00MHz-4356.00MHz(62.55%)", "4356.00MHz-4369.00MHz(64.24%)","4369.00MHz-4380.00MHz(65.18%)"], notutilized: [] } } },
            { range: "4380.00MHz-4410.00MHz", result: { utilization: "67.35", frequencies: { utilized: ["4380.00MHz-4383.00MHz(66.42%)", "4383.00MHz-4396.00MHz(66.42%)", "4396.00MHz-4408.00MHz(67.30%)","4408.00MHz-4410.00MHz(68.32%)"], notutilized: [] } } },
            { range: "4410.00MHz-4440.00MHz", result: { utilization: "69.89", frequencies: { utilized: ["4410.00MHz-4422.00MHz(68.32%)", "4422.00MHz-4435.00MHz(69.47%)", "4435.00MHz-4440.00MHz(70.55%)",], notutilized: [] } } },
            { range: "4440.00MHz-4470.00MHz", result: { utilization: "71.80", frequencies: { utilized: ["4440.00MHz-4448.00MHz(70.55%)", "4448.00MHz-4461.00MHz(71.23%)", "4461.00MHz-4470.00MHz(72.31%)",], notutilized: [] } } },
            { range: "4470.00MHz-4500.00MHz", result: { utilization: "73.72", frequencies: { utilized: ["4470.00MHz-4474.00MHz(73.09%)", "4474.00MHz-4487.00MHz(73.09%)","4487.00MHz-4500.00MHz(73.72%)",], notutilized: [] } } },
            { range: "4500.00MHz-4530.00MHz", result: { utilization: "74.49", frequencies: { utilized: ["4500.00MHz-4513.00MHz(74.54%)", "4513.00MHz-4526.00MHz(74.54%)","4526.00MHz-4530.00MHz(74.57%)",], notutilized: [] } } },
            { range: "4530.00MHz-4560.00MHz", result: { utilization: "74.30", frequencies: { utilized: ["4530.00MHz-4539.00MHz(74.57%)", "4539.00MHz-4552.00MHz(74.47%)", "4552.00MHz-4560.00MHz(74.15%)",], notutilized: [] } } },
            { range: "4560.00MHz-4590.00MHz", result: { utilization: "73.76", frequencies: { utilized: ["4560.00MHz-4565.00MHz(74.15%)", "4565.00MHz-4578.00MHz(73.99%)","4578.00MHz-4590.00MHz(73.64%)",], notutilized: [] } } },
            { range: "4590.00MHz-4620.00MHz", result: { utilization: "72.76", frequencies: { utilized: ["4590.00MHz-4591.00MHz(73.26%)","4591.00MHz-4604.00MHz(72.81%)",  "4604.00MHz-4617.00MHz(72.81%)", "4617.00MHz-4620.00MHz(72.20%)"], notutilized: [] } } },
            { range: "4620.00MHz-4650.00MHz", result: { utilization: "71.45", frequencies: { utilized: ["4620.00MHz-4630.00MHz(72.20%)", "4630.00MHz-4644.00MHz(71.52%)","4644.00MHz-4650.00MHz(71.24%)"], notutilized: [] } } },
            { range: "4650.00MHz-4680.00MHz", result: { utilization: "71.05", frequencies: { utilized: ["4650.00MHz-4657.00MHz(71.24%)", "4657.00MHz-4680.00MHz(70.83%)", "4708.00MHz-4680.00MHz(%)"], notutilized: [] } } },
            { range: "4680.00MHz-4710.00MHz", result: { utilization: "71.44", frequencies: { utilized: ["4680.00MHz-4683.00MHz(71.13%)", "4683.00MHz-4696.00MHz(71.13%)", "4696.00MHz-4708.00MHz(71.46%)","4708.00MHz-47100.00MHz(71.72%)"], notutilized: [] } } },
            { range: "4710.00MHz-4740.00MHz", result: { utilization: "72.87", frequencies: { utilized: ["4710.00MHz-4722.00MHz(71.72%)", "4722.00MHz-4735.00MHz(72.31%)", "4735.00MHz-4740.00MHz(73.12%)"], notutilized: [] } } },
            { range: "4740.00MHz-4770.00MHz", result: { utilization: "75.11", frequencies: { utilized: ["4740.00MHz-4748.00MHz(73.12%)", "4748.00MHz-4761.00MHz(74.35%)", "4761.00MHz-4770.00MHz(75.72%)"], notutilized: [] } } },
            { range: "4770.00MHz-4800.00MHz", result: { utilization: "78.62", frequencies: { utilized: ["4770.00MHz-4774.00MHz(77.27%)", "4774.00MHz-4787.00MHz(78.65%)", "4787.00MHz-4800.00MHz(79.93%)"], notutilized: [] } } },
            { range: "4800.00MHz-4830.00MHz", result: { utilization: "80.76", frequencies: { utilized: ["4800.00MHz-4813.00MHz(79.93%)", "4813.00MHz-4826.00MHz(80.85%)", "4826.00MHz-4830.00MHz(81.49%)"], notutilized: [] } } },
            { range: "4830.00MHz-4860.00MHz", result: { utilization: "81.96", frequencies: { utilized: ["4830.00MHz-4839.00MHz(81.49%)","4826.00MHz-4852.00MHz(81.94%)", "4852.00MHz-4860.00MHz(82.18%)"], notutilized: [] } } },
            { range: "4860.00MHz-4890.00MHz", result: { utilization: "82.15", frequencies: { utilized: ["4860.00MHz-4865.00MHz(82.18%)", "4865.00MHz-4878.00MHz(82.23%)", "4878.00MHz-4890.00MHz(82.17%)"], notutilized: [] } } },
            { range: "4890.00MHz-4920.00MHz", result: { utilization: "81.83", frequencies: { utilized: ["4890.00MHz-4891.00MHz(81.99%)",  "4891.00MHz-4904.00MHz(81.84%)","4904.00MHz-4917.00MHz(81.84%)","4917.00MHz-4920.00MHz(81.65%)"], notutilized: [] } } },
            { range: "4920.00MHz-4950.00MHz", result: { utilization: "82.32", frequencies: { utilized: ["4920.00MHz-4930.00MHz(81.65%)", "4930.00MHz-4943.00MHz(81.81%)", "4943.00MHz-4950.00MHz(82.33%)"], notutilized: [] } } },
            { range: "4950.00MHz-4980.00MHz", result: { utilization: "84.36", frequencies: { utilized: ["4950.00MHz-4957.00MHz(82.33%)",  "4943.00MHz-4969.00MHz(83.50%)", "4969.00MHz-4980.00MHz(85.06%)"], notutilized: [] } } },
            { range: "4980.00MHz-5010.00MHz", result: { utilization: "88.06", frequencies: { utilized: ["4980.00MHz-4983.00MHz(86.54%)",  "4983.00MHz-4996.00MHz(88.07%)","4996.00MHz-5009.00MHz(89.56%)","5009.00MHz-5010.00MHz(89.56%)"], notutilized: [] } } },
            { range: "5010.00MHz-5040.00MHz", result: { utilization: "91.73", frequencies: { utilized: ["5010.00MHz-5022.00MHz(89.56%)",  "5022.00MHz-5035.00MHz(91.14%)", "5035.00MHz-5040.00MHz(92.51%)"], notutilized: [] } } },
            { range: "5040.00MHz-5070.00MHz", result: { utilization: "94.38", frequencies: { utilized: ["5040.00MHz-5048.00MHz(92.51%)",  "5048.00MHz-5061.00MHz(93.72%)", "5061.00MHz-5070.00MHz(94.97%)"], notutilized: [] } } },
            { range: "5070.00MHz-5100.00MHz", result: { utilization: "97.20", frequencies: { utilized: ["5070.00MHz-5074.00MHz(96.30%)",  "5074.00MHz-5087.00MHz(97.25%)", "5087.00MHz-5100.00MHz(98.04%)"], notutilized: [] } } },
            { range: "5100.00MHz-5130.00MHz", result: { utilization: "98.51", frequencies: { utilized: ["5100.00MHz-5113.00MHz(98.04%)", "5113.00MHz-5126.00MHz(98.58%)", "5126.00MHz-5130.00MHz(98.90%)"], notutilized: [] } } },
            { range: "5130.00MHz-5160.00MHz", result: { utilization: "99.21", frequencies: { utilized: ["5130.00MHz-5139.00MHz(98.90%)", "5139.00MHz-5152.00MHz(99.05%)", "5152.00MHz-5160.00MHz(99.37%)"], notutilized: [] } } },
            { range: "5160.00MHz-5190.00MHz", result: { utilization: "99.54", frequencies: { utilized: ["5160.00MHz-5165.00MHz(99.37%)",  "5152.00MHz-5178.00MHz(99.51%)","5178.00MHz-5190.00MHz(99.61%)"], notutilized: [] } } },
            { range: "5190.00MHz-5220.00MHz", result: { utilization: "99.69", frequencies: { utilized: ["5190.00MHz-5191.00MHz(99.66%)",  "5191.00MHz-5204.00MHz(99.71%)", "5204.00MHz-5217.00MHz(99.71%)","5217.00MHz-5220.00MHz(99.70%)"], notutilized: [] } } },
            { range: "5220.00MHz-5250.00MHz", result: { utilization: "99.63", frequencies: { utilized: ["5220.00MHz-5230.00MHz(99.70%)",  "5230.00MHz-5234.00MHz(99.49%)", "5234.00MHz-5250.00MHz(99.67%)"], notutilized: [] } } },
            { range: "5250.00MHz-5280.00MHz", result: { utilization: "99.59", frequencies: { utilized: ["5250.00MHz-5257.00MHz(99.67%)",  "5257.00MHz-5269.00MHz(99.66%)","5269.00MHz-5280.00MHz(99.58%)"], notutilized: [] } } },
            { range: "5280.00MHz-5310.00MHz", result: { utilization: "99.37", frequencies: { utilized: ["5280.00MHz-5283.00MHz(99.45%)",  "5283.00MHz-5296.00MHz(99.45%)", "5296.00MHz-5308.00MHz(99.41%)", "5308.00MHz-5310.00MHz(99.25%)"], notutilized: [] } } },
            { range: "5310.00MHz-5340.00MHz", result: { utilization: "98.86", frequencies: { utilized: ["5310.00MHz-5322.00MHz(99.25%)", "5308.00MHz-5335.00MHz(99.10%)", "5335.00MHz-5340.00MHz(98.61%)"], notutilized: [] } } },
            { range: "5340.00MHz-5370.00MHz", result: { utilization: "98.33", frequencies: { utilized: ["5340.00MHz-5348.00MHz(98.61%)",  "5348.00MHz-5360.00MHz(98.47%)", "5361.00MHz-5370.00MHz(98.26%)"], notutilized: [] } } },
            { range: "5370.00MHz-5400.00MHz", result: { utilization: "98.09", frequencies: { utilized: ["5370.00MHz-5374.00MHz(97.99%)",  "5374.00MHz-5387.00MHz(98.04%)", "5387.00MHz-5400.00MHz(98.23%)"], notutilized: [] } } },
            { range: "5400.00MHz-5430.00MHz", result: { utilization: "98.25", frequencies: { utilized: ["5400.00MHz-5413.00MHz(98.23%)",  "5413.00MHz-5426.00MHz(98.20%)","5426.00MHz-5430.00MHz(98.34%)"], notutilized: [] } } },
            { range: "5430.00MHz-5460.00MHz", result: { utilization: "98.20", frequencies: { utilized: ["5430.00MHz-5439.00MHz(98.34%)",  "5439.00MHz-5452.00MHz(98.15%)", "5452.00MHz-5460.00MHz(98.16%)"], notutilized: [] } } },
            { range: "5460.00MHz-5490.00MHz", result: { utilization: "98.16", frequencies: { utilized: ["5460.00MHz-5465.00MHz(98.16%)",  "5465.00MHz-5478.00MHz(98.16%)", "5478.00MHz-5490.00MHz(98.07%)"], notutilized: [] } } },
            { range: "5490.00MHz-5520.00MHz", result: { utilization: "98.38", frequencies: { utilized: ["5490.00MHz-5491.00MHz(98.27%)",  "5491.00MHz-5504.00MHz(98.41%)", "5504.00MHz-5517.00MHz(98.41%)","5517.00MHz-5520.00MHz(98.44%)"], notutilized: [] } } },
            { range: "5520.00MHz-5550.00MHz", result: { utilization: "98.44", frequencies: { utilized: ["5520.00MHz-5530.00MHz(98.44%)",  "5530.00MHz-5543.00MHz(98.47%)", "5543.00MHz-5550.00MHz(98.44%)"], notutilized: [] } } },
            { range: "5550.00MHz-5580.00MHz", result: { utilization: "98.23", frequencies: { utilized: ["5550.00MHz-5557.00MHz(98.44%)",  "5557.00MHz-5569.00MHz(98.41%)", "5569.00MHz-5580.00MHz(98.13%)"], notutilized: [] } } },
            { range: "5580.00MHz-5610.00MHz", result: { utilization: "97.99", frequencies: { utilized: ["5580.00MHz-5583.00MHz(97.94%)",  "5583.00MHz-5596.00MHz(97.94%)","5596.00MHz-5609.00MHz(98.06%)","5609.00MHz-5610.00MHz(97.98%)"], notutilized: [] } } },
            { range: "5610.00MHz-5640.00MHz", result: { utilization: "97.84", frequencies: { utilized: ["5610.00MHz-5622.00MHz(97.98%)", "5609.00MHz-5635.00MHz(97.73%)","5635.00MHz-5640.00MHz(97.71%)"], notutilized: [] } } },
            { range: "5640.00MHz-5670.00MHz", result: { utilization: "97.87", frequencies: { utilized: ["5640.00MHz-5648.00MHz(97.71%)",  "5648.00MHz-5661.00MHz(97.96%)", "5661.00MHz-5670.00MHz(97.88%)"], notutilized: [] } } },
            { range: "5670.00MHz-5700.00MHz", result: { utilization: "98.17", frequencies: { utilized: ["5670.00MHz-5674.00MHz(97.92%)",  "5674.00MHz-5687.00MHz(98.30%)", "5687.00MHz-5700.00MHz(98.30%)"], notutilized: [] } } },
            { range: "5700.00MHz-5730.00MHz", result: { utilization: "98.60", frequencies: { utilized: ["5700.00MHz-5713.00MHz(98.30%)",  "5713.00MHz-5726.00MHz(98.30%)","5726.00MHz-5730.00MHz(98.72%)"], notutilized: [] } } },
            { range: "5730.00MHz-5760.00MHz", result: { utilization: "99.22", frequencies: { utilized: ["5730.00MHz-5739.00MHz(98.79%)",  "5739.00MHz-5752.00MHz(99.17%)", "5752.00MHz-5760.00MHz(99.35%)"], notutilized: [] } } },
            { range: "5760.00MHz-5790.00MHz", result: { utilization: "99.62", frequencies: { utilized: ["5760.00MHz-5765.00MHz(99.35%)",  "5765.00MHz-5778.00MHz(99.57%)","5778.00MHz-5790.00MHz(99.73%)"], notutilized: [] } } },
            { range: "5790.00MHz-5820.00MHz", result: { utilization: "99.89", frequencies: { utilized: ["5790.00MHz-5791.00MHz(99.81%)",  "5791.00MHz-5804.00MHz(99.90%)", "5804.00MHz-5817.00MHz(99.90%)","5817.00MHz-5820.00MHz(99.95%)"], notutilized: [] } } },
            { range: "5820.00MHz-5850.00MHz", result: { utilization: "99.97", frequencies: { utilized: ["5820.00MHz-5830.00MHz(99.95%)",  "5830.00MHz-5843.00MHz(99.97%)", "5843.00MHz-5850.00MHz(99.98%)"], notutilized: [] } } },
            { range: "5850.00MHz-5880.00MHz", result: { utilization: "99.99", frequencies: { utilized: [ "5850.00MHz-5857.00MHz(99.98%)",  "5857.00MHz-5869.00MHz(99.99%)", "5869.00MHz-5880.00MHz(99.99%)"], notutilized: [] } } },
            { range: "5880.00MHz-5910.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5880.00MHz-5883.00MHz(99.99%)",  "5883.00MHz-5896.00MHz(99.99%)", "5896.00MHz-5908.00MHz(99.99%)","5908.00MHz-5910.00MHz(99.99%)"], notutilized: [] } } },
            { range: "5910.00MHz-5940.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5910.00MHz-5921.00MHz(99.99%)", "5921.00MHz-5935.00MHz(99.99%)", "5935.00MHz-5940.00MHz(100%)"], notutilized: [] } } },
            { range: "5940.00MHz-5970.00MHz", result: { utilization: "99.99", frequencies: { utilized: ["5940.00MHz-5948.00MHz(99.99%)",  "5948.00MHz-5961.00MHz(99.99%)", "5961.00MHz-5970.00MHz(99.99%)"], notutilized: [] } } },
            { range: "5970.00MHz-6000.00MHz", result: { utilization: "100", frequencies: { utilized: ["5970.00MHz-5974.00MHz(100%)",  "5974.00MHz-5987.00MHz(100%)", "5987.00MHz-6000.00MHz(100%)"], notutilized: [] } } },
          ]
        },
    ]
    },
    {
  id: 10,
  location: "Warri",
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
            utilization: "0.00",
            frequencies: {
              utilized: [],
              notutilized: [
                "30.00MHz - 39.23MHz (0%)",
                "39.23MHz - 52.27MHz (0%)",
                "53.27MHz - 60.00MHz (0%)"
              ]
            }
          }
        },
        {
          range: "60.00MHz - 90.00MHz",
          result: {
            utilization: "22.30",
            frequencies: {
              utilized: [],
              notutilized: [
                "60.00MHz - 65.32MHz (0%)",
                "65.32MHz - 78.36MHz (0%)",
                "78.36MHz - 90.00MHz (66.85%)"
              ]
            }
          }
        },
        {
          range: "90.00MHz - 120.00MHz",
          result: {
            utilization: "16.79",
            frequencies: {
              utilized: ["90.00MHz - 91.40MHz (66.85%)"],
              notutilized: [
                "91.40MHz - 104.45MHz (0.30%)",
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
                "287.05MHz - 300.00MHz (0%)"]
               }
          }
        }
      ]
    },
  
          //300MHz to 3GHz
      {
        range: "300MHz - 3GHz",
        subbands : [
        {
        range: "300.00-330.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "300.00MHz-313.00MHz (0%)",
              "313.00MHz-326.00MHz (0%)",
              "326.00MHz-330.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "330.00-360.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "330.00-339.00MHz (0%)",
              "339.00-352.00MHz (0%)",
              "352.00-360.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "360.00-390.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "360.00-365.00MHz (0%)",
              "365.00-378.00MHz (0%)",
              "378.00-390.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "390.00-420.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "390.00-391.00MHz (0%)",
              "391.00-404.00MHz (0%)",
              "404.00-417.00MHz (0%)",
              "417.00-420.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "420.00-450.00MHz",
        result: {
          utilization: "6.56",
          frequencies: {
            utilized: [],
            notutilized: [
              "420.00-431.00MHz (0%)",
              "431.00-444.00MHz (0%)",
              "444.00-457.00MHz (9.8%)"
            ]
          }
        }
      },
      {
        range: "450.00-480.00MHz",
        result: {
          utilization: "6.6",
          frequencies: {
            utilized: [],
            notutilized: [
              "450.00-457.00MHz (0%)",
              "457.00-470.00MHz (9.8%)",
              "470.00-480.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "480.00-510.00MHz",
        result: {
          utilization: "0.1",
          frequencies: {
            utilized: [],
            notutilized: [
              "480.00-483.00MHz (0%)",
              "483.00-496.00MHz (0%)",
              "496.00-509.00MHz (0%)",
              "509.00-510.00MHz (0.2%)"
            ]
          }
        }
      },
      {
        range: "510.00-540.00MHz",
        result: {
          utilization: "2.6",
          frequencies: {
            utilized: [],
            notutilized: [
              "510.00-522.00MHz (0.6%)",
              "522.00-535.00MHz (4%)",
              "535.00-540.00MHz (3.6%)"
            ]
          }
        }
      },
      {
        range: "540.00-570.00MHz",
        result: {
          utilization: "12.4",
          frequencies: {
            utilized: [],
            notutilized: [
              "540.00-548.00MHz (0%)",
              "548.00-561.00MHz (18.5%)",
              "561.00-570.00MHz (18.5%)"
            ]
          }
        }
      },
      {
        range: "570.00-600.00MHz",
        result: {
          utilization: "6.5",
          frequencies: {
            utilized: [],
            notutilized: [
              "570.00-574.00MHz (0%)",
              "574.00-587.00MHz (4.1%)",
              "587.00-600.00MHz (9.7%)"
            ]
          }
        }
      },
      {
        range: "600.00-630.00MHz",
        result: {
          utilization: "2.8",
          frequencies: {
            utilized: [],
            notutilized: [
              "600.00-613.00MHz (5.6%)",
              "613.00-626.00MHz (0%)",
              "626.00-630.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "630.00-660.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "630.00-639.00MHz (0%)",
              "639.00-652.00MHz (0%)",
              "652.00-660.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "660.00-690.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "660.00-665.00MHz (0%)",
              "665.00-678.00MHz (0%)",
              "678.00-690.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "690.00-720.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "690.00-691.00MHz (0%)",
              "691.00-704.00MHz (0%)",
              "704.00-717.00MHz (0%)",
              "717.00-720.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "720.00-750.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "720.00-731.00MHz (0%)",
              "731.00-744.00MHz (0%)",
              "744.00-750.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "750.00-780.00MHz",
        result: {
          utilization: "13",
          frequencies: {
            utilized: [],
            notutilized: [
              "750.00-757.00MHz (0%)",
              "757.00-770.00MHz (0%)",
              "770.00-780.00MHz (19.5%)"
            ]
          }
        }
      },
      {
        range: "780.00-810.00MHz",
        result: {
          utilization: "45.7",
          frequencies: {
            utilized: [],
            notutilized: [
              "780.00-783.00MHz (39%)",
              "783.00-796.00MHz (64%)",
              "796.00-809.00MHz (72%)",
              "809.00-810.00MHz (27.3%)"
            ]
          }
        }
      },
      {
        range: "810.00-840.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "810.00-822.00MHz (0%)",
              "822.00-835.00MHz (0%)",
              "835.00-840.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "840.00-870.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [],
            notutilized: [
              "840.00-848.00MHz (0%)",
              "848.00-861.00MHz (0%)",
              "861.00-870.00MHz (0%)"
            ]
          }
        }
      },
      {
        range: "870.00-900.00MHz",
        result: {
          utilization: "52.53",
          frequencies: {
            utilized: [
              "870.00-874.00MHz (0%)",
              "874.00-887.00MHz (36.52%)",
              "887.00-900.00MHz (78.80%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "900.00-930.00MHz",
        result: {
          utilization: "86.31",
          frequencies: {
            utilized: [
              "900.00-913.00MHz (72.63%)",
              "913.00-926.00MHz (80.33%)",
              "926.00-930.00MHz (99.99%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "930.00-960.00MHz",
        result: {
          utilization: "100",
          frequencies: {
            utilized: [
              "930.00-939.00MHz (100%)",
              "939.00-952.00MHz (100%)",
              "952.00-960.00MHz (100%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "960.00-990.00MHz",
        result: {
          utilization: "44.71",
          frequencies: {
            utilized: [
              "960.00-965.00MHz (100%)",
              "965.00-978.00MHz (58.60%)",
              "978.00-990.00MHz (17.07%)"
            ],
            notutilized: []
          }
        }
      },
      {
        range: "990.00-1020.00MHz",
        result: {
          utilization: "17.27",
          frequencies: {
            utilized: [
              "990.00-991.00MHz (16.95%)",
              "991.00-1000.00MHz (16.10%)",
              "1000.00-1020.00MHz (17.40%)"
            ],
            notutilized: []
          }
        }
      },
      {
  range: "1020.00-1050.00MHz",
  result: {
    utilization: "26.14",
    frequencies: {
      utilized: [
        "1020.00-1030.00MHz (19.84%)",
        "1030.00-1040.00MHz (23.50%)",
        "1040.00-1050.00MHz (29.30%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1050.00-1080.00MHz",
  result: {
    utilization: "37.73",
    frequencies: {
      utilized: [
        "1050.00-1060.00MHz (34.54%)",
        "1060.00-1070.00MHz (40.90%)",
        "1070.00-1080.00MHz (44.12%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1080.00-1110.00MHz",
  result: {
    utilization: "62.71",
    frequencies: {
      utilized: [
        "1080.00-1100.00MHz (65.03%)",
        "1100.00-1110.00MHz (55.10%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1110.00-1140.00MHz",
  result: {
    utilization: "59.00",
    frequencies: {
      utilized: [
        "1110.00-1120.00MHz (55.77%)",
        "1120.00-1130.00MHz (57.13%)",
        "1130.00-1140.00MHz (60.64%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1140.00-1170.00MHz",
  result: {
    utilization: "64.80",
    frequencies: {
      utilized: [
        "1140.00-1150.00MHz (64.69%)",
        "1150.00-1160.00MHz (66.60%)",
        "1160.00-1170.00MHz (65.80%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1170.00-1200.00MHz",
  result: {
    utilization: "67.55",
    frequencies: {
      utilized: [
        "1170.00-1190.00MHz (67.55%)",
        "1190.00-1200.00MHz (71.13%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1200.00-1230.00MHz",
  result: {
    utilization: "69.92",
    frequencies: {
      utilized: [
        "1200.00-1210.00MHz (71.35%)",
        "1210.00-1230.00MHz (69.51%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1230.00-1260.00MHz",
  result: {
    utilization: "64.00",
    frequencies: {
      utilized: [
        "1230.00-1240.00MHz (64.86%)",
        "1240.00-1250.00MHz (56.44%)",
        "1250.00-1260.00MHz (59.32%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1260.00-1290.00MHz",
  result: {
    utilization: "53.48",
    frequencies: {
      utilized: [
        "1260.00-1270.00MHz (55.53%)",
        "1270.00-1280.00MHz (49.12%)",
        "1280.00-1290.00MHz (49.38%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1290.00-1320.00MHz",
  result: {
    utilization: "45.62",
    frequencies: {
      utilized: [
        "1290.00-1300.00MHz (49.60%)",
        "1300.00-1320.00MHz (44.37%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1320.00-1350.00MHz",
  result: {
    utilization: "43.36",
    frequencies: {
      utilized: [
        "1320.00-1330.00MHz (40.52%)",
        "1330.00-1340.00MHz (42.00%)",
        "1340.00-1350.00MHz (44.77%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1350.00-1380.00MHz",
  result: {
    utilization: "53.20",
    frequencies: {
      utilized: [
        "1350.00-1360.00MHz (50.00%)",
        "1360.00-1370.00MHz (56.66%)",
        "1370.00-1380.00MHz (59.50%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1380.00-1410.00MHz",
  result: {
    utilization: "67.52",
    frequencies: {
      utilized: [
        "1380.00-1400.00MHz (65.53%)",
        "1400.00-1410.00MHz (71.88%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1410.00-1440.00MHz",
  result: {
    utilization: "77.17",
    frequencies: {
      utilized: [
        "1410.00-1420.00MHz (73.51%)",
        "1420.00-1430.00MHz (75.91%)",
        "1430.00-1440.00MHz (79.00%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1440.00-1470.00MHz",
  result: {
    utilization: "83.35",
    frequencies: {
      utilized: [
        "1440.00-1450.00MHz (81.84%)",
        "1450.00-1460.00MHz (84.00%)",
        "1460.00-1470.00MHz (85.20%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1470.00-1500.00MHz",
  result: {
    utilization: "87.92",
    frequencies: {
      utilized: [
        "1470.00-1490.00MHz (87.18%)",
        "1490.00-1500.00MHz (89.40%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1500.00-1530.00MHz",
  result: {
    utilization: "85.93",
    frequencies: {
      utilized: [
        "1500.00-1510.00MHz (88.34%)",
        "1510.00-1530.00MHz (84.77%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1530.00-1560.00MHz",
  result: {
    utilization: "77.52",
    frequencies: {
      utilized: [
        "1530.00-1540.00MHz (79.36%)",
        "1540.00-1550.00MHz (77.16%)",
        "1550.00-1560.00MHz (75.50%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1560.00-1590.00MHz",
  result: {
    utilization: "69.52",
    frequencies: {
      utilized: [
        "1560.00-1570.00MHz (71.22%)",
        "1570.00-1580.00MHz (67.36%)",
        "1580.00-1590.00MHz (67.36%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1590.00-1620.00MHz",
  result: {
    utilization: "64.52",
    frequencies: {
      utilized: [
        "1590.00-1600.00MHz (67.94%)",
        "1600.00-1620.00MHz (63.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1620.00-1650.00MHz",
  result: {
    utilization: "63.47",
    frequencies: {
      utilized: [
        "1620.00-1630.00MHz (60.44%)",
        "1630.00-1640.00MHz (61.84%)",
        "1640.00-1650.00MHz (64.98%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1650.00-1680.00MHz",
  result: {
    utilization: "70.60",
    frequencies: {
      utilized: [
        "1650.00-1660.00MHz (68.61%)",
        "1660.00-1670.00MHz (72.53%)",
        "1670.00-1680.00MHz (74.58%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1680.00-1710.00MHz",
  result: {
    utilization: "77.83",
    frequencies: {
      utilized: [
        "1680.00-1700.00MHz (76.62%)",
        "1700.00-1710.00MHz (80.20%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1710.00-1740.00MHz",
  result: {
    utilization: "84.55",
    frequencies: {
      utilized: [
        "1710.00-1720.00MHz (81.47%)",
        "1720.00-1730.00MHz (83.26%)",
        "1730.00-1740.00MHz (86.10%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1740.00-1770.00MHz",
  result: {
    utilization: "88.24",
    frequencies: {
      utilized: [
        "1740.00-1750.00MHz (87.81%)",
        "1750.00-1760.00MHz (88.50%)",
        "1760.00-1770.00MHz (88.80%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1770.00-1800.00MHz",
  result: {
    utilization: "89.37",
    frequencies: {
      utilized: [
        "1770.00-1790.00MHz (89.37%)",
        "1790.00-1800.00MHz (89.21%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1800.00-1830.00MHz",
  result: {
    utilization: "97.30",
    frequencies: {
      utilized: [
        "1800.00-1810.00MHz (94.60%)",
        "1810.00-1830.00MHz (100.00%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1830.00-1860.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "1830.00-1840.00MHz (100.00%)",
        "1840.00-1850.00MHz (100.00%)",
        "1850.00-1860.00MHz (100.00%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1860.00-1890.00MHz",
  result: {
    utilization: "92.20",
    frequencies: {
      utilized: [
        "1860.00-1870.00MHz (100.00%)",
        "1870.00-1880.00MHz (92.20%)",
        "1880.00-1890.00MHz (76.71%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1890.00-1920.00MHz",
  result: {
    utilization: "81.24",
    frequencies: {
      utilized: [
        "1890.00-1900.00MHz (76.17%)",
        "1900.00-1920.00MHz (82.74%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1920.00-1950.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "1920.00-1930.00MHz (100%)",
        "1930.00-1940.00MHz (100%)",
        "1940.00-1950.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1950.00-1980.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "1950.00-1960.00MHz (100%)",
        "1960.00-1970.00MHz (100%)",
        "1970.00-1980.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "1980.00-2010.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "1980.00-2000.00MHz (100%)",
        "2000.00-2010.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2010.00-2040.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "2010.00-2020.00MHz (100%)",
        "2020.00-2030.00MHz (100%)",
        "2030.00-2040.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2040.00-2070.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "2040.00-2050.00MHz (100%)",
        "2050.00-2060.00MHz (100%)",
        "2060.00-2070.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2070.00-2100.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "2070.00-2090.00MHz (100%)",
        "2090.00-2100.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2100.00-2130.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "2100.00-2110.00MHz (100%)",
        "2110.00-2130.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2130.00-2160.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "2130.00-2140.00MHz (100%)",
        "2140.00-2150.00MHz (100%)",
        "2150.00-2160.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2160.00-2190.00MHz",
  result: {
    utilization: "100.00",
    frequencies: {
      utilized: [
        "2160.00-2170.00MHz (100%)",
        "2170.00-2180.00MHz (100%)",
        "2180.00-2190.00MHz (100%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2190.00-2220.00MHz",
  result: {
    utilization: "50.00",
    frequencies: {
      utilized: [
        "2190.00-2200.00MHz (50%)",
        "2200.00-2220.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2220.00-2250.00MHz",
  result: {
    utilization: "0.00",
    frequencies: {
      utilized: [
        "2220.00-2230.00MHz (0%)",
        "2230.00-2240.00MHz (0%)",
        "2240.00-2250.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2250.00-2280.00MHz",
  result: {
    utilization: "0.00",
    frequencies: {
      utilized: [
        "2250.00-2260.00MHz (0%)",
        "2260.00-2270.00MHz (0%)",
        "2270.00-2280.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2280.00-2310.00MHz",
  result: {
    utilization: "0.00",
    frequencies: {
      utilized: [
        "2280.00-2300.00MHz (0%)",
        "2300.00-2310.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2310.00-2340.00MHz",
  result: {
    utilization: "0.00",
    frequencies: {
      utilized: [
        "2310.00-2320.00MHz (0%)",
        "2320.00-2330.00MHz (0%)",
        "2330.00-2340.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2340.00-2370.00MHz",
  result: {
    utilization: "0.00",
    frequencies: {
      utilized: [
        "2340.00-2350.00MHz (0%)",
        "2350.00-2360.00MHz (0%)",
        "2360.00-2370.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2370.00-2400.00MHz",
  result: {
    utilization: "0.09",
    frequencies: {
      utilized: [
        "2370.00-2390.00MHz (0%)",
        "2390.00-2400.00MHz (0.28%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2400.00-2430.00MHz",
  result: {
    utilization: "0.50",
    frequencies: {
      utilized: [
        "2400.00-2410.00MHz (0.55%)",
        "2410.00-2430.00MHz (0.56%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2430.00-2460.00MHz",
  result: {
    utilization: "1.03",
    frequencies: {
      utilized: [
        "2430.00-2440.00MHz (0.81%)",
        "2440.00-2450.00MHz (1.27%)",
        "2450.00-2460.00MHz (0.85%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2460.00-2490.00MHz",
  result: {
    utilization: "0.49",
    frequencies: {
      utilized: [
        "2460.00-2470.00MHz (0.74%)",
        "2470.00-2480.00MHz (0.01%)",
        "2480.00-2490.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2490.00-2520.00MHz",
  result: {
    utilization: "0.05",
    frequencies: {
      utilized: [
        "2490.00-2500.00MHz (0%)",
        "2500.00-2520.00MHz (0.07%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2520.00-2550.00MHz",
  result: {
    utilization: "0.10",
    frequencies: {
      utilized: [
        "2520.00-2530.00MHz (0.17%)",
        "2530.00-2540.00MHz (0.14%)",
        "2540.00-2550.00MHz (0.06%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2550.00-2580.00MHz",
  result: {
    utilization: "8.35",
    frequencies: {
      utilized: [
        "2550.00-2560.00MHz (0.02%)",
        "2560.00-2570.00MHz (12.51%)",
        "2570.00-2580.00MHz (25.01%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2580.00-2610.00MHz",
  result: {
    utilization: "34.80",
    frequencies: {
      utilized: [
        "2580.00-2600.00MHz (20.16%)",
        "2600.00-2610.00MHz (46.34%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2610.00-2640.00MHz",
  result: {
    utilization: "92.53",
    frequencies: {
      utilized: [
        "2610.00-2620.00MHz (78.71%)",
        "2620.00-2630.00MHz (88.79%)",
        "2630.00-2640.00MHz (99.43%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2640.00-2670.00MHz",
  result: {
    utilization: "99.59",
    frequencies: {
      utilized: [
        "2640.00-2650.00MHz (99.83%)",
        "2650.00-2660.00MHz (99.83%)",
        "2660.00-2670.00MHz (96.39%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2670.00-2700.00MHz",
  result: {
    utilization: "59.15",
    frequencies: {
      utilized: [
        "2670.00-2690.00MHz (59.15%)",
        "2690.00-2700.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2700.00-2730.00MHz",
  result: {
    utilization: "0.00",
    frequencies: {
      utilized: [
        "2700.00-2710.00MHz (0%)",
        "2710.00-2730.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
     {
        range: "2730.00-2760.00MHz",
        result: {
          utilization: "0",
          frequencies: {
            utilized: [
              "2730.00-2740.00MHz (0%)",
              "2740.00-2750.00MHz (0%)",
              "2750.00-2760.00MHz (0%)"
            ],
            notutilized: []
          }
        }
      },
      {
  range: "2760.00-2790.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2760.00-2770.00MHz (0%)",
        "2770.00-2780.00MHz (0%)",
        "2780.00-2790.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2790.00-2820.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2790.00-2800.00MHz (0%)",
        "2800.00-2820.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2820.00-2850.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2820.00-2830.00MHz (0%)",
        "2830.00-2840.00MHz (0%)",
        "2840.00-2850.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2850.00-2880.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2850.00-2860.00MHz (0%)",
        "2860.00-2870.00MHz (0%)",
        "2870.00-2880.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2880.00-2910.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2880.00-2900.00MHz (0%)",
        "2900.00-2910.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2910.00-2940.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2910.00-2920.00MHz (0%)",
        "2920.00-2930.00MHz (0%)",
        "2930.00-2940.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2940.00-2970.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2940.00-2950.00MHz (0%)",
        "2950.00-2960.00MHz (0%)",
        "2960.00-2970.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "2970.00-3000.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "2970.00-2974.00MHz (0%)",
        "2974.00-2987.00MHz (0%)",
        "2987.00-3000.00MHz (0%)"
      ],
      notutilized: []
    }
  }
}
]
},
  //3GHz to 6GHz
 {
  range: "3GHz - 6GHz",
  subbands: [
  {
  range: "3000.00-3030.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3000.00-3010.00MHz (0%)",
        "3010.00-3030.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3030.00-3060.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3030.00-3040.00MHz (0%)",
        "3040.00-3050.00MHz (0%)",
        "3050.00-3060.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3060.00-3090.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3060.00-3070.00MHz (0%)",
        "3070.00-3080.00MHz (0%)",
        "3080.00-3090.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3090.00-3120.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3090.00-3100.00MHz (0%)",
        "3100.00-3120.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3120.00-3150.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3120.00-3130.00MHz (0%)",
        "3130.00-3140.00MHz (0%)",
        "3140.00-3150.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3150.00-3180.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3150.00-3160.00MHz (0%)",
        "3160.00-3170.00MHz (0%)",
        "3170.00-3180.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3180.00-3210.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3180.00-3200.00MHz (0%)",
        "3200.00-3210.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3210.00-3240.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3210.00-3220.00MHz (0%)",
        "3220.00-3230.00MHz (0%)",
        "3230.00-3240.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3240.00-3270.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3240.00-3250.00MHz (0%)",
        "3250.00-3260.00MHz (0%)",
        "3260.00-3270.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3270.00-3300.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3270.00-3290.00MHz (0%)",
        "3290.00-3300.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3300.00-3330.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3300.00-3310.00MHz (0%)",
        "3310.00-3330.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3330.00-3360.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3330.00-3340.00MHz (0%)",
        "3340.00-3350.00MHz (0%)",
        "3350.00-3360.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3360.00-3390.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3360.00-3370.00MHz (0%)",
        "3370.00-3380.00MHz (0%)",
        "3380.00-3390.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3390.00-3420.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3390.00-3400.00MHz (0%)",
        "3400.00-3420.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3420.00-3450.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3420.00-3430.00MHz (0%)",
        "3430.00-3440.00MHz (0%)",
        "3440.00-3450.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3450.00-3480.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3450.00-3460.00MHz (0%)",
        "3460.00-3470.00MHz (0%)",
        "3470.00-3480.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3480.00-3510.00MHz",
  result: {
    utilization: "0.04",
    frequencies: {
      utilized: [
        "3480.00-3500.00MHz (0.04%)",
        "3500.00-3510.00MHz (0.01%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3510.00-3540.00MHz",
  result: {
    utilization: "0.02",
    frequencies: {
      utilized: [
        "3510.00-3520.00MHz (0.01%)",
        "3520.00-3530.00MHz (0.01%)",
        "3530.00-3540.00MHz (0.03%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3540.00-3570.00MHz",
  result: {
    utilization: "0.10",
    frequencies: {
      utilized: [
        "3540.00-3550.00MHz (0.08%)",
        "3550.00-3560.00MHz (0.08%)",
        "3560.00-3570.00MHz (0.12%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3570.00-3600.00MHz",
  result: {
    utilization: "0.08",
    frequencies: {
      utilized: [
        "3570.00-3590.00MHz (0.08%)",
        "3590.00-3600.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3600.00-3630.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3600.00-3610.00MHz (0%)",
        "3610.00-3630.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3630.00-3660.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3630.00-3640.00MHz (0%)",
        "3640.00-3650.00MHz (0%)",
        "3650.00-3660.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3660.00-3690.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3660.00-3670.00MHz (0%)",
        "3670.00-3680.00MHz (0%)",
        "3680.00-3690.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3690.00-3720.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3690.00-3700.00MHz (0%)",
        "3700.00-3720.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3720.00-3750.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3720.00-3730.00MHz (0%)",
        "3730.00-3740.00MHz (0%)",
        "3740.00-3750.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3750.00-3780.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3750.00-3760.00MHz (0%)",
        "3760.00-3770.00MHz (0%)",
        "3770.00-3780.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3780.00-3810.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3780.00-3800.00MHz (0%)",
        "3800.00-3810.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3810.00-3840.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3810.00-3820.00MHz (0%)",
        "3820.00-3830.00MHz (0%)",
        "3830.00-3840.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3840.00-3870.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3840.00-3850.00MHz (0%)",
        "3850.00-3860.00MHz (0%)",
        "3860.00-3870.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3870.00-3900.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3870.00-3890.00MHz (0%)",
        "3890.00-3900.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3900.00-3930.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3900.00-3910.00MHz (0%)",
        "3910.00-3930.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3930.00-3960.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3930.00-3940.00MHz (0%)",
        "3940.00-3950.00MHz (0%)",
        "3950.00-3960.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3960.00-3990.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3960.00-3970.00MHz (0%)",
        "3970.00-3980.00MHz (0%)",
        "3980.00-3990.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "3990.00-4020.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "3990.00-4000.00MHz (0%)",
        "4000.00-4020.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4020.00-4050.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4020.00-4030.00MHz (0%)",
        "4030.00-4040.00MHz (0%)",
        "4040.00-4050.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4050.00-4080.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4050.00-4060.00MHz (0%)",
        "4060.00-4070.00MHz (0%)",
        "4070.00-4080.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4080.00-4110.00MHz",
  result: {
    utilization: "63.28",
    frequencies: {
      utilized: [
        "4080.00-4100.00MHz (63.28%)",
        "4100.00-4110.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4110.00-4140.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4110.00-4120.00MHz (0%)",
        "4120.00-4130.00MHz (0%)",
        "4130.00-4140.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4140.00-4170.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4140.00-4150.00MHz (0%)",
        "4150.00-4160.00MHz (0%)",
        "4160.00-4170.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4170.00-4200.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4170.00-4190.00MHz (0%)",
        "4190.00-4200.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4200.00-4230.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4200.00-4210.00MHz (0%)",
        "4210.00-4230.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4230.00-4260.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4230.00-4240.00MHz (0%)",
        "4240.00-4250.00MHz (0%)",
        "4250.00-4260.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4260.00-4290.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4260.00-4270.00MHz (0%)",
        "4270.00-4280.00MHz (0%)",
        "4280.00-4290.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4290.00-4320.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4290.00-4300.00MHz (0%)",
        "4300.00-4320.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4320.00-4350.00MHz",
  result: {
    utilization: "86.21",
    frequencies: {
      utilized: [
        "4320.00-4330.00MHz (0%)",
        "4330.00-4340.00MHz (0%)",
        "4340.00-4350.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4350.00-4380.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4350.00-4360.00MHz (0%)",
        "4360.00-4370.00MHz (0%)",
        "4370.00-4380.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4380.00-4410.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4380.00-4400.00MHz (0%)",
        "4400.00-4410.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4410.00-4440.00MHz",
  result: {
    utilization: "6.49",
    frequencies: {
      utilized: [
        "4410.00-4420.00MHz (0%)",
        "4420.00-4430.00MHz (0%)",
        "4430.00-4440.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4440.00-4470.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4440.00-4450.00MHz (0%)",
        "4450.00-4460.00MHz (0%)",
        "4460.00-4470.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4470.00-4500.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4470.00-4490.00MHz (0%)",
        "4490.00-4500.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4500.00-4530.00MHz",
  result: {
    utilization: "0.01",
    frequencies: {
      utilized: [
        "4500.00-4510.00MHz (0.10%)",
        "4510.00-4530.00MHz (0.10%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4530.00-4560.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4530.00-4540.00MHz (0.01%)",
        "4540.00-4550.00MHz (0.10%)",
        "4550.00-4560.00MHz (0.10%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4560.00-4590.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4560.00-4570.00MHz (0%)",
        "4570.00-4580.00MHz (0%)",
        "4580.00-4590.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4590.00-4620.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4590.00-4600.00MHz (0%)",
        "4600.00-4620.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4620.00-4650.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4620.00-4630.00MHz (0%)",
        "4630.00-4640.00MHz (0%)",
        "4640.00-4650.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4650.00-4680.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4650.00-4660.00MHz (0%)",
        "4660.00-4670.00MHz (0%)",
        "4670.00-4680.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4680.00-4710.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4680.00-4700.00MHz (0%)",
        "4700.00-4710.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4710.00-4740.00MHz",
  result: {
    utilization: "0",
    frequencies: {
      utilized: [
        "4710.00-4720.00MHz (0%)",
        "4720.00-4730.00MHz (0%)",
        "4730.00-4740.00MHz (0%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4740.00-4770.00MHz",
  result: {
    utilization: "0.04",
    frequencies: {
      utilized: [
        "4740.00-4750.00MHz (0.02%)",
        "4750.00-4760.00MHz (0.03%)",
        "4760.00-4770.00MHz (0.06%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4770.00-4800.00MHz",
  result: {
    utilization: "0.18",
    frequencies: {
      utilized: [
        "4770.00-4790.00MHz (0.18%)",
        "4790.00-4800.00MHz (0.29%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4800.00-4830.00MHz",
  result: {
    utilization: "0.47",
    frequencies: {
      utilized: [
        "4800.00-4810.00MHz (0.65%)",
        "4810.00-4830.00MHz (0.53%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4830.00-4860.00MHz",
  result: {
    utilization: "0.65",
    frequencies: {
      utilized: [
        "4830.00-4840.00MHz (0.65%)",
        "4840.00-4850.00MHz (0.67%)",
        "4850.00-4860.00MHz (0.67%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4860.00-4890.00MHz",
  result: {
    utilization: "0.65",
    frequencies: {
      utilized: [
        "4860.00-4870.00MHz (0.67%)",
        "4870.00-4880.00MHz (0.65%)",
        "4880.00-4890.00MHz (0.62%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4890.00-4920.00MHz",
  result: {
    utilization: "0.62",
    frequencies: {
      utilized: [
        "4890.00-4900.00MHz (0.62%)",
        "4900.00-4920.00MHz (0.62%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4920.00-4950.00MHz",
  result: {
    utilization: "0.91",
    frequencies: {
      utilized: [
        "4920.00-4930.00MHz (0.60%)",
        "4930.00-4940.00MHz (0.71%)",
        "4940.00-4950.00MHz (1.04%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4950.00-4980.00MHz",
  result: {
    utilization: "2.40",
    frequencies: {
      utilized: [
        "4950.00-4960.00MHz (1.20%)",
        "4960.00-4970.00MHz (2.90%)",
        "4970.00-4980.00MHz (3.52%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "4980.00-5010.00MHz",
  result: {
    utilization: "7.22",
    frequencies: {
      utilized: [
        "4980.00-5000.00MHz (5.67%)",
        "5000.00-5010.00MHz (9.95%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5010.00-5040.00MHz",
  result: {
    utilization: "16.82",
    frequencies: {
      utilized: [
        "5010.00-5020.00MHz (11.87%)",
        "5020.00-5030.00MHz (14.25%)",
        "5030.00-5040.00MHz (19.29%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5040.00-5070.00MHz",
  result: {
    utilization: "29.51",
    frequencies: {
      utilized: [
        "5040.00-5050.00MHz (25.49%)",
        "5050.00-5060.00MHz (29.02%)",
        "5060.00-5070.00MHz (33.30%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5070.00-5100.00MHz",
  result: {
    utilization: "46.65",
    frequencies: {
      utilized: [
        "5070.00-5090.00MHz (46.65%)",
        "5090.00-5100.00MHz (55.70%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5100.00-5130.00MHz",
  result: {
    utilization: "66.26",
    frequencies: {
      utilized: [
        "5100.00-5110.00MHz (59.66%)",
        "5110.00-5130.00MHz (69.78%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5130.00-5160.00MHz",
  result: {
    utilization: "78.54",
    frequencies: {
      utilized: [
        "5130.00-5140.00MHz (76.89%)",
        "5140.00-5150.00MHz (78.76%)",
        "5150.00-5160.00MHz (80.03%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5160.00-5190.00MHz",
  result: {
    utilization: "84.53",
    frequencies: {
      utilized: [
        "5160.00-5170.00MHz (83.28%)",
        "5170.00-5180.00MHz (85.87%)",
        "5180.00-5190.00MHz (87.03%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5190.00-5220.00MHz",
  result: {
    utilization: "88.12",
    frequencies: {
      utilized: [
        "5190.00-5200.00MHz (87.56%)",
        "5200.00-5220.00MHz (88.48%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5220.00-5250.00MHz",
  result: {
    utilization: "87.45",
    frequencies: {
      utilized: [
        "5220.00-5230.00MHz (88.72%)",
        "5230.00-5240.00MHz (88.03%)",
        "5240.00-5250.00MHz (86.82%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5250.00-5280.00MHz",
  result: {
    utilization: "84.06",
    frequencies: {
      utilized: [
        "5250.00-5260.00MHz (85.14%)",
        "5260.00-5270.00MHz (82.95%)",
        "5270.00-5280.00MHz (81.91%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5280.00-5310.00MHz",
  result: {
    utilization: "77.19",
    frequencies: {
      utilized: [
        "5280.00-5300.00MHz (78.97%)",
        "5300.00-5310.00MHz (73.90%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5310.00-5340.00MHz",
  result: {
    utilization: "66.03",
    frequencies: {
      utilized: [
        "5310.00-5320.00MHz (71.85%)",
        "5320.00-5330.00MHz (68.89%)",
        "5330.00-5340.00MHz (63.11%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5340.00-5370.00MHz",
  result: {
    utilization: "58.23",
    frequencies: {
      utilized: [
        "5340.00-5350.00MHz (59.20%)",
        "5350.00-5360.00MHz (58.10%)",
        "5360.00-5370.00MHz (57.21%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5370.00-5400.00MHz",
  result: {
    utilization: "56.48",
    frequencies: {
      utilized: [
        "5370.00-5390.00MHz (56.48%)",
        "5390.00-5400.00MHz (56.90%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5400.00-5430.00MHz",
  result: {
    utilization: "56.55",
    frequencies: {
      utilized: [
        "5400.00-5410.00MHz (57.15%)",
        "5410.00-5430.00MHz (56.44%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5430.00-5460.00MHz",
  result: {
    utilization: "54.40",
    frequencies: {
      utilized: [
        "5430.00-5440.00MHz (55.04%)",
        "5440.00-5450.00MHz (54.65%)",
        "5450.00-5460.00MHz (53.88%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5460.00-5490.00MHz",
  result: {
    utilization: "54.67",
    frequencies: {
      utilized: [
        "5460.00-5470.00MHz (53.93%)",
        "5470.00-5480.00MHz (55.43%)",
        "5480.00-5490.00MHz (56.13%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5490.00-5520.00MHz",
  result: {
    utilization: "56.54",
    frequencies: {
      utilized: [
        "5490.00-5500.00MHz (56.32%)",
        "5500.00-5520.00MHz (56.68%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5520.00-5550.00MHz",
  result: {
    utilization: "56.40",
    frequencies: {
      utilized: [
        "5520.00-5530.00MHz (56.68%)",
        "5530.00-5540.00MHz (56.60%)",
        "5540.00-5550.00MHz (56.25%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5550.00-5580.00MHz",
  result: {
    utilization: "52.88",
    frequencies: {
      utilized: [
        "5550.00-5560.00MHz (53.73%)",
        "5560.00-5570.00MHz (51.33%)",
        "5570.00-5580.00MHz (51.21%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5580.00-5610.00MHz",
  result: {
    utilization: "50.41",
    frequencies: {
      utilized: [
        "5580.00-5600.00MHz (50.74%)",
        "5600.00-5610.00MHz (49.80%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5610.00-5640.00MHz",
  result: {
    utilization: "49.91",
    frequencies: {
      utilized: [
        "5610.00-5620.00MHz (49.41%)",
        "5620.00-5630.00MHz (49.56%)",
        "5630.00-5640.00MHz (50.16%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5640.00-5670.00MHz",
  result: {
    utilization: "52.05",
    frequencies: {
      utilized: [
        "5640.00-5650.00MHz (51.31%)",
        "5650.00-5660.00MHz (52.01%)",
        "5660.00-5670.00MHz (52.77%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5670.00-5700.00MHz",
  result: {
    utilization: "56.21",
    frequencies: {
      utilized: [
        "5670.00-5690.00MHz (56.21%)",
        "5690.00-5700.00MHz (59.56%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5700.00-5730.00MHz",
  result: {
    utilization: "66.08",
    frequencies: {
      utilized: [
        "5700.00-5710.00MHz (61.64%)",
        "5710.00-5730.00MHz (68.26%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5730.00-5760.00MHz",
  result: {
    utilization: "77.98",
    frequencies: {
      utilized: [
        "5730.00-5740.00MHz (75.35%)",
        "5740.00-5750.00MHz (77.93%)",
        "5750.00-5760.00MHz (80.58%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5760.00-5790.00MHz",
  result: {
    utilization: "87.54",
    frequencies: {
      utilized: [
        "5760.00-5770.00MHz (83.22%)",
        "5770.00-5780.00MHz (85.46%)",
        "5780.00-5790.00MHz (89.70%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5790.00-5820.00MHz",
  result: {
    utilization: "95.12",
    frequencies: {
      utilized: [
        "5790.00-5800.00MHz (93.11%)",
        "5800.00-5820.00MHz (96.26%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5820.00-5850.00MHz",
  result: {
    utilization: "98.45",
    frequencies: {
      utilized: [
        "5820.00-5830.00MHz (97.78%)",
        "5830.00-5840.00MHz (98.17%)",
        "5840.00-5850.00MHz (98.79%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5850.00-5880.00MHz",
  result: {
    utilization: "99.32",
    frequencies: {
      utilized: [
        "5850.00-5860.00MHz (99.19%)",
        "5860.00-5870.00MHz (99.47%)",
        "5870.00-5880.00MHz (99.58%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5880.00-5910.00MHz",
  result: {
    utilization: "99.72",
    frequencies: {
      utilized: [
        "5880.00-5900.00MHz (99.69%)",
        "5900.00-5910.00MHz (99.78%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5910.00-5940.00MHz",
  result: {
    utilization: "99.79",
    frequencies: {
      utilized: [
        "5910.00-5920.00MHz (99.79%)",
        "5920.00-5930.00MHz (99.79%)",
        "5930.00-5940.00MHz (99.79%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5940.00MHz-5970.00MHz",
  result: {
    utilization: "99.79",
    frequencies: {
      utilized: [
        "5940.00MHz-5950.00MHz (99.79%)",
        "5950.00MHz-5960.00MHz (99.78%)",
        "5960.00MHz-5970.00MHz (99.78%)"
      ],
      notutilized: []
    }
  }
},
{
  range: "5970.00MHz-6000.00MHz",
  result: {
    utilization: "99.77",
    frequencies: {
      utilized: [
        "5970.00MHz-5990.00MHz (99.77%)",
        "5990.00MHz-6000.00MHz (99.74%)"
      ],
      notutilized: []
    }
  }
}
      ]   
    },     
  ]    
},             
];        
export default BandsData
