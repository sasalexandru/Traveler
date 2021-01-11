package sas.traveler.places.entity;


import javax.persistence.*;

@Entity
@Table(name = "places")
public class PlacesEntity {

    @Id
    @GeneratedValue(generator = "PlaceSeq")
    @SequenceGenerator(name = "PlaceSeq", sequenceName = "place_id_seq", allocationSize = 1)
    @Column(name = "place_id")
    private long id;
    @Column(name = "place_name")
    private String placeName;
    @Column(name = "place_address")
    private String placeAddress;
    @Column(name = "place_description", length = 1024)
    private String placeDescription;
    @Column(name = "place_image")
    private String placeImage;
    @Column(name = "type")
    private String type;
    @Column(name = "picByte", length = 1000)
    private byte[] picByte;

    public PlacesEntity(){

    }
    public PlacesEntity(String placeName , String placeAddress , String placeDescription , String placeImage , String type , byte[] picByte){
        this.placeName = placeName;
        this.placeAddress = placeAddress;
        this.placeDescription = placeDescription;
        this.placeImage = placeImage;
        this.type = type;
        this.picByte = picByte;
    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getPlaceAddress() {
        return placeAddress;
    }

    public void setPlaceAddress(String placeAddress) {
        this.placeAddress = placeAddress;
    }

    public String getPlaceDescription() {
        return placeDescription;
    }

    public void setPlaceDescription(String placeDescription) {
        this.placeDescription = placeDescription;
    }

    public String getPlaceImage() {
        return placeImage;
    }

    public void setPlaceImage(String placeImage) {
        this.placeImage = placeImage;
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
        return "PlacesEntity{" +
                "id=" + id +
                ", placeName='" + placeName + '\'' +
                ", placeAddress='" + placeAddress + '\'' +
                ", placeDescription='" + placeDescription + '\'' +
                ", placeImage='" + placeImage + '\'' +
                '}';
    }
}
