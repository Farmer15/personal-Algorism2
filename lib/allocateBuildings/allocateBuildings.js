/*

  문제 설명은 README를 참고하세요.

 */

export default function allocateBuildings(a, b, infos) {
  const objHouse = {};
  const objCompany = {};

  for (const info of infos) {
   objHouse[info[0]] ? objHouse[info[0]]++ : objHouse[info[0]] = 1;
   objCompany[info[1]] ? objCompany[info[1]]++ : objCompany[info[1]] = 1;
  }

  const houseCountsArr = Object.values(objHouse).sort((a, b) => b - a);
  const companyCountsArr = Object.values(objCompany).sort((a, b) => b - a);
  const totalHouseDistance = houseCountsArr.reduce((totalDistance, countHouse, index) => totalDistance + (a - index) * countHouse, 0);
  const totalCompanyDistance = companyCountsArr.reduce((totalDistance, countCompany, index) => totalDistance + (a + 1 + index) * countCompany, 0);

  return totalCompanyDistance - totalHouseDistance;
}
