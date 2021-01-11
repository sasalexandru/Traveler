package sas.traveler.festivals.entity;

import javax.persistence.*;


@Entity(name = "festivals")
public class FestivalEntity {



    @Id
    @GeneratedValue(generator = "FestivalSeq")
    @SequenceGenerator(name = "FestivalSeq", sequenceName = "festival_id_seq", allocationSize = 1)
    @Column(name = "festival_id")
    private long id;
    @Column(name = "festival_name")
    private String festivalName;
    @Column(name = "festival_description")
    private String festivalDescription;
    @Column(name = "festival_image")
    private String festivalImage;
    @Column(name = "type")
    private String type;
    @Column(name = "picByte", length = 1000)
    private byte[] picByte;

    public FestivalEntity(){

    }



    public FestivalEntity(String festivalImage,String type, byte[] picByte){

        this.festivalImage = festivalImage;
        this.type = type;
        this.picByte = picByte;


    }

    public FestivalEntity(String festivalName, String festivalDescription, String festivalImage, String type, byte[] picByte) {
        this.festivalName = festivalName;
        this.festivalDescription = festivalDescription;
        this.festivalImage = festivalImage;
        this.type = type;
        this.picByte = picByte;


    }



    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFestivalName() {
        return festivalName;
    }

    public void setFestivalName(String festivalName) {
        this.festivalName = festivalName;
    }

    public String getFestivalDescription() {
        return festivalDescription;
    }

    public void setFestivalDescription(String festivalDescription) {
        this.festivalDescription = festivalDescription;
    }

    public String getFestivalImage() {
        return festivalImage;
    }

    public void setFestivalImage(String festivalImage) {
        this.festivalImage = festivalImage;
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
        return "FestivalEntity{" +
                "id=" + id +
                ", festivalName='" + festivalName + '\'' +
                ", festivalDescription='" + festivalDescription + '\'' +
                ", festivalImage='" + festivalImage + '\'' +
                '}';
    }
}
