import { useState } from "react";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

export const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button primary onClick={handleClose}>
          I Accept
        </Button>
      }
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias
        laudantium quae omnis fuga, voluptates, pariatur itaque aliquid,
        obcaecati ex autem vitae. Asperiores, qui! Unde natus quibusdam enim
        similique quisquam? Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsum quasi molestias nisi quidem ea? Sapiente nisi perferendis,
        nihil incidunt quidem sed molestias, dicta delectus molestiae explicabo
        facere dolor distinctio repudiandae. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eius, ipsam deleniti non tempora repellat
        impedit esse voluptate, quisquam quidem rerum, perspiciatis
      </p>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>

      {showModal && modal}
    </div>
  );
};
