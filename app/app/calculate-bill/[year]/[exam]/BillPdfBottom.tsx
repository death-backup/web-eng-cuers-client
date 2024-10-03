import {Text, View} from "@react-pdf/renderer";

interface BillPdfBottomProps {
    styles: any
}

export default function BillPdfBottom({styles}: BillPdfBottomProps) {
    return (
        <View style={styles.bottomPart}>
            <View style={styles.sign1}>
                <Text style={styles.indSign}>
                    .......................................................
                    {"\n"}
                    প্রতি স্বাক্ষর, সভাপতি, পরীক্ষা কমিটি
                </Text>
                <Text style={styles.indSign}>
                    .......................... {"\n"}
                    পরীক্ষকের স্বাক্ষর
                </Text>
            </View>
            <View style={styles.sign1}>
                <Text
                    style={[
                        styles.indSign,
                        {
                            marginLeft: "-130px",
                        },
                    ]}
                >
                    (সীলমোহর))
                </Text>
            </View>
            <View>
                <Text style={styles.writing}>
                    বিষয়.......................................................................................................................{" "}
                    {"\n"}
                    পরীক্ষা................................................................................................................................................................{" "}
                    {"\n"}
                    প্রফেসর/ড./জনাব......................................................................................................................................................................................................................কে
                    মোট =
                    ...........................................................
                    টাকা{" "}
                </Text>
                <Text style={[styles.indSign, {marginLeft: "40px"}]}>
                    (কথায়)......................................................................................................................................................................................................................................................................মাত্র
                    প্রদান করুন।
                </Text>
                <Text>বিল সংশ্লিষ্ট চেক বুঝে পেলাম।</Text>
            </View>
            <View
                style={[
                    styles.sign1,
                    {
                        marginTop: "10px",
                    },
                ]}
            >
                <Text style={styles.indSign}>
                    ........................................... {"\n"}
                    তারিখসহ গ্রহণকারীর স্বাক্ষর{" "}
                </Text>
                <Text style={styles.indSign}>
                    ...................{"\n"}
                    বিল সহকারী{" "}
                </Text>
                <Text style={styles.indSign}>
                    .......................... {"\n"}
                    সেকশন অফিসার
                </Text>

                <Text style={styles.indSign}>
                    ...................................... {"\n"}
                    উপ-পরীক্ষা নিয়ন্ত্রক, চ.বি.{" "}
                </Text>
            </View>
            <View>
                <Text>
                    .....................................................................................................................................................................................................................................................................................................................................
                </Text>
            </View>
            <View
                style={[
                    styles.sign1,
                    {
                        marginTop: "5px",
                    },
                ]}
            >
                <Text>পরীক্ষার পারিতোষিক বিল প্রাপ্তি স্বীকার </Text>
            </View>
            <View>
                <Text style={styles.writing}>
                    বিষয়...........................................................................................................................................................................পরীক্ষা.....................................................................................................................................................
                </Text>
                <Text>
                    প্রফেসর/ড./জনাব.....................................................................................................................................................................................................................................................................................................................কে
                </Text>
                <Text>
                    মোট=...................................................................................টাকা(কথায়.................................................................................................................................................................................................)
                    প্রদান করা হল।{" "}
                </Text>{" "}
            </View>
            <View style={styles.sign2}>
                <Text>
                    .....................................................
                    {"\n"}
                    হিসাব নিয়ামক/উপ-হিসাব নিয়ামক
                </Text>
            </View>
        </View>
    );
}