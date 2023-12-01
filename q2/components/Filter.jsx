'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import $ from 'jquery'

const Filter = ({ filter, setFilter }) => {

    console.log(filter);

    useEffect(() => {

        $(document).ready(() => {
            const ul = document.querySelector(".body__tabs-wrapper ul"),
            input = ul.querySelector("input"),
            countNumb = document.querySelector(".details span");

            let maxTags = 10;
            let tags = [];

            countTag();

            function countTag() {
                input.focus();
                countNumb.innerText = maxTags - tags.length;
            }

            function remove(element, tag) {
                let index = tags.indexOf(tag);
                tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
                element.parentElement.remove();
                countTag();
            }

            function createTag() {
                ul.querySelectorAll("li").forEach(li => li.remove());
                tags.slice().reverse().forEach(tag => {
                    let liTag = `<li>${tag}<i ="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
                    ul.insertAdjacentHTML("afterbegin", liTag);
                })
                countTag();
            }

            function addTag(e) {
                if(e.key == "Enter") {
                    let tag = e.target.value.replace(/\s+/g, ' ');
                    if(tag.length > 1 && !tags.includes(tag)) {
                        if(tags.length < 10) {
                            tag.split(',').forEach(tag => {
                                tags.push(tag);
                                createTag();
                            });
                        }
                    }

                    e.target.value = "";
                }
            }

            input.addEventListener("keyup", addTag);

            const removeBtn = document.querySelector("button");
            removeBtn.addEventListener("click", () => {
                tags.length = 0;
                tags = [];
                ul.querySelectorAll("li").forEach(li => li.remove());
                countTag();
            })
        })
    })


    return (
        <div className="body__filter">
            <Image 
                width={200}
                height={50}
                className="image-logo"
                src="https://dev_home.recruitery.co/assets/img/logo-text.png" alt="image-logo" 
            />
            <div className="body__tabs">
                <input 
                    type="radio" 
                    className="tabs__radio" 
                    name="role" 
                    id="tab1" 
                    defaultChecked
                />
                <label htmlFor="tab1" className="tabs__label">
                    <i className="fa-solid fa-user fa-beat fa-2xs" style={{color:'#5cc2db'}}></i>
                    Mẫu theo công việc
                </label>
                <div className="body__tabs-wrapper">
                    <div className="title">
                        <h2>Vai trò</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <input type="text" />
                        </ul>
                    </div>
                    <div className="details">
                        <p><span>_</span> tags còn được nhập</p>
                        <button type="button">Xoá hết</button>
                    </div>
                </div>
                <div className="body__tabs-wrapper">
                    content tabs 2
                </div>
            </div>
        </div>
    )
}

export default Filter