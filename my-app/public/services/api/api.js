const dataSource1 = [
  {
    title: "Paul Pogba",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SOgPMG_PLrF6CBqVh00QTSkEeNGOzDe-NA&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Được coi là một trong những cầu thủ xuất sắc nhất thế giới và là một
       trong những cầu thủ vĩ đại nhất mọi thời đại, người dìu dắt kante trưởng thành như bây giờ. Anh khiến mọi người 
       phải quên đi những tiền vệ hào hoa của bóng đá thế giới trước đây như zidane, pirlo, scholes, beckham,...`,
  },
  {
    title: "Yaya Toure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcwcZp7c4K8gjBG-v28k-KscK_jUN1gwMHA&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Tiền vệ trung tâm đẳng cấp thế giới, máy quét tuyến giữa, anh xứng đáng lọt top 
       những tiền vệ xuất sắc nhất thế giới trong lịch sử, to cao nhưng kĩ thuật anh đã dạy pattrick viera 
       thế nào là tiền vệ trung tâm đẳng cấp thế giới`,
  },
  {
    title: "Cristiano Ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIwoxbHToc9VYf1d_wlOSIKZM1ZUvGzwMPQ&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất mọi thời đại,
        mang trong mình dòng máu quỷ đỏ, tinh thần chiến binh, hội tụ mọi phẩm chất của 1 huyền thoại bóng đá thế
        giới. Người giành được QBV bằng chính năng lực của mình. Anh đã dạy cho henry biết nếu chạy nhanh được 
        quả bóng vàng thì bale đã có 3 quả.`,
  },
  {
    title: "Leo Messi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZ1R3pZV-8dF3pfPwGwAGkTuc69dcDWy4BQ&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất bóng đá chile
       . Anh đã góp công lớn vào chức vô địch Copa America năm 2016. Và từ đó 1 huyền thoại bóng đá chile được ra đời
       sau này anh còn nhiều biệt danh khác nổi tiếng như : sa tị, đi bộ vuốt râu, cậu cả của UEFALONA`,
  },
  {
    title: "Neymar Jr",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkE6-SMyR29TkLCbuvQOJ-0JVqpRniB1ILA&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Một trong những vũ công samba còn sót lại của bóng đá thế giới, việc thi đấu xuất sắc nhất Barca trong
      nhiều năm nhưng người được QBV lại là Messi, Neymar đã quyết định rời sang PSG để không chịu cảnh "Thằng hầu", tưởng
      thoát khỏi kiếp thằng hầu nhưng năm 2021 anh vẫn không thoát được khi vẫn phải gánh huyền thoại đi bộ khi Messi đã đến PSG`,
  },
  {
    title: "Bruno Fernandes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToWofHBsuDkpIOBwRTCu_009X7pZix6ZkVQ&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Nhạc trưởng của quỷ đỏ, sau khi học hỏi được kinh nghiệm từ Pogba bây giờ ở MU anh đang đóng vai nhạc trưởng
    của bầy quỷ. Chuyển đến Ngoại Hạng Anh từ Sporting Lisbon anh đã khiến Kevin tiến bộ rất nhiều, 
    người ta còn hay ví Bruno là "sư phụ của Kevin".`,
  },
  {
    title: "Kevin De Bruyne",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf_Ykk3UZ6B0E-q5OgWLEInho_PzzexewaQ&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Tiền vệ tài hoa bậc nhất làng túc cầu hiện nay với 1 tên gọi khác đó chính là "tiểu Bruno", nổi lên từ năm
    2014 nhưng thời điểm đó Kevin vẫn bị cái bóng của Pogba quá lớn che mờ, mãi đến sau này khi gặp được Bruno tiền vệ 
    này mới có cơ hội được xếp chung mâm với Huyền thoại Pogba.`,
  },
  {
    title: "Robin Van Persie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dtBKgNqZWsAan07k_6BLGJ2R1z66lPdowQ&usqp=CAU",
    author: "BLV Ngọc Anh",
    content: `Ông vua 1 chạm của bóng đá thế giới, tiền đạo cắm số 1 tại Ngoại Hạng Anh nhiều năm. Đơn giản vì anh
    đẳng cấp khiến người hâm mộ phải nhớ đến khi phải xem những hậu đạo hiện nay như Benzema,Morata hay Lukaku.`,
  },
  {
    title: "Michael Carrick",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTZR7loewcMm6Ked_WmApo15D15bZjyt_hw&usqp=CAU",
    content: `Người mệnh danh là kẻ cầm trịch xuất sắc nhất mọi thời đại, linh hồn quỷ đỏ qua nhiều năm. Đội tuyển Anh
    đã có thể vô địch WC nếu Carrick cầm trịch tuyến giữa thay vì sử dụng cùng lúc Lampard và Gerrard. `,
  },
  {
    title: "Kylian Mbappé",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3n32vZ2KS219sZd5XeHT8gn-isp79GoVs7g&usqp=CAU",
    content: `"Cậu bé vàng phải gánh người mua bóng vàng" đấy chính là Kylian Mbappé - cầu thủ trẻ xuất sắc nhất thế giới.
    Trên tuyển phải gánh Benzema người không làm gì sắp sửa được QBV 2022, về câu lạc bộ phải gánh người mua QBV đi bộ 
    vuốt râu, thế nên đấy là lí do anh được mệnh danh là cậu bé vàng không chỉ vì anh được cúp vàng khi mới 19 tuổi.`,
  },
  {
    title: "Ronaldo De Lima",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMqkrrhWGccLAFXCk9qZqyskLuyINRd3EAg&usqp=CAU",
    content: `Người ngoài hành tinh của bóng đá thế giới`,
  },
  {
    title: "Nemanja Vidic",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkZ8NZZbiVEnKiuW8uLKsn2fd1LckSNa9fA&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "Wayne Rooney",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjv1wZWfkZRKeV-kEki_2CTEgGEBLzZm8KFA&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "Rio Ferdinand",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzipQ5hky6Y49mvQKygQpe8meTarJtQJBJQA&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "David Silva",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLTM5BfJdJ9uHYtpy4iVFlSFAwF2sQlLD3A&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "Edwin van der Sar",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_TPWw12BVh2j1sng3jytLu8ciqf8Mretiw&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "Vicent Kompany",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeZJtsI_J5aQDHUQnmUI9gduuGYCAQUo40g&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "Mesut Ozil",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuL9WbvTnL21vDGcngSJjh-M7ipWI4pNEQmg&usqp=CAU",
    content: `Máu quỷ `,
  },
  {
    title: "Nicolas Klose",
    author: "BLV Ngọc Anh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuktD5oYwDNCCW3MdCzzaNpG_sLmAYgxQ9Q&usqp=CAU",
    content: `Máu quỷ `,
  },
];

const dataSource2 = [
  {
    title: "Paul Pogba",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SOgPMG_PLrF6CBqVh00QTSkEeNGOzDe-NA&usqp=CAU",
    price: "60 triệu €",
    age: 1993,
    nationality: "Pháp",
  },
  {
    title: "Yaya Toure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcwcZp7c4K8gjBG-v28k-KscK_jUN1gwMHA&usqp=CAU",
    price: "40 triệu €",
    age: 1971,
    nationality: "Bờ Biển Ngà",
  },
  {
    title: "Cristiano Ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIwoxbHToc9VYf1d_wlOSIKZM1ZUvGzwMPQ&usqp=CAU",
    price: "90 triệu €",
    age: 1985,
    nationality: "Bồ Đào Nha",
  },
  {
    title: "Leo Messi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZ1R3pZV-8dF3pfPwGwAGkTuc69dcDWy4BQ&usqp=CAU",
    price: "80 triệu €",
    age: 1987,
    nationality: "Argentina",
  },
  {
    title: "Neymar Jr",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkE6-SMyR29TkLCbuvQOJ-0JVqpRniB1ILA&usqp=CAU",
    price: "70 triệu €",
    age: 1990,
    nationality: "Brazil",
  },
  {
    title: "Bruno Fernandes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToWofHBsuDkpIOBwRTCu_009X7pZix6ZkVQ&usqp=CAU",
    price: "60 triệu €",
    age: 1994,
    nationality: "Bồ Đào Nha",
  },
  {
    title: "Kevin De Bruyne",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNf_Ykk3UZ6B0E-q5OgWLEInho_PzzexewaQ&usqp=CAU",
    price: "60 triệu €",
    age: 1992,
    nationality: "Bỉ",
  },
  {
    title: "Robin Van Persie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dtBKgNqZWsAan07k_6BLGJ2R1z66lPdowQ&usqp=CAU",
    price: "50 triệu €",
    age: 1973,
    nationality: "Hà Lan",
  },
  {
    title: "Michael Carrick",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTZR7loewcMm6Ked_WmApo15D15bZjyt_hw&usqp=CAU",
    price: "50 triệu €",
    age: 1973,
    nationality: "Anh",
  },
  {
    title: "Kylian Mbappé",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3n32vZ2KS219sZd5XeHT8gn-isp79GoVs7g&usqp=CAU",
    price: "90 triệu €",
    age: 1999,
    nationality: "Pháp",
  },
  {
    title: "Ronaldo De Lima",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMqkrrhWGccLAFXCk9qZqyskLuyINRd3EAg&usqp=CAU",
    price: "50 triệu €",
    age: 1975,
    nationality: "Brazil",
  },
];

const team = [
  {
    title: "MU đang trở lại, thách thức mọi đội bóng tại Ngoại Hạng Anh",
    date: 14,
    content: `Được coi là một trong những cầu thủ xuất sắc nhất thế giới và là một
       trong những cầu thủ vĩ đại nhất mọi thời đại, người dìu dắt kante trưởng thành như bây giờ. Anh khiến mọi người 
       phải quên đi những tiền vệ hào hoa của bóng đá thế giới trước đây như zidane, pirlo, scholes, beckham,...`,
  },
  {
    title:
      "Son Heung-min có thể phát triển tiếp hay cũng chỉ là cái bóng của huyền thoại Ji Sung Park",
    content: `Tiền vệ trung tâm đẳng cấp thế giới, máy quét tuyến giữa, anh xứng đáng lọt top 
       những tiền vệ xuất sắc nhất thế giới trong lịch sử, to cao nhưng kĩ thuật anh đã dạy pattrick viera 
       thế nào là tiền vệ trung tâm đẳng cấp thế giới`,
  },
  {
    title: "Cristiano Ronaldo",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất mọi thời đại,
        mang trong mình dòng máu quỷ đỏ, tinh thần chiến binh, hội tụ mọi phẩm chất của 1 huyền thoại bóng đá thế
        giới. Người giành được QBV bằng chính năng lực của mình. Anh đã dạy cho henry biết nếu chạy nhanh được 
        quả bóng vàng thì bale đã có 3 quả.`,
  },
  {
    title: "Leo Messi",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất bóng đá chile
       . Anh đã góp công lớn vào chức vô địch Copa America năm 2016. Và từ đó 1 huyền thoại bóng đá chile được ra đời
       sau này anh còn nhiều biệt danh khác nổi tiếng như : sa tị, đi bộ vuốt râu, cậu cả của UEFALONA`,
  },
  {
    title: "Neymar Jr",
    content: `Một trong những vũ công samba còn sót lại của bóng đá thế giới, việc thi đấu xuất sắc nhất Barca trong
      nhiều năm nhưng người được QBV lại là Messi, Neymar đã quyết định rời sang PSG để không chịu cảnh "Thằng hầu", tưởng
      thoát khỏi kiếp thằng hầu nhưng năm 2021 anh vẫn không thoát được khi vẫn phải gánh huyền thoại đi bộ khi Messi đã đến PSG`,
  },
  {
    title: "Bruno Fernandes",
    content: `Nhạc trưởng của quỷ đỏ, sau khi học hỏi được kinh nghiệm từ Pogba bây giờ ở MU anh đang đóng vai nhạc trưởng
    của bầy quỷ. Chuyển đến Ngoại Hạng Anh từ Sporting Lisbon anh đã khiến Kevin tiến bộ rất nhiều, 
    người ta còn hay ví Bruno là "sư phụ của Kevin".`,
  },
  {
    title: "Kevin De Bruyne",
    content: `Tiền vệ tài hoa bậc nhất làng túc cầu hiện nay với 1 tên gọi khác đó chính là "tiểu Bruno", nổi lên từ năm
    2014 nhưng thời điểm đó Kevin vẫn bị cái bóng của Pogba quá lớn che mờ, mãi đến sau này khi gặp được Bruno tiền vệ 
    này mới có cơ hội được xếp chung mâm với Huyền thoại Pogba.`,
  },
  {
    title: "Robin Van Persie",
    content: `Ông vua 1 chạm của bóng đá thế giới, tiền đạo cắm số 1 tại Ngoại Hạng Anh nhiều năm. Đơn giản vì anh
    đẳng cấp khiến người hâm mộ phải nhớ đến khi phải xem những hậu đạo hiện nay như Benzema,Morata hay Lukaku.`,
  },
  {
    title: "Michael Carrick",
    content: `Người mệnh danh là kẻ cầm trịch xuất sắc nhất mọi thời đại, linh hồn quỷ đỏ qua nhiều năm. Đội tuyển Anh
    đã có thể vô địch WC nếu Carrick cầm trịch tuyến giữa thay vì sử dụng cùng lúc Lampard và Gerrard. `,
  },
  {
    title: "Kylian Mbappé",
    content: `"Cậu bé vàng phải gánh người mua bóng vàng" đấy chính là Kylian Mbappé - cầu thủ trẻ xuất sắc nhất thế giới.
    Trên tuyển phải gánh Benzema người không làm gì sắp sửa được QBV 2022, về câu lạc bộ phải gánh người mua QBV đi bộ 
    vuốt râu, thế nên đấy là lí do anh được mệnh danh là cậu bé vàng không chỉ vì anh được cúp vàng khi mới 19 tuổi.`,
  },
  {
    title: "Ronaldo De Lima",
    content: `Người ngoài hành tinh của bóng đá thế giới`,
  },
];

export { dataSource1, dataSource2, team };
