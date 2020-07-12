initSidebarItems({"constant":[["IPV4_MIN_MTU","Minimum MTU required of all links supporting IPv4. See [RFC 791 § 3.1]."],["IPV6_MIN_MTU","Minimum MTU required of all links supporting IPv6. See [RFC 8200 § 5]."]],"enum":[["ArpHardware","ARP hardware type."],["ArpOperation","ARP operation type."],["ArpRepr","A high-level representation of an Address Resolution Protocol packet."],["EthernetProtocol","Ethernet protocol type."],["IcmpRepr",""],["Icmpv4DstUnreachable","Internet protocol control message subtype for type \"Destination Unreachable\"."],["Icmpv4Message","Internet protocol control message type."],["Icmpv4ParamProblem","Internet protocol control message subtype for type \"Parameter Problem\"."],["Icmpv4Redirect","Internet protocol control message subtype for type \"Redirect Message\"."],["Icmpv4Repr","A high-level representation of an Internet Control Message Protocol version 4 packet header."],["Icmpv4TimeExceeded","Internet protocol control message subtype for type \"Time Exceeded\"."],["Icmpv6DstUnreachable","Internet protocol control message subtype for type \"Destination Unreachable\"."],["Icmpv6Message","Internet protocol control message type."],["Icmpv6ParamProblem","Internet protocol control message subtype for the type \"Parameter Problem\"."],["Icmpv6Repr","A high-level representation of an Internet Control Message Protocol version 6 packet header."],["Icmpv6TimeExceeded","Internet protocol control message subtype for the type \"Time Exceeded\"."],["IpAddress","An internetworking address."],["IpCidr","A specification of a CIDR block, containing an address and a variable-length subnet masking prefix length."],["IpProtocol","IP datagram encapsulated protocol."],["IpRepr","An IP packet representation."],["IpVersion","Internet protocol version."],["Ipv6OptionFailureType","Action required when parsing the given IPv6 Extension Header Option Type fails"],["Ipv6OptionRepr","A high-level representation of an IPv6 Extension Header Option."],["Ipv6OptionType","IPv6 Extension Header Option Type"],["Ipv6RoutingRepr","A high-level representation of an IPv6 Routing Header."],["MldRepr","A high-level representation of an MLDv2 packet header."],["NdiscOptionRepr","A high-level representation of an NDISC Option."],["NdiscOptionType","NDISC Option Type"],["NdiscRepr","A high-level representation of an Neighbor Discovery packet header."],["TcpControl","The possible control flags of a Transmission Control Protocol packet."],["TcpOption","A representation of a single TCP option."]],"mod":[["pretty_print","Pretty-printing of packet representation."]],"struct":[["ArpPacket","A read/write wrapper around an Address Resolution Protocol packet buffer."],["EthernetAddress","A six-octet Ethernet II address."],["EthernetFrame","A read/write wrapper around an Ethernet II frame buffer."],["EthernetRepr","A high-level representation of an Internet Protocol version 4 packet header."],["Icmpv4Packet","A read/write wrapper around an Internet Control Message Protocol version 4 packet buffer."],["Icmpv6Packet","A read/write wrapper around an Internet Control Message Protocol version 6 packet buffer."],["IpEndpoint","An internet endpoint address."],["Ipv4Address","A four-octet IPv4 address."],["Ipv4Cidr","A specification of an IPv4 CIDR block, containing an address and a variable-length subnet masking prefix length."],["Ipv4Packet","A read/write wrapper around an Internet Protocol version 4 packet buffer."],["Ipv4Repr","A high-level representation of an Internet Protocol version 4 packet header."],["Ipv6Address","A sixteen-octet IPv6 address."],["Ipv6Cidr","A specification of an IPv6 CIDR block, containing an address and a variable-length subnet masking prefix length."],["Ipv6FragmentHeader","A read/write wrapper around an IPv6 Fragment Header."],["Ipv6FragmentRepr","A high-level representation of an IPv6 Fragment header."],["Ipv6HopByHopHeader","A read/write wrapper around an IPv6 Hop-by-Hop Options Header."],["Ipv6HopByHopRepr","A high-level representation of an IPv6 Hop-by-Hop Options header."],["Ipv6Option","A read/write wrapper around an IPv6 Extension Header Option."],["Ipv6Packet","A read/write wrapper around an Internet Protocol version 6 packet buffer."],["Ipv6Repr","A high-level representation of an Internet Protocol version 6 packet header."],["Ipv6RoutingHeader","A read/write wrapper around an IPv6 Routing Header buffer."],["MldAddressRecord","A read/write wrapper around an MLDv2 Listener Report Message Address Record."],["NdiscNeighborFlags",""],["NdiscOption","A read/write wrapper around an [NDISC Option]."],["NdiscPrefixInfoFlags",""],["NdiscPrefixInformation",""],["NdiscRedirectedHeader",""],["NdiscRouterFlags",""],["TcpPacket","A read/write wrapper around a Transmission Control Protocol packet buffer."],["TcpRepr","A high-level representation of a Transmission Control Protocol packet."],["TcpSeqNumber","A TCP sequence number."],["UdpPacket","A read/write wrapper around an User Datagram Protocol packet buffer."],["UdpRepr","A high-level representation of an User Datagram Protocol packet."]]});