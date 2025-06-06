// 드롭다운 리스트 생성 - 유니온 타입
// ex06-18-03.ts 복사

(() => {
  interface DropdownItem {
    value: string | number;
    selected?: boolean;
  }

  const cityList: DropdownItem[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
    // { value: 56789 },
  ];

  const zipcodeList: DropdownItem[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // FIXME: 아래 출력 결과와 같이 출력 되도록 함수 작성
  function createDropdownList(list: DropdownItem[]) {
    let value;
    let options = "";

    for (let item of list) {
      value = item.value;
      options += `<option selected="${item.selected ? "selected" : ""}" >
      ${typeof value === "string" ? value.toUpperCase() : value}</option>`;
    }

    return `<select>\n${options}\n</select>`;
  }

  console.log(createDropdownList(cityList));
  console.log(createDropdownList(zipcodeList));
})();
