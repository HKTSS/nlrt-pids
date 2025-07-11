const ApiURL = "https://rt.data.gov.hk/v1/transport/mtr/lrt/getSchedule?station_id={stn}";

export class ArrivalEntry {
    route_no: string;
    train_length: number;
    dest_zh: string;
    dest_en: string;
    time_num: string;
    time_text: string;
    eta_date: Date
    
    constructor(route_no: string, train_length: number, dest_zh: string, dest_en: string, time_num: string, time_text: string, eta_date: Date) {
        this.route_no = route_no;
        this.train_length = train_length;
        this.dest_zh = dest_zh;
        this.dest_en = dest_en;
        this.time_text = time_text;
        this.time_num = time_num;
        this.eta_date = eta_date;
    }
}

export class Route {
    initials : string;
    name : string;
    color : string;
    stations : string[];
    constructor(initials: string, name: string, color: string, stations: string[]) {
        this.initials = initials
        this.name = name
        this.color = color
        this.stations = stations;
    }
}

export class Station {
    name: string;
    initials: string;
    platforms: number[];
    constructor(initials: string, name: string, platforms: number[]) {
        this.name = name;
        this.initials = initials;
        this.platforms = platforms;
    }
}

export function getApiURL(stnId: string): string {
    return ApiURL.replace("{stn}", stnId);
}

export const RouteList = {
    'LR505': new Route('505', '輕鐵 505|Light Rail 505', 'da2128', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR507': new Route('507', '輕鐵 507|Light Rail 507', '00a650', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR610': new Route('610', '輕鐵 610|Light Rail 610', '551b14', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR614': new Route('614', '輕鐵 614|Light Rail 614', '00c0f3', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR614P': new Route('614P', '輕鐵 614P|Light Rail 614P', 'f4858d', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR615': new Route('615', '輕鐵 615|Light Rail 615', 'ffdd00', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR615P': new Route('615P', '輕鐵 615P|Light Rail 615P', '006684', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR705': new Route('705', '輕鐵 705|Light Rail 705', '9acd32', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR706': new Route('706', '輕鐵 706|Light Rail 706', 'B27AB4', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR751': new Route('751', '輕鐵 751|Light Rail 751', 'f5821f', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR751P': new Route('751P', '輕鐵 751P|Light Rail 751P', '000000', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"]),
    'LR761P': new Route('761P', '輕鐵 761P|Light Rail 761P', '6f2b91', ["1", "10", "15", "20", "30", "40", "50", "60", "70", "75", "80", "90", "100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200", "212", "220", "230", "240", "250", "260", "265", "270", "275", "280", "295", "300", "310", "320", "330", "340", "350", "360", "370", "380", "390", "400", "425", "430", "435", "445", "448", "450", "455", "460", "468", "480", "490", "500", "510", "520", "530", "540", "550", "560", "570", "580", "590", "600", "920"])
}

export const StationCodeList = new Map([
    ["1", new Station("1", "屯門碼頭|Tuen Mun Ferry Pier", [2, 3, 4, 5, 7])],
    ["10", new Station("10", "美樂|Melody Garden", [1, 2])],
    ["15", new Station("15", "蝴蝶|Butterfly", [1, 2])],
    ["20", new Station("20", "輕鐵車廠|Light Rail Depot", [1, 2])],
    ["30", new Station("30", "龍門|Lung Mun", [1, 2])],
    ["40", new Station("40", "青山村|Tsing Shan Tsuen", [1, 2])],
    ["50", new Station("50", "青雲|Tsing Wun", [1, 2])],
    ["60", new Station("60", "建安|Kin On", [1, 2])],
    ["70", new Station("70", "河田|Ho Tin", [1, 2])],
    ["75", new Station("75", "蔡意橋|Choy Yee Bridge", [1, 2])],
    ["80", new Station("80", "澤豐|Affluence", [1, 2])],
    ["90", new Station("90", "屯門醫院|Tuen Mun Hospital", [1, 2])],
    ["100", new Station("100", "兆康|Siu Hong", [1, 2, 5, 6])],
    ["110", new Station("110", "麒麟|Kei Lun", [1, 2])],
    ["120", new Station("120", "青松|Ching Chung", [1, 2])],
    ["130", new Station("130", "建生|Kin Sang", [1, 2])],
    ["140", new Station("140", "田景|Tin King", [1, 2, 3])],
    ["150", new Station("150", "良景|Leung King", [1, 2])],
    ["160", new Station("160", "新圍|San Wai", [1, 2])],
    ["170", new Station("170", "石排|Shek Pai", [1, 2])],
    ["180", new Station("180", "山景 (北)|Shan King (North)", [1])],
    ["190", new Station("190", "山景 (南)|Shan King (South)", [1])],
    ["200", new Station("200", "鳴琴|Ming Kum", [1, 2])],
    ["212", new Station("212", "大興 (北)|Tai Hing (North)", [1, 2])],
    ["220", new Station("220", "大興 (南)|Tai Hing (South)", [1, 2])],
    ["230", new Station("230", "銀圍|Ngan Wai", [1, 2])],
    ["240", new Station("240", "兆禧|Siu Hei", [1, 2])],
    ["250", new Station("250", "屯門泳池|Tuen Mun Swimming Pool", [1, 2])],
    ["260", new Station("260", "豐景園|Goodview Garden", [1, 2])],
    ["265", new Station("265", "兆麟|Siu Lun", [1, 2])],
    ["270", new Station("270", "安定|On Ting", [1, 2])],
    ["275", new Station("275", "友愛|Yau Oi", [1])],
    ["280", new Station("280", "市中心|Town Centre", [4])],
    ["295", new Station("295", "屯門|Tuen Mun", [1, 2])],
    ["300", new Station("300", "杯渡|Pui To", [1, 2])],
    ["310", new Station("310", "何福堂|Hoh Fuk Tong", [1, 2])],
    ["320", new Station("320", "新墟|San Hui", [1, 2])],
    ["330", new Station("330", "景峰|Prime View", [1, 2])],
    ["340", new Station("340", "鳳地|Fung Tei", [1, 2])],
    ["350", new Station("350", "藍地|Lam Tei", [1, 2])],
    ["360", new Station("360", "泥圍|Nai Wai", [1, 2])],
    ["370", new Station("370", "鍾屋村|Chung Uk Tsuen", [1, 2])],
    ["380", new Station("380", "洪水橋|Hung Shui Kiu", [1, 2])],
    ["390", new Station("390", "塘坊村|Tong Fong Tsuen", [1, 2])],
    ["400", new Station("400", "屏山|Ping Shan", [1, 2])],
    ["425", new Station("425", "坑尾村|Hang Mei Tsuen", [1, 2])],
    ["430", new Station("430", "天水圍|Tin Shui Wai", [1, 2, 3])],
    ["435", new Station("435", "天慈|Tin Tsz", [1, 2])],
    ["445", new Station("445", "天耀|Tin Yiu", [1, 2])],
    ["448", new Station("448", "樂湖|Locwood", [1, 2])],
    ["450", new Station("450", "天湖|Tin Wu", [1, 2])],
    ["455", new Station("455", "銀座|Ginza", [1, 2])],
    ["460", new Station("460", "天瑞|Tin Shui", [1, 2])],
    ["468", new Station("468", "頌富|Chung Fu", [1, 2])],
    ["480", new Station("480", "天富|Tin Fu", [1, 2])],
    ["490", new Station("490", "翠湖|Chestwood", [1, 2])],
    ["500", new Station("500", "天榮|Tin Wing", [6, 7])],
    ["510", new Station("510", "天悅|Tin Yuet", [1, 2])],
    ["520", new Station("520", "天秀|Tin Sau", [1, 2])],
    ["530", new Station("530", "濕地公園|Wetland Park", [1, 2])],
    ["540", new Station("540", "天恒|Tin Heng", [1, 2])],
    ["550", new Station("550", "天逸|Tin Yat", [1, 2, 4, 5])],
    ["560", new Station("560", "水邊圍|Shui Pin Wai", [1, 2])],
    ["570", new Station("570", "豐年路|Fung Nin Road", [1, 2])],
    ["580", new Station("580", "康樂路|Hong Lok Road", [1, 2])],
    ["590", new Station("590", "大棠路|Tai Tong Road", [1, 2])],
    ["600", new Station("600", "元朗|Yuen Long", [2, 3, 4, 5])],
    ["920", new Station("920", "三聖|Sam Shing", [1, 3])]
]);
