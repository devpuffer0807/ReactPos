/**
 *  @author Puffer
 *  @created at 12/03 2021
 *  @updated at 12/04 2021
 * 
 * **/


const ButtonList = [
    {
       "@id": "pos",
       "col": [
          {
             "@width": "40%",
             "ul": {
                "@id": "receipt"
             }
          },
          [
             {
                "ul": {
                   "@id": "detail"
                }
             },
             {
                "table": [
                   {
                      "caption": "1",
                      "name": "one",
                      "function": "number",
                      "x": "0",
                      "y": "0",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "2",
                      "name": "two",
                      "function": "number",
                      "x": "1",
                      "y": "0",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "3",
                      "name": "three",
                      "function": "number",
                      "x": "2",
                      "y": "0",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "x",
                      "name": "quantity",
                      "function": "quantity",
                      "x": "3",
                      "y": "0",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": []
                   },
                   {
                      "caption": "kg",
                      "name": "weight",
                      "function": "weight",
                      "x": "4",
                      "y": "0",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": []
                   },
                   {
                      "caption": "4",
                      "name": "four",
                      "function": "number",
                      "x": "0",
                      "y": "1",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "5",
                      "name": "five",
                      "function": "number",
                      "x": "1",
                      "y": "1",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "6",
                      "name": "six",
                      "function": "number",
                      "x": "2",
                      "y": "1",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "↑",
                      "name": "arrow-up",
                      "function": "arrow-up",
                      "x": "3",
                      "y": "1",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": "arrow-up"
                   },
                   {
                      "caption": "cancel",
                      "name": "cancel",
                      "function": "cancel",
                      "x": "4",
                      "y": "1",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": []
                   },
                   {
                      "caption": "7",
                      "name": "seven",
                      "function": "number",
                      "x": "0",
                      "y": "3",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "8",
                      "name": "eight",
                      "function": "number",
                      "x": "1",
                      "y": "3",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "9",
                      "name": "nine",
                      "function": "number",
                      "x": "2",
                      "y": "3",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "↓",
                      "name": "arrow-down",
                      "function": "arrow-down",
                      "x": "3",
                      "y": "3",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": "arrow-down"
                   },
                   {
                      "caption": "pay",
                      "name": "pay",
                      "function": "pay",
                      "x": "4",
                      "y": "3",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": []
                   },
                   {
                      "caption": ".",
                      "name": "point",
                      "function": "number",
                      "x": "0",
                      "y": "4",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "0",
                      "name": "zero",
                      "function": "number",
                      "x": "1",
                      "y": "4",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "del",
                      "name": "delete",
                      "function": "delete",
                      "x": "2",
                      "y": "4",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "red",
                      "backgroundcolor": "white",
                      "icon": []
                   },
                   {
                      "caption": "enter",
                      "name": "enter",
                      "function": "enter",
                      "x": "3",
                      "y": "4",
                      "span": "2",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "yellow",
                      "icon": []
                   },
                   {
                      "caption": "a",
                      "name": "Fruit",
                      "function": "product",
                      "reference": "11",
                      "x": "0",
                      "y": "5",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "pink",
                      "icon": []
                   },
                   {
                      "caption": "b",
                      "name": "Bread",
                      "function": "product",
                      "reference": "22",
                      "x": "1",
                      "y": "5",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "pink",
                      "icon": []
                   },
                   {
                      "caption": "c",
                      "name": "hardware",
                      "function": "product",
                      "reference": "33",
                      "x": "2",
                      "y": "5",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "pink",
                      "icon": []
                   },
                   {
                      "caption": "d",
                      "name": "software",
                      "function": "product",
                      "reference": "44",
                      "x": "3",
                      "y": "5",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "pink",
                      "icon": []
                   },
                   {
                      "caption": "bag",
                      "name": "bag",
                      "function": "product",
                      "reference": "55",
                      "x": "4",
                      "y": "5",
                      "span": "1",
                      "visible": "1",
                      "enabled": "1",
                      "style": [],
                      "color": "black",
                      "backgroundcolor": "pink",
                      "icon": []
                   }
                ]
             }
          ]
       ]
    },
    {
       "@id": "pay",
       "col": [
          {
             "ul": {
                "@id": "paydetail"
             }
          },
          {
             "table": [
                {
                   "caption": "cash",
                   "name": "cash",
                   "function": "paycash",
                   "x": "0",
                   "y": "0",
                   "span": "1",
                   "visible": "1",
                   "enabled": "1",
                   "style": [],
                   "color": "black",
                   "backgroundcolor": "white",
                   "icon": []
                },
                {
                   "caption": "card",
                   "name": "card",
                   "function": "paycard",
                   "x": "0",
                   "y": "1",
                   "span": "1",
                   "visible": "1",
                   "enabled": "1",
                   "style": [],
                   "color": "black",
                   "backgroundcolor": "white",
                   "icon": []
                },
                {
                   "caption": "back",
                   "name": [],
                   "function": "toPosLayer",
                   "x": "0",
                   "y": "2",
                   "span": "1",
                   "visible": "1",
                   "enabled": "1",
                   "style": [],
                   "color": "black",
                   "backgroundcolor": "white",
                   "icon": []
                }
             ]
          }
       ]
    }
 ]

 export default ButtonList;