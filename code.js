var table = {
    head: $('#table_head'),
    body: $('#table_body')
};

var regions = [
    {name: 'S-Petersburg	      ', far: false, needs: 137  },
    {name: 'Leningrad region	  ', far: false, needs: 37  },
    {name: 'Arkhangelsk	          ', far: false, needs: 18  },
    {name: 'Murmansk	          ', far: false, needs: 19  },
    {name: 'Vologda	              ', far: false, needs: 20  },
    {name: 'Komi	              ', far: false, needs: 11  },
    {name: 'Kaliningrad	          ', far: false, needs: 56  },
    {name: 'Pskov	              ', far: false, needs: 5  },
    {name: 'Novgorod	          ', far: false, needs: 11  },
    {name: 'Karelia	              ', far: false, needs: 16  },
    {name: 'Moscow	              ', far: false, needs: 188  },
    {name: 'Moscow region	      ', far: false, needs: 198  },
    {name: 'Bryansk	              ', far: false, needs: 24  },
    {name: 'Kaluga	              ', far: false, needs: 19  },
    {name: 'Smolensk	          ', far: false, needs: 15  },
    {name: 'Tver	              ', far: false, needs: 19  },
    {name: 'Tula	              ', far: false, needs: 30  },
    {name: 'Orel	              ', far: false, needs: 10  },
    {name: 'Ryazan	              ', far: false, needs: 40  },
    {name: 'Yaroslavl	          ', far: false, needs: 25  },
    {name: 'Kostroma	          ', far: false, needs: 19  },
    {name: 'Voronezh	          ', far: false, needs: 42  },
    {name: 'Lipezk	              ', far: false, needs: 10  },
    {name: 'Tambov	              ', far: false, needs: 16  },
    {name: 'Belgorod	          ', far: false, needs: 20  },
    {name: 'Kursk	              ', far: false, needs: 14  },
    {name: 'Vladimir	          ', far: false, needs: 23  },
    {name: 'Ivanovo	              ', far: false, needs: 20  },
    {name: 'Kirov	              ', far: false, needs: 3  },
    {name: 'NizhnyNovgorod	      ', far: false, needs: 34  },
    {name: 'Tatarstan	          ', far: false, needs: 45  },
    {name: 'Mary El	              ', far: false, needs: 4  },
    {name: 'Udmurtiya	          ', far: false, needs: 10  },
    {name: 'Uljanovsk	          ', far: false, needs: 2  },
    {name: 'Penza	              ', far: false, needs: 23  },
    {name: 'Chuvashiya	          ', far: false, needs: 4  },
    {name: 'Samara	              ', far: false, needs: 61  },
    {name: 'Saratov	              ', far: false, needs: 14  },
    {name: 'Rostov-na-Donu	      ', far: false, needs: 43  },
    {name: 'Krasnodar	          ', far: false, needs: 81  },
    {name: 'Volgograd	          ', far: false, needs: 31  },
    {name: 'Stavropolsky region	  ', far: false, needs: 74  },
    {name: 'Astrakhan	          ', far: false, needs: 15  },
    {name: 'Dagestan	          ', far: false, needs: 33  },
    {name: 'Grozniy	              ', far: false, needs: 29  },
    {name: 'Bashkortostan	      ', far: false, needs: 37  },
    {name: 'Orenburg	          ', far: false, needs: 41  },
    {name: 'Ekaterinburg	      ', far: false, needs: 147  },
    {name: 'Perm	              ', far: false, needs: 35  },
    {name: 'Chelyabinsk	          ', far: false, needs: 37  },
    {name: 'Kurgan	              ', far: false, needs: 20  },
    {name: 'Magnitogorsk	      ', far: false, needs: 13  },
    {name: 'Novosibirsk	          ', far: true , needs: 96  },
    {name: 'Omsk	              ', far: true , needs: 41  },
    {name: 'Tomsk	              ', far: true , needs: 28  },
    {name: 'Kemerovo	          ', far: true , needs: 31  },
    {name: 'Novokuznetck	      ', far: true , needs: 34  },
    {name: 'Barnaul	              ', far: true , needs: 34  },
    {name: 'Biisk & AltayRep	  ', far: true , needs: 11  },
    {name: 'Surgut	              ', far: true , needs: 19  },
    {name: 'Tymen	              ', far: true , needs: 27  },
    {name: 'Niznevartovsk	      ', far: true , needs: 5  },
    {name: 'Krasnoyarsk	          ', far: true , needs: 61  },
    {name: 'Khakasiya	          ', far: true , needs: 12  },
    {name: 'Tyva	              ', far: true , needs: 2  },
    {name: 'Irkutsk	              ', far: true , needs: 50  },
    {name: 'Chita	              ', far: true , needs: 25  },
    {name: 'Buryatiya	          ', far: true , needs: 18  },
    {name: 'Khabarovsk	          ', far: true , needs: 38  },
    {name: 'Birobidzhan	          ', far: true , needs: 5  },
    {name: 'Blagoveshensk	      ', far: true , needs: 46  },
    {name: 'Komsomolsk-Amur	      ', far: true , needs: 22  },
    {name: 'Saha-Yakutia	      ', far: true , needs: 15  },
    {name: 'Primorye	          ', far: true , needs: 70  },
    {name: 'Magadan	              ', far: true , needs: 2  },
    {name: 'Sakhalin	          ', far: true , needs: 27  },
    {name: 'Kamchatka	          ', far: true , needs: 9  },
    {name: 'Minsk	              ', far: false, needs: 42  },
    {name: 'Minsk region	      ', far: false, needs: 7  },
    {name: 'Brest	              ', far: false, needs: 9  },
    {name: 'Gomel	              ', far: false, needs: 6  },
    {name: 'Grodno	              ', far: false, needs: 4  },
    {name: 'Mogilev	              ', far: false, needs: 6  },
    {name: 'Vitebsk	              ', far: false, needs: 5     }
];

var boxs = [
    {title: '1728423	Декостикер  ОЛЕНИ	                    ', short: 0,    long: 4},
    {title: '1729495	Декостикер  СТИЛЬНЫЕ  КОШКИ	            ', short: 0,    long: 7},
    {title: '1729504	Декостикер  РОЗОВЫЕ  БАБОЧКИ	        ', short: 344,  long: 0},
    {title: '1729505	Декостикер  ОРАНЖЕВЫЕ  БАБОЧКИ	        ', short: 238,  long: 0},
    {title: '1729506	Декостикер  ОРАНЖЕВЫЙ  БУКЕТ	        ', short: 11,   long: 0},
    {title: '1729507	Декостикер  РОЗОВЫЙ  БУКЕТ	            ', short: 31,   long: 0},
    {title: '1729590	Декостикер  ФИОЛЕТОВЫЕ  БАБОЧКИ	        ', short: 138,  long: 0},
    {title: '1773742	Декостикер НАБОР СЕРДЕЦ 24х33,5 см	    ', short: 0,    long: 100},
    {title: '1773755	Декостикер СМАЙЛИКИ 24х33,5 см	        ', short: 8,    long: 49},
    {title: '1773760	Декостикер ЗАЙЧИКИ 24х33,5 см	        ', short: 1,    long: 76},
    {title: '1773763	Декостикер КОСМОС 24х33,5 см	        ', short: 23,   long: 149},
    {title: '1773781	Декостикер ЯРКОЕ НАСТРОЕНИЕ 24х33,5 см	', short: 4,    long: 65},
    {title: '1773783	Декостикер СТИЛЬНЫЕ РОЗЫ 24х33,5 см	    ', short: 14,   long: 0},
    {title: '1773784	Декостикер АНЮТИНЫ ГЛАЗКИ 24х33,5 см	', short: 0,    long: 77},
    {title: '1773785	Декостикер РОМАШКИ 24х33,5 см	        ', short: 0,    long: 1},
    {title: '1773788	Декостикер САФАРИ 47х67 см	            ', short: 8,    long: 0},
    {title: '1841245	Шоу-бокс БАБОЧКИ	                    ', short: 1438, long: 0}
];

var splitedRegions = {
    far: [],
    near: []
};


regions.forEach(function(box, ix){box.id = ix;});
boxs.forEach(function(box, ix){box.id = ix;});

//разбиваем
regions.forEach(function(reg){
    if(reg.far){
        splitedRegions.far.push(reg);
    }else{
        splitedRegions.near.push(reg);
    }
});

//Сортируем
splitedRegions.far = _.sortBy(splitedRegions.far, function(reg){
    return reg.needs;
});

splitedRegions.near = _.sortBy(splitedRegions.near, function(reg){
    return reg.needs;
});

regions = _.sortBy(regions, function(reg){
    return reg.needs;
});

console.log('splitedRegions', splitedRegions);

//Распределяе
console.log(boxs);
boxs = _.sortBy(boxs, 'long');
console.log(boxs);

boxs = boxs.reverse();
console.log(boxs);
debugger;

splitedRegions.far.forEach(function(reg){
    reg.boxs = {};
    reg.count = reg.needs;
});
splitedRegions.near.forEach(function(reg){
    reg.boxs = {};
    reg.count = reg.needs;
});

var raspAll = function(){
    var count = 0, delta ;
    regions.forEach(function(reg){
        var long = 0;
        boxs.forEach(function(box){
            if(reg.count > 0 && box.long > 0){
                if(box.id != 16){
                    reg.boxs[box.id] = reg.boxs[box.id] == undefined ? 1 : reg.boxs[box.id] + 1;
                    box.long--;
                    reg.count--;
                }else{
                    delta = reg.count > 2 ? 2 : reg.count;
                    reg.boxs[box.id] = reg.boxs[box.id] == undefined ? delta : reg.boxs[box.id] + delta;
                    box.long -= delta;
                    reg.count -= delta;
                }
            }
            long += box.long;
        });
        if(long == 0){
            boxs.forEach(function(box){
                box.long += box.short;
            });

            boxs = _.sortBy(boxs, 'long');
            boxs = boxs.reverse();
        }
        count = count + reg.count;
    });
    if(count > 0){
        raspAll();
    }
};

var rasp = function(name){
    var count = 0, delta ;
    splitedRegions[name].forEach(function(reg){
        var long = 0;
        boxs.forEach(function(box){
            if(reg.count > 0 && box.long > 0){
                if(box.id != 16){
                    reg.boxs[box.id] = reg.boxs[box.id] == undefined ? 1 : reg.boxs[box.id] + 1;
                    box.long--;
                    reg.count--;
                }else{
                    delta = reg.count > 4 ? 4 : reg.count;
                    reg.boxs[box.id] = reg.boxs[box.id] == undefined ? delta : reg.boxs[box.id] + delta;
                    box.long -= delta;
                    reg.count -= delta;
                }
            }
            long += box.long;
        });
        if(long == 0){
            boxs.forEach(function(box){
                box.long += box.short;
            });

            boxs = _.sortBy(boxs, 'long');
            boxs = boxs.reverse();
        }
        count = count + reg.count;
    });
    if(count > 0){
        rasp(name);
    }
};

//rasp('far');
//rasp('near');

boxs.forEach(function(box){
    box.long += box.short;
});

boxs = _.sortBy(boxs, 'long');
boxs = boxs.reverse();

raspAll();

/*splitedRegions.far.forEach(function(reg){
    reg.boxs = {};
    reg.count = reg.needs;
    var i = 0, l = boxs.length - 1, box, finish=0;
    while(reg.count > 0 && finish <= l){
        finish = i == 0 ? 0 : finish;
        box = boxs[i];
        if(box.long > 0){
            reg.boxs[box.id] = reg.boxs[box.id] == undefined ? 1 : reg.boxs[box.id] + 1;
            box.long--;
            reg.count--;
        }else{
            finish++;
        }

        if(i == l){
            i = 0;
        }else{
            i++;
        }
    }

    boxs = _.sortBy(boxs, 'short');
    boxs = boxs.reverse();
    i = 0;
    while(reg.count > 0 && finish <= l){
        finish = i == 0 ? 0 : finish;
        box = boxs[i];
        if(box.short > 0){
            reg.boxs[box.id] = reg.boxs[box.id] == undefined ? 1 : reg.boxs[box.id] + 1;
            box.short--;
            reg.count--;
        }else{
            finish++;
        }

        if(i == l){
            i = 0;
        }else{
            i++;
        }
    }
});

boxs.forEach(function(box){
    box.long += box.short;
});

boxs = _.sortBy(boxs, 'long');
boxs = boxs.reverse();

splitedRegions.near.forEach(function(reg){
    reg.boxs = {};
    reg.count = reg.needs;
    var i = 0, l = boxs.length - 1, box, finish=0;
    while(reg.count > 0 && finish <= l){
        finish = i == 0 ? 0 : finish;
        box = boxs[i];
        if(box.long > 0){
            reg.boxs[box.id] = reg.boxs[box.id] === undefined ? 1 : reg.boxs[box.id] + 1;
            box.long--;
            reg.count--;
        }else{
            finish++;
        }

        if(i == l){
            i = 0;
        }else{
            i++;
        }
    }
});*/

debugger;
regions = _.sortBy(regions, function(box){
    return box.id;
});

boxs = _.sortBy(boxs, function(box){
    return box.id;
});

table.head.append('<td>Регион</td>');
boxs.forEach(function(box){
    table.head.append('<td>'+ box.title +'</td>');
});

regions.forEach(function(reg){
    var row = '<td>'+ reg.name +'</td>';
    boxs.forEach(function(box){
        row = row + '<td>'+ (reg.boxs[box.id] || '') +'</td>';

    });
    table.body.append('<tr>'+ row +'</tr>');
});

//{title: '', short: 0, long: 0}

/*false                   S-Petersburg	        137
false                   Leningrad region	    37
false                   Arkhangelsk	            18
false                   Murmansk	            19
false                   Vologda	                20
false                   Komi	                11
false                   Kaliningrad	            56
false                   Pskov	                5
false                   Novgorod	            11
false                   Karelia	                16
false                   Moscow	                188
false                   Moscow region	        198
false                   Bryansk	                24
false                   Kaluga	                19
false                   Smolensk	            15
false                   Tver	                19
false                   Tula	                30
false                   Orel	                10
false                   Ryazan	                40
false                   Yaroslavl	            25
false                   Kostroma	            19
false                   Voronezh	            42
false                   Lipezk	                10
false                   Tambov	                16
false                   Belgorod	            20
false                   Kursk	                14
false                   Vladimir	            23
false                   Ivanovo	                20
false                   Kirov	                3
false                   NizhnyNovgorod	        34
false                   Tatarstan	            45
false                   Mary El	                4
false                   Udmurtiya	            10
false                   Uljanovsk	            2
false                   Penza	                23
false                   Chuvashiya	            4
false                   Samara	                61
false                   Saratov	                14
false                   Rostov-na-Donu	        43
false                   Krasnodar	            81
false                   Volgograd	            31
false                   Stavropolsky region	    74
false                   Astrakhan	            15
false                   Dagestan	            33
false                   Grozniy	                29
false                   Bashkortostan	        37
false                   Orenburg	            41
false                   Ekaterinburg	        147
false                   Perm	                35
false                   Chelyabinsk	            37
false                   Kurgan	                20
false                   Magnitogorsk	        13
true                    Novosibirsk	            96
true                    Omsk	                41
true                    Tomsk	                28
true                    Kemerovo	            31
true                    Novokuznetck	        34
true                    Barnaul	                34
true                    Biisk & AltayRep	    11
true                    Surgut	                19
true                    Tymen	                27
true                    Niznevartovsk	        5
true    	            Krasnoyarsk	            61
true    	            Khakasiya	            12
true    	            Tyva	                2
true    	            Irkutsk	                50
true    	            Chita	                25
true    	            Buryatiya	            18
true    	            Khabarovsk	            38
true    	            Birobidzhan	            5
true    	            Blagoveshensk	        46
true    	            Komsomolsk-Amur	        22
true    	            Saha-Yakutia	        15
true    	            Primorye	            70
true    	            Magadan	                2
true    	            Sakhalin	            27
true    	            Kamchatka	            9
false                   Minsk	                42
false                   Minsk region	        7
false                   Brest	                9
false                   Gomel	                6
false                   Grodno	                4
false                   Mogilev	                6
false                   Vitebsk	                5   */
