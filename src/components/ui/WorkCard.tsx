import { WorkDataDto } from '@/dto/data-dto';
import React from 'react';

interface WorkCardProp {
    item: WorkDataDto;
}

const WorkCard: React.FC<WorkCardProp> = ({ item }) => {
    const { title, description, image, isNew } = item;
    return (
        <div className='cursor-pointer w-full'>
            <img className='w-full object-cover' src={image} alt={title} />
            <div className='my-2 flex items-center'>
                <p className='font-extrabold text-2xl'>{title.toLocaleUpperCase()}</p>
                <div className={`${isNew ? 'block' : 'hidden'} px-[3px] pt-[4px] rounded-[0.2vw] ml-2 bg-primary-orange flex items-center`}>
                    <p className={`text-xs font-bold text-primary-bg`}>NEW</p>
                </div>
            </div>
            <p className='text-[1vw]'>{description}</p>
        </div>
    );
};

export default WorkCard;