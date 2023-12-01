import React from 'react'
import Image from 'next/image'


const TempleteCard = ({title, image}) => {

    return (
        // <div className="card" key={item.id}>
        //     <Image 
        //         width={210}
        //         height={300}
        //         src={image}
        //         alt="card-image"
        //     />
        //     <p>{title}</p>
        // </div>
        <div className="card">
            <Image 
                width={210}
                height={300}
                src="https://www.vietnamworks.com/assets-wowcv/images/list_templates/cv_template_33.png"
                alt="card-image"
            />
            <p>Mới tốt nghiệp[1năm] Mẫu HRBP cho người mới</p>
    </div>
    )
}

export default TempleteCard