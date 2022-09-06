## Phát biểu định lý
> Trong một hệ thống phân tán hoặc kho dữ liệu bất kì. chỉ có thể có 2 trong 3 đặc tính mong muốn: Nhất quán (Consistency), Khả dụng (Availibility), Dung sai phân vùng (Partition tolerance). => Khi thiết kế hệ thống phân tán, tùy vào đặc điểm ứng dụng mà lựa chọn ưu tiên lấy đặc tính nào. 

## Hệ thống phân tán 
Là mạng lưu trữ dữ liệu trên nhiều node(máy ảo) cùng 1 lúc. 
## Tính Nhất Quán 
Tại cùng 1 thời điểm, dữ liệu tại mọi máy khách nhìn thấy phải như nhau. Bất cứ khi nào dữ liệu được ghi vào tại 1 node, nó phải được đồng bộ (sao chép) ngay lập tức vơi các node trong hệ thống.       

## Tính khả dụng 
Bất kì máy khách nào đưa yêu cầu đều phải nhận được phản hồi. 

## Dung sai phân vùng    
Khi có sự đứt gãy liên lạc(phân tách partition) trong hệ phân tán, 2 node bị mất kết nối... Cụm phân tán đó vẫn phải đảm bảo hoạt động dù có sự cố giao tiếp nào xảy ra 


