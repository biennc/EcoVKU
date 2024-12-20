import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./exchangeGift.css";

const GiveBottleReceiveGift = ({ isOpen, onClose }) => {
  const [userId, setUserId] = useState("");
  const [selectedTrash, setSelectedTrash] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  // Định nghĩa các loại rác và điểm tương ứng
  const trashTypes = {
    plastic: { name: "Chai nhựa", points: 1000 },
    glass: { name: "Chai thủy tinh", points: 500 },
    aluminum: { name: "Lon nhôm", points: 333 },
    milkBox: { name: "Vỏ hộp sữa", points: 250 },
  };

  const handleClose = () => {
    onClose();
    // Reset form
    setUserId("");
    setSelectedTrash("");
    setQuantity(0);
    setShowAlert(false);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleTrashTypeChange = (e) => {
    setSelectedTrash(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setQuantity(value);
  };

  const calculatePoints = () => {
    if (!userId) {
      setAlertType("danger");
      setAlertMessage("Vui lòng nhập ID người dùng!");
      setShowAlert(true);
      return;
    }

    if (!selectedTrash) {
      setAlertType("danger");
      setAlertMessage("Vui lòng chọn loại rác!");
      setShowAlert(true);
      return;
    }

    if (quantity <= 0) {
      setAlertType("danger");
      setAlertMessage("Vui lòng nhập số lượng hợp lệ!");
      setShowAlert(true);
      return;
    }

    const pointsPerItem = trashTypes[selectedTrash].points;
    const totalPoints = quantity * pointsPerItem;
    const totalSucculent = Math.floor(totalPoints / 1000); // 1000 điểm = 1 sen đá

    setCurrentPoints(totalPoints);
    setAlertType("success");
    setAlertMessage(
      `Bạn nhận được ${totalPoints} điểm và ${totalSucculent} chậu sen đá nhỏ`
    );
    setShowAlert(true);
  };

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Đổi Rác Lấy Sen Đá
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Quy định tích điểm:</h5>
        <ul className="mb-4">
          <li>Chai nhựa: 1000 điểm</li>
          <li>Chai thủy tinh: 500 điểm</li>
          <li>Lon nhôm: 333 điểm</li>
          <li>Vỏ hộp sữa: 250 điểm</li>
          <li>1000 điểm = 1 sen đá</li>
        </ul>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>ID Người dùng:</Form.Label>
            <Form.Control
              type="text"
              value={userId}
              onChange={handleUserIdChange}
              placeholder="Nhập ID của bạn"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Loại rác:</Form.Label>
            <Form.Select value={selectedTrash} onChange={handleTrashTypeChange}>
              <option value="">Chọn loại rác</option>
              {Object.entries(trashTypes).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name} ({value.points} điểm/cái)
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Số lượng:</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="0"
            />
          </Form.Group>
        </Form>

        {showAlert && (
          <Alert variant={alertType} className="mt-3">
            {alertMessage}
          </Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
        <Button
          variant="success"
          onClick={calculatePoints}
          style={{ backgroundColor: "#4CAF50", color: "#ffffff" }}>
          Tính điểm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GiveBottleReceiveGift;
