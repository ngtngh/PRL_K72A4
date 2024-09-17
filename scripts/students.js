const students = {
    "001": { "stt": "01", "name": "Nguyen Van A", "dob": "01/01/2000", "points": "0.5", "hd": "1. Hoạt động một\n2. Hoạt động \"hai\"" },
    "002": { "stt": "02", "name": "Tran Thi B", "dob": "02/02/2001", "points": "10", "hd": "1. Hoạt động một\n2. Hoạt động \"hai\"" },
    "003": { "stt": "03", "name": "Le Van C", "dob": "03/03/2002", "points": "10", "hd": "1. Hoạt động một\n2. Hoạt động \"hai\"\n3. Hoạt động ba" },
    "725101187": { "stt": "1", "name": "Trần Thị Phương Linh", "dob": "16/02/2004", "points": "84.5", "hd": "1. Học tập nghị quyết Đại hội Đoàn toàn quốc lần thứ XII\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Đánh giá giảng viên" },
    "725101188": { "stt": "2", "name": "Vũ Phan Diệu Linh", "dob": "26/03/2003", "points": "87.5", "hd": "1. Cán bộ lớp tích cực (Bí thư)\n2. Tham dự Đại hội đại biểu Liên chi Đoàn khoa Toán - Tin, nhiệm kì 2024 - 2027\n3. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n4. Tình nguyện viên online Mùa Hè Xanh \n5. Kiểm tra, đánh giá kết quả học tập Nghị quyết Đại hội đại biểu Toàn quốc Hội Sinh viên Việt Nam lần thứ XI, nhiệm kỳ 2023 - 2028 \n6. Đánh giá giảng viên" },
    "725101189": { "stt": "3", "name": "Vũ Thị Mỹ Linh", "dob": "02/11/2003", "points": "85.5", "hd": "1. Đánh giá giảng viên\n2. Hiến máu tình nguyện\n3. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101190": { "stt": "4", "name": "Lê Bích Loan", "dob": "21/06/2004", "points": "85", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Học tập nghị quyết Đại hội Đoàn toàn quốc lần thứ XII" },
    "725101191": { "stt": "5", "name": "Lèo Văn Lợi", "dob": "28/01/2004", "points": "", "hd": "" },
    "725101192": { "stt": "6", "name": "Lê Tuấn Long", "dob": "16/11/2003", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101193": { "stt": "7", "name": "Lý A Lùng", "dob": "12/12/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101194": { "stt": "8", "name": "Lò Hoàng Nhật Ly", "dob": "10/10/2004", "points": "93", "hd": "1. Đánh giá giảng viên\n2. Tham dự Đại hội đại biểu Liên chi Đoàn khoa Toán - Tin, nhiệm kỳ 2024 - 2027\n3. Tham gia BIGGAME7 của CLB CTC (giải nhì)\n4. Thành viên BTC chương trình \"Sắc Vàng Hoàng Yến\"\n5. Tham gia CLB Thanh niên vận động hiến máu Trường ĐHSP Hà Nội\n6. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n7. Cán bộ lớp tích cực (lớp phó)\n8. Hiến máu tình nguyện" },
    "725101195": { "stt": "9", "name": "Nguyễn Khánh Ly", "dob": "23/05/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101196": { "stt": "10", "name": "Nguyễn Thị Hương Ly", "dob": "10/03/2003", "points": "84", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin" },
    "725101197": { "stt": "11", "name": "Nguyễn Thị Phương Ly", "dob": "20/01/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101199": { "stt": "12", "name": "Lê Thị Lý", "dob": "11/10/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101200": { "stt": "13", "name": "Nguyễn Thị Lý", "dob": "05/07/2004", "points": "91", "hd": "1. Cán bộ lớp tích cực (Lớp phó)\n2. Đánh giá giảng viên\n3. Tham gia Ngày hội học sinh, sinh viên các dân tộc Việt Nam\n4. GPA kì II đạt Giỏi\n5. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin\n6. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n7. Quyên góp sách Thư viện \n8. Hiến máu (ngày 25/2/2024)" },
    "725101201": { "stt": "14", "name": "Đoàn Nguyễn Xuân Mai", "dob": "28/08/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101202": { "stt": "15", "name": "Hoàng Thị Ngọc Mai", "dob": "24/09/2004", "points": "84", "hd": "1. Tham gia cuộc thi Tìm hiểu về Đoàn thanh niên Cộng sản Hồ Chí Minh\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Đánh giá giảng viên" },
    "725101203": { "stt": "16", "name": "Lại Ngọc Mai", "dob": "26/07/2004", "points": "88", "hd": "1. Đánh giá giảng viên\n2. Cộng tác viên chương trình \"Sắc Vàng Hoàng Yến\"\n3. Tham gia CLB Nghệ thuật khoa Toán-Tin Maths and Melody (Ban Nhảy)\n4. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n5. Tham gia cuộc thi Liên hoan ca khúc thanh niên 2024" },
    "725101204": { "stt": "17", "name": "Lê Phương Mai", "dob": "18/11/2004", "points": "87.5", "hd": "1. Tham gia CLB NVSP khoa Toán - Tin\n2. Đánh giá giảng viên\n3. Cán bộ lớp tích cực (Ủy viên)\n4. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n5. Tham dự Đại hội đại biểu Liên chi Đoàn khoa Toán - Tin, nhiệm kỳ 2024 - 2027" },
    "725101205": { "stt": "18", "name": "Ngô Thị Mai", "dob": "10/11/2004", "points": "88", "hd": "1. Tham gia sự kiện \"Xuân an lành\" (Đội 6 - Đua thuyền)\n2. Tham gia CLB Thanh niên vận động hiến máu Trường ĐHSP Hà Nội\n3. Đánh giá giảng viên\n4. Hội thao \"Thanh niên khỏe\" khoa Toán Tin (Đội 6 - Nhảy dây)\n5. Kiểm tra, đánh giá kết quả học tập Nghị quyết Đại hội đại biểu Toàn quốc Hội Sinh viên Việt Nam lần thứ XI, nhiệm kỳ 2023 - 2028 \n6. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n7. TNV chiến dịch Mùa hè xanh 2024" },
    "725101206": { "stt": "19", "name": "Nguyễn Thị Mai", "dob": "21/03/2004", "points": "84", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101207": { "stt": "20", "name": "Vũ Hiền Mai", "dob": "18/03/2004", "points": "85", "hd": "1. Đánh giá giảng viên\n2. Hội thao \"Thanh niên khỏe\" khoa Toán Tin\n3. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n4. Tham gia Olympic Tiếng Anh" },
    "725101208": { "stt": "21", "name": "Vương Nhật Mai", "dob": "19/10/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101209": { "stt": "22", "name": "Nguyễn Tiến Mạnh", "dob": "04/07/2004", "points": "81.5", "hd": "1. Đánh giá giảng viên (chỉ môn chuyên ngành)\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101210": { "stt": "23", "name": "Nguyễn Xuân Mạnh", "dob": "23/02/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101211": { "stt": "24", "name": "Trần Dương Mạnh", "dob": "31/08/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101212": { "stt": "25", "name": "Ngân Sắc Mây", "dob": "26/12/2004", "points": "64", "hd": "1. Đánh giá giảng viên" },
    "725101213": { "stt": "26", "name": "Bùi Thị Minh", "dob": "10/02/2004", "points": "85.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Hiến máu (ngày 20/2/2024)" },
    "725101214": { "stt": "27", "name": "Lại Vũ Minh", "dob": "28/09/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101215": { "stt": "28", "name": "Nghiêm Nguyệt Minh", "dob": "05/03/2004", "points": "85", "hd": "1. Đánh giá giảng viên\n2. Hiến máu (ngày 28/05/2024)" },
    "725101216": { "stt": "29", "name": "Nguyễn Thu Minh", "dob": "08/12/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101218": { "stt": "30", "name": "Trần Ánh Minh", "dob": "23/10/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101219": { "stt": "31", "name": "Trần Đức Minh", "dob": "10/10/2004", "points": "75", "hd": "1. Đánh giá giảng viên (chưa đủ môn)" },
    "725101220": { "stt": "32", "name": "Vũ Nguyễn Bảo Minh", "dob": "26/08/2004", "points": "81.5", "hd": "1. Đánh giá giảng viên" },
    "725101221": { "stt": "33", "name": "Hoàng Thị Trà My", "dob": "28/02/2004", "points": "84", "hd": "1. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n2. Đánh giá giảng viên" },
    "725101223": { "stt": "34", "name": "Đỗ Hải Nam", "dob": "01/01/2003", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101224": { "stt": "35", "name": "Hoàng Hải Nam", "dob": "27/07/2004", "points": "95", "hd": "1. Tham gia seminar các GS ĐH Hasselt (Bỉ), chiều ngày 28/05/2024\n2. Tham dự Đại hội đại biểu Liên chi Đoàn khoa Toán - Tin, nhiệm kỳ 2024 - 2027\n3. Tham gia Ngày hội việc làm\n4. Điền phiếu Khảo sát lấy ý kiến về phiếu rèn luyện\n5. GPA kì II đạt Xuất sắc\n6. Ngày hội HSSV các dân tộc Việt Nam\n7. Tham gia cuộc thi Rung chuông vàng: Ánh sáng soi đường - Tiếp bước ba sẵn sàng\n8. Quyên góp sách Thư viện \n9. Đánh giá giảng viên \n10. Tham gia Hội thao \"Thanh niên khỏe\" khoa Toán - Tin\n11. Tham gia cuộc thi Tìm hiểu về Đoàn Thanh niên Cộng sản Hồ Chí Minh\n12. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin\n13. Kiểm tra, đánh giá kết quả học tập Nghị quyết Đại hội đại biểu Toàn quốc Hội Sinh viên Việt Nam lần thứ XI, nhiệm kỳ 2023 - 2028 (44 điểm)\n14. Cổ vũ HNUE ENLISH\n15. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n16. Dạy học tình nguyện mùa hè xanh\n17. Hiến máu tình nguyện 2 lần " },
    "725101225": { "stt": "36", "name": "Triệu Hà Nam", "dob": "10/01/2004", "points": "", "hd": "" },
    "725101226": { "stt": "37", "name": "Trịnh Nhật Nam", "dob": "10/11/2004", "points": "84", "hd": "1. Đánh giá giảng viên\n2. Tham gia và tập luyện cùng CLB Bóng chuyền Khoa Toán - Tin" },
    "725101227": { "stt": "38", "name": "Vũ Hoài Nam", "dob": "20/03/2004", "points": "75", "hd": "1. Đánh giá giảng viên (chưa đủ thông tin)" },
    "725101228": { "stt": "39", "name": "Đặng Thị Nga", "dob": "19/03/2004", "points": "95", "hd": "1. Tham gia sự kiện \"Xuân an lành\" khoa Toán tin\n2. Ngày hội dân tộc\n3. GPA kì II đạt Xuất sắc\n4. Tham gia cô vũ HNUE English Challenge\n5. GCN giải nhì cuộc thi thiết kế áo \"Ecovision: Design for future\" khoa Toán tin\n6. GCN tham gia cuộc thi Rung chuông vàng KTX\n7. GCN tham gia sự kiện \"Đổi giấy lấy cây\" (Đội vì Môi trường)\n8. Tham gia Hội thao \"Thanh niên khỏe\" khoa Toán - Tin\n9. Đánh giá giảng viên \n10. Quyên góp sách Thư viện \n11. Ban tổ chức chương trình hiến máu Toàn trường \"Sắc vàng Hoàng Yến\"\n12. GCN tham gia hỗ trợ chương trình \" Tết học sinh, sinh viên KTX\"\n13. Thành viên CLB Thanh niên vận động hiến máu Trường ĐHSP Hà Nội (Hoạt động rất tích cực)\n14. Thành viên Đội Sinh viên tình nguyện KTX Trường ĐHSP Hà Nội\n15. GCN Kiểm tra, đánh giá kết quả học tập Nghị quyết Đại hội đại biểu Toàn quốc Hội Sinh viên Việt Nam lần thứ XII, nhiệm kỳ 2023 - 2028\n16. GCN TNV Tiếp sức mùa thi " },
    "725101229": { "stt": "40", "name": "Nguyễn Thị Nga", "dob": "07/09/2004", "points": "85", "hd": "1. Đánh giá giảng viên\n2. Tham gia Olympic Tiếng Anh \n3. GPA kì II đạt Xuất sắc" },
    "725101230": { "stt": "41", "name": "Nguyễn Thị Nga", "dob": "28/02/2003", "points": "84.5", "hd": "1. Đánh giá giảng viên\n2. GPA kì II đạt Xuất sắc" },
    "725101232": { "stt": "42", "name": "Nguyễn Thị Thúy Nga", "dob": "22/07/2003", "points": "84.5", "hd": "1. Đánh giá giảng viên\n2. GPA kì II đạt Xuất sắc" },
    "725101233": { "stt": "43", "name": "Nguyễn Thúy Nga", "dob": "19/08/2004", "points": "84.5", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Tham gia Hội thao \"Thanh niên khỏe\" khoa Toán - Tin (chưa đạt giải)\n4. Tham gia cuộc thi Tìm hiểu về Đoàn Thanh niên Cộng sản Hồ Chí Minh" },
    "725101234": { "stt": "44", "name": "Phạm Thu Nga", "dob": "05/05/2004", "points": "87.5", "hd": "1. Tham gia cuộc thi Tìm hiểu Nghị quyết Đại hội đại biểu toàn quốc Hội Sinh viên Việt Nam lần thứ XI, nhiệm kỳ 2023 - 2028 \n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. GPA kì II đạt Xuất sắc\n4. Đánh giá giảng viên\n5. Hiến máu tình nguyện tại Viện Huyết học- Truyền máu trung ương ngày 25/02/2024" },
    "725101235": { "stt": "45", "name": "Tạ Quỳnh Nga", "dob": "03/02/2004", "points": "93.5", "hd": "1. Tham gia CLB Triệt Quyền Đạo trường Đại học Sư phạm Hà Nội (hoạt động rất tích cực)\n2. Điền phiếu Khảo sát lấy ý kiến về phiếu rèn luyện\n3. Đội phó Đội bóng đá khoa Toán Tin\n4. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n5. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n6. GCN hoàn thành nội dung học tập Nghị quyết Đại hội Đoàn toàn quốc lần thứ XII, nhiệm kì 2022-2027\n7. GPA kì II đạt Xuất sắc\n8. Tham gia Hội Thao \"Thanh niên khỏe\" khoa Toán Tin (Đội 6 - Chạy tiếp sức)\n9. Tham gia cuộc thi Tìm hiểu Nghị quyết Đại hội đại biểu toàn quốc Hội Sinh viên Việt Nam lần thứ XI, nhiệm kỳ 2023 - 2028 \n10. Đánh giá giảng viên\n11. Tham dự Lễ kỉ niệm thành lập Đoàn tại trụ sở UBND phường Thổ Quan (số 62 ngõ Thổ Quan)\n12. Tham gia Đại hội đại biểu Hội liên hiệp Thanh niên Việt Nam phường Thổ Quan \n13. Tham gia ra quân vệ sinh môi trường quận Đống Đa ngày 29/06/2024\n14. Tham gia Lễ ra quân ngày Chủ Nhật Xanh lần thứ nhất năm 2024 của Đoàn TNCS Hồ Chí Minh phường Thổ Quan tại Trường Tiểu học Thái Thịnh\n15. Tham gia Dâng hương tại nhà bia đình Thổ Quan (kỉ niệm ngày Thương binh liệt sỹ 27/07)\n16. Tham gia hỗ trợ tổ chức hiến máu tại phường Thổ Quan (ngày 03/08/2024)" },
    "725101236": { "stt": "46", "name": "Lò Thị Kim Ngân", "dob": "11/01/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101237": { "stt": "47", "name": "Nguyễn Thị Ngân", "dob": "21/05/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Tham gia cuộc thi Tìm hiểu Nghị quyết Đại hội đại biểu toàn quốc Hội Sinh viên Việt Nam lần thứ XI nhiệm kì 2023- 2028" },
    "725101239": { "stt": "48", "name": "Trịnh Thị Hoàng Ngân", "dob": "09/08/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101240": { "stt": "49", "name": "Lê Kim Nghĩa", "dob": "24/10/1996", "points": "85", "hd": "1. Đánh giá giảng viên\n2. Tham gia đội Thanh niên tình nguyện kí túc xá (hoạt động rất tích cực)" },
    "725101241": { "stt": "50", "name": "Nguyễn Tuấn Nghĩa", "dob": "06/03/2004", "points": "95", "hd": "1. Cán bộ lớp tích cực (Lớp trưởng)\n2. Tham gia CLB Nghiệp vụ Sư phạm khoa Toán-Tin\n3. Tham gia CLB Nghệ thuật khoa Toán-Tin Maths and Melody\n4. Tham gia cuộc thi Liên hoan ca khúc thanh niên 2024\n5. BTC cuộc thi \"Khơi nguồn cảm hứng học toán\"\n6. Đánh giá giảng viên\n7. Tham gia cô vũ HNUE English Challenge\n8. Tham gia Talkshow \"Tạo động lực trong dạy và học\"\n9. Tham gia BIGGAME7 của CLB CTC\n10. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam" },
    "725101242": { "stt": "51", "name": "Đậu Thị Bích Ngọc", "dob": "08/03/2004", "points": "83", "hd": "1. Đánh giá giảng viên" },
    "725101243": { "stt": "52", "name": "Kiều Bích Ngọc", "dob": "23/09/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên\n2. Thành viên CLB nghiệp vụ sư phạm khoa Toán - Tin" },
    "725101244": { "stt": "53", "name": "Lê Ánh Ngọc", "dob": "13/04/2004", "points": "85.5", "hd": "1. Đánh giá giảng viên\n2. Tham gia Ngày hội việc làm\n3. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n4. GPA kì II đạt Xuất sắc" },
    "725101245": { "stt": "54", "name": "Nguyễn Bảo Ngọc", "dob": "09/11/2004", "points": "85", "hd": "1. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Tham gia ngày hội việc làm\n4. Đánh giá giảng viên" },
    "725101246": { "stt": "55", "name": "Nguyễn Đoàn Bích Ngọc", "dob": "20/09/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên \n2. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin" },
    "725101247": { "stt": "56", "name": "Nguyễn Thị Hồng Ngọc", "dob": "01/12/2004", "points": "83.5", "hd": "1. Đánh giá giảng viên \n2. Tham gia tọa đàm NCKH đối với sinh viên khoa Toán - Tin" },
    "725101248": { "stt": "57", "name": "Nguyễn Thị Minh Ngọc", "dob": "25/10/2004", "points": "87.5", "hd": "1. Đánh giá giảng viên\n2. GPA kì II đạt Xuất sắc\n3. Kiểm tra, đánh giá kết quả học tập Nghị quyết Đại hội đại biểu Toàn quốc Hội Sinh viên Việt Nam lần thứ XI, nhiệm kỳ 2023 - 2028\n4. Tích cực tham gia CLB Dạy học tình nguyện\n5. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n6. Tham gia Ngày hội việc làm" },
    "725101375": { "stt": "58", "name": "Đinh Trọng Nghĩa", "dob": "19/03/2001", "points": "88", "hd": "1. Đánh giá giảng viên\n2. Kiểm tra, đánh giá việc học tập lý luận chính trị trên App Thanh niên Việt Nam\n3. Tham gia CLB Dạy học tình nguyện\n4. Cán bộ lớp tích cực (Phó bí thư)\n5. Tham dự Đại hội đại biểu Liên chi Đoàn khoa Toán - Tin, nhiệm kỳ 2024 - 2027\n6. Tham gia cuộc thi Tìm hiểu về Đoàn Thanh niên Cộng sản Hồ Chí Minh" },
};

function lookupStudent() {
    const studentId = document.getElementById('studentId').value.toUpperCase();
    const student = students[studentId] || { stt: '', name: '', dob: '', points: '', hd: '' };
    document.getElementById('number').innerText = student.stt;
    document.getElementById('studentName').innerText = student.name;
    document.getElementById('studentDOB').innerText = student.dob;
    document.getElementById('studentPoints').innerText = student.points;
    document.getElementById('activities').innerText = student.hd;

    const diemInputs = document.querySelectorAll('.diem-input');
    if (document.getElementById('studentName').innerText === '') {
        check_acts.textContent = '';
        diemInputs.forEach(function(input) {
            input.disabled = true;
            input.value = '';
        });
    } else {
        check_acts.textContent = 'Bạn vui lòng kiểm tra lại các hoạt động rèn luyện của mình trước khi lưu thông tin:';
        diemInputs.forEach(function(input) {
            input.disabled = false;
        });
    }
}
