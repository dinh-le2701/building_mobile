import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable} from 'react-native';
import { styles } from '@component/styles/rulesStyles';
import AntDesign from '@expo/vector-icons/AntDesign';

const RuleStaff = ({ navigation }) => {
  return (
    <View style={styles.container}>
         {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerText}>Chi Tiết Nội Quy</Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>NỘI QUY DÀNH CHO NHÂN VIÊN LÀM VIỆC TRONG TÒA NHÀ CHUNG CƯ</Text>
        
        <Text style={styles.sectionTitle}>I. MỤC ĐÍCH</Text>
        <Text style={styles.text}>
          Nội quy này nhằm đảm bảo môi trường làm việc chuyên nghiệp, an toàn, sạch sẽ và đảm bảo quyền lợi 
          cho cư dân sinh sống trong tòa nhà.
        </Text>
        
        <Text style={styles.sectionTitle}>II. QUY ĐỊNH CHUNG</Text>
        <Text style={styles.subTitle}>1. Giờ làm việc:</Text>
        <Text style={styles.text}>
          - Nhân viên phải tuân thủ đúng thời gian làm việc được quy định.{"\n"}
          - Giờ làm việc ngoài giờ hoặc làm thêm phải được sự cho phép của quản lý.
        </Text>
        <Text style={styles.subTitle}>2. Trang phục và tác phong:</Text>
        <Text style={styles.text}>
          - Nhân viên phải mặc đồng phục được cấp phát (nếu có) hoặc trang phục gọn gàng, lịch sự.{"\n"}
          - Thái độ làm việc tích cực, lễ phép và hòa nhã với cư dân cũng như đồng nghiệp.
        </Text>
        <Text style={styles.subTitle}>3. Quy định ra/vào:</Text>
        <Text style={styles.text}>
          - Nhân viên phải xuất trình thẻ nhân viên khi ra/vào tòa nhà.{"\n"}
          - Không tự ý đưa người lạ vào tòa nhà hoặc sử dụng khu vực không được phép.
        </Text>
        
        <Text style={styles.sectionTitle}>III. AN TOÀN VÀ VỆ SINH</Text>
        <Text style={styles.subTitle}>1. An toàn lao động:</Text>
        <Text style={styles.text}>
          - Tuân thủ nghiêm ngặt các quy định về an toàn lao động.{"\n"}
          - Báo cáo ngay cho quản lý khi phát hiện sự cố hoặc nguy cơ mất an toàn.
        </Text>
        <Text style={styles.subTitle}>2. Vệ sinh khu vực làm việc:</Text>
        <Text style={styles.text}>
          - Giữ vệ sinh chung, không xả rác bừa bãi.{"\n"}
          - Thu gom và phân loại rác đúng nơi quy định.
        </Text>
        
        <Text style={styles.sectionTitle}>IV. TRÁCH NHIỆM VÀ QUYỀN HẠN</Text>
        <Text style={styles.subTitle}>1. Trách nhiệm:</Text>
        <Text style={styles.text}>
          - Hoàn thành công việc được giao đúng thời hạn và tiêu chuẩn.{"\n"}
          - Không tự ý rời bỏ vị trí khi chưa được sự đồng ý của quản lý.
        </Text>
        <Text style={styles.subTitle}>2. Quyền hạn:</Text>
        <Text style={styles.text}>
          - Nhân viên có quyền báo cáo và kiến nghị về các vấn đề phát sinh trong công việc.{"\n"}
          - Được hưởng các quyền lợi theo hợp đồng lao động và quy định của công ty.
        </Text>
        
        <Text style={styles.sectionTitle}>V. HÀNH VI CẤM</Text>
        <Text style={styles.subTitle}>1. Không được:</Text>
        <Text style={styles.text}>
          - Sử dụng chất kích thích, rượu bia trong giờ làm việc.{"\n"}
          - Cãi vã, gây mất trật tự, hoặc có hành vi xúc phạm cư dân/đồng nghiệp.{"\n"}
          - Tự ý sử dụng tài sản của tòa nhà mà không được phép.
        </Text>
        <Text style={styles.subTitle}>2. Hình thức xử lý vi phạm:</Text>
        <Text style={styles.text}>
          - Nhân viên vi phạm nội quy sẽ bị nhắc nhở, cảnh cáo, hoặc kỷ luật tùy theo mức độ vi phạm.
        </Text>
        
        <Text style={styles.sectionTitle}>VI. ĐIỀU KHOẢN THI HÀNH</Text>
        <Text style={styles.text}>
          - Nội quy này có hiệu lực từ ngày ký và áp dụng cho toàn bộ nhân viên làm việc tại tòa nhà.{"\n"}
          - Tất cả nhân viên phải ký xác nhận đã đọc, hiểu và cam kết tuân thủ nội quy này.
        </Text>
        
        <Text style={styles.footer}>Quản lý tòa nhà (Ký và đóng dấu)</Text>
      </ScrollView>
      </View>
  );
};


export default RuleStaff;


