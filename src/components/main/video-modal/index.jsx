import React from "react";
import "./style.scss";

export default function VideoModal() {
  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                className="embed-responsive-item"
                width={854}
                height={480}
                src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=0"
                frameBorder={0}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
