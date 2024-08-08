const students = {
    "001": { "stt": "01", "name": "Nguyen Van A", "dob": "01/01/2000", "points": "0", "hd": "- Hoạt động một\n- Hoạt động \"hai\"" },
    "002": { "stt": "02", "name": "Tran Thi B", "dob": "02/02/2001", "points": "10", "hd": "- Hoạt động một\n- Hoạt động \"hai\"" },
    "003": { "stt": "03", "name": "Le Van C", "dob": "03/03/2002", "points": "10", "hd": "- Hoạt động một\n- Hoạt động \"hai\"\n- Hoạt động ba" },
    "725101187": { "stt": "1", "name": "Trần Thị Phương Linh", "dob": "16/02/2004", "points": "84.5", "hd": "1. Tham gia NVSP cấp khoa (Đội 4 - Thi giảng - Giải ba)\n2. Tham gia tích cực NVSP cấp lớp (10 điểm)\n3. Tham gia cuộc thi Tìm hiểu pháp luật trực tuyến - Tìm hiểu Luật Giáo dục\n4. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n5. Tham gia sự kiện Ngày thẻ Việt Nam \n6. Đạt giấy khen Sinh viên Giỏi \n7. Điền phiếu đánh giá giảng viên" },
    "725101188": { "stt": "2", "name": "Vũ Phan Diệu Linh", "dob": "26/03/2003", "points": "90", "hd": "1. Tham gia NVSP khoa (Đội 4 - Sân Khấu Hóa - Giải nhất)\n2. Cán bộ lớp tích cực (Bí thư)\n3. Tham gia tích cực NVSP lớp (10 điểm)\n4. Tham gia cuộc thi Tìm hiểu pháp luật trực tuyến - Tìm hiểu Luật Giáo dục\n5. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n6. Tham gia sự kiện Ngày thẻ Việt Nam \n7. CTV Đêm hội chào tân 2023 - 2024 \n8. Đạt giấy khen Sinh viên Giỏi \n9. Tham gia Mùa hè xanh (Tiếp sức đến trường) \n10. Điền phiếu đánh giá giảng viên " },
    "725101189": { "stt": "3", "name": "Vũ Thị Mỹ Linh", "dob": "02/11/2003", "points": "79.5", "hd": "1. Tham gia tích cực NVSP cấp lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên " },
    "725101190": { "stt": "4", "name": "Lê Bích Loan", "dob": "21/06/2004", "points": "80", "hd": "1. Tham gia sự kiện Ngày thẻ Việt Nam\n2. Tham gia NVSP lớp (10 điểm)\n3. Tham gia cuộc thi Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến \n4. Điền phiếu đánh giá giảng viên" },
    "725101191": { "stt": "5", "name": "Lèo Văn Lợi", "dob": "28/01/2004", "points": "76.5", "hd": "1. Không điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"" },
    "725101192": { "stt": "6", "name": "Lê Tuấn Long", "dob": "16/11/2003", "points": "77.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia NVSP lớp (8 điểm)\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n4. Tham gia giải đá bóng khoa Toán-Tin" },
    "725101193": { "stt": "7", "name": "Lý A Lùng", "dob": "12/12/2004", "points": "85", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia NVSP lớp (10 điểm)\n4. Tham gia giải đá bóng khoa Toán-Tin\n5. Tham gia hiến máu (17/9/2023)" },
    "725101194": { "stt": "8", "name": "Lò Hoàng Nhật Ly", "dob": "10/10/2004", "points": "81", "hd": "1. Cán bộ lớp tích cực (Lớp phó)\n2. Tham gia CLB thanh niên vận động hiến máu trường ĐHSPHN\n3. Tham gia NVSP lớp (10 điểm)\n4. Tham gia NVSP khoa (Đội 4 - Sân Khấu Hóa - Giải nhất)\n5. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n6. Tham gia nhảy Dance Storm 1 vòng\n7. Không điền phiếu đánh giá giảng viên\n8. Tham gia tích cực chương trình Spooky Night" },
    "725101195": { "stt": "9", "name": "Nguyễn Khánh Ly", "dob": "23/05/2004", "points": "79.5", "hd": "1. Tham gia NVSP lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên" },
    "725101196": { "stt": "10", "name": "Nguyễn Thị Hương Ly", "dob": "10/03/2003", "points": "82", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia NVSP lớp (10 điểm)\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến \"" },
    "725101197": { "stt": "11", "name": "Nguyễn Thị Phương Ly", "dob": "20/01/2004", "points": "82", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n3. Tham gia NVSP lớp (9 điểm)" },
    "725101199": { "stt": "12", "name": "Lê Thị Lý", "dob": "11/10/2004", "points": "86.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia NVSP lớp (10 điểm)\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n4. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"\n5. Đạt giấy khen Sinh viên Giỏi\n6. Tham gia Ngày thẻ Việt Nam\n7. Hiến máu (28/11/2023)" },
    "725101200": { "stt": "13", "name": "Nguyễn Thị Lý", "dob": "05/07/2004", "points": "83", "hd": "1. Cán bộ lớp tích cực (Lớp phó)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Đạt giấy khen Sinh viên Giỏi \n4. Tổ chức và tham gia tích cực Lễ kỷ niệm ngày NGVN và Hội thi NVSP cấp lớp (Giấy khen)\n5. Điền phiếu đánh giá giảng viên" },
    "725101201": { "stt": "14", "name": "Đoàn Nguyễn Xuân Mai", "dob": "28/08/2004", "points": "82", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia NVSP cấp lớp" },
    "725101202": { "stt": "15", "name": "Hoàng Thị Ngọc Mai", "dob": "24/09/2004", "points": "82", "hd": "1. Tham gia NVSP cấp lớp\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về định danh điện tử và Dịch vụ công trực tuyến\n3. Điền phiếu đánh giá giảng viên" },
    "725101203": { "stt": "16", "name": "Lại Ngọc Mai", "dob": "26/07/2004", "points": "83.5", "hd": "1. Tham gia Hội thi NVSP cấp khoa (Đội 4 - Giải Nhất phần thi Sân khấu hóa)\n2. Tham gia cuộc thi Tìm hiểu pháp luật trực tuyến - Tìm hiểu Luật Giáo dục\n3. Điền phiếu đánh giá giảng viên\n4. Tham gia biểu diễn diễn cuộc thi Dance Storm 2023 (Giải khuyến khích)\n5. Tham gia NVSP cấp lớp\n6. Tham gia CLB Nghệ thuật khoa Toán - Tin Maths and Melody (Thành viên Ban Nhảy)" },
    "725101204": { "stt": "17", "name": "Lê Phương Mai", "dob": "18/11/2004", "points": "87", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia Ngày thẻ Việt nam\n3. Tham gia thi \" Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n4. Tham gia CLB NVSP khoa Toán - Tin\n5. BTC Đêm hội chào tân 2023 (Giấy chứng nhận)\n6. Tham gia nghiệp vụ sư phạm lớp\n7. Tham gia CLB kĩ năng\n8. Đạt giấy khen Sinh viên Giỏi\n9. Cán bộ lớp tích cực (Ủy viên)" },
    "725101205": { "stt": "18", "name": "Ngô Thị Mai", "dob": "10/11/2004", "points": "87.5", "hd": "1. Tham gia CLB Thanh niên vận động hiến máu Trường Đại học Sư phạm Hà Nội\n2. Tham gia Hội thi NVSP cấp khoa (Đội 4 - Giải Nhất phần thi Sân khấu hóa)\n3. Điền phiếu đánh giá giảng viên\n4. Tham gia cuộc thi Dance Storm 2023 (Giấy khen)\n5. Thành tích xuất sắc trong chương trình SOOKY NIGHT (Giấy khen)\n6. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n7. Tham gia NVSP lớp (10 điểm)\n8. Đạt giấy khen Sinh viên Giỏi\n9. CTV Đêm hội chào tân 2023 (lớp K72A5)\n10. Tham gia chương trình hiến máu tình nguyện Người Việt Trẻ 2023" },
    "725101206": { "stt": "19", "name": "Nguyễn Thị Mai", "dob": "21/03/2004", "points": "82.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n4. Tham gia NVSP Lớp" },
    "725101207": { "stt": "20", "name": "Vũ Hiền Mai", "dob": "18/03/2004", "points": "82.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia NVSP cấp lớp\n3. Đạt giấy khen Sinh viên Giỏi\n4. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n5. Hiến máu (28/11/2023)" },
    "725101208": { "stt": "21", "name": "Vương Nhật Mai", "dob": "19/10/2004", "points": "82", "hd": "1. Tham gia NVSP cấp lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên" },
    "725101209": { "stt": "22", "name": "Nguyễn Tiến Mạnh", "dob": "04/07/2004", "points": "79.5", "hd": "1. Tham gia NVSP cấp lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên" },
    "725101210": { "stt": "23", "name": "Nguyễn Xuân Mạnh", "dob": "23/02/2004", "points": "82.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia tích cực NVSP cấp lớp (10 điểm)\n4. Tham gia cỗ vũ giải bóng đá" },
    "725101211": { "stt": "24", "name": "Trần Dương Mạnh", "dob": "31/08/2004", "points": "84.5", "hd": "1. Tham gia \"Ngày thẻ Việt Nam\"\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia cuộc thi Tìm hiểu Luật Giáo Dục\n4. Tham gia tích cực NVSP lớp (10 điểm)\n5. Đạt giấy khen sinh viên Giỏi\n6. Điền phiếu đánh giá giảng viên" },
    "725101212": { "stt": "25", "name": "Ngân Sắc Mây", "dob": "26/12/2004", "points": "82", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia tích cực NVSP (10 điểm)" },
    "725101213": { "stt": "26", "name": "Bùi Thị Minh", "dob": "10/02/2004", "points": "84.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Đạt giấy khen sinh viên Giỏi\n3. Tham gia NVSP lớp (10 điểm)\n4. Hiến máu 03/12/2023" },
    "725101214": { "stt": "27", "name": "Lại Vũ Minh", "dob": "28/09/2004", "points": "80.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia NVSP lớp\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n4. Đạt giấy khen sinh viên Giỏi\n5. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"" },
    "725101215": { "stt": "28", "name": "Nghiêm Nguyệt Minh", "dob": "05/03/2004", "points": "82", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia tích cực NVSP lớp (10 điểm)\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"" },
    "725101216": { "stt": "29", "name": "Nguyễn Thu Minh", "dob": "08/12/2004", "points": "81", "hd": "1. Tham gia CLB dạy học tình nguyện\n2. Điền phiếu đánh giá giảng viên\n3. Đạt giấy khen sinh viên Giỏi\n4. Tham gia tích cực NVSP lớp" },
    "725101218": { "stt": "30", "name": "Trần Ánh Minh", "dob": "23/10/2004", "points": "83", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Đạt giấy khen sinh viên Giỏi\n4. Tham gia tích cực NVSP lớp" },
    "725101219": { "stt": "31", "name": "Trần Đức Minh", "dob": "10/10/2004", "points": "79.5", "hd": "1. Điền phiếu đánh giá giảng viên \n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n3. Tham gia NVSP cấp lớp (10 điểm)" },
    "725101220": { "stt": "32", "name": "Vũ Nguyễn Bảo Minh", "dob": "26/08/2004", "points": "82.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Cộng tác viên sự kiện Đêm hội chào tân 2023\n3. Tham gia NVSP cấp lớp (10 điểm)" },
    "725101221": { "stt": "33", "name": "Hoàng Thị Trà My", "dob": "28/02/2004", "points": "86.5", "hd": "1. Điền đánh giá giảng viên\n2. Tham gia cuộc thi \"Tuổi trẻ học tập và làm theo tư tưởng, đạo đức, phong cách HCM\"\n3. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n4. Tham gia NVSP cấp lớp (10 điểm)\n5. Đạt giấy khen Sinh viên Giỏi\n6. Cổ vũ bóng đá, bóng chuyền khoa Toán - Tin\n7. Hiến máu (2/12/2023)" },
    "725101223": { "stt": "34", "name": "Đỗ Hải Nam", "dob": "01/01/2003", "points": "83", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n3. Đạt giấy khen Sinh viên Giỏi\n4. Tham gia NVSP cấp lớp (10 điểm)" },
    "725101224": { "stt": "35", "name": "Hoàng Hải Nam", "dob": "27/07/2004", "points": "85", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia NVSP cấp lớp (10 điểm)\n3. Đạt giấy khen Sinh viên Giỏi\n4. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n5. Tham gia hiến máu tình nguyện (2/10/2023) " },
    "725101225": { "stt": "36", "name": "Triệu Hà Nam", "dob": "10/01/2004", "points": "82.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia tích cực NVSP cấp lớp\n4. Tham gia cổ vũ giải bóng đá khoa Toán - Tin" },
    "725101226": { "stt": "37", "name": "Trịnh Nhật Nam", "dob": "10/11/2004", "points": "87.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia và tập luyện cùng CLB bóng chuyền khoa Toán-Tin\n3. Tham gia giải bóng đá bóng chuyền năm học 2023-2024 (Đội bóng đá nam khoa Toán Tin)\n4. Tham gia NVSP cấp lớp (10 điểm)\n5. Đạt giấy khen Sinh viên Giỏi\n6. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"\n7. Tham gia hiến máu tình nguyện (5/1/2024)" },
    "725101227": { "stt": "38", "name": "Vũ Hoài Nam", "dob": "20/03/2004", "points": "81.5", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"" },
    "725101228": { "stt": "39", "name": "Đặng Thị Nga", "dob": "19/03/2004", "points": "88.5", "hd": "1. Điền phiếu đánh giá giảng viên \n2. Tham gia NVSP cấp lớp (10 điểm)\n3. Tham gia thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"\n4. Đạt giấy khen Sinh viên Giỏi\n5. Tham gia cổ vũ bóng đá khoa\n6. Tham gia nghiệp vụ sư phạm khoa Toán - tin (Đội 4, phần thi Sân khấu hóa)\n7. Tham gia CLB Thanh niên vận động hiến máu \n8. Giấy chứng nhận chương trình \"SPOOKY NIGHT\"\n9. Tham gia Đội SVTN KTX" },
    "725101229": { "stt": "40", "name": "Nguyễn Thị Nga", "dob": "07/09/2004", "points": "80.5", "hd": "1. Điền phiếu đánh giá giảng viên \n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Đạt giấy khen Sinh viên Giỏi\n4. Tham gia tích cực NVSP cấp lớp (10 điểm)" },
    "725101230": { "stt": "41", "name": "Nguyễn Thị Nga", "dob": "28/02/2003", "points": "82", "hd": "1. Tham gia NVSP lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên" },
    "725101232": { "stt": "42", "name": "Nguyễn Thị Thúy Nga", "dob": "22/07/2003", "points": "83", "hd": "1. Tham gia NVSP lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Đạt giấy khen Sinh viên Giỏi\n4. Điền phiếu đánh giá giảng viên" },
    "725101233": { "stt": "43", "name": "Nguyễn Thúy Nga", "dob": "19/08/2004", "points": "84.5", "hd": "1. Tham gia NVSP lớp (10 điểm)\n2. Tham gia cuộc thi Tìm hiểu pháp luật trực tuyến - Tìm hiểu Luật Giáo dục\n3. Tham gia cuộc thi \"Nét bút tri ân - Chuyện Nghề giáo\"\n4. Điền phiếu đánh giá giảng viên\n5. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n6. Đạt giấy khen Sinh viên Giỏi\n7. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"" },
    "725101234": { "stt": "44", "name": "Phạm Thu Nga", "dob": "05/05/2004", "points": "80.5", "hd": "1. Tham gia NVSP lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n3. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"\n4. Tham gia sự kiện Ngày thẻ Việt Nam\n5. Điền phiếu đánh giá giảng viên" },
    "725101235": { "stt": "45", "name": "Tạ Quỳnh Nga", "dob": "03/02/2004", "points": "87.5", "hd": "1. Tham gia tích cực NVSP lớp (10 điểm)\n2. Điền phiếu đánh giá giảng viên\n3. Tham gia CLB Triệt Quyền Đạo trường ĐH Sư phạm Hà Nội\n4. Tham gia giải bóng đá bóng chuyền năm học 2023-2024 (Đội bóng đá nữ khoa Toán-Tin)\n5. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n6. Tham gia cổ vũ giải bóng đá, bóng chuyền giải bóng đá bóng chuyền năm học 2023 - 2024\n7. Đạt giấy khen Sinh viên Giỏi\n8. Tham gia giải bóng đá khoa Toán Tin năm học 2023-2024 (Đội bóng K72)" },
    "725101236": { "stt": "46", "name": "Lò Thị Kim Ngân", "dob": "11/01/2004", "points": "82", "hd": "1. Tham gia CLB Thanh niên vận động hiến máu Trường ĐHSPHN\n2. Tham gia NVSP lớp (10 điểm)\n3. Tham gia sự kiện Ngày thẻ Việt Nam\n4. Điền phiếu đánh giá giảng viên" },
    "725101237": { "stt": "47", "name": "Nguyễn Thị Ngân", "dob": "21/05/2004", "points": "83.5", "hd": "1. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n2. Tham gia cổ vũ giải bóng đá trường\n3. Tham gia NVSP lớp (10 điểm)\n4. Tham gia sự kiện Ngày thẻ Việt Nam\n5. Điền phiếu đánh giá giảng viên" },
    "725101239": { "stt": "48", "name": "Trịnh Thị Hoàng Ngân", "dob": "09/08/2004", "points": "82", "hd": "1. Tham gia NVSP lớp (10 điểm)\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên." },
    "725101240": { "stt": "49", "name": "Lê Kim Nghĩa", "dob": "24/10/1996", "points": "85", "hd": "1. Tham gia tích cực NVSP lớp (Giấy khen)\n2. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và dịch vụ công trực tuyến\"\n3. Điền phiếu đánh giá giảng viên\n4. Tham gia CLB dạy học tình nguyện\n5. Tham gia đội Sinh viên tình nguyện KTX\n6. Cỗ vũ Bóng chuyền" },
    "725101241": { "stt": "50", "name": "Nguyễn Tuấn Nghĩa", "dob": "06/03/2004", "points": "97", "hd": "1. Cán bộ lớp tích cực (Lớp trưởng)\n2. Tham gia CLB Nghiệp vụ Sư phạm khoa Toán-Tin\n3. Tham gia CLB Nghệ thuật khoa Toán-Tin (Trưởng ban Thanh nhạc - Nhạc cụ)\n4. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n5. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"\n6. Tham gia chương trình \"Shape of Math 7\" (Đội 15)\n7. Thành viên BTC Đêm hội chào tân 2023 (Giấy chứng nhận)\n8. Tham gia Hội thi NVSP cấp khoa (Đội trưởng Đội 4 - Giải Nhất phần thi Sân khấu hóa)\n9. Tổ chức và tham gia tích cực Lễ kỷ niệm ngày NGVN và Hội thi NVSP cấp lớp (Giấy khen)\n10. Tham gia biểu diễn chương trình \"Dance Storm 2023\" (đội Khoa Toán-Tin)\n11. Tham gia biểu diễn Hội diễn Kỷ niệm 41 năm ngày NGVN (đội Khoa Toán-Tin - giải B)\n12. Có thành tích xuất sắc trong Tháng Thi đua năm học 2023 - 2024 (Giấy khen)\n13. Tham gia cuộc thi Tìm hiểu pháp luật trực tuyến - Tìm hiểu Luật Giáo dục\n14. Đạt giấy khen Sinh viên Giỏi\n15. Điền phiếu đánh giá giảng viên\n16. Tham gia biểu diễn hòa nhạc Concert: Hạ Vũ (ngày 12/11/2023)" },
    "725101242": { "stt": "51", "name": "Đậu Thị Bích Ngọc", "dob": "08/03/2004", "points": "80", "hd": "1. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n2. Điền phiếu đánh giá giảng viên\n3. Tham gia CLB Thanh niên vận động hiến máu Trường ĐHSP Hà Nội\n4. Tham gia Lễ kỷ niệm ngày NGVN và Hội thi NVSP cấp lớp" },
    "725101243": { "stt": "52", "name": "Kiều Bích Ngọc", "dob": "23/09/2004", "points": "83.5", "hd": "1. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n2. Tham gia ngày thẻ Việt Nam\n3. Điền phiếu đánh giá giảng viên\n4. Tham gia CLB nghiệp vụ sư phạm khoa Toán-Tin\n5. Tham gia Lễ kỷ niệm ngày NGVN và Hội thi NVSP cấp lớp" },
    "725101244": { "stt": "53", "name": "Lê Ánh Ngọc", "dob": "13/04/2004", "points": "83.5", "hd": "1. Tham gia cuộc thi \"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh\"\n2. Tham gia Ngày thẻ Việt Nam\n3. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n4. Tham gia tích cực NVSP cấp lớp \n5. Đạt giấy khen Sinh viên Giỏi\n6. Điền phiếu đánh giá giảng viên" },
    "725101245": { "stt": "54", "name": "Nguyễn Bảo Ngọc", "dob": "09/11/2004", "points": "83.5", "hd": "1. Tham gia cuộc thi \"Tìm hiểu pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n2. Tham gia Ngày thẻ Việt Nam\n3. Tham gia NVSP lớp (10 điểm)\n4. Đạt giấy khen Sinh viên Giỏi\n5. Điền phiếu đánh giá giảng viên" },
    "725101246": { "stt": "55", "name": "Nguyễn Đoàn Bích Ngọc", "dob": "20/09/2004", "points": "77.5", "hd": "1. Tham gia cuộc thi \"Tìm hiểu pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n2. Tham gia Ngày thẻ Việt Nam\n3. Tham gia Lễ kỷ niệm ngày NGVN và Hội thi NVSP cấp lớp\n4. Điền phiếu đánh giá giảng viên" },
    "725101247": { "stt": "56", "name": "Nguyễn Thị Hồng Ngọc", "dob": "01/12/2004", "points": "83.5", "hd": "1. Tham gia cuộc thi \"Tìm hiểu Pháp luật về Định danh điện tử và Dịch vụ công trực tuyến\"\n2. Điền phiếu đánh giá giảng viên\n3. Tham gia Ngày thẻ Việt Nam\n4. Đạt giấy khen Sinh viên Giỏi\n5. Tham gia tích cực NVSP cấp lớp " },
    "725101248": { "stt": "57", "name": "Nguyễn Thị Minh Ngọc", "dob": "25/10/2004", "points": "84", "hd": "1. Điền phiếu đánh giá giảng viên\n2. Tham gia Ngày thẻ Việt Nam\n3. Tham gia cuộc thi Tìm hiểu về định danh điện tử và dịch vụ công trực tuyến\n4. Tham gia tích cực NVSP cấp lớp (10 điểm)\n5. Đạt giấy khen Sinh viên Giỏi\n6. Tích cực tham gia CLB Dạy học tình nguyện\n7. Hiến máu (ngày 09/09/2023)" },
    "725101375": { "stt": "58", "name": "Đinh Trọng Nghĩa", "dob": "19/03/2001", "points": "87.5", "hd": "1. Cán bộ lớp tích cực (Phó bí thư)\n2. Tham gia chương trình \"Shape of math 7\" (Đội 15)\n3. Tham gia CLB Dạy học tình nguyện\n4. Điền phiếu đánh giá giảng viên\n5. Tổ chức và tham gia tích cực Lễ kỷ niệm ngày NGVN và Hội thi NVSP cấp lớp (Giấy khen)\n6. Tham gia Chiến dịch thanh niên tình nguyện hè 2023\n7. Tham gia cuộc thi \"Tìm hiểu pháp luật về định danh điện tử và Dịch vụ công trực tuyến\"" },
};

function lookupStudent() {
    const studentId = document.getElementById('studentId').value.toUpperCase();
    const student = students[studentId] || { stt: '', name: '', dob: '', points: '', hd: '' };
    document.getElementById('number').innerText = student.stt;
    document.getElementById('studentName').innerText = student.name;
    document.getElementById('studentDOB').innerText = student.dob;
    document.getElementById('studentPoints').innerText = student.points;
    document.getElementById('activities').innerText = student.hd;
    if (document.getElementById('activities').innerText === '') {
        check_acts.textContent = '';
    } else {
        check_acts.textContent = 'Bạn vui lòng kiểm tra lại các hoạt động rèn luyện của mình trước khi lưu thông tin:';
    }
}