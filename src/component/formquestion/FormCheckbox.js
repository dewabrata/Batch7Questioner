import React, { Component } from 'react'

export default class FormCheckbox extends Component {
    render() {
        return (
            <div>
                    
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Jawaban A</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Masukan Soal" />
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput2" className="form-label">Jawaban B</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Masukan Soal" />
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput3" className="form-label">Jawaban C</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Masukan Soal" />
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput4" className="form-label">Jawaban D</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Masukan Soal" />
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput4" className="form-label">Kunci Jawaban</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Masukan Kunci Jawaban" />
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleFormControlInput4" className="form-label">Score</label>
                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Masukan Score Nilai" />
                </div>
            </div>
        )
    }
}
