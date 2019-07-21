let scenarioDiv = document.getElementById('scenarioDiv'),
    firstOptionDiv = document.getElementById('firstOptionDiv'),
    secondOptionDiv = document.getElementById('secondOptionDiv'),
    scenarioMap = new Map(),
    firstOptionMap = new Map(),
    secondOptionMap = new Map(),
    scenarioString = "",
    scenarioCount = 0;

// Set the scenario map
scenarioMap.set("1", "Scenario 1");
scenarioMap.set("2", "Scenario 2");

scenarioMap.set("11", "Scenario 11");
scenarioMap.set("12", "Scenario 12");
scenarioMap.set("21", "Scenario 21");
scenarioMap.set("22", "Scenario 22");

scenarioMap.set("111", "Scenario 111");
scenarioMap.set("112", "Scenario 112");
scenarioMap.set("121", "Scenario 121");
scenarioMap.set("122", "Scenario 122");
scenarioMap.set("211", "Scenario 211");
scenarioMap.set("212", "Scenario 212");
scenarioMap.set("221", "Scenario 221");
scenarioMap.set("222", "Scenario 222");

scenarioMap.set("1111", "Scenario 1111");
scenarioMap.set("1112", "Scenario 1112");
scenarioMap.set("1121", "Scenario 1121");
scenarioMap.set("1122", "Scenario 1122");
scenarioMap.set("1211", "Scenario 1211");
scenarioMap.set("1212", "Scenario 1212");
scenarioMap.set("1221", "Scenario 1221");
scenarioMap.set("1222", "Scenario 1222");
scenarioMap.set("2111", "Scenario 2111");
scenarioMap.set("2112", "Scenario 2112");
scenarioMap.set("2121", "Scenario 2121");
scenarioMap.set("2122", "Scenario 2122");
scenarioMap.set("2211", "Scenario 2211");
scenarioMap.set("2212", "Scenario 2212");
scenarioMap.set("2221", "Scenario 2221");
scenarioMap.set("2222", "Scenario 2222");

scenarioMap.set("11111", "Scenario 11111");
scenarioMap.set("11112", "Scenario 11112");
scenarioMap.set("11121", "Scenario 11121");
scenarioMap.set("11122", "Scenario 11122");
scenarioMap.set("11211", "Scenario 11211");
scenarioMap.set("11212", "Scenario 11212");
scenarioMap.set("11221", "Scenario 11221");
scenarioMap.set("11222", "Scenario 11222");
scenarioMap.set("12111", "Scenario 12111");
scenarioMap.set("12112", "Scenario 12112");
scenarioMap.set("12121", "Scenario 12121");
scenarioMap.set("12122", "Scenario 12122");
scenarioMap.set("12211", "Scenario 12211");
scenarioMap.set("12212", "Scenario 12212");
scenarioMap.set("12221", "Scenario 12221");
scenarioMap.set("12222", "Scenario 12222");
scenarioMap.set("21111", "Scenario 21111");
scenarioMap.set("21112", "Scenario 21112");
scenarioMap.set("21121", "Scenario 21121");
scenarioMap.set("21122", "Scenario 21122");
scenarioMap.set("21211", "Scenario 21211");
scenarioMap.set("21212", "Scenario 21212");
scenarioMap.set("21221", "Scenario 21221");
scenarioMap.set("21222", "Scenario 21222");
scenarioMap.set("22111", "Scenario 22111");
scenarioMap.set("22112", "Scenario 22112");
scenarioMap.set("22121", "Scenario 22121");
scenarioMap.set("22122", "Scenario 22122");
scenarioMap.set("22211", "Scenario 22211");
scenarioMap.set("22212", "Scenario 22212");
scenarioMap.set("22221", "Scenario 22221");
scenarioMap.set("22222", "Scenario 22222");


// Set the first option map
firstOptionMap.set("1", "firstOption 1");
firstOptionMap.set("2", "firstOption 2");

firstOptionMap.set("11", "firstOption 11");
firstOptionMap.set("12", "firstOption 12");
firstOptionMap.set("21", "firstOption 21");
firstOptionMap.set("22", "firstOption 22");

firstOptionMap.set("111", "firstOption 111");
firstOptionMap.set("112", "firstOption 112");
firstOptionMap.set("121", "firstOption 121");
firstOptionMap.set("122", "firstOption 122");
firstOptionMap.set("211", "firstOption 211");
firstOptionMap.set("212", "firstOption 212");
firstOptionMap.set("221", "firstOption 221");
firstOptionMap.set("222", "firstOption 222");

firstOptionMap.set("1111", "firstOption 1111");
firstOptionMap.set("1112", "firstOption 1112");
firstOptionMap.set("1121", "firstOption 1121");
firstOptionMap.set("1122", "firstOption 1122");
firstOptionMap.set("1211", "firstOption 1211");
firstOptionMap.set("1212", "firstOption 1212");
firstOptionMap.set("1221", "firstOption 1221");
firstOptionMap.set("1222", "firstOption 1222");
firstOptionMap.set("2111", "firstOption 2111");
firstOptionMap.set("2112", "firstOption 2112");
firstOptionMap.set("2121", "firstOption 2121");
firstOptionMap.set("2122", "firstOption 2122");
firstOptionMap.set("2211", "firstOption 2211");
firstOptionMap.set("2212", "firstOption 2212");
firstOptionMap.set("2221", "firstOption 2221");
firstOptionMap.set("2222", "firstOption 2222");

firstOptionMap.set("11111", "firstOption 11111");
firstOptionMap.set("11112", "firstOption 11112");
firstOptionMap.set("11121", "firstOption 11121");
firstOptionMap.set("11122", "firstOption 11122");
firstOptionMap.set("11211", "firstOption 11211");
firstOptionMap.set("11212", "firstOption 11212");
firstOptionMap.set("11221", "firstOption 11221");
firstOptionMap.set("11222", "firstOption 11222");
firstOptionMap.set("12111", "firstOption 12111");
firstOptionMap.set("12112", "firstOption 12112");
firstOptionMap.set("12121", "firstOption 12121");
firstOptionMap.set("12122", "firstOption 12122");
firstOptionMap.set("12211", "firstOption 12211");
firstOptionMap.set("12212", "firstOption 12212");
firstOptionMap.set("12221", "firstOption 12221");
firstOptionMap.set("12222", "firstOption 12222");
firstOptionMap.set("21111", "firstOption 21111");
firstOptionMap.set("21112", "firstOption 21112");
firstOptionMap.set("21121", "firstOption 21121");
firstOptionMap.set("21122", "firstOption 21122");
firstOptionMap.set("21211", "firstOption 21211");
firstOptionMap.set("21212", "firstOption 21212");
firstOptionMap.set("21221", "firstOption 21221");
firstOptionMap.set("21222", "firstOption 21222");
firstOptionMap.set("22111", "firstOption 22111");
firstOptionMap.set("22112", "firstOption 22112");
firstOptionMap.set("22121", "firstOption 22121");
firstOptionMap.set("22122", "firstOption 22122");
firstOptionMap.set("22211", "firstOption 22211");
firstOptionMap.set("22212", "firstOption 22212");
firstOptionMap.set("22221", "firstOption 22221");
firstOptionMap.set("22222", "firstOption 22222");

// Set the second option map
secondOptionMap.set("1", "secondOption 1");
secondOptionMap.set("2", "secondOption 2");

secondOptionMap.set("11", "secondOption 11");
secondOptionMap.set("12", "secondOption 12");
secondOptionMap.set("21", "secondOption 21");
secondOptionMap.set("22", "secondOption 22");

secondOptionMap.set("111", "secondOption 111");
secondOptionMap.set("112", "secondOption 112");
secondOptionMap.set("121", "secondOption 121");
secondOptionMap.set("122", "secondOption 122");
secondOptionMap.set("211", "secondOption 211");
secondOptionMap.set("212", "secondOption 212");
secondOptionMap.set("221", "secondOption 221");
secondOptionMap.set("222", "secondOption 222");

secondOptionMap.set("1111", "secondOption 1111");
secondOptionMap.set("1112", "secondOption 1112");
secondOptionMap.set("1121", "secondOption 1121");
secondOptionMap.set("1122", "secondOption 1122");
secondOptionMap.set("1211", "secondOption 1211");
secondOptionMap.set("1212", "secondOption 1212");
secondOptionMap.set("1221", "secondOption 1221");
secondOptionMap.set("1222", "secondOption 1222");
secondOptionMap.set("2111", "secondOption 2111");
secondOptionMap.set("2112", "secondOption 2112");
secondOptionMap.set("2121", "secondOption 2121");
secondOptionMap.set("2122", "secondOption 2122");
secondOptionMap.set("2211", "secondOption 2211");
secondOptionMap.set("2212", "secondOption 2212");
secondOptionMap.set("2221", "secondOption 2221");
secondOptionMap.set("2222", "secondOption 2222");

secondOptionMap.set("11111", "secondOption 11111");
secondOptionMap.set("11112", "secondOption 11112");
secondOptionMap.set("11121", "secondOption 11121");
secondOptionMap.set("11122", "secondOption 11122");
secondOptionMap.set("11211", "secondOption 11211");
secondOptionMap.set("11212", "secondOption 11212");
secondOptionMap.set("11221", "secondOption 11221");
secondOptionMap.set("11222", "secondOption 11222");
secondOptionMap.set("12111", "secondOption 12111");
secondOptionMap.set("12112", "secondOption 12112");
secondOptionMap.set("12121", "secondOption 12121");
secondOptionMap.set("12122", "secondOption 12122");
secondOptionMap.set("12211", "secondOption 12211");
secondOptionMap.set("12212", "secondOption 12212");
secondOptionMap.set("12221", "secondOption 12221");
secondOptionMap.set("12222", "secondOption 12222");
secondOptionMap.set("21111", "secondOption 21111");
secondOptionMap.set("21112", "secondOption 21112");
secondOptionMap.set("21121", "secondOption 21121");
secondOptionMap.set("21122", "secondOption 21122");
secondOptionMap.set("21211", "secondOption 21211");
secondOptionMap.set("21212", "secondOption 21212");
secondOptionMap.set("21221", "secondOption 21221");
secondOptionMap.set("21222", "secondOption 21222");
secondOptionMap.set("22111", "secondOption 22111");
secondOptionMap.set("22112", "secondOption 22112");
secondOptionMap.set("22121", "secondOption 22121");
secondOptionMap.set("22122", "secondOption 22122");
secondOptionMap.set("22211", "secondOption 22211");
secondOptionMap.set("22212", "secondOption 22212");
secondOptionMap.set("22221", "secondOption 22221");
secondOptionMap.set("22222", "secondOption 22222");

firstOptionDiv.addEventListener("click", function (event) {
    if (scenarioCount == 5) {
        scenarioDiv.innerHTML = "LIMIT REACHED";
        console.log("LIMIT REACHED");
    } else {
        scenarioString += "1";
        updateOptions(scenarioMap.get(scenarioString),
                      firstOptionMap.get(scenarioString),
                      secondOptionMap.get(scenarioString));
        scenarioCount++;
    }
});

secondOptionDiv.addEventListener("click", function (event) {
    if (scenarioCount == 5) {
        scenarioDiv.innerHTML = "LIMIT REACHED";
        console.log("LIMIT REACHED");
    } else {
        scenarioString += "2";
        updateOptions(scenarioMap.get(scenarioString),
                      firstOptionMap.get(scenarioString),
                      secondOptionMap.get(scenarioString));
        scenarioCount++;
    }
});

function updateOptions(scenarioText, firstOptionText, secondOptionText) {
    scenarioDiv.innerHTML = scenarioText;
    firstOptionDiv.innerHTML = firstOptionText;
    secondOptionDiv.innerHTML = secondOptionText;
}