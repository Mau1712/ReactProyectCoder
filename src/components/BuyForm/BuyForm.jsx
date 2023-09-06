import { Formik, Form, Field, ErrorMessage } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { useCart } from "../../Context/CartContext";
import { fireStore } from "../../firebase/firebase";
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loader from '../Loader';
import "./BuyForm.css"

export default function BuyForm(props) {
    const { cartItems, emptyCart } = useCart();
    const total = cartItems.reduce((acc, item) => acc + item.Precio * item.quantity, 0);
    const MySwal = withReactContent(Swal);

    const handleClickEnviarData = (values) => {

        MySwal.fire({
            
            title: <p>Procesando pago...</p>,
            html: '<div class="spinner-container"><div class="spinner"></div></div>',
            showConfirmButton: false,
            allowOutsideClick: false,
          });
        
        const orderRef = collection(fireStore, "orders");

        const orderData = {
            buyer: {
                nombre: values.nombre,
                correo: values.email,
                telefono: values.telefono,
                domicilio: values.domicilio,

            },
            items: [
                ...cartItems.map((item) => ({
                    id: item.id,
                    precio: item.Precio,
                    cantidad: item.quantity,
                })),
            ],

            payData: {
                numeroTarjeta: values.numeroTarjeta,
                fechaVencimiento: values.fechaVencimiento,
                codigoSeguridad: values.codigoSeguridad,
            },


            total: total.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
            }),
        };

        addDoc(orderRef, orderData)
            .then(() => {

                setTimeout(() => {
                    MySwal.close(); // Cierra el Swal de "Procesando pago..." después de 5 segundos
                    MySwal.fire({
                        icon: 'success',
                        title: <p>Felicidades por su compra!!</p>,
                        html: <p>En breve recibirá un correo confirmando su compra y un enlace para el seguimiento de la misma.</p>,
                        showCancelButton: false,
                        confirmButtonText: 'OK',
                    });
                }, 5000); // Espera 5 segundos antes de cerrar el Swal de 
                console.log("Datos enviados exitosamente.");
            })
            .catch((error) => {
                console.error("Error al enviar los datos al Firestore:", error);
            });
    };

    return (
        <div className="">


            <Formik
                initialValues={{
                    email: "",
                    nombre: "",
                    telefono: "",
                    domicilio: "",
                    numeroTarjeta: "",
                    fechaVencimiento: "",
                    codigoSeguridad: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.nombre) {
                        errores.nombre = "Por favor ingrese un Nombre";
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre =
                            "El nombre solo puede contar con letras y espacios";
                    }

                    if (!valores.email) {
                        errores.email = "Por favor ingrese un Mail";
                    } else if (
                        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valores.email)
                    ) {
                        errores.email = "El email ingresado no es válido";
                    }

                    if (!valores.telefono) {
                        errores.telefono = "Por favor ingrese un teléfono";
                    } else if (!/^[0-9]{8,12}$/.test(valores.telefono)) {
                        errores.telefono =
                            "El número de teléfono debe contener entre 8 y 12 dígitos";
                    }

                    if (!valores.numeroTarjeta) {
                        errores.numeroTarjeta = "Por favor ingrese un número de tarjeta";
                    } else if (!/^\d{16}$/.test(valores.numeroTarjeta)) {
                        errores.numeroTarjeta = "El número de tarjeta debe tener 16 dígitos numéricos";
                    }


                    if (!valores.fechaVencimiento) {
                        errores.fechaVencimiento = "Por favor ingrese una fecha de vencimiento";
                    } else if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(valores.fechaVencimiento)) {
                        errores.fechaVencimiento = "La fecha de vencimiento debe estar en formato MM/AA";
                    } else {
                        const [mes, año] = valores.fechaVencimiento.split("/");
                        const fechaVencimiento = new Date(`20${año}`, mes - 1);
                        const fechaActual = new Date();

                        if (fechaVencimiento < fechaActual) {
                            errores.fechaVencimiento = "La tarjeta está vencida";
                        }
                    }


                    if (!valores.codigoSeguridad) {
                        errores.codigoSeguridad = "Por favor ingrese un código de seguridad";
                    } else if (!/^\d{3,4}$/.test(valores.codigoSeguridad)) {
                        errores.codigoSeguridad = "El código de seguridad debe tener 3 o 4 dígitos numéricos";
                    }


                    return errores;
                }}
                
                onSubmit={(values, { resetForm }) => {
                    handleClickEnviarData(values);
                    emptyCart();
                    resetForm();                      
                }}
            >
                {({ errors }) => (
                    <Form className="FormularioCompra container">

                        <div className="datosDelComprador">
                            <h4 className="tituloForm">Formulario de compra</h4>

                            <div className="formControl">
                                <label htmlFor="nombre">Nombre:</label>
                                <Field type="text" id="nombre" name="nombre" placeholder="nombre completo" />
                                <ErrorMessage className="error" name="nombre" component="span" />
                            </div>

                            <div className="formControl">
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" placeholder="correo@correo.com" />
                                <ErrorMessage className="error" name="email" component="span" />
                            </div>

                            <div className="formControl">
                                <label htmlFor="telefono">Teléfono:</label>
                                <Field type="tel" id="telefono" name="telefono" placeholder="11 3058 9926" />
                                <ErrorMessage className="error" name="telefono" component="span" />
                            </div>

                            <div className="formControl">
                                <label htmlFor="domicilio">Domicilio de entrega:</label>
                                <Field as="textarea" id="domicilio" name="domicilio" placeholder="Calle N° / Piso-depto. / Localidad / Provincia / Esntre calles." />
                                <ErrorMessage className="error" name="domicilio" component="span" />
                            </div>

                            <h4 className="payDatos">Datos de Pago</h4>

                            <div className="formControl">
                                <label htmlFor="numeroTarjeta">N° de tarjeta de crédito:</label>
                                <Field type="text" id="numeroTarjeta" name="numeroTarjeta" placeholder="XXXX-XXXX-XXXX-XXXX" />
                                <ErrorMessage className="error" name="numeroTarjeta" component="span" />
                            </div>

                            <div className="dateAndCv">
                                <div className="formControl">
                                    <label htmlFor="fechaVencimiento">Fecha de vencimiento (MM/AA):</label>
                                    <Field type="text" id="fechaVencimiento" name="fechaVencimiento" placeholder="MM/AA" />
                                    <ErrorMessage className="error" name="fechaVencimiento" component="span" />
                                </div>

                                <div className="formControl formControlCv">
                                    <label htmlFor="codigoSeguridad">Código de seguridad (CVV/CVC):</label>
                                    <Field type="text" id="codigoSeguridad" name="codigoSeguridad" placeholder="CVV/CVC" />
                                    <ErrorMessage className="error" name="codigoSeguridad" component="span" />
                                </div>
                            </div>




                            <button className="btnForm" type="submit" disabled={Object.keys(errors).length > 0}>
                                Completar la compra
                            </button>
                        </div>


                        <div className="datosDelComprador">
                            <h4 className="tituloProduct">Productos</h4>

                            <div className="boxDetail">
                                {cartItems.map((item) => (
                                    <div key={item.id}>
                                        <Card className='cardProduct'>
                                            <Card.Img className='cardProductImg' variant="top" src={item.imagen} alt={item.Titulo} />
                                            <Card.Body className='cardBody'>
                                                <Card.Title className='tittleProduct'>{item.Titulo}</Card.Title>
                                                <Card.Text className='allText'>Precio: {((item.Precio * item.quantity).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }))}</Card.Text>
                                                <div className="quantity-control">
                                                    <span>Cantidad: </span>
                                                    <span className='allText'>{item.quantity}</span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            <div className="totalDetail">
                                <h5 className='Total'>Total: {total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</h5>
                            </div>
                        </div>
                    </Form>

                )}
            </Formik>
        </div>
    );
}




{/*  */ }