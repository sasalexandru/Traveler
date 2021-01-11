package sas.traveler.accommodation.entity;


import javax.persistence.*;

@Entity(name = "hotels")
public class HotelEntity {

    @Id
    @GeneratedValue(generator = "HotelSeq")
    @SequenceGenerator(name = "HotelSeq", sequenceName = "hotel_id_seq", allocationSize = 1)
    @Column(name = "hotel_id")
    private Long id;
    @Column(name = "hotel_name")
    private String hotelName;
    @Column(name = "hotel_description" , length = 1024)
    private String hotelDescription;
    @Column(name = "hotel_address")
    private String address;
    @Column(name = "hotel_image")
    private String hotelImage;
    @Column(name = "hotel_url")
    private String hotelUrl;
    @Column(name = "type")
    private String type;
    @Column(name = "picByte", length = 1000)
    private byte[] picByte;

    public HotelEntity(){

    }

    public HotelEntity(String hotelName, String address ,String hotelDescription , String hotelImage , String hotelUrl, String type, byte[] picByte){
        this.hotelName = hotelName;
        this.address = address;
        this.hotelDescription = hotelDescription;
        this.hotelImage = hotelImage;
        this.hotelUrl = hotelUrl;
        this.type = type;
        this.picByte = picByte;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getHotelDescription() {
        return hotelDescription;
    }

    public void setHotelDescription(String hotelDescription) {
        this.hotelDescription = hotelDescription;
    }

    public String getHotelImage() {
        return hotelImage;
    }

    public void setHotelImage(String hotelImage) {
        this.hotelImage = hotelImage;
    }

    public String getHotelUrl() {
        return hotelUrl;
    }

    public void setHotelUrl(String hotelUrl) {
        this.hotelUrl = hotelUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getPicByte() {
        return picByte;
    }

    public void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    @Override
    public String toString() {
        return "HotelEntity{" +
                "id=" + id +
                ", hotelName='" + hotelName + '\'' +
                ", address='" + address + '\'' +
                ", hotelDescription='" + hotelDescription + '\'' +
                ", hotelImage='" + hotelImage + '\'' +
                ", hotelUrl='" + hotelUrl + '\'' +
                '}';
    }
}
