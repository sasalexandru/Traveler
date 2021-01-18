package sas.traveler.restaurants.entity;


import javax.persistence.*;


@Entity(name = "restaurants")
public class RestaurantEntity {

    @Id
    @GeneratedValue(generator = "RestaurantSeq")
    @SequenceGenerator(name = "RestaurantSeq", sequenceName = "restaurant_id_seq", allocationSize = 1)
    @Column(name = "restaurant_id")
    private Long id;
    @Column(name = "restaurant_name")
    private String restaurantName;
    @Column(name = "restaurant_address")
    private String restaurantAddress;
    @Column(name = "restaurant_image")
    private String restaurantImage;
    @Column(name = "restaurant_url")
    private String restaurantUrl;
    @Column(name = "type")
    private String type;
    @Column(name = "picByte", length = 1000)
    private byte[] picByte;


    public RestaurantEntity(){

    }

    public RestaurantEntity(String restaurantName, String restaurantAddress , String restaurantImage , String restaurantUrl, String type, byte[] picByte){
        this.restaurantName = restaurantName;
        this.restaurantAddress = restaurantAddress;
        this.restaurantImage = restaurantImage;
        this.restaurantUrl = restaurantUrl;
        this.type = type;
        this.picByte = picByte;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantAddress() {
        return restaurantAddress;
    }

    public void setRestaurantAddress(String restaurantAddress) {
        this.restaurantAddress = restaurantAddress;
    }

    public String getRestaurantImage() {
        return restaurantImage;
    }

    public void setRestaurantImage(String restaurantImage) {
        this.restaurantImage = restaurantImage;
    }

    public String getRestaurantUrl() {
        return restaurantUrl;
    }

    public void setRestaurantUrl(String restaurantUrl) {
        this.restaurantUrl = restaurantUrl;
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
        return "RestaurantEntity{" +
                "id=" + id +
                ", restaurantName='" + restaurantName + '\'' +
                ", restaurantAddress='" + restaurantAddress + '\'' +
                ", restaurantImage='" + restaurantImage + '\'' +
                ", restaurantUrl='" + restaurantUrl + '\'' +
                '}';
    }
}
