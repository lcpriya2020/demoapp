import React, { useState } from 'react';
import '../../App.css';
import {v4 as uuid} from 'uuid';
import { Form, Input, Button } from 'antd';
import Title from 'antd/lib/typography/Title';

const size = {
    labelCol: { span: 4 },
    wrapperCol: { span: 6 },
  };

const AddPolicy = () => {   
    
    const [policies, setNewpolicies] = useState([
        { id: 1, name: 'Leave', desc: 'Leave Policy', price: '$35', insdusty: 'All', country: 'All' }
    ]);

    const [pname, setName] = useState('');
    const [pdesc, setDesc] = useState('');
    const [pprice, setPrice] = useState('');
    const [pindustry, setIndustry] = useState('');
    const [pcountry, setCountry] = useState('');

    const handleSubmit = (e) => {        
        setNewpolicies([...policies, {id:uuid(), name: pname, desc: pdesc, price: pprice, insdusty: pindustry, country: pcountry}]);       
    };
    
    return(
        <div id="usermanagement" className="App">
            <div>
            <Title level={5}> New Policy/Template </Title>        
            </div>
            <Form name="policyform" onFinish ={handleSubmit} layout="vertical" {...size}>            
            <Form.Item label="Name"  name ="name">
                <Input name ="name" type = "text" value ={pname} required onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Description" name="desc">
                <Input.TextArea name="desc" value ={pdesc} required onChange={(e) => setDesc(e.target.value)} />
            </Form.Item>
            <Form.Item label="Price" name="price">
                <Input placeholder="$" name="price" value={pprice} required onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item label="Applicable Industry" name="industry">
                <Input name="industry" value={pindustry} required onChange={(e) => setIndustry(e.target.value)} />
            </Form.Item>
            <Form.Item label="Applicable Countries"  name="country" >
                <Input  name="country" value={pcountry} required onChange={(e) => setCountry(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Publish</Button>
            </Form.Item>
            </Form>
            <div>
                <ul>
                    {policies.map((policy) => {
                        return(
                             <li key={policy.id}> {policy.name}, {policy.desc}, {policy.price}, {policy.insdusty}, {policy.country}</li>
                        );
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default AddPolicy;