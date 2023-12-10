// 현재 날짜로 비밀번호를 만들어 반환 (ex 20231231)
function makePassword() {
	var today = new Date();
	var year = today.getFullYear();
	var month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
	var day = today.getDate().toString().padStart(2, '0');

	return year + month + day;
}