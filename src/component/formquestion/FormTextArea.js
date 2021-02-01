import React, { Component } from 'react'

export default class FormTextArea extends Component {
    render() {
        return (
            <div>
                <div className="mb-3">
                   
                    <label htmlFor="exampleFormControlInput4" className="form-label">Soal</label>
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
