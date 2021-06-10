import React from 'react'
import Layout from "./components/Layout"
import Project from "./components/Project"

import monathem from '../images/projects/monathem.png'
import khodarwabahar from '../images/projects/khodarwabahar.png'
import binothaymeen from '../images/projects/binothaymeen.png'
import erteqaa from '../images/projects/erteqaa.png'
import mastorahbr from '../images/projects/mastorahbr.png'
import konasha from '../images/projects/konasha.png'
import NSPROJECT from '../images/projects/NSPROJECT.png'


export default function Projects() {
    return (
        <Layout>
            <div className="py-20 bg-light-lightBG dark:bg-gray-900 transition duration-500">
                <div className="text-center text-light-primary dark:text-gray-50 font-bold text-5xl mb-10">
                    المشاريع
                </div>
                <Project title="المنظم" desc="موقع باستخدام VUE & LARAVEL لتنظيم المهام ووضع
                موعد لها ورؤية المواعيد بشكل بسيط ومنظم" link="https://monathem.herokuapp.com" image={monathem} />
                <Project title="موقع حلقة جامع بن عثيمين بجدة" desc="موقع لمتابعة حصاد الطلاب. يتكون من صفحة خاصة بالطالب يسجل فيها انجازه، وصفحة خاصة بالمعلم لمتابعة طلاب حلقته" link="https://khodarwabahar.com/" image={binothaymeen}  disabled ="true"/>
                <Project title="خضار وبهار" desc="(غير مكتمل) موقع لبيع الخضروات والفواكه مع خاصية الدفع عند الاستلام" link="https://khodarwabahar.com/" image={khodarwabahar}/>
                <Project title="متجر جمعية البر بمستورة" desc="أضفت المتجر الى الموقع، مع بوابة الدفع تقبل مدى، أبل باي، فيزا" link="http://mastorahbr.org.sa/shop/ " image={mastorahbr} />
                <Project title="ارتقاء التصميم للمقاولات العامة" desc="موقع مؤسسة مقاولات عامة. يعرض خدماتهم وصور مشاريعهم" link="http://erteqaa.co/en/home-2/" image={erteqaa} />
                <Project title="تصميم كناشة الفوائد" desc="تصميم واجهة UI لتطبيق كناشة الفوائد" link="#" image={konasha} disabled="true" />
                <Project title="تصميم مشروع مركز الحي" desc="تصميم نموذج أولي لمشروع مركز الحي" link="#" image={NSPROJECT} disabled="true" />

            </div>
        </Layout> 
    )
}
