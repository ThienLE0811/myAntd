const dataSource1 = [
  {
    title: "Pogba",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SOgPMG_PLrF6CBqVh00QTSkEeNGOzDe-NA&usqp=CAU",
    content: `Được coi là một trong những cầu thủ xuất sắc nhất thế giới và là một
       trong những cầu thủ vĩ đại nhất mọi thời đại, người dìu dắt kante trưởng thành như bây giờ. Anh khiến mọi người 
       phải quên đi những tiền vệ hào hoa của bóng đá thế giới trước đây như zidane, pirlo, scholes, beckham,...`,
  },
  {
    title: "Yaya Toure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcwcZp7c4K8gjBG-v28k-KscK_jUN1gwMHA&usqp=CAU",
    content: `Tiền vệ trung tâm đẳng cấp thế giới, máy quét tuyến giữa, anh xứng đáng lọt top 
       những tiền vệ xuất sắc nhất thế giới trong lịch sử, to cao nhưng kĩ thuật anh đã dạy pattrick viera 
       thế nào là tiền vệ trung tâm đẳng cấp thế giới`,
  },
  {
    title: "Ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIwoxbHToc9VYf1d_wlOSIKZM1ZUvGzwMPQ&usqp=CAU",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất mọi thời đại,
        mang trong mình dòng máu quỷ đỏ, tinh thần chiến binh, hội tụ mọi phẩm chất của 1 huyền thoại bóng đá thế
        giới. Anh đã dạy cho henry biết nếu chạy nhanh được quả bóng vàng thì bale đã có 3 quả.`,
  },
  {
    title: "Messi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZ1R3pZV-8dF3pfPwGwAGkTuc69dcDWy4BQ&usqp=CAU",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất bóng đá chile
       . Anh đã góp công lớn vào chức vô địch Copa America năm 2016. Và từ đó 1 huyền thoại bóng đá chile được ra đời
       sau này anh còn nhiều biệt danh khác nổi tiếng như : sa tị, đi bộ vuốt râu, cậu cả của UEFALONA`,
  },
  {
    title: "Neymar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkE6-SMyR29TkLCbuvQOJ-0JVqpRniB1ILA&usqp=CAU",
    content: `Một trong những vũ công samba còn sót lại của bóng đá thế giới, việc thi đấu xuất sắc nhất Barca trong
      nhiều năm nhưng người được QBV lại là Messi, Neymar đã quyết định rời sang PSG để không chịu cảnh "Thằng hầu", tưởng
      thoát khỏi kiếp thằng hầu nhưng năm 2021 anh vẫn không thoát được khi vẫn phải gánh huyền thoại đi bộ khi Messi đã đến PSG`,
  },
];

const dataSource2 = [
  {
    title: "Pogba",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SOgPMG_PLrF6CBqVh00QTSkEeNGOzDe-NA&usqp=CAU",
    content: `Được coi là một trong những cầu thủ xuất sắc nhất thế giới và là một
       trong những cầu thủ vĩ đại nhất mọi thời đại, người dìu dắt kante trưởng thành như bây giờ. Anh khiến mọi người 
       phải quên đi những tiền vệ hào hoa của bóng đá thế giới trước đây như zidane, pirlo, scholes, beckham,...`,
  },
  {
    title: "Yaya Toure",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcwcZp7c4K8gjBG-v28k-KscK_jUN1gwMHA&usqp=CAU",
    content: `Tiền vệ trung tâm đẳng cấp thế giới, máy quét tuyến giữa, anh xứng đáng lọt top 
       những tiền vệ xuất sắc nhất thế giới trong lịch sử, to cao nhưng kĩ thuật anh đã dạy pattrick viera 
       thế nào là tiền vệ trung tâm đẳng cấp thế giới`,
  },
  {
    title: "Ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIwoxbHToc9VYf1d_wlOSIKZM1ZUvGzwMPQ&usqp=CAU",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất mọi thời đại,
        mang trong mình dòng máu quỷ đỏ, tinh thần chiến binh, hội tụ mọi phẩm chất của 1 huyền thoại bóng đá thế
        giới. Anh đã dạy cho henry biết nếu chạy nhanh được quả bóng vàng thì bale đã có 3 quả.`,
  },
  {
    title: "Messi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZ1R3pZV-8dF3pfPwGwAGkTuc69dcDWy4BQ&usqp=CAU",
    content: `Huyền thoại bóng đá thế giới và là một trong những cầu thủ vĩ đại nhất bóng đá chile
       . Anh đã góp công lớn vào chức vô địch Copa America năm 2016. Và từ đó 1 huyền thoại bóng đá chile được ra đời
       sau này anh còn nhiều biệt danh khác nổi tiếng như : sa tị, đi bộ vuốt râu, cậu cả của UEFALONA`,
  },
  {
    title: "Neymar",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPkE6-SMyR29TkLCbuvQOJ-0JVqpRniB1ILA&usqp=CAU",
    content: `Một trong những vũ công samba còn sót lại của bóng đá thế giới, việc thi đấu xuất sắc nhất Barca trong
      nhiều năm nhưng người được QBV lại là Messi, Neymar đã quyết định rời sang PSG để không chịu cảnh "Thằng hầu", tưởng
      thoát khỏi kiếp thằng hầu nhưng năm 2021 anh vẫn không thoát được khi vẫn phải gánh huyền thoại đi bộ khi Messi đã đến PSG`,
  },
];

export { dataSource1, dataSource2 };
