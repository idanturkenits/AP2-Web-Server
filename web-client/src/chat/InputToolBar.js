import React, { useRef } from 'react'
import Message from '../classes/Message';

function InputToolBar({ addMessage }) {
    let messageInputRef = useRef(null);
    let sendByEnter = function (event) {
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("sendBtn").click();
        }
    }

    let addVideoMessage = function () {
        const chooseFile = document.getElementById("video_upload_btn");
        var src = URL.createObjectURL(chooseFile.files[0]);
        addMessage('video', src, chooseFile.files[0].name);
    }

    let addImageMessage = function () {
        const chooseFile = document.getElementById("image_upload_btn");
        var src = URL.createObjectURL(chooseFile.files[0]);
        addMessage('image', src, chooseFile.files[0].name);
    }
    let addFileMessage = function () {
        const chooseFile = document.getElementById("file_upload_btn");
        var src = URL.createObjectURL(chooseFile.files[0]);
        addMessage('file', src, chooseFile.files[0].name);
    }

    var mediaRecorder = null;
    let stopRecording = () => {
        if (mediaRecorder!=null)
            mediaRecorder.stop();
        document.getElementById('closeRecordingBtn').click();
    };

    let startRecording = function () {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream)
                mediaRecorder.start();

                const audioChunks = [];
                mediaRecorder.addEventListener("dataavailable", event => {
                    audioChunks.push(event.data);
                });

                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    addMessage('audio', audioUrl, 'audio');
                    stream.getTracks().forEach( track => track.stop() );
                });
            }
            );
    }

    return (
        <div className="d-flex justify-content-between">
            <span className="btn-group dropup">
                <button type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-paperclip"></i>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <label className="upload">
                            <div className="dropdown-item">
                                <i className="bi bi-card-image me-2"></i>
                                Image
                                <input id="image_upload_btn" type="file" className="me-2 input_hidden" onChange={() => addImageMessage()} accept="image/*"></input>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label className="upload">
                            <div className="dropdown-item">
                                <i className="bi bi-file-earmark-play me-2"></i>
                                Video
                                <input id="video_upload_btn" type="file" className="me-2 input_hidden" onChange={() => addVideoMessage()} accept="video/*"></input>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label className="upload">
                            <div className="dropdown-item">
                                <i className="bi bi-file-earmark me-2"></i>
                                File
                                <input id="file_upload_btn" type="file" className="me-2 input_hidden" onChange={() => addFileMessage()} accept="file/*"></input>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label className="upload">
                            <div className="dropdown-item" data-bs-toggle="modal" data-bs-target="#uploadRecording">
                                <label>
                                    <i className="bi bi-mic me-2"></i>
                                    Recording
                                </label>
                            </div>
                        </label>
                    </li>
                </ul>
            </span>
            <span className="input-group">
                <input type="text" className="form-control" onKeyUp={sendByEnter} ref={messageInputRef} placeholder="Type your message"></input>
                <button className="btn btn-primary" id="sendBtn" onClick={() => { addMessage('text', messageInputRef.current.value); messageInputRef.current.value = ''; }}>Send</button>
            </span>

            {/* This is the recording pop-up*/}
            <div className="modal fade" id="uploadRecording" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Upload Recording</h5>
                            <button type="button" id="closeRecordingBtn" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" id="startRecordingBtn" className="btn btn-success" onClick={startRecording}>Start</button>
                            <button type="button" id="stopRecordingBtn" className="btn btn-danger" onClick={stopRecording}>Stop</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputToolBar;