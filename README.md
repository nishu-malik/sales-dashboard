Live JSON Server: https://api.jsonbin.io/b/6161d2e3aa02be1d44570e88/1

There are 5 cards in dashboard.
For Each card there is different dataset.

1. You can access data by fetching their names like for emailSent Card with "emailsData".
2. Every data has own separate id.
3. Dataset field contain every data for all the options(By weekly, By Monthly, By Yearly)
4. maximumValue is used to show the actual value on circular chart, for progress offset
5. horizontalAxis contains array of the value displayed on x-axis of chart.
   6.Option is the different select options available with us

   The sample of data json is look like this
   {
   "barChartData": {
   "id": "614206d900047468b5706afd",
   "index": 0,
   "dataset": [
   {
   "id": 0,
   "option": "By Week",
   "horizontalAxis": [
   "Mon",
   "Tue",
   "Wed",
   "Thurs",
   "Fri",
   "Sat",
   "Sun"
   ],
   "sendData": [
   167,
   339,
   430,
   728,
   689,
   277,
   357
   ],
   "receivedData": [
   178,
   319,
   400,
   528,
   369,
   457,
   520
   ]
   },
   {
   "id": 1,
   "option": "By Month",
   "horizontalAxis": [
   "Jan",
   "Feb",
   "Mar",
   "April",
   "May",
   "Jun",
   "July",
   "Aug",
   "Sept",
   "Oct",
   "Nov",
   "Dec"
   ],
   "sendData": [
   212,
   453,
   768,
   998,
   593,
   995,
   952,
   453,
   214,
   325,
   190,
   350
   ],
   "receivedData": [
   292,
   153,
   368,
   398,
   793,
   295,
   752,
   553,
   414,
   325,
   490,
   650
   ]
   },
   {
   "id": 2,
   "option": "By Year",
   "horizontalAxis": [
   "2015",
   "2016",
   "2017",
   "2018",
   "2019",
   "2020",
   "2021"
   ],
   "sendData": [
   406,
   846,
   950,
   574,
   950,
   545,
   330
   ],
   "receivedData": [
   206,
   446,
   350,
   474,
   350,
   245,
   130
   ]
   }
   ]
   },
   "lineChartData": {
   "id": "614206d900047468b57a6afd",
   "index": 0,
   "dataset": [
   {
   "id": 0,
   "option": "By Week",
   "horizontalAxis": [
   "Mon",
   "Tue",
   "Wed",
   "Thurs",
   "Fri",
   "Sat",
   "Sun"
   ],
   "sendData": [
   167,
   339,
   430,
   728,
   689,
   277,
   357
   ],
   "receivedData": [
   178,
   319,
   400,
   528,
   369,
   457,
   520
   ]
   },
   {
   "id": 1,
   "option": "By Month",
   "horizontalAxis": [
   "Jan",
   "Feb",
   "Mar",
   "April",
   "May",
   "Jun",
   "July",
   "Aug",
   "Sept",
   "Oct",
   "Nov",
   "Dec"
   ],
   "sendData": [
   212,
   453,
   768,
   998,
   593,
   995,
   952,
   453,
   214,
   325,
   190,
   350
   ],
   "receivedData": [
   292,
   153,
   368,
   398,
   793,
   295,
   752,
   553,
   414,
   325,
   490,
   650
   ]
   },
   {
   "id": 2,
   "option": "By Year",
   "horizontalAxis": [
   "2015",
   "2016",
   "2017",
   "2018",
   "2019",
   "2020",
   "2021"
   ],
   "sendData": [
   406,
   846,
   950,
   574,
   950,
   545,
   330
   ],
   "receivedData": [
   206,
   446,
   350,
   474,
   350,
   245,
   130
   ]
   }
   ]
   },
   "emailsData": {
   "id": "614206d900047468b5706afd",
   "index": 0,
   "dataset": [
   {
   "id": 0,
   "option": "By Week",
   "maximumValue": 500,
   "sendMails": [
   167
   ],
   "receivedMails": [
   178
   ]
   },
   {
   "id": 1,
   "option": "By Month",
   "maximumValue": 500,
   "sendMails": [
   212
   ],
   "receivedMails": [
   292
   ]
   },
   {
   "id": 2,
   "option": "By Year",
   "maximumValue": 500,
   "sendMails": [
   406
   ],
   "receivedMails": [
   206
   ]
   }
   ]
   },
   "earnedThisMonth": {
   "id": "614206d900047468b5706afd",
   "index": 0,
   "totalEarned": 2500
   },
   "totalClients": {
   "id": "614206d900047468b5706afd",
   "index": 0,
   "totalClients": 2500
   }
   }
