(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Ce=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(Ce||{});function J(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function F0(e){return J(e).filter(t=>isNaN(Number(t)))}function Ft(e){return F0(e).map(r=>e[r])}var x0=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,T0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,N0=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Ns={Space_Separator:x0,ID_Start:T0,ID_Continue:N0},de={isSpaceSeparator(e){return typeof e=="string"&&Ns.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Ns.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Ns.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}};let bo,Se,xt,Bi,Xt,ft,ve,sa,$n;var M0=function(t,r){bo=String(t),Se="start",xt=[],Bi=0,Xt=1,ft=0,ve=void 0,sa=void 0,$n=void 0;do ve=B0(),R0[Se]();while(ve.type!=="eof");return typeof r=="function"?Do({"":$n},"",r):$n};function Do(e,t,r){const n=e[t];if(n!=null&&typeof n=="object")if(Array.isArray(n))for(let i=0;i<n.length;i++){const s=String(i),o=Do(n,s,r);o===void 0?delete n[s]:Object.defineProperty(n,s,{value:o,writable:!0,enumerable:!0,configurable:!0})}else for(const i in n){const s=Do(n,i,r);s===void 0?delete n[i]:Object.defineProperty(n,i,{value:s,writable:!0,enumerable:!0,configurable:!0})}return r.call(e,t,n)}let U,_,gn,$t,W;function B0(){for(U="default",_="",gn=!1,$t=1;;){W=Pt();const e=Vc[U]();if(e)return e}}function Pt(){if(bo[Bi])return String.fromCodePoint(bo.codePointAt(Bi))}function b(){const e=Pt();return e===`
`?(Xt++,ft=0):e?ft+=e.length:ft++,e&&(Bi+=e.length),e}const Vc={default(){switch(W){case"	":case"\v":case"\f":case" ":case" ":case"\uFEFF":case`
`:case"\r":case"\u2028":case"\u2029":b();return;case"/":b(),U="comment";return;case void 0:return b(),X("eof")}if(de.isSpaceSeparator(W)){b();return}return Vc[Se]()},comment(){switch(W){case"*":b(),U="multiLineComment";return;case"/":b(),U="singleLineComment";return}throw ee(b())},multiLineComment(){switch(W){case"*":b(),U="multiLineCommentAsterisk";return;case void 0:throw ee(b())}b()},multiLineCommentAsterisk(){switch(W){case"*":b();return;case"/":b(),U="default";return;case void 0:throw ee(b())}b(),U="multiLineComment"},singleLineComment(){switch(W){case`
`:case"\r":case"\u2028":case"\u2029":b(),U="default";return;case void 0:return b(),X("eof")}b()},value(){switch(W){case"{":case"[":return X("punctuator",b());case"n":return b(),lr("ull"),X("null",null);case"t":return b(),lr("rue"),X("boolean",!0);case"f":return b(),lr("alse"),X("boolean",!1);case"-":case"+":b()==="-"&&($t=-1),U="sign";return;case".":_=b(),U="decimalPointLeading";return;case"0":_=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":_=b(),U="decimalInteger";return;case"I":return b(),lr("nfinity"),X("numeric",1/0);case"N":return b(),lr("aN"),X("numeric",NaN);case'"':case"'":gn=b()==='"',_="",U="string";return}throw ee(b())},identifierNameStartEscape(){if(W!=="u")throw ee(b());b();const e=Eo();switch(e){case"$":case"_":break;default:if(!de.isIdStartChar(e))throw tu();break}_+=e,U="identifierName"},identifierName(){switch(W){case"$":case"_":case"‌":case"‍":_+=b();return;case"\\":b(),U="identifierNameEscape";return}if(de.isIdContinueChar(W)){_+=b();return}return X("identifier",_)},identifierNameEscape(){if(W!=="u")throw ee(b());b();const e=Eo();switch(e){case"$":case"_":case"‌":case"‍":break;default:if(!de.isIdContinueChar(e))throw tu();break}_+=e,U="identifierName"},sign(){switch(W){case".":_=b(),U="decimalPointLeading";return;case"0":_=b(),U="zero";return;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":_=b(),U="decimalInteger";return;case"I":return b(),lr("nfinity"),X("numeric",$t*(1/0));case"N":return b(),lr("aN"),X("numeric",NaN)}throw ee(b())},zero(){switch(W){case".":_+=b(),U="decimalPoint";return;case"e":case"E":_+=b(),U="decimalExponent";return;case"x":case"X":_+=b(),U="hexadecimal";return}return X("numeric",$t*0)},decimalInteger(){switch(W){case".":_+=b(),U="decimalPoint";return;case"e":case"E":_+=b(),U="decimalExponent";return}if(de.isDigit(W)){_+=b();return}return X("numeric",$t*Number(_))},decimalPointLeading(){if(de.isDigit(W)){_+=b(),U="decimalFraction";return}throw ee(b())},decimalPoint(){switch(W){case"e":case"E":_+=b(),U="decimalExponent";return}if(de.isDigit(W)){_+=b(),U="decimalFraction";return}return X("numeric",$t*Number(_))},decimalFraction(){switch(W){case"e":case"E":_+=b(),U="decimalExponent";return}if(de.isDigit(W)){_+=b();return}return X("numeric",$t*Number(_))},decimalExponent(){switch(W){case"+":case"-":_+=b(),U="decimalExponentSign";return}if(de.isDigit(W)){_+=b(),U="decimalExponentInteger";return}throw ee(b())},decimalExponentSign(){if(de.isDigit(W)){_+=b(),U="decimalExponentInteger";return}throw ee(b())},decimalExponentInteger(){if(de.isDigit(W)){_+=b();return}return X("numeric",$t*Number(_))},hexadecimal(){if(de.isHexDigit(W)){_+=b(),U="hexadecimalInteger";return}throw ee(b())},hexadecimalInteger(){if(de.isHexDigit(W)){_+=b();return}return X("numeric",$t*Number(_))},string(){switch(W){case"\\":b(),_+=P0();return;case'"':if(gn)return b(),X("string",_);_+=b();return;case"'":if(!gn)return b(),X("string",_);_+=b();return;case`
`:case"\r":throw ee(b());case"\u2028":case"\u2029":L0(W);break;case void 0:throw ee(b())}_+=b()},start(){switch(W){case"{":case"[":return X("punctuator",b())}U="value"},beforePropertyName(){switch(W){case"$":case"_":_=b(),U="identifierName";return;case"\\":b(),U="identifierNameStartEscape";return;case"}":return X("punctuator",b());case'"':case"'":gn=b()==='"',U="string";return}if(de.isIdStartChar(W)){_+=b(),U="identifierName";return}throw ee(b())},afterPropertyName(){if(W===":")return X("punctuator",b());throw ee(b())},beforePropertyValue(){U="value"},afterPropertyValue(){switch(W){case",":case"}":return X("punctuator",b())}throw ee(b())},beforeArrayValue(){if(W==="]")return X("punctuator",b());U="value"},afterArrayValue(){switch(W){case",":case"]":return X("punctuator",b())}throw ee(b())},end(){throw ee(b())}};function X(e,t){return{type:e,value:t,line:Xt,column:ft}}function lr(e){for(const t of e){if(Pt()!==t)throw ee(b());b()}}function P0(){switch(Pt()){case"b":return b(),"\b";case"f":return b(),"\f";case"n":return b(),`
`;case"r":return b(),"\r";case"t":return b(),"	";case"v":return b(),"\v";case"0":if(b(),de.isDigit(Pt()))throw ee(b());return"\0";case"x":return b(),I0();case"u":return b(),Eo();case`
`:case"\u2028":case"\u2029":return b(),"";case"\r":return b(),Pt()===`
`&&b(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":throw ee(b());case void 0:throw ee(b())}return b()}function I0(){let e="",t=Pt();if(!de.isHexDigit(t)||(e+=b(),t=Pt(),!de.isHexDigit(t)))throw ee(b());return e+=b(),String.fromCodePoint(parseInt(e,16))}function Eo(){let e="",t=4;for(;t-- >0;){const r=Pt();if(!de.isHexDigit(r))throw ee(b());e+=b()}return String.fromCodePoint(parseInt(e,16))}const R0={start(){if(ve.type==="eof")throw cr();Ms()},beforePropertyName(){switch(ve.type){case"identifier":case"string":sa=ve.value,Se="afterPropertyName";return;case"punctuator":ii();return;case"eof":throw cr()}},afterPropertyName(){if(ve.type==="eof")throw cr();Se="beforePropertyValue"},beforePropertyValue(){if(ve.type==="eof")throw cr();Ms()},beforeArrayValue(){if(ve.type==="eof")throw cr();if(ve.type==="punctuator"&&ve.value==="]"){ii();return}Ms()},afterPropertyValue(){if(ve.type==="eof")throw cr();switch(ve.value){case",":Se="beforePropertyName";return;case"}":ii()}},afterArrayValue(){if(ve.type==="eof")throw cr();switch(ve.value){case",":Se="beforeArrayValue";return;case"]":ii()}},end(){}};function Ms(){let e;switch(ve.type){case"punctuator":switch(ve.value){case"{":e={};break;case"[":e=[];break}break;case"null":case"boolean":case"numeric":case"string":e=ve.value;break}if($n===void 0)$n=e;else{const t=xt[xt.length-1];Array.isArray(t)?t.push(e):Object.defineProperty(t,sa,{value:e,writable:!0,enumerable:!0,configurable:!0})}if(e!==null&&typeof e=="object")xt.push(e),Array.isArray(e)?Se="beforeArrayValue":Se="beforePropertyName";else{const t=xt[xt.length-1];t==null?Se="end":Array.isArray(t)?Se="afterArrayValue":Se="afterPropertyValue"}}function ii(){xt.pop();const e=xt[xt.length-1];e==null?Se="end":Array.isArray(e)?Se="afterArrayValue":Se="afterPropertyValue"}function ee(e){return Pi(e===void 0?`JSON5: invalid end of input at ${Xt}:${ft}`:`JSON5: invalid character '${Uc(e)}' at ${Xt}:${ft}`)}function cr(){return Pi(`JSON5: invalid end of input at ${Xt}:${ft}`)}function tu(){return ft-=5,Pi(`JSON5: invalid identifier character at ${Xt}:${ft}`)}function L0(e){console.warn(`JSON5: '${Uc(e)}' in strings is not valid ECMAScript; consider escaping`)}function Uc(e){const t={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(t[e])return t[e];if(e<" "){const r=e.charCodeAt(0).toString(16);return"\\x"+("00"+r).substring(r.length)}return e}function Pi(e){const t=new SyntaxError(e);return t.lineNumber=Xt,t.columnNumber=ft,t}var _0=function(t,r,n){const i=[];let s="",o,a,u="",l;if(r!=null&&typeof r=="object"&&!Array.isArray(r)&&(n=r.space,l=r.quote,r=r.replacer),typeof r=="function")a=r;else if(Array.isArray(r)){o=[];for(const w of r){let A;typeof w=="string"?A=w:(typeof w=="number"||w instanceof String||w instanceof Number)&&(A=String(w)),A!==void 0&&o.indexOf(A)<0&&o.push(A)}}return n instanceof Number?n=Number(n):n instanceof String&&(n=String(n)),typeof n=="number"?n>0&&(n=Math.min(10,Math.floor(n)),u="          ".substr(0,n)):typeof n=="string"&&(u=n.substr(0,10)),c("",{"":t});function c(w,A){let D=A[w];switch(D!=null&&(typeof D.toJSON5=="function"?D=D.toJSON5(w):typeof D.toJSON=="function"&&(D=D.toJSON(w))),a&&(D=a.call(A,w,D)),D instanceof Number?D=Number(D):D instanceof String?D=String(D):D instanceof Boolean&&(D=D.valueOf()),D){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof D=="string")return f(D);if(typeof D=="number")return String(D);if(typeof D=="object")return Array.isArray(D)?y(D):m(D)}function f(w){const A={"'":.1,'"':.2},D={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let S="";for(let L=0;L<w.length;L++){const q=w[L];switch(q){case"'":case'"':A[q]++,S+=q;continue;case"\0":if(de.isDigit(w[L+1])){S+="\\x00";continue}}if(D[q]){S+=D[q];continue}if(q<" "){let $e=q.charCodeAt(0).toString(16);S+="\\x"+("00"+$e).substring($e.length);continue}S+=q}const M=l||Object.keys(A).reduce((L,q)=>A[L]<A[q]?L:q);return S=S.replace(new RegExp(M,"g"),D[M]),M+S+M}function m(w){if(i.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");i.push(w);let A=s;s=s+u;let D=o||Object.keys(w),S=[];for(const L of D){const q=c(L,w);if(q!==void 0){let $e=p(L)+":";u!==""&&($e+=" "),$e+=q,S.push($e)}}let M;if(S.length===0)M="{}";else{let L;if(u==="")L=S.join(","),M="{"+L+"}";else{let q=`,
`+s;L=S.join(q),M=`{
`+s+L+`,
`+A+"}"}}return i.pop(),s=A,M}function p(w){if(w.length===0)return f(w);const A=String.fromCodePoint(w.codePointAt(0));if(!de.isIdStartChar(A))return f(w);for(let D=A.length;D<w.length;D++)if(!de.isIdContinueChar(String.fromCodePoint(w.codePointAt(D))))return f(w);return w}function y(w){if(i.indexOf(w)>=0)throw TypeError("Converting circular structure to JSON5");i.push(w);let A=s;s=s+u;let D=[];for(let M=0;M<w.length;M++){const L=c(String(M),w);D.push(L!==void 0?L:"null")}let S;if(D.length===0)S="[]";else if(u==="")S="["+D.join(",")+"]";else{let M=`,
`+s,L=D.join(M);S=`[
`+s+L+`,
`+A+"]"}return i.pop(),s=A,S}};const O0={parse:M0,stringify:_0};var V0=O0;function h(e){try{return V0.stringify(e)}catch{return String(e)}}const U0=[".",":",";",",","?","!"],W0=new RegExp(`[${U0.join("")}]+$`);function ru(e){return e.replace(W0,"")}function _e(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:h(e):""}function es(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(n=>n&&ru(n));return t.length===1?t[0]:t.length?t.map((n,i)=>i===t.length-1?n:ru(n)).join(": "):""}function Xe(e){return e instanceof Error?e:new Error(_e(e))}function ts(e,t){const r=Xe(e),n=es(t,r.message);try{return r.message=n,r}catch{return new Error(n,{cause:e})}}var g;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(g||(g={}));var x;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(x||(x={}));x.ClientError,x.ServerError;g.Continue+"",x.Information,g.SwitchingProtocols+"",x.Information,g.Processing+"",x.Information,g.EarlyHints+"",x.Information,g.Ok+"",x.Success,g.Created+"",x.Success,g.Accepted+"",x.Success,g.NonAuthoritativeInformation+"",x.Success,g.NoContent+"",x.Success,g.ResetContent+"",x.Success,g.PartialContent+"",x.Success,g.MultiStatus+"",x.Success,g.AlreadyReported+"",x.Success,g.ImUsed+"",x.Success,g.MultipleChoices+"",x.Redirect,g.MovedPermanently+"",x.Redirect,g.Found+"",x.Redirect,g.SeeOther+"",x.Redirect,g.NotModified+"",x.Redirect,g.UseProxy+"",x.Redirect,g.Unused+"",x.Redirect,g.TemporaryRedirect+"",x.Redirect,g.PermanentRedirect+"",x.Redirect,g.BadRequest+"",x.ClientError,g.Unauthorized+"",x.ClientError,g.PaymentRequired+"",x.ClientError,g.Forbidden+"",x.ClientError,g.NotFound+"",x.ClientError,g.MethodNotAllowed+"",x.ClientError,g.NotAcceptable+"",x.ClientError,g.ProxyAuthenticationRequired+"",x.ClientError,g.RequestTimeout+"",x.ClientError,g.Conflict+"",x.ClientError,g.Gone+"",x.ClientError,g.LengthRequired+"",x.ClientError,g.PreconditionFailed+"",x.ClientError,g.PayloadTooLarge+"",x.ClientError,g.UriTooLong+"",x.ClientError,g.UnsupportedMediaType+"",x.ClientError,g.RangeNotSatisfiable+"",x.ClientError,g.ExpectationFailed+"",x.ClientError,g.ImATeapot+"",x.ClientError,g.MisdirectedRequest+"",x.ClientError,g.UnprocessableContent+"",x.ClientError,g.Locked+"",x.ClientError,g.FailedDependency+"",x.ClientError,g.TooEarly+"",x.ClientError,g.UpgradeRequired+"",x.ClientError,g.PreconditionRequired+"",x.ClientError,g.TooManyRequests+"",x.ClientError,g.RequestHeaderFieldsTooLarge+"",x.ClientError,g.UnavailableForLegalReasons+"",x.ClientError,g.InternalServerError+"",x.ServerError,g.NotImplemented+"",x.ServerError,g.BadGateway+"",x.ServerError,g.ServiceUnavailable+"",x.ServerError,g.GatewayTimeout+"",x.ServerError,g.HttpVersionNotSupported+"",x.ServerError,g.VariantAlsoNegotiates+"",x.ServerError,g.InsufficientStorage+"",x.ServerError,g.LoopDetected+"",x.ServerError,g.NotExtended+"",x.ServerError,g.NetworkAuthenticationRequired+"",x.ServerError;const $i={[x.Information]:[g.Continue,g.SwitchingProtocols,g.Processing,g.EarlyHints],[x.Success]:[g.Ok,g.Created,g.Accepted,g.NonAuthoritativeInformation,g.NoContent,g.ResetContent,g.PartialContent,g.MultiStatus,g.AlreadyReported,g.ImUsed],[x.Redirect]:[g.MultipleChoices,g.MovedPermanently,g.Found,g.SeeOther,g.NotModified,g.UseProxy,g.Unused,g.TemporaryRedirect,g.PermanentRedirect],[x.ClientError]:[g.BadRequest,g.Unauthorized,g.PaymentRequired,g.Forbidden,g.NotFound,g.MethodNotAllowed,g.NotAcceptable,g.ProxyAuthenticationRequired,g.RequestTimeout,g.Conflict,g.Gone,g.LengthRequired,g.PreconditionFailed,g.PayloadTooLarge,g.UriTooLong,g.UnsupportedMediaType,g.RangeNotSatisfiable,g.ExpectationFailed,g.ImATeapot,g.MisdirectedRequest,g.UnprocessableContent,g.Locked,g.FailedDependency,g.TooEarly,g.UpgradeRequired,g.PreconditionRequired,g.TooManyRequests,g.RequestHeaderFieldsTooLarge,g.UnavailableForLegalReasons],[x.ServerError]:[g.InternalServerError,g.NotImplemented,g.BadGateway,g.ServiceUnavailable,g.GatewayTimeout,g.HttpVersionNotSupported,g.VariantAlsoNegotiates,g.InsufficientStorage,g.LoopDetected,g.NotExtended,g.NetworkAuthenticationRequired]};function Wc({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}class jc{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,r)=>{this.resolve=n=>(this.isSettled=!0,t(n)),this.reject=n=>{this.isSettled=!0,r(Xe(n))}})}}class Cr extends Error{}class j0 extends Cr{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class q0 extends Cr{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class z0 extends Cr{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Ir extends Cr{}class qc extends Cr{constructor(t){super(`Invalid unit ${t}`)}}class De extends Cr{}class Ut extends Cr{constructor(){super("Zone is an abstract class")}}const F="numeric",mt="short",ze="long",Ii={year:F,month:F,day:F},zc={year:F,month:mt,day:F},K0={year:F,month:mt,day:F,weekday:mt},Kc={year:F,month:ze,day:F},Gc={year:F,month:ze,day:F,weekday:ze},Zc={hour:F,minute:F},Yc={hour:F,minute:F,second:F},Jc={hour:F,minute:F,second:F,timeZoneName:mt},Hc={hour:F,minute:F,second:F,timeZoneName:ze},Qc={hour:F,minute:F,hourCycle:"h23"},Xc={hour:F,minute:F,second:F,hourCycle:"h23"},ef={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:mt},tf={hour:F,minute:F,second:F,hourCycle:"h23",timeZoneName:ze},rf={year:F,month:F,day:F,hour:F,minute:F},nf={year:F,month:F,day:F,hour:F,minute:F,second:F},sf={year:F,month:mt,day:F,hour:F,minute:F},of={year:F,month:mt,day:F,hour:F,minute:F,second:F},G0={year:F,month:mt,day:F,weekday:mt,hour:F,minute:F},af={year:F,month:ze,day:F,hour:F,minute:F,timeZoneName:mt},uf={year:F,month:ze,day:F,hour:F,minute:F,second:F,timeZoneName:mt},lf={year:F,month:ze,day:F,weekday:ze,hour:F,minute:F,timeZoneName:ze},cf={year:F,month:ze,day:F,weekday:ze,hour:F,minute:F,second:F,timeZoneName:ze};class Kn{get type(){throw new Ut}get name(){throw new Ut}get ianaName(){return this.name}get isUniversal(){throw new Ut}offsetName(t,r){throw new Ut}formatOffset(t,r){throw new Ut}offset(t){throw new Ut}equals(t){throw new Ut}get isValid(){throw new Ut}}let Bs=null;class rs extends Kn{static get instance(){return Bs===null&&(Bs=new rs),Bs}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Df(t,r,n)}formatOffset(t,r){return kn(this.offset(t),r)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}const Ao=new Map;function Z0(e){let t=Ao.get(e);return t===void 0&&(t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),Ao.set(e,t)),t}const Y0={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function J0(e,t){const r=e.format(t).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,u,l,c]=n;return[o,i,s,a,u,l,c]}function H0(e,t){const r=e.formatToParts(t),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=Y0[s];s==="era"?n[a]=o:R(a)||(n[a]=parseInt(o,10))}return n}const Ps=new Map;class Rt extends Kn{static create(t){let r=Ps.get(t);return r===void 0&&Ps.set(t,r=new Rt(t)),r}static resetCache(){Ps.clear(),Ao.clear()}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Rt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:r,locale:n}){return Df(t,r,n,this.name)}formatOffset(t,r){return kn(this.offset(t),r)}offset(t){if(!this.valid)return NaN;const r=new Date(t);if(isNaN(r))return NaN;const n=Z0(this.name);let[i,s,o,a,u,l,c]=n.formatToParts?H0(n,r):J0(n,r);a==="BC"&&(i=-Math.abs(i)+1);const m=is({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:c,millisecond:0});let p=+r;const y=p%1e3;return p-=y>=0?y:1e3+y,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let nu={};function Q0(e,t={}){const r=JSON.stringify([e,t]);let n=nu[r];return n||(n=new Intl.ListFormat(e,t),nu[r]=n),n}const Co=new Map;function $o(e,t={}){const r=JSON.stringify([e,t]);let n=Co.get(r);return n===void 0&&(n=new Intl.DateTimeFormat(e,t),Co.set(r,n)),n}const ko=new Map;function X0(e,t={}){const r=JSON.stringify([e,t]);let n=ko.get(r);return n===void 0&&(n=new Intl.NumberFormat(e,t),ko.set(r,n)),n}const So=new Map;function em(e,t={}){const{base:r,...n}=t,i=JSON.stringify([e,n]);let s=So.get(i);return s===void 0&&(s=new Intl.RelativeTimeFormat(e,t),So.set(i,s)),s}let yn=null;function tm(){return yn||(yn=new Intl.DateTimeFormat().resolvedOptions().locale,yn)}const Fo=new Map;function ff(e){let t=Fo.get(e);return t===void 0&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Fo.set(e,t)),t}const xo=new Map;function rm(e){let t=xo.get(e);if(!t){const r=new Intl.Locale(e);t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,"minimalDays"in t||(t={...df,...t}),xo.set(e,t)}return t}function nm(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const r=e.indexOf("-u-");if(r===-1)return[e];{let n,i;try{n=$o(e).resolvedOptions(),i=e}catch{const u=e.substring(0,r);n=$o(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function im(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}function sm(e){const t=[];for(let r=1;r<=12;r++){const n=I.utc(2009,r,1);t.push(e(n))}return t}function om(e){const t=[];for(let r=1;r<=7;r++){const n=I.utc(2016,11,13+r);t.push(e(n))}return t}function si(e,t,r,n){const i=e.listingMode();return i==="error"?null:i==="en"?r(t):n(t)}function am(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||ff(e.locale).numberingSystem==="latn"}class um{constructor(t,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=X0(t,a)}}format(t){if(this.inf){const r=this.floor?Math.floor(t):t;return this.inf.format(r)}else{const r=this.floor?Math.floor(t):ca(t,3);return me(r,this.padTo)}}}class lm{constructor(t,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Rt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=$o(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class cm{constructor(t,r,n){this.opts={style:"long",...n},!r&&vf()&&(this.rtf=em(t,n))}format(t,r){return this.rtf?this.rtf.format(t,r):Mm(r,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,r){return this.rtf?this.rtf.formatToParts(t,r):[]}}const df={firstDay:1,minimalDays:4,weekend:[6,7]};class Z{static fromOpts(t){return Z.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,r,n,i,s=!1){const o=t||re.defaultLocale,a=o||(s?"en-US":tm()),u=r||re.defaultNumberingSystem,l=n||re.defaultOutputCalendar,c=No(i)||re.defaultWeekSettings;return new Z(a,u,l,c,o)}static resetCache(){yn=null,Co.clear(),ko.clear(),So.clear(),Fo.clear(),xo.clear()}static fromObject({locale:t,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return Z.create(t,r,n,i)}constructor(t,r,n,i,s){const[o,a,u]=nm(t);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||u||null,this.weekSettings=i,this.intl=im(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=am(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&r?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:Z.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,No(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,r=!1){return si(this,t,Cf,()=>{const n=r?{month:t,day:"numeric"}:{month:t},i=r?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=sm(s=>this.extract(s,n,"month"))),this.monthsCache[i][t]})}weekdays(t,r=!1){return si(this,t,Sf,()=>{const n=r?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=r?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=om(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return si(this,void 0,()=>Ff,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(r=>this.extract(r,t,"dayperiod"))}return this.meridiemCache})}eras(t){return si(this,t,xf,()=>{const r={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[t]})}extract(t,r,n){const i=this.dtFormatter(t,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(t={}){return new um(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,r={}){return new lm(t,this.intl,r)}relFormatter(t={}){return new cm(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Q0(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||ff(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:bf()?rm(this.locale):df}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let Is=null;class Fe extends Kn{static get utcInstance(){return Is===null&&(Is=new Fe(0)),Is}static instance(t){return t===0?Fe.utcInstance:new Fe(t)}static parseSpecifier(t){if(t){const r=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new Fe(ss(r[1],r[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${kn(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${kn(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,r){return kn(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class fm extends Kn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Gt(e,t){if(R(e)||e===null)return t;if(e instanceof Kn)return e;if(ym(e)){const r=e.toLowerCase();return r==="default"?t:r==="local"||r==="system"?rs.instance:r==="utc"||r==="gmt"?Fe.utcInstance:Fe.parseSpecifier(r)||Rt.create(e)}else return Ht(e)?Fe.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new fm(e)}const oa={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},iu={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},dm=oa.hanidec.replace(/[\[|\]]/g,"").split("");function hm(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);if(e[r].search(oa.hanidec)!==-1)t+=dm.indexOf(e[r]);else for(const i in iu){const[s,o]=iu[i];n>=s&&n<=o&&(t+=n-s)}}return parseInt(t,10)}else return t}const To=new Map;function mm(){To.clear()}function it({numberingSystem:e},t=""){const r=e||"latn";let n=To.get(r);n===void 0&&(n=new Map,To.set(r,n));let i=n.get(t);return i===void 0&&(i=new RegExp(`${oa[r]}${t}`),n.set(t,i)),i}let su=()=>Date.now(),ou="system",au=null,uu=null,lu=null,cu=60,fu,du=null;class re{static get now(){return su}static set now(t){su=t}static set defaultZone(t){ou=t}static get defaultZone(){return Gt(ou,rs.instance)}static get defaultLocale(){return au}static set defaultLocale(t){au=t}static get defaultNumberingSystem(){return uu}static set defaultNumberingSystem(t){uu=t}static get defaultOutputCalendar(){return lu}static set defaultOutputCalendar(t){lu=t}static get defaultWeekSettings(){return du}static set defaultWeekSettings(t){du=No(t)}static get twoDigitCutoffYear(){return cu}static set twoDigitCutoffYear(t){cu=t%100}static get throwOnInvalid(){return fu}static set throwOnInvalid(t){fu=t}static resetCaches(){Z.resetCache(),Rt.resetCache(),I.resetCache(),mm()}}class ut{constructor(t,r){this.reason=t,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const hf=[0,31,59,90,120,151,181,212,243,273,304,334],mf=[0,31,60,91,121,152,182,213,244,274,305,335];function He(e,t){return new ut("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function aa(e,t,r){const n=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function pf(e,t,r){return r+(Gn(e)?mf:hf)[t-1]}function gf(e,t){const r=Gn(e)?mf:hf,n=r.findIndex(s=>s<t),i=t-r[n];return{month:n+1,day:i}}function ua(e,t){return(e-t+7)%7+1}function Ri(e,t=4,r=1){const{year:n,month:i,day:s}=e,o=pf(n,i,s),a=ua(aa(n,i,s),r);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=n-1,u=Nn(l,t,r)):u>Nn(n,t,r)?(l=n+1,u=1):l=n,{weekYear:l,weekNumber:u,weekday:a,...os(e)}}function hu(e,t=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=e,o=ua(aa(n,1,t),r),a=Lr(n);let u=i*7+s-o-7+t,l;u<1?(l=n-1,u+=Lr(l)):u>a?(l=n+1,u-=Lr(n)):l=n;const{month:c,day:f}=gf(l,u);return{year:l,month:c,day:f,...os(e)}}function Rs(e){const{year:t,month:r,day:n}=e,i=pf(t,r,n);return{year:t,ordinal:i,...os(e)}}function mu(e){const{year:t,ordinal:r}=e,{month:n,day:i}=gf(t,r);return{year:t,month:n,day:i,...os(e)}}function pu(e,t){if(!R(e.localWeekday)||!R(e.localWeekNumber)||!R(e.localWeekYear)){if(!R(e.weekday)||!R(e.weekNumber)||!R(e.weekYear))throw new Ir("Cannot mix locale-based week fields with ISO-based week fields");return R(e.localWeekday)||(e.weekday=e.localWeekday),R(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),R(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function pm(e,t=4,r=1){const n=ns(e.weekYear),i=Qe(e.weekNumber,1,Nn(e.weekYear,t,r)),s=Qe(e.weekday,1,7);return n?i?s?!1:He("weekday",e.weekday):He("week",e.weekNumber):He("weekYear",e.weekYear)}function gm(e){const t=ns(e.year),r=Qe(e.ordinal,1,Lr(e.year));return t?r?!1:He("ordinal",e.ordinal):He("year",e.year)}function yf(e){const t=ns(e.year),r=Qe(e.month,1,12),n=Qe(e.day,1,Li(e.year,e.month));return t?r?n?!1:He("day",e.day):He("month",e.month):He("year",e.year)}function wf(e){const{hour:t,minute:r,second:n,millisecond:i}=e,s=Qe(t,0,23)||t===24&&r===0&&n===0&&i===0,o=Qe(r,0,59),a=Qe(n,0,59),u=Qe(i,0,999);return s?o?a?u?!1:He("millisecond",i):He("second",n):He("minute",r):He("hour",t)}function R(e){return typeof e>"u"}function Ht(e){return typeof e=="number"}function ns(e){return typeof e=="number"&&e%1===0}function ym(e){return typeof e=="string"}function wm(e){return Object.prototype.toString.call(e)==="[object Date]"}function vf(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function bf(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function vm(e){return Array.isArray(e)?e:[e]}function gu(e,t,r){if(e.length!==0)return e.reduce((n,i)=>{const s=[t(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function bm(e,t){return t.reduce((r,n)=>(r[n]=e[n],r),{})}function jr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function No(e){if(e==null)return null;if(typeof e!="object")throw new De("Week settings must be an object");if(!Qe(e.firstDay,1,7)||!Qe(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!Qe(t,1,7)))throw new De("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function Qe(e,t,r){return ns(e)&&e>=t&&e<=r}function Dm(e,t){return e-t*Math.floor(e/t)}function me(e,t=2){const r=e<0;let n;return r?n="-"+(""+-e).padStart(t,"0"):n=(""+e).padStart(t,"0"),n}function zt(e){if(!(R(e)||e===null||e===""))return parseInt(e,10)}function fr(e){if(!(R(e)||e===null||e===""))return parseFloat(e)}function la(e){if(!(R(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ca(e,t,r=!1){const n=10**t;return(r?Math.trunc:Math.round)(e*n)/n}function Gn(e){return e%4===0&&(e%100!==0||e%400===0)}function Lr(e){return Gn(e)?366:365}function Li(e,t){const r=Dm(t-1,12)+1,n=e+(t-r)/12;return r===2?Gn(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function is(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function yu(e,t,r){return-ua(aa(e,1,t),r)+t-1}function Nn(e,t=4,r=1){const n=yu(e,t,r),i=yu(e+1,t,r);return(Lr(e)-n+i)/7}function Mo(e){return e>99?e:e>re.twoDigitCutoffYear?1900+e:2e3+e}function Df(e,t,r,n=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function ss(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);const n=parseInt(t,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function Ef(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new De(`Invalid unit value ${e}`);return t}function _i(e,t){const r={};for(const n in e)if(jr(e,n)){const i=e[n];if(i==null)continue;r[t(n)]=Ef(i)}return r}function kn(e,t){const r=Math.trunc(Math.abs(e/60)),n=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${me(r,2)}:${me(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${me(r,2)}${me(n,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function os(e){return bm(e,["hour","minute","second","millisecond"])}const Em=["January","February","March","April","May","June","July","August","September","October","November","December"],Af=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Am=["J","F","M","A","M","J","J","A","S","O","N","D"];function Cf(e){switch(e){case"narrow":return[...Am];case"short":return[...Af];case"long":return[...Em];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const $f=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],kf=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Cm=["M","T","W","T","F","S","S"];function Sf(e){switch(e){case"narrow":return[...Cm];case"short":return[...kf];case"long":return[...$f];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Ff=["AM","PM"],$m=["Before Christ","Anno Domini"],km=["BC","AD"],Sm=["B","A"];function xf(e){switch(e){case"narrow":return[...Sm];case"short":return[...km];case"long":return[...$m];default:return null}}function Fm(e){return Ff[e.hour<12?0:1]}function xm(e,t){return Sf(t)[e.weekday-1]}function Tm(e,t){return Cf(t)[e.month-1]}function Nm(e,t){return xf(t)[e.year<0?0:1]}function Mm(e,t,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(r==="auto"&&s){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${i[e][0]}`;case-1:return f?"yesterday":`last ${i[e][0]}`;case 0:return f?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],c=n?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${c} ago`:`in ${a} ${c}`}function wu(e,t){let r="";for(const n of e)n.literal?r+=n.val:r+=t(n.val);return r}const Bm={D:Ii,DD:zc,DDD:Kc,DDDD:Gc,t:Zc,tt:Yc,ttt:Jc,tttt:Hc,T:Qc,TT:Xc,TTT:ef,TTTT:tf,f:rf,ff:sf,fff:af,ffff:lf,F:nf,FF:of,FFF:uf,FFFF:cf};class Ae{static create(t,r={}){return new Ae(t,r)}static parseFormat(t){let r=null,n="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(t){return Bm[t]}constructor(t,r){this.opts=r,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...r}).format()}dtFormatter(t,r={}){return this.loc.dtFormatter(t,{...this.opts,...r})}formatDateTime(t,r){return this.dtFormatter(t,r).format()}formatDateTimeParts(t,r){return this.dtFormatter(t,r).formatToParts()}formatInterval(t,r){return this.dtFormatter(t.start,r).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,r){return this.dtFormatter(t,r).resolvedOptions()}num(t,r=0){if(this.opts.forceSimple)return me(t,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,y)=>this.loc.extract(t,p,y),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>n?Fm(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,y)=>n?Tm(t,p):s(y?{month:p}:{month:p,day:"numeric"},"month"),l=(p,y)=>n?xm(t,p):s(y?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),c=p=>{const y=Ae.macroTokenToFormatOpts(p);return y?this.formatWithSystemDefault(t,y):p},f=p=>n?Nm(t,p):s({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return c(p)}};return wu(Ae.parseFormat(r),m)}formatDurationFromString(t,r){const n=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const c=n(l);return c?this.num(u.get(c),l.length):l},s=Ae.parseFormat(r),o=s.reduce((u,{literal:l,val:c})=>l?u:u.concat(c),[]),a=t.shiftTo(...o.map(n).filter(u=>u));return wu(s,i(a))}}const Tf=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function tn(...e){const t=e.reduce((r,n)=>r+n.source,"");return RegExp(`^${t}$`)}function rn(...e){return t=>e.reduce(([r,n,i],s)=>{const[o,a,u]=s(t,i);return[{...r,...o},a||n,u]},[{},null,1]).slice(0,2)}function nn(e,...t){if(e==null)return[null,null];for(const[r,n]of t){const i=r.exec(e);if(i)return n(i)}return[null,null]}function Nf(...e){return(t,r)=>{const n={};let i;for(i=0;i<e.length;i++)n[e[i]]=zt(t[r+i]);return[n,null,r+i]}}const Mf=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Pm=`(?:${Mf.source}?(?:\\[(${Tf.source})\\])?)?`,fa=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Bf=RegExp(`${fa.source}${Pm}`),da=RegExp(`(?:T${Bf.source})?`),Im=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Rm=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Lm=/(\d{4})-?(\d{3})/,_m=Nf("weekYear","weekNumber","weekDay"),Om=Nf("year","ordinal"),Vm=/(\d{4})-(\d\d)-(\d\d)/,Pf=RegExp(`${fa.source} ?(?:${Mf.source}|(${Tf.source}))?`),Um=RegExp(`(?: ${Pf.source})?`);function _r(e,t,r){const n=e[t];return R(n)?r:zt(n)}function Wm(e,t){return[{year:_r(e,t),month:_r(e,t+1,1),day:_r(e,t+2,1)},null,t+3]}function sn(e,t){return[{hours:_r(e,t,0),minutes:_r(e,t+1,0),seconds:_r(e,t+2,0),milliseconds:la(e[t+3])},null,t+4]}function Zn(e,t){const r=!e[t]&&!e[t+1],n=ss(e[t+1],e[t+2]),i=r?null:Fe.instance(n);return[{},i,t+3]}function Yn(e,t){const r=e[t]?Rt.create(e[t]):null;return[{},r,t+1]}const jm=RegExp(`^T?${fa.source}$`),qm=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function zm(e){const[t,r,n,i,s,o,a,u,l]=e,c=t[0]==="-",f=u&&u[0]==="-",m=(p,y=!1)=>p!==void 0&&(y||p&&c)?-p:p;return[{years:m(fr(r)),months:m(fr(n)),weeks:m(fr(i)),days:m(fr(s)),hours:m(fr(o)),minutes:m(fr(a)),seconds:m(fr(u),u==="-0"),milliseconds:m(la(l),f)}]}const Km={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function ha(e,t,r,n,i,s,o){const a={year:t.length===2?Mo(zt(t)):zt(t),month:Af.indexOf(r)+1,day:zt(n),hour:zt(i),minute:zt(s)};return o&&(a.second=zt(o)),e&&(a.weekday=e.length>3?$f.indexOf(e)+1:kf.indexOf(e)+1),a}const Gm=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Zm(e){const[,t,r,n,i,s,o,a,u,l,c,f]=e,m=ha(t,i,n,r,s,o,a);let p;return u?p=Km[u]:l?p=0:p=ss(c,f),[m,new Fe(p)]}function Ym(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Jm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Hm=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Qm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function vu(e){const[,t,r,n,i,s,o,a]=e;return[ha(t,i,n,r,s,o,a),Fe.utcInstance]}function Xm(e){const[,t,r,n,i,s,o,a]=e;return[ha(t,a,r,n,i,s,o),Fe.utcInstance]}const ep=tn(Im,da),tp=tn(Rm,da),rp=tn(Lm,da),np=tn(Bf),If=rn(Wm,sn,Zn,Yn),ip=rn(_m,sn,Zn,Yn),sp=rn(Om,sn,Zn,Yn),op=rn(sn,Zn,Yn);function ap(e){return nn(e,[ep,If],[tp,ip],[rp,sp],[np,op])}function up(e){return nn(Ym(e),[Gm,Zm])}function lp(e){return nn(e,[Jm,vu],[Hm,vu],[Qm,Xm])}function cp(e){return nn(e,[qm,zm])}const fp=rn(sn);function dp(e){return nn(e,[jm,fp])}const hp=tn(Vm,Um),mp=tn(Pf),pp=rn(sn,Zn,Yn);function gp(e){return nn(e,[hp,If],[mp,pp])}const bu="Invalid Duration",Rf={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},yp={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Rf},Ze=146097/400,$r=146097/4800,wp={years:{quarters:4,months:12,weeks:Ze/7,days:Ze,hours:Ze*24,minutes:Ze*24*60,seconds:Ze*24*60*60,milliseconds:Ze*24*60*60*1e3},quarters:{months:3,weeks:Ze/28,days:Ze/4,hours:Ze*24/4,minutes:Ze*24*60/4,seconds:Ze*24*60*60/4,milliseconds:Ze*24*60*60*1e3/4},months:{weeks:$r/7,days:$r,hours:$r*24,minutes:$r*24*60,seconds:$r*24*60*60,milliseconds:$r*24*60*60*1e3},...Rf},wr=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],vp=wr.slice(0).reverse();function Wt(e,t,r=!1){const n={values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new j(n)}function Lf(e,t){let r=t.milliseconds??0;for(const n of vp.slice(1))t[n]&&(r+=t[n]*e[n].milliseconds);return r}function Du(e,t){const r=Lf(e,t)<0?-1:1;wr.reduceRight((n,i)=>{if(R(t[i]))return n;if(n){const s=t[n]*r,o=e[i][n],a=Math.floor(s/o);t[i]+=a*r,t[n]-=a*o*r}return i},null),wr.reduce((n,i)=>{if(R(t[i]))return n;if(n){const s=t[n]%1;t[n]-=s,t[i]+=s*e[n][i]}return i},null)}function bp(e){const t={};for(const[r,n]of Object.entries(e))n!==0&&(t[r]=n);return t}class j{constructor(t){const r=t.conversionAccuracy==="longterm"||!1;let n=r?wp:yp;t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Z.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,r){return j.fromObject({milliseconds:t},r)}static fromObject(t,r={}){if(t==null||typeof t!="object")throw new De(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new j({values:_i(t,j.normalizeUnit),loc:Z.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(t){if(Ht(t))return j.fromMillis(t);if(j.isDuration(t))return t;if(typeof t=="object")return j.fromObject(t);throw new De(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,r){const[n]=cp(t);return n?j.fromObject(n,r):j.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,r){const[n]=dp(t);return n?j.fromObject(n,r):j.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,r=null){if(!t)throw new De("need to specify a reason the Duration is invalid");const n=t instanceof ut?t:new ut(t,r);if(re.throwOnInvalid)throw new z0(n);return new j({invalid:n})}static normalizeUnit(t){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!r)throw new qc(t);return r}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?Ae.create(this.loc,n).formatDurationFromString(this,t):bu}toHuman(t={}){if(!this.isValid)return bu;const r=wr.map(n=>{const i=this.values[n];return R(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ca(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(r,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Lf(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t),n={};for(const i of wr)(jr(r.values,i)||jr(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Wt(this,{values:n},!0)}minus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t);return this.plus(r.negate())}mapUnits(t){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=Ef(t(this.values[n],n));return Wt(this,{values:r},!0)}get(t){return this[j.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const r={...this.values,..._i(t,j.normalizeUnit)};return Wt(this,{values:r})}reconfigure({locale:t,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Wt(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Du(this.matrix,t),Wt(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=bp(this.normalize().shiftToAll().toObject());return Wt(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>j.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of wr)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in n)a+=this.matrix[l][o]*n[l],n[l]=0;Ht(i[o])&&(a+=i[o]);const u=Math.trunc(a);r[o]=u,n[o]=(a*1e3-u*1e3)/1e3}else Ht(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return Du(this.matrix,r),Wt(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const r of Object.keys(this.values))t[r]=this.values[r]===0?0:-this.values[r];return Wt(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of wr)if(!r(this.values[n],t.values[n]))return!1;return!0}}const kr="Invalid Interval";function Dp(e,t){return!e||!e.isValid?ce.invalid("missing or invalid start"):!t||!t.isValid?ce.invalid("missing or invalid end"):t<e?ce.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class ce{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,r=null){if(!t)throw new De("need to specify a reason the Interval is invalid");const n=t instanceof ut?t:new ut(t,r);if(re.throwOnInvalid)throw new q0(n);return new ce({invalid:n})}static fromDateTimes(t,r){const n=ln(t),i=ln(r),s=Dp(n,i);return s??new ce({start:n,end:i})}static after(t,r){const n=j.fromDurationLike(r),i=ln(t);return ce.fromDateTimes(i,i.plus(n))}static before(t,r){const n=j.fromDurationLike(r),i=ln(t);return ce.fromDateTimes(i.minus(n),i)}static fromISO(t,r){const[n,i]=(t||"").split("/",2);if(n&&i){let s,o;try{s=I.fromISO(n,r),o=s.isValid}catch{o=!1}let a,u;try{a=I.fromISO(i,r),u=a.isValid}catch{u=!1}if(o&&u)return ce.fromDateTimes(s,a);if(o){const l=j.fromISO(i,r);if(l.isValid)return ce.after(s,l)}else if(u){const l=j.fromISO(n,r);if(l.isValid)return ce.before(a,l)}}return ce.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(t,r);let i;return r?.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(t,r),Math.floor(i.diff(n,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:r}={}){return this.isValid?ce.fromDateTimes(t||this.s,r||this.e):this}splitAt(...t){if(!this.isValid)return[];const r=t.map(ln).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(ce.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(t){const r=j.fromDurationLike(t);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(ce.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const r=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e;return r>=n?null:ce.fromDateTimes(r,n)}union(t){if(!this.isValid)return this;const r=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e;return ce.fromDateTimes(r,n)}static merge(t){const[r,n]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(t){let r=null,n=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)n+=u.type==="s"?1:-1,n===1?r=u.time:(r&&+r!=+u.time&&i.push(ce.fromDateTimes(r,u.time)),r=null);return ce.merge(i)}difference(...t){return ce.xor([this].concat(t)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:kr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=Ii,r={}){return this.isValid?Ae.create(this.s.loc.clone(r),t).formatInterval(this):kr}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:kr}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:kr}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:kr}toFormat(t,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${r}${this.e.toFormat(t)}`:kr}toDuration(t,r){return this.isValid?this.e.diff(this.s,t,r):j.invalid(this.invalidReason)}mapEndpoints(t){return ce.fromDateTimes(t(this.s),t(this.e))}}class oi{static hasDST(t=re.defaultZone){const r=I.now().setZone(t).set({month:12});return!t.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(t){return Rt.isValidZone(t)}static normalizeZone(t){return Gt(t,re.defaultZone)}static getStartOfWeek({locale:t=null,locObj:r=null}={}){return(r||Z.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:r=null}={}){return(r||Z.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:r=null}={}){return(r||Z.create(t)).getWeekendDays().slice()}static months(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Z.create(r,n,s)).months(t)}static monthsFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||Z.create(r,n,s)).months(t,!0)}static weekdays(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Z.create(r,n,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||Z.create(r,n,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return Z.create(t).meridiems()}static eras(t="short",{locale:r=null}={}){return Z.create(r,null,"gregory").eras(t)}static features(){return{relative:vf(),localeWeek:bf()}}}function Eu(e,t){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(t)-r(e);return Math.floor(j.fromMillis(n).as("days"))}function Ep(e,t,r){const n=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const c=Eu(u,l);return(c-c%7)/7}],["days",Eu]],i={},s=e;let o,a;for(const[u,l]of n)r.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function Ap(e,t,r,n){let[i,s,o,a]=Ep(e,t,r);const u=t-i,l=r.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const c=j.fromObject(s,n);return l.length>0?j.fromMillis(u,n).shiftTo(...l).plus(c):c}const Cp="missing Intl.DateTimeFormat.formatToParts support";function K(e,t=r=>r){return{regex:e,deser:([r])=>t(hm(r))}}const $p=" ",_f=`[ ${$p}]`,Of=new RegExp(_f,"g");function kp(e){return e.replace(/\./g,"\\.?").replace(Of,_f)}function Au(e){return e.replace(/\./g,"").replace(Of," ").toLowerCase()}function st(e,t){return e===null?null:{regex:RegExp(e.map(kp).join("|")),deser:([r])=>e.findIndex(n=>Au(r)===Au(n))+t}}function Cu(e,t){return{regex:e,deser:([,r,n])=>ss(r,n),groups:t}}function ai(e){return{regex:e,deser:([t])=>t}}function Sp(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Fp(e,t){const r=it(t),n=it(t,"{2}"),i=it(t,"{3}"),s=it(t,"{4}"),o=it(t,"{6}"),a=it(t,"{1,2}"),u=it(t,"{1,3}"),l=it(t,"{1,6}"),c=it(t,"{1,9}"),f=it(t,"{2,4}"),m=it(t,"{4,6}"),p=A=>({regex:RegExp(Sp(A.val)),deser:([D])=>D,literal:!0}),w=(A=>{if(e.literal)return p(A);switch(A.val){case"G":return st(t.eras("short"),0);case"GG":return st(t.eras("long"),0);case"y":return K(l);case"yy":return K(f,Mo);case"yyyy":return K(s);case"yyyyy":return K(m);case"yyyyyy":return K(o);case"M":return K(a);case"MM":return K(n);case"MMM":return st(t.months("short",!0),1);case"MMMM":return st(t.months("long",!0),1);case"L":return K(a);case"LL":return K(n);case"LLL":return st(t.months("short",!1),1);case"LLLL":return st(t.months("long",!1),1);case"d":return K(a);case"dd":return K(n);case"o":return K(u);case"ooo":return K(i);case"HH":return K(n);case"H":return K(a);case"hh":return K(n);case"h":return K(a);case"mm":return K(n);case"m":return K(a);case"q":return K(a);case"qq":return K(n);case"s":return K(a);case"ss":return K(n);case"S":return K(u);case"SSS":return K(i);case"u":return ai(c);case"uu":return ai(a);case"uuu":return K(r);case"a":return st(t.meridiems(),0);case"kkkk":return K(s);case"kk":return K(f,Mo);case"W":return K(a);case"WW":return K(n);case"E":case"c":return K(r);case"EEE":return st(t.weekdays("short",!1),1);case"EEEE":return st(t.weekdays("long",!1),1);case"ccc":return st(t.weekdays("short",!0),1);case"cccc":return st(t.weekdays("long",!0),1);case"Z":case"ZZ":return Cu(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return Cu(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return ai(/[a-z_+-/]{1,256}?/i);case" ":return ai(/[^\S\n\r]/);default:return p(A)}})(e)||{invalidReason:Cp};return w.token=e,w}const xp={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Tp(e,t,r){const{type:n,value:i}=e;if(n==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[n];let o=n;n==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=xp[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function Np(e){return[`^${e.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,e]}function Mp(e,t,r){const n=e.match(t);if(n){const i={};let s=1;for(const o in r)if(jr(r,o)){const a=r[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+u))),s+=u}return[n,i]}else return[n,{}]}function Bp(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return R(e.z)||(r=Rt.create(e.z)),R(e.Z)||(r||(r=new Fe(e.Z)),n=e.Z),R(e.q)||(e.M=(e.q-1)*3+1),R(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),R(e.u)||(e.S=la(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),r,n]}let Ls=null;function Pp(){return Ls||(Ls=I.fromMillis(1555555555555)),Ls}function Ip(e,t){if(e.literal)return e;const r=Ae.macroTokenToFormatOpts(e.val),n=jf(r,t);return n==null||n.includes(void 0)?e:n}function Vf(e,t){return Array.prototype.concat(...e.map(r=>Ip(r,t)))}class Uf{constructor(t,r){if(this.locale=t,this.format=r,this.tokens=Vf(Ae.parseFormat(r),t),this.units=this.tokens.map(n=>Fp(n,t)),this.disqualifyingUnit=this.units.find(n=>n.invalidReason),!this.disqualifyingUnit){const[n,i]=Np(this.units);this.regex=RegExp(n,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[r,n]=Mp(t,this.regex,this.handlers),[i,s,o]=n?Bp(n):[null,null,void 0];if(jr(n,"a")&&jr(n,"H"))throw new Ir("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:r,matches:n,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function Wf(e,t,r){return new Uf(e,r).explainFromTokens(t)}function Rp(e,t,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=Wf(e,t,r);return[n,i,s,o]}function jf(e,t){if(!e)return null;const n=Ae.create(t,e).dtFormatter(Pp()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>Tp(o,e,s))}const _s="Invalid DateTime",Lp=864e13;function wn(e){return new ut("unsupported zone",`the zone "${e.name}" is not supported`)}function Os(e){return e.weekData===null&&(e.weekData=Ri(e.c)),e.weekData}function Vs(e){return e.localWeekData===null&&(e.localWeekData=Ri(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function dr(e,t){const r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...r,...t,old:r})}function qf(e,t,r){let n=e-t*60*1e3;const i=r.offset(n);if(t===i)return[n,t];n-=(i-t)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function ui(e,t){e+=t*60*1e3;const r=new Date(e);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ki(e,t,r){return qf(is(e),t,r)}function $u(e,t){const r=e.o,n=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:n,month:i,day:Math.min(e.c.day,Li(n,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=j.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=is(s);let[u,l]=qf(a,r,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Sr(e,t,r,n,i,s){const{setZone:o,zone:a}=r;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=I.fromObject(e,{...r,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return I.invalid(new ut("unparsable",`the input "${i}" can't be parsed as ${n}`))}function li(e,t,r=!0){return e.isValid?Ae.create(Z.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Us(e,t){const r=e.c.year>9999||e.c.year<0;let n="";return r&&e.c.year>=0&&(n+="+"),n+=me(e.c.year,r?6:4),t?(n+="-",n+=me(e.c.month),n+="-",n+=me(e.c.day)):(n+=me(e.c.month),n+=me(e.c.day)),n}function ku(e,t,r,n,i,s){let o=me(e.c.hour);return t?(o+=":",o+=me(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=":")):o+=me(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!r)&&(o+=me(e.c.second),(e.c.millisecond!==0||!n)&&(o+=".",o+=me(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=me(Math.trunc(-e.o/60)),o+=":",o+=me(Math.trunc(-e.o%60))):(o+="+",o+=me(Math.trunc(e.o/60)),o+=":",o+=me(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const zf={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},_p={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Op={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Kf=["year","month","day","hour","minute","second","millisecond"],Vp=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Up=["year","ordinal","hour","minute","second","millisecond"];function Wp(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new qc(e);return t}function Su(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Wp(e)}}function jp(e){if(vn===void 0&&(vn=re.now()),e.type!=="iana")return e.offset(vn);const t=e.name;let r=Bo.get(t);return r===void 0&&(r=e.offset(vn),Bo.set(t,r)),r}function Fu(e,t){const r=Gt(t.zone,re.defaultZone);if(!r.isValid)return I.invalid(wn(r));const n=Z.fromObject(t);let i,s;if(R(e.year))i=re.now();else{for(const u of Kf)R(e[u])&&(e[u]=zf[u]);const o=yf(e)||wf(e);if(o)return I.invalid(o);const a=jp(r);[i,s]=ki(e,a,r)}return new I({ts:i,zone:r,loc:n,o:s})}function xu(e,t,r){const n=R(r.round)?!0:r.round,i=(o,a)=>(o=ca(o,n||r.calendary?0:2,!0),t.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,r.units[r.units.length-1])}function Tu(e){let t={},r;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let vn;const Bo=new Map;class I{constructor(t){const r=t.zone||re.defaultZone;let n=t.invalid||(Number.isNaN(t.ts)?new ut("invalid input"):null)||(r.isValid?null:wn(r));this.ts=R(t.ts)?re.now():t.ts;let i=null,s=null;if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(r))[i,s]=[t.old.c,t.old.o];else{const a=Ht(t.o)&&!t.old?t.o:r.offset(this.ts);i=ui(this.ts,a),n=Number.isNaN(i.year)?new ut("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=t.loc||Z.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,r]=Tu(arguments),[n,i,s,o,a,u,l]=r;return Fu({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,r]=Tu(arguments),[n,i,s,o,a,u,l]=r;return t.zone=Fe.utcInstance,Fu({year:n,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,r={}){const n=wm(t)?t.valueOf():NaN;if(Number.isNaN(n))return I.invalid("invalid input");const i=Gt(r.zone,re.defaultZone);return i.isValid?new I({ts:n,zone:i,loc:Z.fromObject(r)}):I.invalid(wn(i))}static fromMillis(t,r={}){if(Ht(t))return t<-864e13||t>Lp?I.invalid("Timestamp out of range"):new I({ts:t,zone:Gt(r.zone,re.defaultZone),loc:Z.fromObject(r)});throw new De(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,r={}){if(Ht(t))return new I({ts:t*1e3,zone:Gt(r.zone,re.defaultZone),loc:Z.fromObject(r)});throw new De("fromSeconds requires a numerical input")}static fromObject(t,r={}){t=t||{};const n=Gt(r.zone,re.defaultZone);if(!n.isValid)return I.invalid(wn(n));const i=Z.fromObject(r),s=_i(t,Su),{minDaysInFirstWeek:o,startOfWeek:a}=pu(s,i),u=re.now(),l=R(r.specificOffset)?n.offset(u):r.specificOffset,c=!R(s.ordinal),f=!R(s.year),m=!R(s.month)||!R(s.day),p=f||m,y=s.weekYear||s.weekNumber;if((p||c)&&y)throw new Ir("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&c)throw new Ir("Can't mix ordinal dates with month/day");const w=y||s.weekday&&!p;let A,D,S=ui(u,l);w?(A=Vp,D=_p,S=Ri(S,o,a)):c?(A=Up,D=Op,S=Rs(S)):(A=Kf,D=zf);let M=!1;for(const gt of A){const Dt=s[gt];R(Dt)?M?s[gt]=D[gt]:s[gt]=S[gt]:M=!0}const L=w?pm(s,o,a):c?gm(s):yf(s),q=L||wf(s);if(q)return I.invalid(q);const $e=w?hu(s,o,a):c?mu(s):s,[nt,Ne]=ki($e,l,n),Ve=new I({ts:nt,zone:n,o:Ne,loc:i});return s.weekday&&p&&t.weekday!==Ve.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Ve.toISO()}`):Ve.isValid?Ve:I.invalid(Ve.invalid)}static fromISO(t,r={}){const[n,i]=ap(t);return Sr(n,i,r,"ISO 8601",t)}static fromRFC2822(t,r={}){const[n,i]=up(t);return Sr(n,i,r,"RFC 2822",t)}static fromHTTP(t,r={}){const[n,i]=lp(t);return Sr(n,i,r,"HTTP",r)}static fromFormat(t,r,n={}){if(R(t)||R(r))throw new De("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=Z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,c]=Rp(o,t,r);return c?I.invalid(c):Sr(a,u,n,`format ${r}`,t,l)}static fromString(t,r,n={}){return I.fromFormat(t,r,n)}static fromSQL(t,r={}){const[n,i]=gp(t);return Sr(n,i,r,"SQL",t)}static invalid(t,r=null){if(!t)throw new De("need to specify a reason the DateTime is invalid");const n=t instanceof ut?t:new ut(t,r);if(re.throwOnInvalid)throw new j0(n);return new I({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,r={}){const n=jf(t,Z.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(t,r={}){return Vf(Ae.parseFormat(t),Z.fromObject(r)).map(i=>i.val).join("")}static resetCache(){vn=void 0,Bo.clear()}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Os(this).weekYear:NaN}get weekNumber(){return this.isValid?Os(this).weekNumber:NaN}get weekday(){return this.isValid?Os(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Vs(this).weekday:NaN}get localWeekNumber(){return this.isValid?Vs(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Vs(this).weekYear:NaN}get ordinal(){return this.isValid?Rs(this.c).ordinal:NaN}get monthShort(){return this.isValid?oi.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?oi.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?oi.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?oi.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,r=6e4,n=is(this.c),i=this.zone.offset(n-t),s=this.zone.offset(n+t),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const u=n-o*r,l=n-a*r,c=ui(u,o),f=ui(l,a);return c.hour===f.hour&&c.minute===f.minute&&c.second===f.second&&c.millisecond===f.millisecond?[dr(this,{ts:u}),dr(this,{ts:l})]:[this]}get isInLeapYear(){return Gn(this.year)}get daysInMonth(){return Li(this.year,this.month)}get daysInYear(){return this.isValid?Lr(this.year):NaN}get weeksInWeekYear(){return this.isValid?Nn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Nn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:r,numberingSystem:n,calendar:i}=Ae.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(t=0,r={}){return this.setZone(Fe.instance(t),r)}toLocal(){return this.setZone(re.defaultZone)}setZone(t,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(t=Gt(t,re.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(r||n){const s=t.offset(this.ts),o=this.toObject();[i]=ki(o,s,t)}return dr(this,{ts:i,zone:t})}else return I.invalid(wn(t))}reconfigure({locale:t,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:t,numberingSystem:r,outputCalendar:n});return dr(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const r=_i(t,Su),{minDaysInFirstWeek:n,startOfWeek:i}=pu(r,this.loc),s=!R(r.weekYear)||!R(r.weekNumber)||!R(r.weekday),o=!R(r.ordinal),a=!R(r.year),u=!R(r.month)||!R(r.day),l=a||u,c=r.weekYear||r.weekNumber;if((l||o)&&c)throw new Ir("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new Ir("Can't mix ordinal dates with month/day");let f;s?f=hu({...Ri(this.c,n,i),...r},n,i):R(r.ordinal)?(f={...this.toObject(),...r},R(r.day)&&(f.day=Math.min(Li(f.year,f.month),f.day))):f=mu({...Rs(this.c),...r});const[m,p]=ki(f,this.o,this.zone);return dr(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t);return dr(this,$u(this,r))}minus(t){if(!this.isValid)return this;const r=j.fromDurationLike(t).negate();return dr(this,$u(this,r))}startOf(t,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=j.normalizeUnit(t);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(t,r){return this.isValid?this.plus({[t]:1}).startOf(t,r).minus(1):this}toFormat(t,r={}){return this.isValid?Ae.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,t):_s}toLocaleString(t=Ii,r={}){return this.isValid?Ae.create(this.loc.clone(r),t).formatDateTime(this):_s}toLocaleParts(t={}){return this.isValid?Ae.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=Us(this,o);return a+="T",a+=ku(this,o,r,n,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?Us(this,t==="extended"):null}toISOWeekDate(){return li(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+ku(this,o==="extended",r,t,n,s):null}toRFC2822(){return li(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return li(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Us(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||t)&&(n&&(i+=" "),r?i+="z":t&&(i+="ZZ")),li(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():_s}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const r={...this.c};return t.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,r="milliseconds",n={}){if(!this.isValid||!t.isValid)return j.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=vm(r).map(j.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=Ap(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",r={}){return this.diff(I.now(),t,r)}until(t){return this.isValid?ce.fromDateTimes(this,t):this}hasSame(t,r,n){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const r=t.base||I.fromObject({},{zone:this.zone}),n=t.padding?this<r?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),xu(r,this.plus(n),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?xu(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new De("min requires all arguments be DateTimes");return gu(t,r=>r.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new De("max requires all arguments be DateTimes");return gu(t,r=>r.valueOf(),Math.max)}static fromFormatExplain(t,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=Z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Wf(o,t,r)}static fromStringExplain(t,r,n={}){return I.fromFormatExplain(t,r,n)}static buildFormatParser(t,r={}){const{locale:n=null,numberingSystem:i=null}=r,s=Z.fromOpts({locale:n,numberingSystem:i,defaultToEN:!0});return new Uf(s,t)}static fromFormatParser(t,r,n={}){if(R(t)||R(r))throw new De("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=n,o=Z.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(r.locale))throw new De(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${r.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:c}=r.explainFromTokens(t);return c?I.invalid(c):Sr(a,u,n,`format ${r.format}`,t,l)}static get DATE_SHORT(){return Ii}static get DATE_MED(){return zc}static get DATE_MED_WITH_WEEKDAY(){return K0}static get DATE_FULL(){return Kc}static get DATE_HUGE(){return Gc}static get TIME_SIMPLE(){return Zc}static get TIME_WITH_SECONDS(){return Yc}static get TIME_WITH_SHORT_OFFSET(){return Jc}static get TIME_WITH_LONG_OFFSET(){return Hc}static get TIME_24_SIMPLE(){return Qc}static get TIME_24_WITH_SECONDS(){return Xc}static get TIME_24_WITH_SHORT_OFFSET(){return ef}static get TIME_24_WITH_LONG_OFFSET(){return tf}static get DATETIME_SHORT(){return rf}static get DATETIME_SHORT_WITH_SECONDS(){return nf}static get DATETIME_MED(){return sf}static get DATETIME_MED_WITH_SECONDS(){return of}static get DATETIME_MED_WITH_WEEKDAY(){return G0}static get DATETIME_FULL(){return af}static get DATETIME_FULL_WITH_SECONDS(){return uf}static get DATETIME_HUGE(){return lf}static get DATETIME_HUGE_WITH_SECONDS(){return cf}}function ln(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&Ht(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new De(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var B;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(B||(B={}));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";const Gf=[B.Milliseconds,B.Seconds,B.Minutes,B.Hours,B.Days,B.Weeks,B.Months,B.Quarters,B.Years];B.Milliseconds+"",B.Seconds+"",B.Minutes+"",B.Hours+"",B.Days+"",B.Weeks+"",B.Months+"",B.Quarters+"",B.Years+"";function qp(e){return Gf.filter(t=>e[t])}function Po(e,{roundToDigits:t}){if(t==null)return e;const r=Math.pow(10,t),n=e*r;return Number((Math.round(n)/r).toFixed(t))}function zp(e){return Po(Math.max(e-.4,0),{roundToDigits:0})}function Nu(e){return e===0?0:Math.sign(e)}function qr(e,t,r={}){const n={},i={roundToDigits:r.roundToDigits==null?void 0:Math.round(Math.abs(r.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=j.fromObject(e).as(B.Milliseconds);const u=qp(t).reverse(),l=Nu(a);u.forEach((p,y)=>{const w=y===u.length-1;if(s&&o||s)n[p]=1/0;else if(o)n[p]=-1/0;else if(p===B.Milliseconds)n.milliseconds=Po(a,i);else{const A=j.fromObject({milliseconds:a}).as(p),D=Math.sign(A),S=Math.abs(A),M=w?Po(S,i):Math.floor(i.roundToDigits==null?S:zp(S)),L=M===0?0:M*D;n[p]=L,a-=j.fromObject({[p]:L}).as(B.Milliseconds),l!==Nu(a)&&(a=0)}});let c=!1;const f=[],m=Gf.toReversed().filter(p=>n[p]?(c=!0,!0):c?(f.push(p),!1):!0);if(m.length<u.length){const p={};m.forEach(w=>p[w]=!0);const y=qr(e,p,i);return f.forEach(w=>y[w]=0),y}return n}var N;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(N||(N={}));N.Year,N.Hour,N.Minute,N.Second,N.Millisecond;N.Quarter,N.Month,N.Week,N.Day;N.Millisecond,N.Second,N.Minute,N.Hour,N.Day,N.Week,N.Month,N.Quarter,N.Year;var Ee;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(Ee||(Ee={}));Ee.Sunday+"",Ee.Monday+"",Ee.Tuesday+"",Ee.Wednesday+"",Ee.Thursday+"",Ee.Friday+"",Ee.Saturday+"";Ee.Sunday,Ee.Monday,Ee.Tuesday,Ee.Wednesday,Ee.Thursday,Ee.Friday,Ee.Saturday;var Pe;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Pe||(Pe={}));Pe.January,Pe.February,Pe.March,Pe.April,Pe.May,Pe.June,Pe.July,Pe.August,Pe.September,Pe.October,Pe.November,Pe.December;const Mu={min:1,max:12},Bu={min:1,max:31},Pu={min:0,max:23},Iu={min:0,max:59},Ru={min:0,max:59},Lu={min:0,max:999};function Mn(e){const t=new jc,r=qr(e,{milliseconds:!0}).milliseconds;return r!==1/0&&setTimeout(()=>{t.resolve()},r<=0?0:r),t.promise}class d extends Error{name="AssertionError";constructor(t,r){super(es(r,t)||"Assertion failed.")}}const _u={interval:{milliseconds:100},timeout:{seconds:10}},Ws=Symbol("not set");async function Kp(e,t,r){const{callback:n,extraAssertionArgs:i,failureMessage:s,options:o}=Gp(t),a=qr(o.timeout,{milliseconds:!0}).milliseconds,u=qr(o.interval,{milliseconds:!0});let l=Ws,c;async function f(){try{l=r?n():await n(),e(l,...i)}catch(p){l=Ws,c=Xe(p)}}const m=Date.now();for(;l===Ws;)if(await f(),await Mn(u),Date.now()-m>=a){const y=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw ts(c,y)}return l}function $(e,t=!1){return(...r)=>Kp(e,r,t)}function Gp(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(r=>{if(t.callback)t.extraAssertionArgs.push(r);else if(typeof r=="function")t.callback=r;else if(typeof r=="string")t.failureMessage=r;else if(typeof r=="object")t.options=r;else{if(r===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(r)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Zf(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Zf(e){return{interval:e?.interval||_u.interval,timeout:e?.timeout||_u.timeout}}const cn={isFalse(e,t){if(e!==!1)throw new d(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${h(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new d(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new d(`'${h(e)}' is not truthy.`,t)}},Yf={assert:cn,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new d(`'${h(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new d(`'${h(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new d(`'${h(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new d(`'${h(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:$(cn.isFalse),isFalsy:$(cn.isFalsy),isTrue:$(cn.isTrue),isTruthy:$(cn.isTruthy)}};function Zp(e,t,r){if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new d(`${h(e)} does not end with ${h(t)}}`,r)}function Yp(e,t,r){if(typeof e=="string"){if(e.endsWith(t))throw new d(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new d(`${h(e)} ends with ${h(t)}}`,r)}function Jp(e,t,r){if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new d(`${h(e)} does not start with ${h(t)}}`,r)}function Hp(e,t,r){if(typeof e=="string"){if(e.startsWith(t))throw new d(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new d(`${h(e)} starts with ${h(t)}}`,r)}const fn={endsWith:Zp,endsWithout:Yp,startsWith:Jp,startsWithout:Hp},Jf={assert:fn,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new d(`${h(e)} does not end with ${h(t)}}`,r)}else if(e[e.length-1]!==t)throw new d(`${h(e)} does not end with ${h(t)}}`,r);return e},endsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.endsWith(t))throw new d(`${h(e)} ends with ${h(t)}}`,r)}else if(e[e.length-1]===t)throw new d(`${h(e)} ends with ${h(t)}}`,r);return e},startsWith:(e,t,r)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new d(`${h(e)} does not start with ${h(t)}}`,r)}else if(e[0]!==t)throw new d(`${h(e)} does not start with ${h(t)}}`,r);return e},startsWithout:(e,t,r)=>{if(typeof e=="string"){if(e.startsWith(t))throw new d(`${h(e)} starts with ${h(t)}}`,r)}else if(e[0]===t)throw new d(`${h(e)} starts with ${h(t)}}`,r);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:$(fn.endsWith),endsWithout:$(fn.endsWithout),startsWith:$(fn.startsWith),startsWithout:$(fn.startsWithout)}};function Qp(e,t,r){const n=Ft(t);if(!n.includes(e))throw new d(`${String(e)} is not an enum value in '${n.join(",")}'.`,r)}function kt(e,t){return Ft(t).includes(e)}const js={isEnumValue(e,t,r){Qp(e,t,r)},isNotEnumValue(e,t,r){const n=Ft(t);if(n.includes(e))throw new d(`${String(e)} is an enum value in '${n.join(",")}'.`,r)}},Hf={assert:js,check:{isEnumValue:kt,isNotEnumValue(e,t){return!Ft(t).includes(e)}},assertWrap:{isEnumValue(e,t,r){const n=Ft(t);if(!n.includes(e))throw new d(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e},isNotEnumValue(e,t,r){const n=Ft(t);if(n.includes(e))throw new d(`${String(e)} is not an enum value in '${n.join(",")}'.`,r);return e}},checkWrap:{isEnumValue(e,t){if(Ft(t).includes(e))return e},isNotEnumValue(e,t){if(!Ft(t).includes(e))return e}},waitUntil:{isEnumValue:$(js.isEnumValue),isNotEnumValue:$(js.isNotEnumValue)}},qs={entriesEqual(e,t,r){if(!e||typeof e!="object")throw new d(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new d(`${h(t)} is not an object.`,r);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new d(`Entries are not equal at key '${String(i)}'.`,r)})},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new d("Entries are equal.",r)}},Qf={assert:qs,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(n=>{const i=e[n],s=t[n];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(n=>{const i=e[n],s=t[n];return i!==s})}},assertWrap:{entriesEqual(e,t,r){if(!e||typeof e!="object")throw new d(`${h(e)} is not an object.`,r);if(!t||typeof t!="object")throw new d(`${h(t)} is not an object.`,r);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new d(`Entries are not equal at key '${String(i)}'.`,r)}),e},notEntriesEqual(e,t,r){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new d("Entries are equal.",r)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:$(qs.entriesEqual),notEntriesEqual:$(qs.notEntriesEqual)}};function Oi(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Bn(e,t){if(!(e===t||Oi(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();if(r.length!==n.length)throw new Error("Values are not JSON equal.");if(!Oi(r,n))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Bn(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${_e(o)}`)}})}throw new Error("Values are not JSON equal.")}}function bn(e,t){if(e===t||Oi(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),n=Object.keys(t).sort();return r.length!==n.length||!Oi(r,n)?!1:Object.keys(e).every(s=>bn(e[s],t[s]))}return!1}const zs={jsonEquals(e,t,r){try{Bn(e,t)}catch(n){throw new d(_e(n),r)}},notJsonEquals(e,t,r){try{Bn(e,t)}catch{return}throw new d("Values are JSON equal.",r)}},Xf={assert:zs,check:{jsonEquals(e,t){return bn(e,t)},notJsonEquals(e,t){return!bn(e,t)}},assertWrap:{jsonEquals(e,t,r){try{return Bn(e,t),e}catch(n){throw new d(_e(n),r)}},notJsonEquals(e,t,r){try{Bn(e,t)}catch{return e}throw new d("Values are JSON equal.",r)}},checkWrap:{jsonEquals(e,t){if(bn(e,t))return e},notJsonEquals(e,t){if(!bn(e,t))return e}},waitUntil:{jsonEquals:$(zs.jsonEquals),notJsonEquals:$(zs.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function Ou(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function ed(){this._key="chai/deep-eql__"+Math.random()+Date.now()}ed.prototype={get:function(t){return t[this._key]},set:function(t,r){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:r,configurable:!0})}};var td=typeof WeakMap=="function"?WeakMap:ed;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function Vu(e,t,r){if(!r||zr(e)||zr(t))return null;var n=r.get(e);if(n){var i=n.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function ci(e,t,r,n){if(!(!r||zr(e)||zr(t))){var i=r.get(e);i?i.set(t,n):(i=new td,i.set(t,n),r.set(e,i))}}function ot(e,t,r){if(r&&r.comparator)return Uu(e,t,r);var n=rd(e,t);return n!==null?n:Uu(e,t,r)}function rd(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:zr(e)||zr(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function Uu(e,t,r){r=r||{},r.memoize=r.memoize===!1?!1:r.memoize||new td;var n=r&&r.comparator,i=Vu(e,t,r.memoize);if(i!==null)return i;var s=Vu(t,e,r.memoize);if(s!==null)return s;if(n){var o=n(e,t);if(o===!1||o===!0)return ci(e,t,r.memoize,o),o;var a=rd(e,t);if(a!==null)return a}var u=Ou(e);if(u!==Ou(t))return ci(e,t,r.memoize,!1),!1;ci(e,t,r.memoize,!0);var l=Xp(e,t,u,r);return ci(e,t,r.memoize,l),l}function Xp(e,t,r,n){switch(r){case"String":case"Number":case"Boolean":case"Date":return ot(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return nd(e,t,["name","message","code"],n);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return br(e,t,n);case"RegExp":return eg(e,t);case"Generator":return tg(e,t,n);case"DataView":return br(new Uint8Array(e.buffer),new Uint8Array(t.buffer),n);case"ArrayBuffer":return br(new Uint8Array(e),new Uint8Array(t),n);case"Set":return Wu(e,t,n);case"Map":return Wu(e,t,n);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return ng(e,t,n)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function eg(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Wu(e,t,r){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var n=[],i=[];return e.forEach(function(o,a){n.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),br(n.sort(),i.sort(),r)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function br(e,t,r){var n=e.length;if(n!==t.length)return!1;if(n===0)return!0;for(var i=-1;++i<n;)if(ot(e[i],t[i],r)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function tg(e,t,r){return br(Io(e),Io(t),r)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function rg(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function ju(e){if(rg(e))try{return Io(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Io(e){for(var t=e.next(),r=[t.value];t.done===!1;)t=e.next(),r.push(t.value);return r}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function qu(e){var t=[];for(var r in e)t.push(r);return t}function zu(e){for(var t=[],r=Object.getOwnPropertySymbols(e),n=0;n<r.length;n+=1){var i=r[n];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function nd(e,t,r,n){var i=r.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(ot(e[r[s]],t[r[s]],n)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function ng(e,t,r){var n=qu(e),i=qu(t),s=zu(e),o=zu(t);if(n=n.concat(s),i=i.concat(o),n.length&&n.length===i.length)return br(Ku(n).sort(),Ku(i).sort())===!1?!1:nd(e,t,n,r);var a=ju(e),u=ju(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),br(a,u,r)):n.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function zr(e){return e===null||typeof e!="object"}function Ku(e){return e.map(function(r){return typeof r=="symbol"?r.toString():r})}const qt={strictEquals(e,t,r){if(e!==t)throw new d(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new d(`

${h(e)}

strictly equals

${h(t)}

`,r)},looseEquals(e,t,r){if(e!=t)throw new d(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new d(`

${h(e)}

loosely equals

${h(t)}

`,r)},deepEquals(e,t,r){if(!ot(e,t))throw new d(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(ot(e,t))throw new d(`

${h(e)}

deeply equals

${h(t)}

`,r)}},id=qt.deepEquals,sd={assert:qt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return ot(e,t)},notDeepEquals(e,t){return!ot(e,t)}},assertWrap:{strictEquals(e,t,r){if(e===t)return e;throw new d(`

${h(e)}

does not strictly equal

${h(t)}

`,r)},notStrictEquals(e,t,r){if(e===t)throw new d(`

${h(e)}

strictly equals

${h(t)}

`,r);return e},looseEquals(e,t,r){if(e==t)return e;throw new d(`

${h(e)}

does not loosely equal

${h(t)}

`,r)},notLooseEquals(e,t,r){if(e==t)throw new d(`

${h(e)}

loosely equals

${h(t)}

`,r);return e},deepEquals(e,t,r){if(ot(e,t))return e;throw new d(`

${h(e)}

does not deeply equal

${h(t)}

`,r)},notDeepEquals(e,t,r){if(ot(e,t))throw new d(`

${h(e)}

deeply equals

${h(t)}

`,r);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(ot(e,t))return e},notDeepEquals(e,t){if(!ot(e,t))return e}},waitUntil:{strictEquals:$(qt.strictEquals),notStrictEquals:$(qt.notStrictEquals),looseEquals:$(qt.looseEquals),notLooseEquals:$(qt.notLooseEquals),deepEquals:$(qt.deepEquals),notDeepEquals:$(qt.notDeepEquals)}};function Ue(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let r=!0;try{r=Reflect.ownKeys(e).map(n=>e[n]).includes(t)}catch{return!1}return r}function Ye(e,t){return typeof t=="string"?t.includes(e):Ue(t,e)}const At={hasValue(e,t,r){if(!Ue(e,t))throw new d(`'${h(e)}' does not have value '${h(t)}'.`,r)},lacksValue(e,t,r){if(Ue(e,t))throw new d(`'${h(e)}' has value '${h(t)}'.`,r)},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new d(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new d(`'${h(e)}' does not have values '${h(n)}'.`,r)},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new d(`'${h(e)}' has values '${h(n)}'.`,r)},isIn(e,t,r){if(!Ye(e,t))throw new d(`'${h(e)}'

is not in

${h(t)}.`,r)},isNotIn(e,t,r){if(Ye(e,t))throw new d(`'${h(e)}'

is in

${h(t)}.`,r)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new d(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new d(`'${h(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${h(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${h(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${h(e)}' is not empty.`,t)}}},od={assert:At,check:{hasValue(e,t){return Ue(e,t)},lacksValue(e,t){return!Ue(e,t)},hasValues(e,t){return t.every(r=>Ue(e,r))},lacksValues(e,t){return t.every(r=>!Ue(e,r))},isIn(e,t){return Ye(e,t)},isNotIn(e,t){return!Ye(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,r){if(!Ue(e,t))throw new d(`'${h(e)}' does not have value '${h(t)}'.`,r);return e},lacksValue(e,t,r){if(Ue(e,t))throw new d(`'${h(e)}' has value '${h(t)}'.`,r);return e},hasValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>!i.includes(s))}catch{throw new d(`'${h(e)}' does not have values '${h(t)}'.`,r)}if(n.length)throw new d(`'${h(e)}' does not have values '${h(n)}'.`,r);return e},lacksValues(e,t,r){let n=[];if(typeof e=="string")n=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);n=t.filter(s=>i.includes(s))}catch{}if(n.length)throw new d(`'${h(e)}' has values '${h(n)}'.`,r);return e},isIn(e,t,r){if(!Ye(e,t))throw new d(`'${h(e)}'

is not in

${h(t)}.`,r);return e},isNotIn(e,t,r){if(Ye(e,t))throw new d(`'${h(e)}'

is in

${h(t)}.`,r);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new d(`'${h(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new d(`'${h(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new d(`'${h(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new d(`'${h(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new d(`'${h(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new d(`'${h(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(Ue(e,t))return e},lacksValue(e,t){if(!Ue(e,t))return e},hasValues(e,t){if(t.every(r=>Ue(e,r)))return e},lacksValues(e,t){if(!t.every(r=>Ue(e,r)))return e},isIn(e,t){if(Ye(e,t))return e},isNotIn(e,t){if(!Ye(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:$(At.hasValue),lacksValue:$(At.lacksValue),hasValues:$(At.hasValues),lacksValues:$(At.lacksValues),isIn:$(At.isIn),isNotIn:$(At.isNotIn),isEmpty:$(At.isEmpty),isNotEmpty:$(At.isNotEmpty)}},Ks={isHttpStatus(e,t){if(!kt(e,g))throw new d(`${h(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,r){if(kt(e,g)){if(!Ye(e,$i[t]))throw new d(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new d(`${h(e)} is not a valid HTTP status.`,r)}},ad={assert:Ks,check:{isHttpStatus(e){return kt(e,g)},isHttpStatusCategory(e,t){return kt(e,g)&&Ye(e,$i[t])}},assertWrap:{isHttpStatus(e,t){if(!kt(e,g))throw new d(`${h(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,r){if(kt(e,g)){if(!Ye(e,$i[t]))throw new d(`${h(e)} is not a '${t}' HTTP status.`,r)}else throw new d(`${h(e)} is not a valid HTTP status.`,r);return e}},checkWrap:{isHttpStatus(e){if(kt(e,g))return e},isHttpStatusCategory(e,t){if(kt(e,g)&&Ye(e,$i[t]))return e}},waitUntil:{isHttpStatus:$(Ks.isHttpStatus),isHttpStatusCategory:$(Ks.isHttpStatusCategory)}},Gs={instanceOf(e,t,r){if(!(e instanceof t))throw new d(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new d(`'${h(e)}' is an instance of '${t.name}'`,r)}},ud={assert:Gs,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,r){if(e instanceof t)return e;throw new d(`'${h(e)}' is not an instance of '${t.name}'`,r)},notInstanceOf(e,t,r){if(e instanceof t)throw new d(`'${h(e)}' is an instance of '${t.name}'`,r);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:$(Gs.instanceOf),notInstanceOf:$(Gs.notInstanceOf)}},ig=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function te(e,t){return ig.some(r=>{try{return r(e,t)}catch{return!1}})}const hr={isKeyOf(e,t,r){if(!te(t,e))throw new d(`'${String(e)}' is not a key of '${h(t)}'.`,r)},isNotKeyOf(e,t,r){if(te(t,e))throw new d(`'${String(e)}' is a key of '${h(t)}'.`,r)},hasKey(e,t,r){if(!te(e,t))throw new d(`'${h(e)}' does not have key '${String(t)}'.`,r)},lacksKey(e,t,r){if(te(e,t))throw new d(`'${h(e)}' has key '${String(t)}'.`,r)},hasKeys(e,t,r){const n=t.filter(i=>!te(e,i));if(n.length)throw new d(`'${h(e)}' does not have keys '${n.join(",")}'.`,r)},lacksKeys(e,t,r){const n=t.filter(i=>te(e,i));if(n.length)throw new d(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r)}},ld={assert:hr,check:{isKeyOf(e,t){return te(t,e)},isNotKeyOf(e,t){return!te(t,e)},hasKey:te,lacksKey(e,t){return!te(e,t)},hasKeys(e,t){return t.every(r=>te(e,r))},lacksKeys(e,t){return t.every(r=>!te(e,r))}},assertWrap:{isKeyOf(e,t,r){if(!te(t,e))throw new d(`'${String(e)}' is not a key of '${h(t)}'.`,r);return e},isNotKeyOf(e,t,r){if(te(t,e))throw new d(`'${String(e)}' is a key of '${h(t)}'.`,r);return e},hasKey(e,t,r){if(!te(e,t))throw new d(`'${h(e)}' does not have key '${String(t)}'.`,r);return e},lacksKey(e,t,r){if(te(e,t))throw new d(`'${h(e)}' has key '${String(t)}'.`,r);return e},hasKeys(e,t,r){const n=t.filter(i=>!te(e,i));if(n.length)throw new d(`'${h(e)}' does not have keys '${n.join(",")}'.`,r);return e},lacksKeys(e,t,r){const n=t.filter(i=>te(e,i));if(n.length)throw new d(`'${h(e)}' does not lack keys '${n.join(",")}'.`,r);return e}},checkWrap:{isKeyOf(e,t){if(te(t,e))return e},isNotKeyOf(e,t){if(!te(t,e))return e},hasKey(e,t){if(te(e,t))return e},lacksKey(e,t){if(!te(e,t))return e},hasKeys(e,t){if(t.every(r=>te(e,r)))return e},lacksKeys(e,t){if(t.every(r=>!te(e,r)))return e}},waitUntil:{isKeyOf:$(hr.isKeyOf),isNotKeyOf:$(hr.isNotKeyOf),hasKey:$(hr.hasKey),lacksKey:$(hr.lacksKey),hasKeys:$(hr.hasKeys),lacksKeys:$(hr.lacksKeys)}};function sg(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,r)}function og(e,t,r){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,r)}const Zs={isLengthAtLeast:sg,isLengthExactly:og},cd={assert:Zs,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new d(`Length '${e.length}' is not at least '${t}'.`,r);return e},isLengthExactly:(e,t,r)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new d(`Length '${e.length}' is not exactly '${t}'.`,r);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t)return e}},waitUntil:{isLengthAtLeast:$(Zs.isLengthAtLeast),isLengthExactly:$(Zs.isLengthExactly)}},ag={never(e){throw new d("This code should not have executed.",e)}},fd={assert:ag,assertWrap:{},check:{},checkWrap:{},waitUntil:{}},Ys={isDefined(e,t){if(e==null)throw new d(`'${h(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new d(`'${h(e)}' is not a nullish.`,t)}},dd={assert:Ys,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new d(`'${h(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new d(`'${h(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:$(Ys.isDefined),isNullish:$(Ys.isNullish)}},Me={isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new d(`${e} is not within the bounds ${h({min:r,max:t})}`,n)},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new d(`${e} is not outside the bounds ${h({min:t,max:r})}`,n)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t)},isAbove(e,t,r){if(e<=t)throw new d(`${e} is not above ${t}`,r)},isAtLeast(e,t,r){if(e<t)throw new d(`${e} is not at least ${t}`,r)},isBelow(e,t,r){if(e>=t)throw new d(`${e} is not below ${t}`,r)},isAtMost(e,t,r){if(e>t)throw new d(`${e} is not at most ${t}`,r)},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t)},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new d(`${e} is not within ±${r} of ${t}`,n)},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new d(`${e} is within ±${r} of ${t}`,n)}},hd={assert:Me,check:{isInBounds(e,{max:t,min:r}){return r<=e&&e<=t},isOutBounds(e,{max:t,min:r}){return e<r||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,r){return t-r<=e&&e<=t+r},isNotApproximately(e,t,r){return e<t-r||e>t+r}},assertWrap:{isInBounds(e,{max:t,min:r},n){if(e<r||t<e)throw new d(`${e} is not within the bounds ${h({min:r,max:t})}`,n);return e},isOutBounds(e,{min:t,max:r},n){if(t<=e&&e<=r)throw new d(`${e} is not outside the bounds ${h({min:t,max:r})}`,n);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new d(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new d(`${e} is an integer.`,t);return e},isAbove(e,t,r){if(e<=t)throw new d(`${e} is not above ${t}`,r);return e},isAtLeast(e,t,r){if(e<t)throw new d(`${e} is not at least ${t}`,r);return e},isBelow(e,t,r){if(e>=t)throw new d(`${e} is not below ${t}`,r);return e},isAtMost(e,t,r){if(e>t)throw new d(`${e} is not at most ${t}`,r);return e},isNaN(e,t){if(!isNaN(e))throw new d(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new d(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new d(`${e} is not infinite`,t);return e},isApproximately(e,t,r,n){if(e<t-r||e>t+r)throw new d(`${e} is not within ±${r} of ${t}`,n);return e},isNotApproximately(e,t,r,n){if(e>=t-r&&e<=t+r)throw new d(`${e} is within ±${r} of ${t}`,n);return e}},checkWrap:{isInBounds(e,{max:t,min:r}){if(r<=e&&e<=t)return e},isOutBounds(e,{max:t,min:r}){if(e<r||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,r){if(t-r<=e&&e<=t+r)return e},isNotApproximately(e,t,r){if(e<t-r||e>t+r)return e}},waitUntil:{isInBounds:$(Me.isInBounds),isOutBounds:$(Me.isOutBounds),isInteger:$(Me.isInteger),isNotInteger:$(Me.isNotInteger),isAbove:$(Me.isAbove),isAtLeast:$(Me.isAtLeast),isBelow:$(Me.isBelow),isAtMost:$(Me.isAtMost),isNaN:$(Me.isNaN),isFinite:$(Me.isFinite),isInfinite:$(Me.isInfinite),isApproximately:$(Me.isApproximately),isNotApproximately:$(Me.isNotApproximately)}};function ug(e,t,r,n,i){return Jn(...as(e,t,r,n,i),!1)}function as(e,t,r,n,i){const s=Array.isArray(r);return[s?e:id,s?t:e,s?r:t,s?n:r,s?i:n]}function Jn(e,t,r,n,i,s){const o=t(...r);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,n),s?a(l):a()}catch(l){u(new d(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${_e(l)}`,i))}});try{return e(o,n),s?o:void 0}catch(a){throw new d(`Output from '${t.name}' did not produce expected output with input: ${h(r)}: ${_e(a)}`,i)}}function lg(e,t,r,n,i){try{const s=Jn(...as(e,t,r,n,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function cg(e,t,r,n,i){return Jn(...as(e,t,r,n,i),!0)}function fg(e,t,r,n,i){try{const s=Jn(...as(e,t,r,n,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const Js=Symbol("not set");async function dg(e,t,r,n,i,s){const o=Array.isArray(r),a=o?e:id,u=o?t:e,l=o?r:t,c=o?n:r,f=Zf(o?i:n),m=o?s:i,p=qr(f.timeout,{milliseconds:!0}).milliseconds,y=qr(f.interval,{milliseconds:!0});let w=Js,A;async function D(){try{w=await Jn(a,u,l,c,void 0,!0)}catch(M){w=Js,A=Xe(M)}}const S=Date.now();for(;w===Js;)if(await D(),await Mn(y),Date.now()-S>=p)throw ts(A,es(m,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return w}const hg={output:ug},md={assert:hg,check:{output:lg},assertWrap:{output:cg},checkWrap:{output:fg},waitUntil:{output:dg}},dn={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${h(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${h(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${h(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${h(e)}' is not a Primitive.`,t)}},pd={assert:dn,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new d(`'${h(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new d(`'${h(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new d(`'${h(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new d(`'${h(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:$(dn.isNotPrimitive),isNotPropertyKey:$(dn.isNotPropertyKey),isPrimitive:$(dn.isPrimitive),isPropertyKey:$(dn.isPropertyKey)}},hn={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${h(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${h(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${h(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${h(e)}' is a Promise.`,t)}},gd={assert:hn,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new d(`'${h(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new d(`'${h(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new d(`'${h(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new d(`'${h(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:$(hn.isPromiseLike,!0),isNotPromiseLike:$(hn.isNotPromiseLike,!0),isPromise:$(hn.isPromise,!0),isNotPromise:$(hn.isNotPromise,!0)}},Hs={matches(e,t,r){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,r)},mismatches(e,t,r){if(t.test(e))throw new d(`'${e}' matches ${t}`,r)}},yd={assert:Hs,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,r){if(!t.test(e))throw new d(`'${e}' does not match ${t}`,r);return e},mismatches(e,t,r){if(t.test(e))throw new d(`'${e}' matches ${t}`,r);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:$(Hs.matches,!0),mismatches:$(Hs.mismatches,!0)}},fe={isArray(e,t){if(!Array.isArray(e))throw new d(`'${h(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${h(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${h(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new d(`'${h(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new d(`'${h(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${h(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${h(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new d(`'${h(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${h(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new d(`'${h(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${h(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${h(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${h(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${h(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new d(`'${h(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${h(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${h(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new d(`'${h(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${h(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${h(e)}' is a undefined.`,t)}},wd={assert:fe,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new d(`'${h(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new d(`'${h(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new d(`'${h(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new d(`'${h(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new d(`'${h(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new d(`'${h(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new d(`'${h(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new d(`'${h(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new d(`'${h(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new d(`'${h(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new d(`'${h(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new d(`'${h(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new d(`'${h(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new d(`'${h(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new d(`'${h(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new d(`'${h(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new d(`'${h(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new d(`'${h(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new d(`'${h(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new d(`'${h(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:$(fe.isArray),isBigInt:$(fe.isBigInt),isBoolean:$(fe.isBoolean),isFunction:$(fe.isFunction),isNull:$(fe.isNull),isNumber:$(fe.isNumber),isObject:$(fe.isObject),isString:$(fe.isString),isSymbol:$(fe.isSymbol),isUndefined:$(fe.isUndefined),isNotArray:$(fe.isNotArray),isNotBigInt:$(fe.isNotBigInt),isNotBoolean:$(fe.isNotBoolean),isNotFunction:$(fe.isNotFunction),isNotNull:$(fe.isNotNull),isNotNumber:$(fe.isNotNumber),isNotObject:$(fe.isNotObject),isNotString:$(fe.isNotString),isNotSymbol:$(fe.isNotSymbol),isNotUndefined:$(fe.isNotUndefined)}};var Re;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Re||(Re={}));function ma(e,t,r){pa(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r)}function Gu(e,t,r){pa(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${h(e)}' is not an error instance.`},t,r)}function pa(e,t,r,n){if(e)if(e instanceof Error){if(r?.matchConstructor&&!(e instanceof r.matchConstructor)){const i=e.constructor.name;throw new d(`Error constructor '${i}' did not match expected constructor '${r.matchConstructor.name}'.`,n)}else if(r?.matchMessage){const i=_e(e);if(typeof r.matchMessage=="string"){if(!i.includes(r.matchMessage))throw new d(`Error message

'${i}'

does not contain

'${r.matchMessage}'.`,n)}else if(!i.match(r.matchMessage))throw new d(`Error message

'${i}'

does not match RegExp

'${r.matchMessage}'.`,n)}}else throw new d(t.notInstance,n);else throw new d(t.noError,n)}function Zu(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const r=_e(e);if(typeof t.matchMessage=="string"){if(!r.includes(t.matchMessage))return!1}else if(!r.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function us(e,t,r,n){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Xe(u)}try{Gu(i,r,n),e===Re.Assert?o():e===Re.Check?o(!0):o(i)}catch(u){e===Re.CheckWrap?o(void 0):e===Re.Check?o(!1):a(Xe(u))}})}catch(s){i=Xe(s)}try{return Gu(i,r,n),e===Re.Check?!0:e!==Re.Assert?i:void 0}catch(s){if(e===Re.CheckWrap)return;if(e===Re.Check)return!1;throw s}}function mg(e,t,r){return us(Re.Assert,e,t,r)}function pg(e,t){return us(Re.Check,e,t)}function gg(e,t,r){return us(Re.AssertWrap,e,t,r)}function yg(e,t,r){return us(Re.CheckWrap,e,t,r)}const wg=$(ma);function vg(e,t,r,n){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof r=="object"?n:r,a=typeof r=="object"?r:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${h(s)}'`);return wg(i,async()=>{try{await s();return}catch(u){return Xe(u)}},a,o)}const bg={throws:mg,isError:ma},vd={assert:bg,check:{throws:pg,isError(e,t){return Zu(e,t)}},assertWrap:{throws:gg,isError(e,t,r){return pa(e,{noError:"No error.",notInstance:`'${h(e)}' is not an error instance.`},t,r),e}},checkWrap:{throws:yg,isError(e,t){if(Zu(e,t))return e}},waitUntil:{throws:vg,isError:$(ma)}},Kt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Qs={isUuid(e,t){if(!String(e).match(Kt))throw new d(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(Kt))throw new d(`'${String(e)}' is a UUID.`,t)}},bd={assert:Qs,check:{isUuid(e){return!!String(e).match(Kt)},isNotUuid(e){return!String(e).match(Kt)}},assertWrap:{isUuid(e,t){if(!String(e).match(Kt))throw new d(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(Kt))throw new d(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(Kt))return e},isNotUuid(e){if(!String(e).match(Kt))return e}},waitUntil:{isUuid:$(Qs.isUuid),isNotUuid:$(Qs.isNotUuid)}},Dg={...fd.assert,...Yf.assert,...Jf.assert,...Qf.assert,...Hf.assert,...ad.assert,...ud.assert,...Xf.assert,...ld.assert,...cd.assert,...dd.assert,...hd.assert,...md.assert,...pd.assert,...gd.assert,...yd.assert,...wd.assert,...sd.assert,...vd.assert,...bd.assert,...od.assert},ga=[Yf,Jf,Qf,Hf,ad,ud,Xf,ld,cd,fd,dd,hd,md,pd,gd,yd,wd,sd,vd,bd,od],Eg=Object.assign({},...ga.map(e=>e.check)),E=Object.assign(function(t){return!!t},Eg);function Ag(e,t,r){return Si(e,t,r,new Set)}function Si(e,t,r,n){if(e=Yu(e),t=Yu(t),E.isObject(e)&&E.isObject(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),!Si(J(e).sort(),J(t).sort(),r,n))return!1;let i=!1;const s=J(e).map(o=>{const a=Si(e[o],t[o],r,n);return E.isPromise(a)&&(i=!0),a});return Ju(i,s)}else if(E.isArray(e)&&E.isArray(t)){if(n.has(e)||n.has(t))return!0;if(n.add(e),n.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Si(o,t[a],r,n);return E.isPromise(u)&&(i=!0),u});return Ju(i,s)}else return r(e,t)}function Yu(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function Ju(e,t){return e?new Promise(async(r,n)=>{try{const i=await Promise.all(t);r(i.every(E.isTrue))}catch(i){n(Xe(i))}}):t.every(E.isTrue)}const Cg=Object.assign({},...ga.map(e=>e.assertWrap)),Vi=Object.assign(function(t,r){if(!t)throw new d("Assertion failed.",r);return t},Cg);function $g(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const kg={tsType:$g},Sg={assert:kg},Fg={fail:e=>{throw new d("Failure triggered.",e)}},xg={...Sg.assert,...Dg,...Fg},sr=Object.assign(function(t,r){if(!t)throw new d("Assertion failed.",r)},xg),Tg=Object.assign({},...ga.map(e=>e.checkWrap)),Ng=Object.assign(function(t){if(t)return t},Tg);function Mg(e,t){return E.hasKey(e,"entryType")&&e.entryType===t}function Fr(e,t){return e.controlType===t}var z=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(z||{});const Dd=Symbol("any-type"),Bg={checkbox:!1,color:"",dropdown:"",hidden:Dd,number:0,text:""};function Pg(e,t){if(!e)return[];const r=[];return Object.entries(e).forEach(([n,i])=>{const s=Bg[i.controlType];s!==Dd&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${t}' cannot have an empty control name.`)))}),r}function Ig(e,t,r){const n=t;if(e.has(n))return e.get(n);{const i=r();return E.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(n,a),s(a)}catch(a){o(Xe(a))}}):(e.set(n,i),i)}}function ls(e,t,r){if(t in e)return e[t];{const n=r();return E.isPromise(n)?new Promise(async(i,s)=>{try{const o=await n;e[t]=o,i(o)}catch(o){s(Xe(o))}}):(e[t]=n,n)}}function Ed(e){return J(e).map(t=>[t,e[t]])}function Rg(e){return Object.fromEntries(e)}function Ad(e,t,r){return e.reduce((n,i,s,o)=>{const a=t(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Lg(e,t=r=>r){const r=new Map;return e.filter(n=>{const i=t(n);return r.get(i)?!1:(r.set(i,n),!0)})}function _g({min:e,max:t}){const{min:r,max:n}=Wc({min:Math.floor(e),max:Math.floor(t)}),i=n-r+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${r}, max: ${n}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((c,f,m)=>c+f*256**m,0);while(l>=a);return r+l%i}const Hu=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","-","_"];function Cd(e=16){let t="";for(let r=0;r<e;r++){const n=_g({min:0,max:Hu.length-1});t+=Hu[n]}return t}function $d(e){if(E.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>_e(t).trim()).join(`
`))}function Og(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Vg="px";function kd(e){return Ug({value:e,suffix:Vg})}function Ug({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function dt({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function Or({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Wg(e,...t){const r={...e};return t.forEach(n=>{n&&Ed(n).forEach(([i,s])=>{s!=null&&(r[i]=s)})}),r}function Sd(...e){const t=e.join(""),r=Lg(Array.from(t));return Array.from(r).join("")}function jg(e){return e.replaceAll(/[\^$\\.*+?()[\]{}|]/g,String.raw`\$&`)}function Fd(e,t){const r=Sd([typeof e=="string"?"":e.flags,t].join("").toLowerCase());return qg(e,r)}function qg(e,t){const r=Sd(t);return typeof e=="string"?new RegExp(jg(e),r):new RegExp(e.source,r)}function xd(e,{caseSensitive:t}){return Fd(e,"")}function zg({searchIn:e,searchFor:t,caseSensitive:r,includeLength:n}){const i=Fd(xd(t,{caseSensitive:r}),"g"),s=[];return e.replace(i,(...o)=>{const a=o[o.length-2];if(typeof a!="number")throw new TypeError(`Match index "${a}" is not a number. Searching for "${t}" in "${e}".`);const u=o[0];if(typeof u!="string")throw new TypeError(`regExpMatch should've been a string but was ${typeof u}!`);s.push({index:a,length:u.length});const l=o[0];if(typeof l!="string")throw new TypeError(`Original match when searching for "${t}" in "${e}" at index ${a} is not a string.`);return l}),s}function Kg(e,t,{caseSensitive:r}){const n=zg({searchIn:e,searchFor:t,caseSensitive:r,includeLength:!0}),i=xd(t,{caseSensitive:r});return e.split(i).reduce((o,a,u)=>{const l=n[u],c=o.concat(a);if(l){const f=e.slice(l.index,l.index+l.length);return c.concat(f)}else return c},[])}function Gg(e,t){return e.split(t)}function Qu(e,t){const{min:r,max:n}=Wc(t);return e>n?r:e<r?n:e}function Te(e,t){let r=!1;const n=J(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(r=!0),i[s]=o,i},{});return r?new Promise(async(i,s)=>{try{await Promise.all(J(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(Xe(o))}}):n}function cs(e,t){const r=Ed(e).filter(([n,i])=>t(n,i,e));return Rg(r)}function Zg(e,t){return cs(e,r=>!t.includes(r))}function Yg(e,t){return cs(e,r=>t.includes(r))}function Ro(e){return J(e).map(t=>e[t])}function Jg(e,t){return t.capitalizeFirstLetter?Hg(e):e}function Hg(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const Qg={capitalizeFirstLetter:!1};var Kr;(function(e){e.Upper="upper",e.Lower="lower"})(Kr||(Kr={}));function Xg(e){return e.toLowerCase()!==e.toUpperCase()}function Xu(e,t,r){if(!e&&r?.rejectNoCaseCharacters)return!1;for(const n of e)if(Xg(n)){if(t===Kr.Upper&&n!==n.toUpperCase()||t===Kr.Lower&&n!==n.toLowerCase())return!1}else{if(r?.rejectNoCaseCharacters)return!1;continue}return!0}function e1(e,t={}){const r=e.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Jg(n,Wg(Qg,t))}function t1(e){return e.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=Xu(o,Kr.Lower,{rejectNoCaseCharacters:!0})||Xu(a,Kr.Lower,{rejectNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!u?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}function r1(e,t="and"){if(e.length<2)return e.join("");const r=e.length>2?", ":" ";return`${e.slice(0,-1).join(r)}${r}${t} ${e[e.length-1]}`}function n1(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function on(){function e(t){return class extends CustomEvent{static type=t;constructor(n){super(t,n)}}}return e}function Td(e){return class extends Event{static type=e;constructor(r){super(e,r)}}}class i1{listeners={};getListenerCount(){return Ro(this.listeners).map(r=>r.size||0).reduce((r,n)=>r+n,0)}listen(t,r,n={}){const i=this.listeners,s=E.isString(t)?t:t.type;function o(){return i[s]?.delete(r)||!1}function a(u,l){n.once&&o(),r(u,l)}return ls(i,s,()=>new Map).set(r,{listener:a,removeListener:o}),o}removeListener(t,r){const n=E.isString(t)?t:t.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(t){const r=this.listeners[t.type],n=r?.size||0;return r?.forEach(i=>{i.listener(t,i.removeListener)}),n}removeAllListeners(){const r=Ro(this.listeners).reduce((n,i)=>{const s=i.size||0;return i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class ya extends i1{}function Nd(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function el(e,t,r){return Nd(globalThis,e,t,r)}function wa(e,t){return Ui(e.title),e.parent?[...wa(e.parent),Ui(e.parent.title)].concat([]):[]}function Ui(e){return n1(e).toLowerCase().replaceAll(/\s/g,"-")}function s1({searchFor:e,searchIn:t}){return e.every((r,n)=>t[n]===r)}const o1={[Ce.ElementExample]:()=>[],[Ce.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...Pg(e.controls,e.title)].filter(E.isTruthy),[Ce.Root]:()=>[]},Wi="_isBookTreeNode",Md=new Map;function a1(e){return Md.get(e)}function u1(e,t){Ig(Md,e,()=>t)}function Vr(e,t){return!!(Bd(e)&&e.entry.entryType===t)}function Bd(e){return!!(E.hasKeys(e,[Wi,"entry"])&&e[Wi])}function l1(){return{[Wi]:!0,entry:{entryType:Ce.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function c1({entries:e,debug:t}){const r=a1(e);if(r)return r;const n=l1();e.forEach(o=>va({tree:n,newEntry:o,debug:t,manuallyAdded:!0}));const i=Pd(n),s={tree:n,flattenedNodes:i};return u1(e,s),t&&console.info("element-book tree:",n),s}function f1(e,t,r){if(!t.parent)return e;const n=Lo(t,e);if(n)return n;r&&console.info(`parent of ${t.title} not found in tree; adding it now.`),va({tree:e,newEntry:t.parent,debug:r,manuallyAdded:!1});const i=Lo(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${wa(t).join(" > ")}`);return i}function va({tree:e,newEntry:t,debug:r,manuallyAdded:n}){const i=o1[t.entryType](t);t.errors.push(...i);const s=f1(e,t,r),o=Ui(t.title),a=s.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Wi]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:n};s.children[o]=u,Mg(t,Ce.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>va({tree:e,newEntry:l,debug:r,manuallyAdded:n}))}function Lo(e,t){const r=Bd(e)?e.fullUrlBreadcrumbs.slice(0,-1):wa(e);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function Pd(e){const r=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>Pd(i));return[e,...r].flat()}function ba(e,t){return Da(e,["",...t],void 0)}function Da(e,t,r){const n=t.slice(1),i=n[0];!i&&r&&(e.controls=r);const s=e.children[i||""],o=s&&Da(s,n,r);return{...e.controls,...o}}function d1(e,t,r){const n={...e};return Da(n,["",...t],r),n}function Id(e,t){const r=t?.controls||(Vr(e,Ce.Page)?Te(e.entry.controls,(i,s)=>s.initValue):{});return{children:Te(e.children,(i,s)=>Id(s,t?.children?.[s.urlBreadcrumb])),controls:r}}function et(e){const t={...e,entryType:Ce.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},r=new Set;return e.defineExamples&&e.defineExamples({defineExample(n){const i={...n,entryType:Ce.ElementExample,parent:t,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${e.title}' is already taken.`)].filter(E.isTruthy)};r.add(n.title),t.elementExamples[Ui(i.title)]=i}}),t}var at=(e=>(e.Search="search",e.Book="book",e))(at||{});function _o(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const Gr={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fi=globalThis,Ea=Fi.ShadowRoot&&(Fi.ShadyCSS===void 0||Fi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Aa=Symbol(),tl=new WeakMap;let Rd=class{constructor(t,r,n){if(this._$cssResult$=!0,n!==Aa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Ea&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=tl.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&tl.set(r,t))}return t}toString(){return this.cssText}};const he=e=>new Rd(typeof e=="string"?e:e+"",void 0,Aa),xi=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Rd(r,e,Aa)},h1=(e,t)=>{if(Ea)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Fi.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},rl=Ea?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return he(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:m1,defineProperty:p1,getOwnPropertyDescriptor:g1,getOwnPropertyNames:y1,getOwnPropertySymbols:w1,getPrototypeOf:v1}=Object,fs=globalThis,nl=fs.trustedTypes,b1=nl?nl.emptyScript:"",D1=fs.reactiveElementPolyfillSupport,Sn=(e,t)=>e,ji={toAttribute(e,t){switch(t){case Boolean:e=e?b1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ca=(e,t)=>!m1(e,t),il={attribute:!0,type:String,converter:ji,reflect:!1,useDefault:!1,hasChanged:Ca};Symbol.metadata??=Symbol("metadata"),fs.litPropertyMetadata??=new WeakMap;let Pr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=il){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,r);i!==void 0&&p1(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){const{get:i,set:s}=g1(this.prototype,t)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??il}static _$Ei(){if(this.hasOwnProperty(Sn("elementProperties")))return;const t=v1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sn("properties"))){const r=this.properties,n=[...y1(r),...w1(r)];for(const i of n)this.createProperty(i,r[i])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(rl(i))}else t!==void 0&&r.push(rl(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:ji).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,r){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ji;this._$Em=i,this[i]=o.fromAttribute(r,s.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,r,n){if(t!==void 0){const i=this.constructor,s=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??Ca)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??r??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};Pr.elementStyles=[],Pr.shadowRootOptions={mode:"open"},Pr[Sn("elementProperties")]=new Map,Pr[Sn("finalized")]=new Map,D1?.({ReactiveElement:Pr}),(fs.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $a=globalThis,qi=$a.trustedTypes,sl=qi?qi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ld="$lit$",Zt=`lit$${Math.random().toFixed(9).slice(2)}$`,_d="?"+Zt,E1=`<${_d}>`,Er=document,Pn=()=>Er.createComment(""),In=e=>e===null||typeof e!="object"&&typeof e!="function",ka=Array.isArray,A1=e=>ka(e)||typeof e?.[Symbol.iterator]=="function",Xs=`[ 	
\f\r]`,mn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ol=/-->/g,al=/>/g,mr=RegExp(`>|${Xs}(?:([^\\s"'>=/]+)(${Xs}*=${Xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ul=/'/g,ll=/"/g,Od=/^(?:script|style|textarea|title)$/i,C1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),$1=C1(1),Ke=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),cl=new WeakMap,vr=Er.createTreeWalker(Er,129);function Vd(e,t){if(!ka(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return sl!==void 0?sl.createHTML(t):t}const k1=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=mn;for(let a=0;a<r;a++){const u=e[a];let l,c,f=-1,m=0;for(;m<u.length&&(o.lastIndex=m,c=o.exec(u),c!==null);)m=o.lastIndex,o===mn?c[1]==="!--"?o=ol:c[1]!==void 0?o=al:c[2]!==void 0?(Od.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=mr):c[3]!==void 0&&(o=mr):o===mr?c[0]===">"?(o=i??mn,f=-1):c[1]===void 0?f=-2:(f=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?mr:c[3]==='"'?ll:ul):o===ll||o===ul?o=mr:o===ol||o===al?o=mn:(o=mr,i=void 0);const p=o===mr&&e[a+1].startsWith("/>")?" ":"";s+=o===mn?u+E1:f>=0?(n.push(l),u.slice(0,f)+Ld+u.slice(f)+Zt+p):u+Zt+(f===-2?a:p)}return[Vd(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Rn{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,c]=k1(t,r);if(this.el=Rn.createElement(l,n),vr.currentNode=this.el.content,r===2||r===3){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(i=vr.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const f of i.getAttributeNames())if(f.endsWith(Ld)){const m=c[o++],p=i.getAttribute(f).split(Zt),y=/([.?@])?(.*)/.exec(m);u.push({type:1,index:s,name:y[2],strings:p,ctor:y[1]==="."?F1:y[1]==="?"?x1:y[1]==="@"?T1:ds}),i.removeAttribute(f)}else f.startsWith(Zt)&&(u.push({type:6,index:s}),i.removeAttribute(f));if(Od.test(i.tagName)){const f=i.textContent.split(Zt),m=f.length-1;if(m>0){i.textContent=qi?qi.emptyScript:"";for(let p=0;p<m;p++)i.append(f[p],Pn()),vr.nextNode(),u.push({type:2,index:++s});i.append(f[m],Pn())}}}else if(i.nodeType===8)if(i.data===_d)u.push({type:2,index:s});else{let f=-1;for(;(f=i.data.indexOf(Zt,f+1))!==-1;)u.push({type:7,index:s}),f+=Zt.length-1}s++}}static createElement(t,r){const n=Er.createElement("template");return n.innerHTML=t,n}}function Zr(e,t,r=e,n){if(t===Ke)return t;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const s=In(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(t=Zr(e,i._$AS(e,t.values),i,n)),t}let S1=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=(t?.creationScope??Er).importNode(r,!0);vr.currentNode=i;let s=vr.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new an(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new N1(s,this,t)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(s=vr.nextNode(),o++)}return vr.currentNode=Er,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class an{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Zr(this,t,r),In(t)?t===ue||t==null||t===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):t!==this._$AH&&t!==Ke&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):A1(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ue&&In(this._$AH)?this._$AA.nextSibling.data=t:this.T(Er.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Rn.createElement(Vd(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const s=new S1(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(t){let r=cl.get(t.strings);return r===void 0&&cl.set(t.strings,r=new Rn(t)),r}k(t){ka(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new an(this.O(Pn()),this.O(Pn()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ds{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ue}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=Zr(this,t,r,0),o=!In(t)||t!==this._$AH&&t!==Ke,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=Zr(this,a[n+u],r,u),l===Ke&&(l=this._$AH[u]),o||=!In(l)||l!==this._$AH[u],l===ue?t=ue:t!==ue&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F1 extends ds{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ue?void 0:t}}class x1 extends ds{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ue)}}class T1 extends ds{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=Zr(this,t,r,0)??ue)===Ke)return;const n=this._$AH,i=t===ue&&n!==ue||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==ue&&(n===ue||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class N1{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Zr(this,t)}}const M1={I:an},B1=$a.litHtmlPolyfillSupport;B1?.(Rn,an),($a.litHtmlVersions??=[]).push("3.3.0");const P1=(e,t,r)=>{const n=r?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const s=r?.renderBefore??null;n._$litPart$=i=new an(t.insertBefore(Pn(),s),s,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sa=globalThis;let Fn=class extends Pr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=P1(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ke}};Fn._$litElement$=!0,Fn.finalized=!0,Sa.litElementHydrateSupport?.({LitElement:Fn});const I1=Sa.litElementPolyfillSupport;I1?.({LitElement:Fn});(Sa.litElementVersions??=[]).push("4.2.0");function or(e){if(E.isObject(e))return Te(e,(r,n)=>{if(!E.isString(r))throw new TypeError(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(t1(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?he(r):r.startsWith("-")?xi`-${he(r)}`:xi`--${he(r)}`;return{name:o,value:xi`var(${o}, ${he(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${or.name}' function.`)}function R1({onElement:e,toValue:t,forCssVar:r}){e.style.setProperty(String(r.name),String(t))}const G=or({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),L1={nav:{hover:{background:G["element-book-nav-hover-background-color"],foreground:G["element-book-nav-hover-foreground-color"]},active:{background:G["element-book-nav-active-background-color"],foreground:G["element-book-nav-active-foreground-color"]},selected:{background:G["element-book-nav-selected-background-color"],foreground:G["element-book-nav-selected-foreground-color"]}},accent:{icon:G["element-book-accent-icon-color"]},page:{background:G["element-book-page-background-color"],backgroundFaint1:G["element-book-page-background-faint-level-1-color"],backgroundFaint2:G["element-book-page-background-faint-level-2-color"],foreground:G["element-book-page-foreground-color"],foregroundFaint1:G["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:G["element-book-page-foreground-faint-level-2-color"]}};function _1(e,t){Ud(e,t,L1)}function Oo(e){return E.hasKey(e,"_$cssResult$")}function fl(e){return E.hasKeys(e,["name","value","default"])&&E.isString(e.default)&&Oo(e.name)&&Oo(e.value)}function Ud(e,t,r){Object.entries(t).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(Oo(i)){if(!fl(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);R1({forCssVar:s,onElement:e,toValue:String(i)})}else{if(fl(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);Ud(e,i,s)}})}function se(e,t){let r=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let n=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return r===1&&(s=s[0]),n===1?s.map(o=>o[0]):s}function Hn(e){return Qt(e)==="string"}function Qt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function zi(e,{precision:t,unit:r}){return er(e)?"none":Wd(e,t)+(r??"")}function er(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function pe(e){return er(e)?0:e}function Wd(e,t){if(e===0)return 0;let r=~~e,n=0;r&&t&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(t-n);return Math.floor(e*i+.5)/i}const O1={deg:1,grad:.9,rad:180/Math.PI,turn:360};function jd(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(n),c=u;if(l){let f=l[0],m=c.slice(0,-f.length);f==="%"?(c=new Number(m/100),c.type="<percentage>"):(c=new Number(m*O1[f]),c.type="<angle>",c.unit=f)}else r.test(c)?(c=new Number(c),c.type="<number>"):c==="none"&&(c=new Number(NaN),c.none=!0);a.startsWith("/")&&(c=c instanceof Number?c:new Number(c),c.alpha=!0),typeof c=="object"&&c instanceof Number&&(c.raw=u),o.push(c)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function qd(e){return e[e.length-1]}function Ln(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function zd(e,t,r){return(r-e)/(t-e)}function Fa(e,t,r){return Ln(t[0],t[1],zd(e[0],e[1],r))}function Kd(e){return e.map(t=>t.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function Gd(e,t,r){return Math.max(Math.min(r,t),e)}function hs(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function yt(e,t){return hs(Math.abs(e)**t,e)}function xa(e,t){return t===0?0:e/t}function Zd(e,t,r=0,n=e.length){for(;r<n;){const i=r+n>>1;e[i]<t?r=i+1:n=i}return r}var V1=Object.freeze({__proto__:null,bisectLeft:Zd,clamp:Gd,copySign:hs,interpolate:Ln,interpolateInv:zd,isNone:er,isString:Hn,last:qd,mapRange:Fa,multiplyMatrices:se,parseCoordGrammar:Kd,parseFunction:jd,serializeNumber:zi,skipNone:pe,spow:yt,toPrecision:Wd,type:Qt,zdiv:xa});class U1{add(t,r,n){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(t,r){this[t]=this[t]||[],this[t].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const tr=new U1;var Ge={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const xe={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Vo(e){return Array.isArray(e)?e:xe[e]}function Ki(e,t,r,n={}){if(e=Vo(e),t=Vo(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return r;let i={W1:e,W2:t,XYZ:r,options:n};if(tr.run("chromatic-adaptation-start",i),i.M||(i.W1===xe.D65&&i.W2===xe.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===xe.D50&&i.W2===xe.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),tr.run("chromatic-adaptation-end",i),i.M)return se(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const W1=new Set(["<number>","<percentage>","<angle>"]);function dl(e,t,r,n){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=n[a],c=l?.type,f;if(l.none?f=u.find(y=>W1.has(y)):f=u.find(y=>y==c),!f){let y=o.name||s;throw new TypeError(`${c??l.raw} not allowed for ${y} in ${r}()`)}let m=f.range;c==="<percentage>"&&(m||=[0,1]);let p=o.range||o.refRange;return m&&p&&(n[a]=Fa(m,p,n[a])),f})}function Yd(e,{meta:t}={}){let r={str:String(e)?.trim()};if(tr.run("parse-start",r),r.color)return r.color;if(r.parsed=jd(r.str),r.parsed){let n=r.parsed.name;if(n==="color"){let i=r.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let c of T.all){let f=c.getFormat("color");if(f&&(o.includes(f.id)||f.ids?.filter(m=>o.includes(m)).length)){const m=Object.keys(c.coords).map((y,w)=>r.parsed.args[w]||0);let p;return f.coordGrammar&&(p=dl(c,f,"color",m)),t&&Object.assign(t,{formatId:"color",types:p}),f.id.startsWith("--")&&!i.startsWith("--")&&Ge.warn(`${c.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${i}).`),i.startsWith("--")&&!f.id.startsWith("--")&&Ge.warn(`${c.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${i}).`),{spaceId:c.id,coords:m,alpha:a}}}let u="",l=i in T.registry?i:s;if(l in T.registry){let c=T.registry[l].formats?.color?.id;c&&(u=`Did you mean color(${c})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of T.all){let s=i.getFormat(n);if(s&&s.type==="function"){let o=1;(s.lastAlpha||qd(r.parsed.args).alpha)&&(o=r.parsed.args.pop());let a=r.parsed.args,u;return s.coordGrammar&&(u=dl(i,s,n,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let n of T.all)for(let i in n.formats){let s=n.formats[i];if(s.type!=="custom"||s.test&&!s.test(r.str))continue;let o=s.parse(r.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function V(e){if(Array.isArray(e))return e.map(V);if(!e)throw new TypeError("Empty color reference");Hn(e)&&(e=Yd(e));let t=e.space||e.spaceId;return t instanceof T||(e.space=T.get(t)),e.alpha===void 0&&(e.alpha=1),e}const j1=75e-6;class T{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?T.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let r=t.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=t.white??this.base.white??"D65";this.white=Vo(n),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:T.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:q1(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),tr.run("colorspace-init-end",this)}inGamut(t,{epsilon:r=j1}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:r});let n=Object.values(this.coords);return t.every((i,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-r)&&(u===void 0||i<=u+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=hl(t,this),t;let r;return t==="default"?r=Object.values(this.formats)[0]:r=this.formats[t],r?(r=hl(r,this),r):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,r){if(arguments.length===1){const a=V(t);[t,r]=[a.space,a.coords]}if(t=T.get(t),this.equals(t))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=t.path,s,o;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)s=n[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(t,r){if(arguments.length===1){const n=V(t);[t,r]=[n.space,n.coords]}return t=T.get(t),t.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(T.registry))]}static register(t,r){if(arguments.length===1&&(r=arguments[0],t=r.id),r=this.get(r),this.registry[t]&&this.registry[t]!==r)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(t,...r){if(!t||t instanceof T)return t;if(Qt(t)==="string"){let i=T.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(r.length)return T.get(...r);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,r){let n=Qt(t),i,s;if(n==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=T.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(n=Qt(s),n==="number"||n==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=T.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function q1(e){let t=[e];for(let r=e;r=r.base;)t.push(r);return t}function hl(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=Kd(e.coords);let r=Object.entries(t).map(([n,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(n,i)=>n.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=r[o];return a&&u&&(s=Fa(a,u,s)),s=zi(s,{precision:i,unit:l}),s})}return e}var be=new T({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Oe extends T{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=be),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=r=>{let n=se(t.toXYZ_M,r);return this.white!==this.base.white&&(n=Ki(this.white,this.base.white,n)),n},t.fromBase??=r=>(r=Ki(this.base.white,this.white,r),se(t.fromXYZ_M,r))),t.referred??="display",super(t)}}function Qn(e,t){return e=V(e),!t||e.space.equals(t)?e.coords.slice():(t=T.get(t),t.from(e))}function je(e,t){e=V(e);let{space:r,index:n}=T.resolveCoord(t,e.space);return Qn(e,r)[n]}function Ta(e,t,r){return e=V(e),t=T.get(t),e.coords=t.to(e.space,r),e}Ta.returns="color";function Lt(e,t,r){if(e=V(e),arguments.length===2&&Qt(arguments[1])==="object"){let n=arguments[1];for(let i in n)Lt(e,i,n[i])}else{typeof r=="function"&&(r=r(je(e,t)));let{space:n,index:i}=T.resolveCoord(t,e.space),s=Qn(e,n);s[i]=r,Ta(e,n,s)}return e}Lt.returns="color";var Na=new T({id:"xyz-d50",name:"XYZ D50",white:"D50",base:be,fromBase:e=>Ki(be.white,"D50",e),toBase:e=>Ki("D50",be.white,e)});const z1=216/24389,ml=24/116,fi=24389/27;let eo=xe.D50;var qe=new T({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:eo,base:Na,fromBase(e){let r=e.map((n,i)=>n/eo[i]).map(n=>n>z1?Math.cbrt(n):(fi*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ml?Math.pow(t[0],3):(116*t[0]-16)/fi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/fi,t[2]>ml?Math.pow(t[2],3):(116*t[2]-16)/fi].map((n,i)=>n*eo[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function vt(e){return(e%360+360)%360}function K1(e,t){if(e==="raw")return t;let[r,n]=t.map(vt),i=n-r;return e==="increasing"?i<0&&(n+=360):e==="decreasing"?i>0&&(r+=360):e==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):e==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var _n=new T({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:qe,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const pl=25**7,Gi=Math.PI,gl=180/Gi,xr=Gi/180;function yl(e){const t=e*e;return t*t*t*e}function Jd(e,t,{kL:r=1,kC:n=1,kH:i=1}={}){[e,t]=V([e,t]);let[s,o,a]=qe.from(e),u=_n.from(qe,[s,o,a])[1],[l,c,f]=qe.from(t),m=_n.from(qe,[l,c,f])[1];u<0&&(u=0),m<0&&(m=0);let p=(u+m)/2,y=yl(p),w=.5*(1-Math.sqrt(y/(y+pl))),A=(1+w)*o,D=(1+w)*c,S=Math.sqrt(A**2+a**2),M=Math.sqrt(D**2+f**2),L=A===0&&a===0?0:Math.atan2(a,A),q=D===0&&f===0?0:Math.atan2(f,D);L<0&&(L+=2*Gi),q<0&&(q+=2*Gi),L*=gl,q*=gl;let $e=l-s,nt=M-S,Ne=q-L,Ve=L+q,gt=Math.abs(Ne),Dt;S*M===0?Dt=0:gt<=180?Dt=Ne:Ne>180?Dt=Ne-360:Ne<-180?Dt=Ne+360:Ge.warn("the unthinkable has happened");let ri=2*Math.sqrt(M*S)*Math.sin(Dt*xr/2),A0=(s+l)/2,Ts=(S+M)/2,Ha=yl(Ts),Et;S*M===0?Et=Ve:gt<=180?Et=Ve/2:Ve<360?Et=(Ve+360)/2:Et=(Ve-360)/2;let Qa=(A0-50)**2,C0=1+.015*Qa/Math.sqrt(20+Qa),Xa=1+.045*Ts,un=1;un-=.17*Math.cos((Et-30)*xr),un+=.24*Math.cos(2*Et*xr),un+=.32*Math.cos((3*Et+6)*xr),un-=.2*Math.cos((4*Et-63)*xr);let eu=1+.015*Ts*un,$0=30*Math.exp(-1*((Et-275)/25)**2),k0=2*Math.sqrt(Ha/(Ha+pl)),S0=-1*Math.sin(2*$0*xr)*k0,ni=($e/(r*C0))**2;return ni+=(nt/(n*Xa))**2,ni+=(ri/(i*eu))**2,ni+=S0*(nt/(n*Xa))*(ri/(i*eu)),Math.sqrt(ni)}const G1=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Z1=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Y1=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],J1=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Yr=new T({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:be,fromBase(e){let r=se(G1,e).map(n=>Math.cbrt(n));return se(Y1,r)},toBase(e){let r=se(J1,e).map(n=>n**3);return se(Z1,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Uo(e,t){[e,t]=V([e,t]);let[r,n,i]=Yr.from(e),[s,o,a]=Yr.from(t),u=r-s,l=n-o,c=i-a;return Math.sqrt(u**2+l**2+c**2)}const H1=75e-6;function Dr(e,t,{epsilon:r=H1}={}){e=V(e),t||(t=e.space),t=T.get(t);let n=e.coords;return t!==e.space&&(n=t.from(e)),t.inGamut(n,{epsilon:r})}function Jr(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Hd(e,t,r="lab"){r=T.get(r);let n=r.from(e),i=r.from(t);return Math.sqrt(n.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function Q1(e,t){return Hd(e,t,"lab")}const X1=Math.PI,wl=X1/180;function ey(e,t,{l:r=2,c:n=1}={}){[e,t]=V([e,t]);let[i,s,o]=qe.from(e),[,a,u]=_n.from(qe,[i,s,o]),[l,c,f]=qe.from(t),m=_n.from(qe,[l,c,f])[1];a<0&&(a=0),m<0&&(m=0);let p=i-l,y=a-m,w=s-c,A=o-f,D=w**2+A**2-y**2,S=.511;i>=16&&(S=.040975*i/(1+.01765*i));let M=.0638*a/(1+.0131*a)+.638,L;Number.isNaN(u)&&(u=0),u>=164&&u<=345?L=.56+Math.abs(.2*Math.cos((u+168)*wl)):L=.36+Math.abs(.4*Math.cos((u+35)*wl));let q=Math.pow(a,4),$e=Math.sqrt(q/(q+1900)),nt=M*($e*L+1-$e),Ne=(p/(r*S))**2;return Ne+=(y/(n*M))**2,Ne+=D/nt**2,Math.sqrt(Ne)}const vl=203;var Ma=new T({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:be,fromBase(e){return e.map(t=>Math.max(t*vl,0))},toBase(e){return e.map(t=>Math.max(t/vl,0))}});const di=1.15,hi=.66,bl=2610/2**14,ty=2**14/2610,Dl=3424/2**12,El=2413/2**7,Al=2392/2**7,ry=1.7*2523/2**5,Cl=2**5/(1.7*2523),mi=-.56,to=16295499532821565e-27,ny=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],iy=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],sy=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],oy=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var Qd=new T({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ma,fromBase(e){let[t,r,n]=e,i=di*t-(di-1)*n,s=hi*r-(hi-1)*t,a=se(ny,[i,s,n]).map(function(m){let p=Dl+El*(m/1e4)**bl,y=1+Al*(m/1e4)**bl;return(p/y)**ry}),[u,l,c]=se(sy,a);return[(1+mi)*u/(1+mi*u)-to,l,c]},toBase(e){let[t,r,n]=e,i=(t+to)/(1+mi-mi*(t+to)),o=se(oy,[i,r,n]).map(function(m){let p=Dl-m**Cl,y=Al*m**Cl-El;return 1e4*(p/y)**ty}),[a,u,l]=se(iy,o),c=(a+(di-1)*l)/di,f=(u+(hi-1)*c)/hi;return[c,f,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Wo=new T({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qd,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function ay(e,t){[e,t]=V([e,t]);let[r,n,i]=Wo.from(e),[s,o,a]=Wo.from(t),u=r-s,l=n-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let c=i-a,f=2*Math.sqrt(n*o)*Math.sin(c/2*(Math.PI/180));return Math.sqrt(u**2+l**2+f**2)}const Xd=3424/4096,eh=2413/128,th=2392/128,$l=2610/16384,uy=2523/32,ly=16384/2610,kl=32/2523,cy=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],fy=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],dy=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],hy=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var jo=new T({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ma,fromBase(e){let t=se(cy,e);return my(t)},toBase(e){let t=py(e);return se(hy,t)}});function my(e){let t=e.map(function(r){let n=Xd+eh*(r/1e4)**$l,i=1+th*(r/1e4)**$l;return(n/i)**uy});return se(fy,t)}function py(e){return se(dy,e).map(function(n){let i=Math.max(n**kl-Xd,0),s=eh-th*n**kl;return 1e4*(i/s)**ly})}function gy(e,t){[e,t]=V([e,t]);let[r,n,i]=jo.from(e),[s,o,a]=jo.from(t);return 720*Math.sqrt((r-s)**2+.25*(n-o)**2+(i-a)**2)}const yy=xe.D65,rh=.42,Sl=1/rh,ro=2*Math.PI,nh=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],wy=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],vy=[[460,451,288],[460,-891,-261],[460,-220,-6300]],by={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},yr={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Dy=180/Math.PI,Fl=Math.PI/180;function ih(e,t){return e.map(n=>{const i=yt(t*Math.abs(n)*.01,rh);return 400*hs(i,n)/(i+27.13)})}function Ey(e,t){const r=100/t*27.13**Sl;return e.map(n=>{const i=Math.abs(n);return hs(r*yt(i/(400-i),Sl),n)})}function Ay(e){let t=vt(e);t<=yr.h[0]&&(t+=360);const r=Zd(yr.h,t)-1,[n,i]=yr.h.slice(r,r+2),[s,o]=yr.e.slice(r,r+2),a=yr.H[r],u=(t-n)/s;return a+100*u/(u+(i-t)/o)}function Cy(e){let t=(e%400+400)%400;const r=Math.floor(.01*t);t=t%100;const[n,i]=yr.h.slice(r,r+2),[s,o]=yr.e.slice(r,r+2);return vt((t*(o*n-s*i)-100*n*o)/(t*(o-s)-100*o))}function sh(e,t,r,n,i){const s={};s.discounting=i,s.refWhite=e,s.surround=n;const o=e.map(w=>w*100);s.la=t,s.yb=r;const a=o[1],u=se(nh,o);n=by[s.surround];const l=n[0];s.c=n[1],s.nc=n[2];const f=(1/(5*s.la+1))**4;s.fl=f*s.la+.1*(1-f)*(1-f)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const m=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(w=>Ln(1,a/w,m)),s.dRgbInv=s.dRgb.map(w=>1/w);const p=u.map((w,A)=>w*s.dRgb[A]),y=ih(p,s.fl);return s.aW=s.nbb*(2*y[0]+y[1]+.05*y[2]),s}const xl=sh(yy,64/Math.PI*.2,20,"average",!1);function qo(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let r=0;e.h!==void 0?r=vt(e.h)*Fl:r=Cy(e.H)*Fl;const n=Math.cos(r),i=Math.sin(r);let s=0;e.J!==void 0?s=yt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=yt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(r+2)+3.8),l=t.aW*yt(s,2/t.c/t.z),c=5e4/13*t.nc*t.ncb*u,f=l/t.nbb,m=23*(f+.305)*xa(a,23*c+a*(11*n+108*i)),p=m*n,y=m*i,w=Ey(se(vy,[f,p,y]).map(A=>A*1/1403),t.fl);return se(wy,w.map((A,D)=>A*t.dRgbInv[D])).map(A=>A/100)}function oh(e,t){const r=e.map(M=>M*100),n=ih(se(nh,r).map((M,L)=>M*t.dRgb[L]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(s,i)%ro+ro)%ro,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*xa(a*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),l=yt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),c=t.nbb*(2*n[0]+n[1]+.05*n[2]),f=yt(c/t.aW,.5*t.c*t.z),m=100*yt(f,2),p=4/t.c*f*(t.aW+4)*t.flRoot,y=l*f,w=y*t.flRoot,A=vt(o*Dy),D=Ay(A),S=50*yt(t.c*l/(t.aW+4),1/2);return{J:m,C:y,h:A,s:S,Q:p,M:w,H:D}}var $y=new T({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:be,fromBase(e){const t=oh(e,xl);return[t.J,t.M,t.h]},toBase(e){return qo({J:e[0],M:e[1],h:e[2]},xl)}});const ky=xe.D65,Sy=216/24389,ah=24389/27;function Fy(e){return 116*(e>Sy?Math.cbrt(e):(ah*e+16)/116)-16}function zo(e){return e>8?Math.pow((e+16)/116,3):e/ah}function xy(e,t){let[r,n,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=zo(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let c=0,f=1/0;for(;c<=l;){s=qo({J:o,C:n,h:r},t);const m=Math.abs(s[1]-a);if(m<f){if(m<=u)return s;f=m}o=o-(s[1]-a)*o/(2*s[1]),c+=1}return qo({J:o,C:n,h:r},t)}function Ty(e,t){const r=Fy(e[1]);if(r===0)return[0,0,0];const n=oh(e,Ba);return[vt(n.h),n.C,r]}const Ba=sh(ky,200/Math.PI*zo(50),zo(50)*100,"average",!1);var On=new T({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:be,fromBase(e){return Ty(e)},toBase(e){return xy(e,Ba)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Ny=Math.PI/180,Tl=[1,.007,.0228];function Nl(e){e[1]<0&&(e=On.fromBase(On.toBase(e)));const t=Math.log(Math.max(1+Tl[2]*e[1]*Ba.flRoot,1))/Tl[2],r=e[0]*Ny,n=t*Math.cos(r),i=t*Math.sin(r);return[e[2],n,i]}function My(e,t){[e,t]=V([e,t]);let[r,n,i]=Nl(On.from(e)),[s,o,a]=Nl(On.from(t));return Math.sqrt((r-s)**2+(n-o)**2+(i-a)**2)}var Hr={deltaE76:Q1,deltaECMC:ey,deltaE2000:Jd,deltaEJz:ay,deltaEITP:gy,deltaEOK:Uo,deltaEHCT:My};function By(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const Ml={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function rr(e,{method:t=Ge.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=V(e),Hn(arguments[1])?r=arguments[1]:r||(r=e.space),r=T.get(r),Dr(e,r,{epsilon:0}))return e;let o;if(t==="css")o=Py(e,{space:r});else{if(t!=="clip"&&!Dr(e,r)){Object.prototype.hasOwnProperty.call(Ml,t)&&({method:t,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=Ml[t]);let a=Jd;if(n!==""){for(let l in Hr)if("deltae"+n.toLowerCase()===l.toLowerCase()){a=Hr[l];break}}let u=rr(ne(e,r),{method:"clip",space:r});if(a(e,u)>i){if(Object.keys(s).length===3){let S=T.resolveCoord(s.channel),M=je(ne(e,S.space),S.id);if(er(M)&&(M=0),M>=s.max)return ne({space:"xyz-d65",coords:xe.D65},e.space);if(M<=s.min)return ne({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=T.resolveCoord(t),c=l.space,f=l.id,m=ne(e,c);m.coords.forEach((S,M)=>{er(S)&&(m.coords[M]=0)});let y=(l.range||l.refRange)[0],w=By(i),A=y,D=je(m,f);for(;D-A>w;){let S=Jr(m);S=rr(S,{space:r,method:"clip"}),a(m,S)-i<w?A=je(m,f):D=je(m,f),Lt(m,f,(A+D)/2)}o=ne(m,r)}else o=u}else o=ne(e,r);if(t==="clip"||!Dr(o,r,{epsilon:0})){let a=Object.values(r.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[c,f]=a[l];return c!==void 0&&(u=Math.max(c,u)),f!==void 0&&(u=Math.min(u,f)),u})}}return r!==e.space&&(o=ne(o,e.space)),e.coords=o.coords,e}rr.returns="color";const Bl={WHITE:{space:Yr,coords:[1,0,0]},BLACK:{space:Yr,coords:[0,0,0]}};function Py(e,{space:t}={}){e=V(e),t||(t=e.space),t=T.get(t);const i=T.get("oklch");if(t.isUnbounded)return ne(e,t);const s=ne(e,i);let o=s.coords[0];if(o>=1){const y=ne(Bl.WHITE,t);return y.alpha=e.alpha,ne(y,t)}if(o<=0){const y=ne(Bl.BLACK,t);return y.alpha=e.alpha,ne(y,t)}if(Dr(s,t,{epsilon:0}))return ne(s,t);function a(y){const w=ne(y,t),A=Object.values(t.coords);return w.coords=w.coords.map((D,S)=>{if("range"in A[S]){const[M,L]=A[S].range;return Gd(M,D,L)}return D}),w}let u=0,l=s.coords[1],c=!0,f=Jr(s),m=a(f),p=Uo(m,f);if(p<.02)return m;for(;l-u>1e-4;){const y=(u+l)/2;if(f.coords[1]=y,c&&Dr(f,t,{epsilon:0}))u=y;else if(m=a(f),p=Uo(m,f),p<.02){if(.02-p<1e-4)break;c=!1,u=y}else l=y}return m}function ne(e,t,{inGamut:r}={}){e=V(e),t=T.get(t);let n=t.from(e),i={space:t,coords:n,alpha:e.alpha};return r&&(i=rr(i,r===!0?void 0:r)),i}ne.returns="color";function xn(e,{precision:t=Ge.precision,format:r="default",inGamut:n=!0,...i}={}){let s;e=V(e);let o=r;r=e.space.getFormat(r)??e.space.getFormat("default")??T.DEFAULT_FORMAT;let a=e.coords.slice();if(n||=r.toGamut,n&&!Dr(e)&&(a=rr(Jr(e),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=t,r.serialize)s=r.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,t):t!==null&&(a=a.map(m=>zi(m,{precision:t})));let l=[...a];if(u==="color"){let m=r.id||r.ids?.[0]||e.space.id;l.unshift(m)}let c=e.alpha;t!==null&&(c=zi(c,{precision:t}));let f=e.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${c}`;s=`${u}(${l.join(r.commas?", ":" ")}${f})`}return s}const Iy=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ry=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var ms=new Oe({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Iy,fromXYZ_M:Ry});const pi=1.09929682680944,Pl=.018053968510807;var uh=new Oe({id:"rec2020",name:"REC.2020",base:ms,toBase(e){return e.map(function(t){return t<Pl*4.5?t/4.5:Math.pow((t+pi-1)/pi,1/.45)})},fromBase(e){return e.map(function(t){return t>=Pl?pi*Math.pow(t,.45)-(pi-1):4.5*t})}});const Ly=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],_y=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var lh=new Oe({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Ly,fromXYZ_M:_y});const Oy=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],we=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var ch=new Oe({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Oy,fromXYZ_M:we}),Il={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Rl=Array(3).fill("<percentage> | <number>[0, 255]"),Ll=Array(3).fill("<number>[0, 255]");var Qr=new Oe({id:"srgb",name:"sRGB",base:ch,fromBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let r=t<0?-1:1,n=t*r;return n<=.04045?t/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Rl},rgb_number:{name:"rgb",commas:!0,coords:Ll,noAlpha:!0},color:{},rgba:{coords:Rl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ll},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,r=>{t.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:r=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let n=r&&e.every(s=>s%17===0);return"#"+e.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Il.black,t.alpha=0):t.coords=Il[e],t.coords)return t}}}}),fh=new Oe({id:"p3",cssId:"display-p3",name:"P3",base:lh,fromBase:Qr.fromBase,toBase:Qr.toBase});Ge.display_space=Qr;let Vy;if(typeof CSS<"u"&&CSS.supports)for(let e of[qe,uh,fh]){let t=e.getMinCoords(),n=xn({space:e,coords:t,alpha:1});if(CSS.supports("color",n)){Ge.display_space=e;break}}function Uy(e,{space:t=Ge.display_space,...r}={}){let n=xn(e,r);if(typeof CSS>"u"||CSS.supports("color",n)||!Ge.display_space)n=new String(n),n.color=e;else{let i=e;if((e.coords.some(er)||er(e.alpha))&&!(Vy??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=Jr(e),i.coords=i.coords.map(pe),i.alpha=pe(i.alpha),n=xn(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=ne(i,t),n=new String(xn(i,r)),n.color=i}return n}function Wy(e,t){return e=V(e),t=V(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((r,n)=>r===t.coords[n])}function nr(e){return je(e,[be,"y"])}function dh(e,t){Lt(e,[be,"y"],t)}function jy(e){Object.defineProperty(e.prototype,"luminance",{get(){return nr(this)},set(t){dh(this,t)}})}var qy=Object.freeze({__proto__:null,getLuminance:nr,register:jy,setLuminance:dh});function zy(e,t){e=V(e),t=V(t);let r=Math.max(nr(e),0),n=Math.max(nr(t),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Ky=.56,Gy=.57,Zy=.62,Yy=.65,_l=.022,Jy=1.414,Hy=.1,Qy=5e-4,Xy=1.14,Ol=.027,e2=1.14;function Vl(e){return e>=_l?e:e+(_l-e)**Jy}function Tr(e){let t=e<0?-1:1,r=Math.abs(e);return t*Math.pow(r,2.4)}function t2(e,t){t=V(t),e=V(e);let r,n,i,s,o,a;t=ne(t,"srgb"),[s,o,a]=t.coords;let u=Tr(s)*.2126729+Tr(o)*.7151522+Tr(a)*.072175;e=ne(e,"srgb"),[s,o,a]=e.coords;let l=Tr(s)*.2126729+Tr(o)*.7151522+Tr(a)*.072175,c=Vl(u),f=Vl(l),m=f>c;return Math.abs(f-c)<Qy?n=0:m?(r=f**Ky-c**Gy,n=r*Xy):(r=f**Yy-c**Zy,n=r*e2),Math.abs(n)<Hy?i=0:n>0?i=n-Ol:i=n+Ol,i*100}function r2(e,t){e=V(e),t=V(t);let r=Math.max(nr(e),0),n=Math.max(nr(t),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const n2=5e4;function i2(e,t){e=V(e),t=V(t);let r=Math.max(nr(e),0),n=Math.max(nr(t),0);return n>r&&([r,n]=[n,r]),n===0?n2:(r-n)/n}function s2(e,t){e=V(e),t=V(t);let r=je(e,[qe,"l"]),n=je(t,[qe,"l"]);return Math.abs(r-n)}const o2=216/24389,Ul=24/116,gi=24389/27;let no=xe.D65;var Ko=new T({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:no,base:be,fromBase(e){let r=e.map((n,i)=>n/no[i]).map(n=>n>o2?Math.cbrt(n):(gi*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Ul?Math.pow(t[0],3):(116*t[0]-16)/gi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/gi,t[2]>Ul?Math.pow(t[2],3):(116*t[2]-16)/gi].map((n,i)=>n*no[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const io=Math.pow(5,.5)*.5+.5;function a2(e,t){e=V(e),t=V(t);let r=je(e,[Ko,"l"]),n=je(t,[Ko,"l"]),i=Math.abs(Math.pow(r,io)-Math.pow(n,io)),s=Math.pow(i,1/io)*Math.SQRT2-40;return s<7.5?0:s}var Ti=Object.freeze({__proto__:null,contrastAPCA:t2,contrastDeltaPhi:a2,contrastLstar:s2,contrastMichelson:r2,contrastWCAG21:zy,contrastWeber:i2});function u2(e,t,r={}){Hn(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(Ti).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=V(e),t=V(t);for(let s in Ti)if("contrast"+n.toLowerCase()===s.toLowerCase())return Ti[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function ps(e){let[t,r,n]=Qn(e,be),i=t+15*r+3*n;return[4*t/i,9*r/i]}function hh(e){let[t,r,n]=Qn(e,be),i=t+r+n;return[t/i,r/i]}function l2(e){Object.defineProperty(e.prototype,"uv",{get(){return ps(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return hh(this)}})}var c2=Object.freeze({__proto__:null,register:l2,uv:ps,xy:hh});function Dn(e,t,r={}){Hn(r)&&(r={method:r});let{method:n=Ge.deltaE,...i}=r;for(let s in Hr)if("deltae"+n.toLowerCase()===s.toLowerCase())return Hr[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function f2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Lt(e,n,i=>i*(1+t))}function d2(e,t=.25){let n=[T.get("oklch","lch"),"l"];return Lt(e,n,i=>i*(1-t))}var h2=Object.freeze({__proto__:null,darken:d2,lighten:f2});function mh(e,t,r=.5,n={}){return[e,t]=[V(e),V(t)],Qt(r)==="object"&&([r,n]=[.5,r]),Xn(e,t,n)(r)}function ph(e,t,r={}){let n;Pa(e)&&([n,r]=[e,t],[e,t]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=r;n||([e,t]=[V(e),V(t)],n=Xn(e,t,u));let l=Dn(e,t),c=i>0?Math.max(o,Math.ceil(l/i)+1):o,f=[];if(a!==void 0&&(c=Math.min(c,a)),c===1)f=[{p:.5,color:n(.5)}];else{let m=1/(c-1);f=Array.from({length:c},(p,y)=>{let w=y*m;return{p:w,color:n(w)}})}if(i>0){let m=f.reduce((p,y,w)=>{if(w===0)return 0;let A=Dn(y.color,f[w-1].color,s);return Math.max(p,A)},0);for(;m>i;){m=0;for(let p=1;p<f.length&&f.length<a;p++){let y=f[p-1],w=f[p],A=(w.p+y.p)/2,D=n(A);m=Math.max(m,Dn(D,y.color),Dn(D,w.color)),f.splice(p,0,{p:A,color:n(A)}),p++}}}return f=f.map(m=>m.color),f}function Xn(e,t,r={}){if(Pa(e)){let[u,l]=[e,t];return Xn(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:n,outputSpace:i,progression:s,premultiplied:o}=r;e=V(e),t=V(t),e=Jr(e),t=Jr(t);let a={colors:[e,t],options:r};if(n?n=T.get(n):n=T.registry[Ge.interpolationSpace]||e.space,i=i?T.get(i):n,e=ne(e,n),t=ne(t,n),e=rr(e),t=rr(t),n.coords.h&&n.coords.h.type==="angle"){let u=r.hue=r.hue||"shorter",l=[n,"h"],[c,f]=[je(e,l),je(t,l)];isNaN(c)&&!isNaN(f)?c=f:isNaN(f)&&!isNaN(c)&&(f=c),[c,f]=K1(u,[c,f]),Lt(e,l,c),Lt(t,l,f)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((m,p)=>{let y=t.coords[p];return Ln(m,y,u)}),c=Ln(e.alpha,t.alpha,u),f={space:n,coords:l,alpha:c};return o&&(f.coords=f.coords.map(m=>m/c)),i!==n&&(f=ne(f,i)),f},{rangeArgs:a})}function Pa(e){return Qt(e)==="function"&&!!e.rangeArgs}Ge.interpolationSpace="lab";function m2(e){e.defineFunction("mix",mh,{returns:"color"}),e.defineFunction("range",Xn,{returns:"function<color>"}),e.defineFunction("steps",ph,{returns:"array<color>"})}var p2=Object.freeze({__proto__:null,isRange:Pa,mix:mh,range:Xn,register:m2,steps:ph}),gh=new T({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Qr,fromBase:e=>{let t=Math.max(...e),r=Math.min(...e),[n,i,s]=e,[o,a,u]=[NaN,0,(r+t)/2],l=t-r;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case n:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-n)/l+2;break;case s:o=(n-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,r,n]=e;t=t%360,t<0&&(t+=360),r/=100,n/=100;function i(s){let o=(s+t/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),yh=new T({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:gh,fromBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[t,i===0?0:200*(1-n/i),100*i]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=n*(1-r/2);return[t,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),g2=new T({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:yh,fromBase(e){let[t,r,n]=e;return[t,n*(100-r)/100,100-n]},toBase(e){let[t,r,n]=e;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[t,0,a*100]}let s=1-n,o=s===0?0:1-r/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const y2=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],w2=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var wh=new Oe({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:y2,fromXYZ_M:w2}),v2=new Oe({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:wh,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const b2=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],D2=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var vh=new Oe({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Na,toXYZ_M:b2,fromXYZ_M:D2});const E2=1/512,A2=16/512;var C2=new Oe({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:vh,toBase(e){return e.map(t=>t<A2?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=E2?t**(1/1.8):16*t)}}),$2=new T({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Yr,fromBase(e){let[t,r,n]=e,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(i)]},toBase(e){let[t,r,n]=e,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let bh=xe.D65;const k2=216/24389,Wl=24389/27,[jl,ql]=ps({space:be,coords:bh});var Dh=new T({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:bh,base:be,fromBase(e){let t=[pe(e[0]),pe(e[1]),pe(e[2])],r=t[1],[n,i]=ps({space:be,coords:t});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=k2?Wl*r:116*Math.cbrt(r)-16;return[s,13*s*(n-jl),13*s*(i-ql)]},toBase(e){let[t,r,n]=e;if(t===0||er(t))return[0,0,0];r=pe(r),n=pe(n);let i=r/(13*t)+jl,s=n/(13*t)+ql,o=t<=8?t/Wl:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ia=new T({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Dh,fromBase(e){let[t,r,n]=e,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[t,Math.sqrt(r**2+n**2),vt(i)]},toBase(e){let[t,r,n]=e;return r<0&&(r=0),isNaN(n)&&(n=0),[t,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const S2=216/24389,F2=24389/27,zl=we[0][0],Kl=we[0][1],so=we[0][2],Gl=we[1][0],Zl=we[1][1],oo=we[1][2],Yl=we[2][0],Jl=we[2][1],ao=we[2][2];function Nr(e,t,r){const n=t/(Math.sin(r)-e*Math.cos(r));return n<0?1/0:n}function Zi(e){const t=Math.pow(e+16,3)/1560896,r=t>S2?t:e/F2,n=r*(284517*zl-94839*so),i=r*(838422*so+769860*Kl+731718*zl),s=r*(632260*so-126452*Kl),o=r*(284517*Gl-94839*oo),a=r*(838422*oo+769860*Zl+731718*Gl),u=r*(632260*oo-126452*Zl),l=r*(284517*Yl-94839*ao),c=r*(838422*ao+769860*Jl+731718*Yl),f=r*(632260*ao-126452*Jl);return{r0s:n/s,r0i:i*e/s,r1s:n/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/f,b0i:c*e/f,b1s:l/(f+126452),b1i:(c-769860)*e/(f+126452)}}function Hl(e,t){const r=t/360*Math.PI*2,n=Nr(e.r0s,e.r0i,r),i=Nr(e.r1s,e.r1i,r),s=Nr(e.g0s,e.g0i,r),o=Nr(e.g1s,e.g1i,r),a=Nr(e.b0s,e.b0i,r),u=Nr(e.b1s,e.b1i,r);return Math.min(n,i,s,o,a,u)}var x2=new T({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ia,gamutSpace:Qr,fromBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Zi(t),o=Hl(s,n);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Zi(n);i=Hl(s,t)/100*r}return[n,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});we[0][0];we[0][1];we[0][2];we[1][0];we[1][1];we[1][2];we[2][0];we[2][1];we[2][2];function Mr(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Ql(e){let t=Mr(e.r0s,e.r0i),r=Mr(e.r1s,e.r1i),n=Mr(e.g0s,e.g0i),i=Mr(e.g1s,e.g1i),s=Mr(e.b0s,e.b0i),o=Mr(e.b1s,e.b1i);return Math.min(t,r,n,i,s,o)}var T2=new T({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ia,gamutSpace:"self",fromBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=Zi(t),o=Ql(s);i=r/o*100}return[n,i,t]},toBase(e){let[t,r,n]=[pe(e[0]),pe(e[1]),pe(e[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Zi(n);i=Ql(s)/100*r}return[n,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Xl=203,ec=2610/2**14,N2=2**14/2610,M2=2523/2**5,tc=2**5/2523,rc=3424/2**12,nc=2413/2**7,ic=2392/2**7;var B2=new Oe({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:ms,toBase(e){return e.map(function(t){return(Math.max(t**tc-rc,0)/(nc-ic*t**tc))**N2*1e4/Xl})},fromBase(e){return e.map(function(t){let r=Math.max(t*Xl/1e4,0),n=rc+nc*r**ec,i=1+ic*r**ec;return(n/i)**M2})}});const sc=.17883277,oc=.28466892,ac=.55991073,uo=3.7743;var P2=new Oe({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:ms,toBase(e){return e.map(function(t){return t<=.5?t**2/3*uo:(Math.exp((t-ac)/sc)+oc)/12*uo})},fromBase(e){return e.map(function(t){return t/=uo,t<=1/12?Math.sqrt(3*t):sc*Math.log(12*t-oc)+ac})}});const Eh={};tr.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Ah(e.W1,e.W2,e.options.method))});tr.add("chromatic-adaptation-end",e=>{e.M||(e.M=Ah(e.W1,e.W2,e.options.method))});function gs({id:e,toCone_M:t,fromCone_M:r}){Eh[e]=arguments[0]}function Ah(e,t,r="Bradford"){let n=Eh[r],[i,s,o]=se(n.toCone_M,e),[a,u,l]=se(n.toCone_M,t),c=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],f=se(c,n.toCone_M);return se(n.fromCone_M,f)}gs({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});gs({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});gs({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});gs({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(xe,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});xe.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const I2=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],R2=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Ch=new Oe({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:xe.ACES,toXYZ_M:I2,fromXYZ_M:R2});const yi=2**-16,lo=-.35828683,wi=(Math.log2(65504)+9.72)/17.52;var L2=new Oe({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[lo,wi],name:"Red"},g:{range:[lo,wi],name:"Green"},b:{range:[lo,wi],name:"Blue"}},referred:"scene",base:Ch,toBase(e){const t=-.3013698630136986;return e.map(function(r){return r<=t?(2**(r*17.52-9.72)-yi)*2:r<wi?2**(r*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(yi)+9.72)/17.52:t<yi?(Math.log2(yi+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),uc=Object.freeze({__proto__:null,A98RGB:v2,A98RGB_Linear:wh,ACEScc:L2,ACEScg:Ch,CAM16_JMh:$y,HCT:On,HPLuv:T2,HSL:gh,HSLuv:x2,HSV:yh,HWB:g2,ICTCP:jo,JzCzHz:Wo,Jzazbz:Qd,LCH:_n,LCHuv:Ia,Lab:qe,Lab_D65:Ko,Luv:Dh,OKLCH:$2,OKLab:Yr,P3:fh,P3_Linear:lh,ProPhoto:C2,ProPhoto_Linear:vh,REC_2020:uh,REC_2020_Linear:ms,REC_2100_HLG:P2,REC_2100_PQ:B2,XYZ_ABS_D65:Ma,XYZ_D50:Na,XYZ_D65:be,sRGB:Qr,sRGB_Linear:ch});let H=class Be{constructor(...t){let r;t.length===1&&(r=V(t[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=t,Object.defineProperty(this,"space",{value:T.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Be(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let r=Uy(this,...t);return r.color=new Be(r.color),r}static get(t,...r){return t instanceof Be?t:new Be(t,...r)}static defineFunction(t,r,n=r){let{instance:i=!0,returns:s}=n,o=function(...a){let u=r(...a);if(s==="color")u=Be.get(u);else if(s==="function<color>"){let l=u;u=function(...c){let f=l(...c);return Be.get(f)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Be.get(l)));return u};t in Be||(Be[t]=o),i&&(Be.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let r in t)Be.defineFunction(r,t[r],t[r])}static extend(t){if(t.register)t.register(Be);else for(let r in t)Be.defineFunction(r,t[r])}};H.defineFunctions({get:je,getAll:Qn,set:Lt,setAll:Ta,to:ne,equals:Wy,inGamut:Dr,toGamut:rr,distance:Hd,toString:xn});Object.assign(H,{util:V1,hooks:tr,WHITES:xe,Space:T,spaces:T.registry,parse:Yd,defaults:Ge});for(let e of Object.keys(uc))T.register(uc[e]);for(let e in T.registry)Go(e,T.registry[e]);tr.add("colorspace-init-end",e=>{Go(e.id,e),e.aliases?.forEach(t=>{Go(t,e)})});function Go(e,t){let r=e.replace(/-/g,"_");Object.defineProperty(H.prototype,r,{get(){let n=this.getAll(e);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return T.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=T.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=T.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(n){this.setAll(e,n)},configurable:!0,enumerable:!0})}H.extend(Hr);H.extend({deltaE:Dn});Object.assign(H,{deltaEMethods:Hr});H.extend(h2);H.extend({contrast:u2});H.extend(c2);H.extend(qy);H.extend(p2);H.extend(Ti);const _2=Symbol("no update");class co extends on()("observable-value-update"){}class O2 extends Td("observable-destroy"){}class V2{listenTarget=new ya;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const r=t[0];return r===_2||(t.length===2?t[1]:this.equalityCheck)?.(this.value,r)?!1:(this.value=r,this.listenTarget.dispatch(new co({detail:r})),!0)}listen(t,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),t&&r(this.value),this.listenTarget.listen(co,n)}removeListener(t){const r=this.listenerMap.get(t);return!!r&&this.listenTarget.removeListener(co,r)}destroy(){this.listenTarget.dispatch(new O2),this.listenTarget.destroy()}listenToEvent(t,r,n){return this.listenTarget.listen(t,r,n)}}function U2(e,t){return Ag(e,t,(r,n)=>E.isFunction(r)&&E.isFunction(n)?!0:E.strictEquals(r,n))}const $h="__vir__shape__definition__key__do__not__use__in__actual__objects",Ra="__vir__shape__specifier__key__do__not__use__in__actual__objects",kh="__vir__custom__specifier__key__do__not__use__in__actual__objects";function La(e){return E.hasKey(e,kh)}function Sh({customName:e,defaultValue:t,checker:r}){return{customName:e,checker:r,defaultValue:t,[kh]:!0,[Ra]:!0}}Sh({customName:"UUID",defaultValue:Vi.isUuid("00000000-0000-1000-0000-000000000000"),checker:E.isUuid});function _a(e){return E.hasKey(e,$h)}var ge;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional",e.Tuple="tuple"})(ge||(ge={}));function W2(...e){return ar(e,ge.And)}function Zo(...e){return ar(e,ge.Enum)}function O(...e){return ar(e,ge.Exact)}function ys(...e){return ar(e,ge.IndexedKeys)}function Q(...e){return ar(e,ge.Or)}function j2(e){return ar([e],ge.Unknown)}function Rr(e,t){return ar([e,t],ge.NumericRange)}function We(e){return ar([e],ge.Optional)}function ws(e){return bt(e,ge.And)}function vs(e){return bt(e,ge.Class)}function bs(e){return bt(e,ge.Enum)}function Ds(e){return bt(e,ge.Exact)}function Es(e){return bt(e,ge.IndexedKeys)}function Fh(e){return bt(e,ge.Tuple)}function ei(e){return bt(e,ge.Or)}function As(e){return bt(e,ge.Unknown)}function xh(e){return bt(e,ge.NumericRange)}function Yi(e){return bt(e,ge.Optional)}function bt(e,t){const r=ti(e);return!!r&&r.specifierType===t}function ar(e,t){return{[Ra]:!0,specifierType:t,parts:e}}function ti(e){if(!(!E.isObject(e)||!E.hasKey(e,Ra)))return e}class lc extends TypeError{name="DefaultValueConstructionError"}function q2(e,t){const r=t?.constructor,n=e?.constructor?.prototype,i=e?.constructor===r,s=r&&n?n instanceof r:!1;return typeof e==typeof t&&(i||s)}class Ie extends TypeError{name="ShapeMismatchError"}function Th(e,t,r={}){try{return Nh(e,t,r),!0}catch{return!1}}function Nh(e,t,r={},n=""){try{ke({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}catch(i){throw n?ts(i,n):i}}function Yo(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ke({subject:e,shape:t,keys:r,options:n}){if(As(t))return!0;if(_a(t))return ke({subject:e,shape:t.shape,keys:r,options:n});if(La(t)){if(!t.checker(e))throw new Ie(`Subject ${h(e)} does not match ${t.customName} shape.`);return!0}const i=Yo(r);if(ti(e))throw new Ie(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(Fh(t)){if(!E.isArray(e))throw new Ie(`Subject is not an array and cannot match tuple definition at key ${i}`);return t.parts.every((o,a)=>{const u=e[a];return ke({keys:[...r,a],options:n,shape:o,subject:u})})}else{if(Yi(t))return ke({keys:r,options:n,shape:t.parts[0],subject:e});if(Ni(e,t,r,n)){if(E.isFunction(t))return E.isFunction(e);if(vs(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(c=>[c,!1])),u=[];let l=!1;if(ei(t)){const c=[];l=t.parts.some(f=>{try{const m=ke({subject:e,shape:f,keys:r,options:n});return Object.assign(a,m),!0}catch(m){if(m instanceof Ie)return c.push(m.message),!1;throw m}}),!l&&E.isLengthAtLeast(c,1)&&u.push(c[0])}else if(ws(t))l=t.parts.every(c=>{try{const f=ke({subject:e,shape:c,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,f),!0}catch(f){if(f instanceof Ie)return u.push(f.message),!1;throw f}});else if(Ds(t)){const c=ke({subject:e,shape:t.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,c),l=!0}else{if(bs(t))throw new Ie(`Cannot compare an enum specifier to an object at ${i}`);if(E.isArray(t)&&E.isArray(o))l=o.every((c,f)=>{const m=t.some(p=>{try{return ke({subject:c,shape:p,keys:[...r,f],options:n}),!0}catch(y){if(y instanceof Ie)return u.push(y.message),!1;throw y}});return a[f]=m,m});else if(Es(t)){const c=Te(e,(f,m)=>(n.ignoreExtraKeys||ke({shape:t.parts[0].keys,subject:f,keys:[...r,f],options:n}),ke({shape:t.parts[0].values,subject:m,keys:[...r,f],options:n}),!0));Object.assign(a,c),l=!0}else{const c=z2({keys:r,options:n,shape:t,subject:e});Object.assign(a,c),l=!0}}if(u.length)throw new Ie(es(u));if(!l){const f=`Failed on key(s): ${Object.keys(a).filter(m=>!a[m]).map(m=>Yo([...r,m])).join(",")}`;throw new Ie(f)}return n.ignoreExtraKeys||Object.entries(a).forEach(([c,f])=>{if(!f)throw new Ie(`subject as extra key '${c}' in ${i}.`)}),a}else if(n.exactValues)return e===t}else throw new Ie(`Subject does not match shape definition at key ${i}`)}return!0}function z2({keys:e,options:t,shape:r,subject:n}){const i=Yo(e),s={};if(E.isObject(r)){const o=new Set(J(r)),a=new Set(J(n));o.forEach(u=>{(u in n||Yi(r[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Ie(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=r[u],c=ei(l)?l.parts.includes(void 0):!1,f=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!c&&!f)throw new Ie(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in n)&&Yi(r[u])){s[u]=!0;return}const l=n[u];if(t.ignoreExtraKeys&&!o.has(u))return;const c=r[u];ke({subject:l,shape:c,keys:[...e,u],options:t}),s[u]=!0})}else throw new Ie(`Shape definition at ${i} was not an object.`);return s}function Ni(e,t,r,n,i){const s=ti(t);if(s){if(La(s))return s.checker(e);if(xh(s))return E.isNumber(e)?e>=s.parts[0]&&e<=s.parts[1]:!1;if(vs(s))return e instanceof s.parts[0];if(ws(s))return s.parts.every(o=>{try{return ke({subject:e,shape:o,keys:r,options:{...n,ignoreExtraKeys:!0}}),!0}catch{return!1}});if(ei(s))return s.parts.some(o=>{try{return ke({subject:e,shape:o,keys:r,options:n}),!0}catch{return!1}});if(Ds(s))return E.isObject(e)?(ke({subject:e,shape:s.parts[0],keys:r,options:{...n,exactValues:!0}}),!0):e===s.parts[0];if(bs(s))return E.hasValue(Object.values(s.parts[0]),e);if(Es(s)){if(!E.isObject(e))return!1;const o=K2(e,s,!!n.ignoreExtraKeys),a=Ro(e).every(u=>{try{return ke({subject:u,shape:s.parts[0].values,keys:r,options:n}),!0}catch{return!1}});return o&&a}else if(As(s))return!0}return i?t===e:q2(e,t)}function K2(e,t,r){const n=t.parts[0].required,i=t.parts[0].keys,s=Oa(t);if(E.isBoolean(s))return J(e).every(u=>Ni(u,i,[],{exactValues:!1,ignoreExtraKeys:r}));const o=n?s.every(u=>J(e).some(l=>Ni(l,u,[],{exactValues:!1,ignoreExtraKeys:!1},!0))):!0;return J(e).every(u=>s.includes(u)?Ni(u,i,[],{exactValues:!1,ignoreExtraKeys:!1}):r)&&o}function Oa(e){const t=e.parts[0].keys,r=ti(t);if(E.isPropertyKey(t))return!0;if(r){if(vs(r))return!1;if(ws(r))return!1;if(ei(r)){const n=r.parts.map(i=>Oa(ys({...e.parts[0],keys:i})));return n.includes(!1)?!1:n.flat().filter(E.isPropertyKey)}else if(Ds(r)){const n=r.parts.filter(E.isPropertyKey);return n.length!==r.parts.length?!1:n}else{if(bs(r))return Object.values(r.parts[0]);if(Es(r))return!1;if(As(r))return!0}}return!1}function Jo(e){return gr(e)}function gr(e){const t=ti(e);if(La(e))return e.defaultValue;if(t){if(Fh(t))return t.parts.map(r=>gr(r));if(Yi(t))return gr(t.parts[0]);if(xh(t))return t.parts[0];if(vs(t)){const r=t.parts[0];try{return new r}catch(n){throw new lc(`Failed to create default value for classShape for class '${r.name}': ${_e(n)}`)}}else{if(ei(t)||Ds(t))return gr(t.parts[0]);if(ws(t))return t.parts.reduce((r,n)=>Object.assign(r,gr(n)),{});if(bs(t))return t.parts[1]||Object.values(t.parts[0])[0];if(Es(t)){const r=Oa(t);return!t.parts[0].required||E.isBoolean(r)?{}:Object.fromEntries(r.map(n=>[n,gr(t.parts[0].values)]))}else{if(As(t))return t.parts[0]??{};throw new lc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return _a(e)?Jo(e.shape):e instanceof RegExp?e:E.isArray(e)?e.map(gr):E.isObject(e)?Te(e,(r,n)=>Jo(n)):e}function tt(e,t=!1){if(_a(e))return e;const r={shape:e,isReadonly:t,get defaultValue(){return Jo(e)},[$h]:!0};return Object.defineProperty(r,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),r}const G2=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Mh=G2.reduce((e,t)=>(e[t]=t,e),{});re.defaultZone.name;const Bh=Mh.UTC,Z2=tt({hour:Rr(Pu.min,Pu.max),minute:Rr(Iu.min,Iu.max),second:Rr(Ru.min,Ru.max),millisecond:Rr(Lu.min,Lu.max),timezone:Zo(Mh,Bh)}),Y2=tt({year:2023,month:Rr(Mu.min,Mu.max),day:Rr(Bu.min,Bu.max),timezone:Bh});tt(W2(Y2,Z2));B.Years+"",B.Quarters+"",B.Months+"",B.Weeks+"",B.Days+"",B.Hours+"",B.Minutes+"",B.Seconds+"",B.Milliseconds+"";tt(Q({get:O(N.Month),in:Q(O(N.Year),O(N.Quarter))},{get:O(N.Week),in:Q(O(N.Year),O(N.Quarter),O(N.Month))},{get:O(N.Day),in:Q(O(N.Year),O(N.Quarter),O(N.Month),O(N.Week))},{get:O(N.Hour),in:Q(O(N.Year),O(N.Quarter),O(N.Month),O(N.Week),O(N.Day))},{get:O(N.Minute),in:Q(O(N.Year),O(N.Quarter),O(N.Month),O(N.Week),O(N.Day),O(N.Hour))},{get:O(N.Second),in:Q(O(N.Year),O(N.Quarter),O(N.Month),O(N.Week),O(N.Day),O(N.Hour),O(N.Minute))},{get:O(N.Millisecond),in:Q(O(N.Year),O(N.Quarter),O(N.Month),O(N.Week),O(N.Day),O(N.Hour),O(N.Minute),O(N.Second))}));var cc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(cc||(cc={}));var Ho;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(Ho||(Ho={}));var fc;(function(e){e.Year="year",e.Month="month",e.Day="day"})(fc||(fc={}));const J2={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Yg(J2,Ft(Ho));re.defaultLocale;tt(Sh({defaultValue:new Date().toISOString(),customName:"UtcIsoString",checker(e){return H2(e)}}));function H2(e){return I.fromISO(e).toUTC().toISO()===e}const Q2=tt({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:j2()});function fo(e){return Th(e,Q2,{allowExtraKeys:!0})}class Ph extends V2{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||U2}setValue(t){return super.setValue(t)}listen(t,r){return super.listen(t,r)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:X2}=M1,dc=()=>document.createComment(""),pn=(e,t,r)=>{const n=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(r===void 0){const s=n.insertBefore(dc(),i),o=n.insertBefore(dc(),i);r=new X2(s,o,e,e.options)}else{const s=r._$AB.nextSibling,o=r._$AM,a=o!==e;if(a){let u;r._$AQ?.(e),r._$AM=e,r._$AP!==void 0&&(u=e._$AU)!==o._$AU&&r._$AP(u)}if(s!==i||a){let u=r._$AA;for(;u!==s;){const l=u.nextSibling;n.insertBefore(u,i),u=l}}}return r},pr=(e,t,r=e)=>(e._$AI(t,r),e),ew={},tw=(e,t=ew)=>e._$AH=t,rw=e=>e._$AH,ho=e=>{e._$AP?.(!1,!0);let t=e._$AA;const r=e._$AB.nextSibling;for(;t!==r;){const n=t.nextSibling;t.remove(),t=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs={ATTRIBUTE:1,CHILD:2,ELEMENT:6},ur=e=>(...t)=>({_$litDirective$:e,values:t});class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nw={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:Ca},iw=(e=nw,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){const{name:o}=r;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+n)};function sw(e){return(t,r)=>typeof r=="object"?iw(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=ur(class extends _t{constructor(e){if(super(e),e.type!==Cs.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const i=!!t[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Ke}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ji=e=>e??ue;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Qo extends _t{constructor(t){if(super(t),this.it=ue,t.type!==Cs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ue||t==null)return this._t=void 0,this.it=t;if(t===Ke)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Qo.directiveName="unsafeHTML",Qo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hc extends Qo{}hc.directiveName="unsafeSVG",hc.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ow(e,t,r){return e?t(e):r?.(e)}class aw extends Fn{static assign;static assignedInputs;static tagName;static styles;static render;static InputsType;static StateType;static UpdateStateType;static events;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function uw(e,t,r){const n=!t.length&&!r.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(n||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function Xo(e){return E.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function Va(e){return E.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function Ih(e){return Ad(e,t=>{if(Xo(t))return t.definition;if(Va(t))return t.tagInterpolationKey||t},E.isTruthy)}const Rh=new WeakMap;function lw(e,t){const r=Ih(t);return Lh(Rh,[e,...r]).value?.template}function cw(e,t,r){const n=Ih(t);return Oh(Rh,[e,...n],r)}function Lh(e,t,r=0){const{currentTemplateAndNested:n,reason:i}=_h(e,t,r);return n?r===t.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Lh(n.nested,t,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function _h(e,t,r){const n=t[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!e.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=e.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function Oh(e,t,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=_h(e,t,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),n===t.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),Oh(u,t,r,n+1)}function Vh(e,t,r){const n=lw(e,t),i=n??r();if(!n){const a=cw(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=uw(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function Uh(e,t,r,n){const i=[],s=[],o=[],a=[];return e.forEach((l,c)=>{const f=i.length-1,m=i[f],p=c-1,y=t[p];n&&n(l);let w,A=[];if(typeof m=="string"&&(w=r(m,l,y),w)){i[f]=[m,w.replacement].join(""),o.push(p);const S=w.getExtraValues;A=S?S(y):[],A.length&&S?(i[f]+=" ",A.forEach((M,L)=>{L&&i.push(" ")}),a.push(M=>{const L=M[p],q=S(L);return{index:p,values:q}}),i.push(l)):i[f]+=l}w||i.push(l);const D=e.raw[c];w?(s[f]=[s[f],w.replacement,D].join(""),A.length&&A.forEach(()=>{s.push("")})):s.push(D)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const c=a.flatMap(f=>f(l));return{valueIndexDeletions:o,valueInsertions:c}}}}function fw(...[e,t,r]){if(Va(r))return{replacement:r.tagName,getExtraValues:void 0}}function dw(e,t){return Uh(e,t,fw)}function k(e,...t){const r=Vh(e,t,()=>dw(e,t));return xi(r.strings,...r.values)}const hw={allowPolymorphicState:!1};function Wh(e,t){const r=e.instanceState;J(t).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${String(n)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[n]=t[n]:e[n]=t[n]}),"instanceInputs"in e&&J(e.instanceInputs).forEach(n=>{n in t||(e.instanceInputs[n]=void 0)})}function mc(e,t){const r=[e,"-"].join("");Object.keys(t).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${e}': CSS property names must begin with the element's tag name.`)})}class mw extends CustomEvent{_type="";get type(){return this._type}constructor(t,r){super(typeof t=="string"?t:t.type,{detail:r,bubbles:!0,composed:!0})}}function Ua(){return e=>class extends mw{static type=e;_type=e;constructor(t){super(e,t)}}}function pt(){return Ua()}function pw(e,t){return t?Object.keys(t).filter(r=>{if(typeof r!="string")throw new TypeError(`Expected event key of type string but got type '${typeof r}' for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=Ua()([e,n].join("-"));return r[n]=i,r},{}):{}}function gw(e){return e?Te(e,t=>t):{}}function jh(e,t){t in e||sw()(e,t)}function yw(e,t,r){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${r.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${r.toLowerCase()}'.`)}function pc(e,t){const r=e;function n(o){t?yw(o,e,e.tagName):jh(e,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,u){n(a);const l=r[a];function c(m){o[a]=m,r[a]=m}const f=e.observablePropertyListenerMap[a];if(l!==u&&fo(l)&&f&&l.removeListener(f),fo(u))if(f)u.listen(!1,f);else{let m=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=m,u.listen(!1,m)}else fo(l)&&(e.observablePropertyListenerMap[a]=void 0);return c(u),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function ww({hostClassNames:e,cssVars:t}){return{hostClasses:Te(e,(r,n)=>({name:he(n),selector:he(`:host(.${n})`)})),cssVars:t}}function vw({host:e,hostClassesInit:t,hostClassNames:r,state:n,inputs:i}){t&&J(t).forEach(s=>{const o=t[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function bw({element:e,eventsMap:t,cssVars:r,slotNamesMap:n}){function i(o){J(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:r,slotNames:n,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function Dw(e){return e?e.reduce((r,n)=>(r[n]=n,r),{}):{}}function Wa(e){if(!E.isObject(e))throw new TypeError("Cannot define element with non-object init: ${init}");if(!E.isString(e.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!e.render||typeof e.render=="string")throw new Error(`Failed to define element '${e.tagName}': render is not a function`);const t={...hw,...e.options},r=pw(e.tagName,e.events),n=gw(e.hostClasses);e.hostClasses&&mc(e.tagName,e.hostClasses),e.cssVars&&mc(e.tagName,e.cssVars);const i=e.cssVars?or(e.cssVars):{},s=Dw(e.slotNames),o=typeof e.styles=="function"?e.styles(ww({hostClassNames:n,cssVars:i})):e.styles||k``,a=e.render;function u(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:l,inputs:c}}const l=class extends aw{static elementOptions=t;static tagName=e.tagName;static styles=o;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return bw({element:this,eventsMap:r,cssVars:i,slotNamesMap:s})}static assign=u;static events=r;static render=a;static hostClasses=n;static cssVars=i;static init=e;static slotNames=s;get InstanceType(){throw new Error(`'InstanceType' was called on ${e.tagName} as a value but it is only a type.`)}static get InputsType(){throw new Error(`'InputsType' was called on ${e.tagName} as a value but it is only a type.`)}static get StateType(){throw new Error(`'StateType' was called on ${e.tagName} as a value but it is only a type.`)}static get UpdateStateType(){throw new Error(`'UpdateStateType' was called on ${e.tagName} as a value but it is only a type.`)}_initCalled=!1;_stateCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;render(){this._internalRenderCount++;try{this._hasRendered=!0;const c=this.createRenderParams();if(!this._stateCalled&&e.state){this._stateCalled=!0;const m=e.state(c);if(m instanceof Promise)throw new TypeError("init cannot be asynchronous");J(m).forEach(p=>{jh(this,p),this.instanceState[p]=m[p]})}if(!this._initCalled&&e.init&&(this._initCalled=!0,e.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const f=a(c);if(f instanceof Promise)throw new TypeError("render cannot be asynchronous");return vw({host:c.host,hostClassesInit:e.hostClasses,hostClassNames:n,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},f}catch(c){const f=ts(c,`Failed to render ${e.tagName}`);return console.error(f),this._lastRenderError=f,_e(f)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.init){this._initCalled=!0;const c=this.createRenderParams();if(e.init(c)instanceof Promise)throw new TypeError(`init in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{E.hasKey(c,"destroy")&&E.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanup){const c=this.createRenderParams();if(e.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1,this._stateCalled=!1}definition={};assignInputs(c){Wh(this,c)}observablePropertyListenerMap={};instanceInputs=pc(this,!1);instanceState=pc(this,!t.allowPolymorphicState);constructor(){super(),this.definition=l}};return Object.defineProperties(l,{name:{value:e1(e.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,l),l}function ja(...e){return sr.isEmpty(e),t=>{const r=t;if(!E.isObject(r))throw new TypeError("Cannot define element with non-object init: ${init}");return Wa({...r,options:{...r.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gc=(e,t,r)=>{const n=new Map;for(let i=t;i<=r;i++)n.set(e[i],i);return n},Ew=ur(class extends _t{constructor(e){if(super(e),e.type!==Cs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let n;r===void 0?r=t:t!==void 0&&(n=t);const i=[],s=[];let o=0;for(const a of e)i[o]=n?n(a,o):o,s[o]=r(a,o),o++;return{values:s,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,n]){const i=rw(e),{values:s,keys:o}=this.dt(t,r,n);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,c,f=0,m=i.length-1,p=0,y=s.length-1;for(;f<=m&&p<=y;)if(i[f]===null)f++;else if(i[m]===null)m--;else if(a[f]===o[p])u[p]=pr(i[f],s[p]),f++,p++;else if(a[m]===o[y])u[y]=pr(i[m],s[y]),m--,y--;else if(a[f]===o[y])u[y]=pr(i[f],s[y]),pn(e,u[y+1],i[f]),f++,y--;else if(a[m]===o[p])u[p]=pr(i[m],s[p]),pn(e,i[f],i[m]),m--,p++;else if(l===void 0&&(l=gc(o,p,y),c=gc(a,f,m)),l.has(a[f]))if(l.has(a[m])){const w=c.get(o[p]),A=w!==void 0?i[w]:null;if(A===null){const D=pn(e,i[f]);pr(D,s[p]),u[p]=D}else u[p]=pr(A,s[p]),pn(e,i[f],A),i[w]=null;p++}else ho(i[m]),m--;else ho(i[f]),f++;for(;p<=y;){const w=pn(e,u[y+1]);pr(w,s[p]),u[p++]=w}for(;f<=m;){const w=i[f++];w!==null&&ho(w)}return this.ut=o,tw(e,u),Ke}}),Aw=Ew;function $s(e,t){return Un(e,t),e.element}function Cw(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Un(e,t){const r=Cw(e),n=r?`: in ${r}`:"";if(e.type!==Cs.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${n}.`);if(!e.element)throw new Error(`${t} directive found no element${n}.`)}function $w(e){const t=ur(class extends _t{element;constructor(r){super(r),this.element=$s(r,e)}render(r){return this.element.setAttribute(e,r),Ke}});return{attributeSelector(r){return`[${e}="${r}"]`},attributeDirective(r){return t(r)},attributeName:e}}function Y(e,t){return kw(e,t)}const kw=ur(class extends _t{element;lastListenerMetaData;constructor(e){super(e),this.element=$s(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:r=>this.lastListenerMetaData?.callback(r)}}render(e,t){const r=typeof e=="string"?e:e.type;if(typeof r!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(r)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),Ke}}),yc="onDomCreated",wc=ur(class extends _t{element;constructor(e){super(e),Un(e,yc)}update(e,[t]){Un(e,yc);const r=e.element;return r!==this.element&&(window.requestAnimationFrame(()=>t(r)),this.element=r),this.render(t)}render(e){}}),mo="onResize",qh=ur(class extends _t{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Un(e,mo)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${mo} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Un(e,mo),this.callback=t;const r=e.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(t)}render(e){}});function Le(e,t,r){return ow(e,()=>t,()=>r)}const{attributeDirective:Sw}=$w("data-test-id"),En=Sw;J({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",InputsType:"",render:"",slotNames:"",StateType:"",styles:"",tagName:"",UpdateStateType:""});function zh(e){const{assertInputs:t,transformInputs:r}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(n=>n)};return{defineElement:(...n)=>i=>(t(i),ja(...n)(r(i))),defineElementNoInputs:n=>(t(n),Wa(r(n)))}}function Fw(e,t){return xw(void 0,e)}const xw=ur(class extends _t{element;constructor(e){super(e),this.element=$s(e,"assign")}render(e,t){return Wh(this.element,t),Ke}}),Tw={};function Nw(e,t){return t.map((r,n)=>{const i=e[n],s=e[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=Kh(i,s);if(o&&E.isString(r))return{tagName:r,tagInterpolationKey:ls(Tw,r,()=>({tagName:r}))}}return r})}function Kh(e,t){const r=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),n=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Mw(...[e,t,r]){const n=Xo(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=Kh(e,t),o=Va(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${n?.tagName||n?.prototype?.constructor?.name||n?.constructor?.name}'`);return!s||!o?void 0:{replacement:n.tagName,getExtraValues(u){const l=Xo(u)?u.inputs:void 0;return[i&&l?Fw(l):void 0].filter(E.isTruthy)}}}function Bw(e){}function Pw(e){return Uh(e.strings,e.values,Mw,Bw)}function v(e,...t){const r=Nw(e,t),n=$1(e,...r),i=Vh(e,r,()=>Pw(n));return{...n,strings:i.strings,values:i.values}}function Gh(e){return Te(e,(t,r)=>r instanceof H?he(r.toString({format:"hex"})):Gh(r))}const Iw="dodgerblue";function ea(e){const t=Math.abs(e.contrast("white","APCA")),r=Math.abs(e.contrast("black","APCA"));return t>r?"white":"black"}function po({background:e,foreground:t}){return{background:e??new H(ea(t)),foreground:t??new H(ea(e))}}function Rw(e){return e==="black"?"white":"black"}const Lw={black:{foregroundFaint1:new H("#ccc"),foregroundFaint2:new H("#eee")},white:{foregroundFaint1:new H("#ccc"),foregroundFaint2:new H("#eee")}},_w={black:{backgroundFaint1:new H("#666"),backgroundFaint2:new H("#444")},white:{backgroundFaint1:new H("#ccc"),backgroundFaint2:new H("#fafafa")}};function vc({themeColor:e=Iw,themeStyle:t="light"}={}){const r=new H(e),n=new H(t==="dark"?"black":"white"),i=ea(n),s=new H(i),o={nav:{hover:po({background:r.clone().set({"hsl.l":93})}),active:po({background:r.clone().set({"hsl.l":90})}),selected:po({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,..._w[Rw(i)],foreground:s,...Lw[i]}};return Gh(o)}var Mt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(Mt||{});async function ta(e=1){const t=new jc;function r(){requestAnimationFrame(()=>{e--,e?r():t.resolve()})}return r(),t.promise}function Ow(e,t){return{element:e,children:Zh(e)}}function Zh(e,t,r){return Vw(e).map(n=>{const i=Zh(n);return{element:n,children:i}})}function Vw(e){return[...e.children,...e.shadowRoot?.children??[]]}function go(e){return e.matches(":focus")}function Hi(e){if(e instanceof ShadowRoot)return Hi(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:Hi(t)}function Yh(e,t){if(t(e))return e;const r=Hi(e);if(r)return Yh(r,t)}async function Uw(e){return Ww(e,1)}async function Ww(e,t){return new Promise(r=>{new IntersectionObserver((i,s)=>{sr.isLengthAtLeast(i,1),s.disconnect(),r(i[0].intersectionRatio>=t)}).observe(e)})}function An(e,t,r={}){const n=r.useOriginalTarget?e.target:e.currentTarget;if(!(n instanceof t)){const i=t.name,s=n?.constructor.name,o=r.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}function jw(e){const t=Hi(e);return t&&Yh(t,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}function qw({searchQuery:e,searchIn:t}){const r=t.length,n=e.length;if(n>r)return!1;if(n===r)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<n;o++){const u=s.codePointAt(o);for(;a<r;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const zw=Cd(32);function Mi(e){return e.join(zw)}function Jh(e){if(!e.length)return[];const t=Mi(e),r=Jh(e.slice(0,-1));return[t,...r]}const Kw=["error","errors"];function Gw(e){return Kw.includes(e)}function Zw({flattenedNodes:e,searchQuery:t}){const r={};function n(i){Object.values(i.children).map(o=>(n(o),Mi(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&Gw(t),o=Mi(i.fullUrlBreadcrumbs);if(qw({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||r[o]){const u=Jh(i.fullUrlBreadcrumbs);n(i),u.forEach(l=>r[l]=!0)}else r[o]=!1}),e.filter(i=>{const s=Mi(i.fullUrlBreadcrumbs),o=r[s];if(!E.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class qa extends Error{name="SpaRouterError"}class bc extends qa{name="GlobalUrlEventsConsolidationError"}class Yw extends qa{name="SanitizationDepthMaxed"}tt({paths:[""],search:We(Q(void 0,ys({keys:"",values:[""],required:!1}))),hash:We(Q(void 0,""))});const Jw=tt({basePath:Q("",void 0),sanitizeRoute:e=>e,maxListenerCount:Q(1,void 0),disableWarnings:Q(void 0,!1),isPaused:Q(!1,void 0)}),yo="://";function za(...e){const t=e.join("/"),[r,n=""]=t.includes(yo)?t.split(yo):["",t];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const c=l[u+1];let f=a;const m=c?.startsWith("?"),p=!a.includes("?")&&m,y=c==="?";if(m||p){i=!0;let w=!1;const A=l.slice(u+2).reduce((D,S)=>(S.includes("#")&&(w=!0),w?D.concat(S):[D,S].join("&")),"");f=[a,c,y?Or({value:A,prefix:"&"}):A].join("")}return o.concat(f)},[]);return[r,r?yo:"",s.join("/")].join("")}var Xr;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Xr||(Xr={}));var en;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(en||(en={}));const Hw=tt({encoding:We(Q(void 0,Zo(Xr))),searchParamStrategy:We(Q(void 0,Zo(en)))});function vi(e,t){return e.map(r=>{if(r!=null)return Ur(String(r),t)}).filter(r=>r!=null)}function Ur(e,t){return t?.encoding===Xr.Decode?decodeURIComponent(e):t?.encoding===Xr.Encode?encodeURIComponent(e):e}const Qw=tt(ys({keys:"",values:[""],required:!0}));function Xw(e,t,r){const n=r?.searchParamStrategy===en.Clear?{}:Te(e,(o,a)=>E.isString(a)?[a]:a),i=Te(t,(o,a)=>{if(r?.searchParamStrategy===en.Append){const u=n[o],l=E.isArray(u)?u:[u];if(a){const c=E.isArray(a)?a:[a];return vi([...l,...c],r)}else return vi(l,r)}else return E.isArray(a)?vi(a,r):a?vi([a],r):void 0});return cs({...n,...i},(o,a)=>!!a)}function Hh(e,t){return E.isString(e)&&!e.includes("?")?{}:(E.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=Gg(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=Qh({options:t,key:o,value:a}),l=ls(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function ev(e){if(e!=null)return E.isArray(e)?[...e]:e===""?[]:[e]}function tv(e,t){const r=Ad(Object.entries(e),([n,i])=>{const s=ev(i);return s?.length?s.map(o=>{const a=Qh({options:t,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?dt({value:r.join("&"),prefix:"?"}):""}function Qh({options:e,key:t,value:r}){return{key:Ur(t,e),value:Ur(String(r),e)}}function Xh({hash:e,hostname:t,password:r,pathname:n,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",r?r+"@":"",ks({hostname:t,port:i}),Ka({hash:e,pathname:n,search:o})].join("")}function e0({pathname:e}){const t=Or({value:e,prefix:"/"});return t?t.split("/"):[]}function Ka({hash:e,pathname:t,search:r}){return[dt({value:t,prefix:"/"}),r?dt({value:r,prefix:"?"}):"",e?dt({value:e,prefix:"#"}):""].join("")}function ks({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function t0({hostname:e,port:t,protocol:r}){return[r,ks({hostname:e,port:t})].filter(E.isTruthy).join("://")}function Wr(e,t){const r=E.isString(e)?Or({value:e,prefix:"."}):e.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?dt({value:Ur(n,t),prefix:"#"}):"",s=r.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?dt({value:Ur(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",c=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),f=c.replace(/@.*/,""),m=c.replace(/^[^@]*@/,""),p=f!==m,[y,...w]=p?f.split(":").reverse():[],A=w.toReversed().join("").replace(/[/:]/g,"")||"",D=y?.replace(/[/:]/g,"")||"",S=Kg(m.replace(/\/.*/,""),":",{caseSensitive:!0}).toReversed(),M=S[0]?.endsWith("]")?"":S[1]===":"&&S[0]||"",q=m.replace(new RegExp(`:${M}($|/)`),"$1").replace(/\/.*/,""),$e=m.replace(/^[^/]*(\/|$)/,"$1"),nt=Ur($e.replace(/^[^/]*(?:\/|$)/,"/"),t),Ne=ks({hostname:q,port:M}),Ve=t0({hostname:q,port:M,protocol:l}),gt=Xh({hash:i,hostname:q,password:D,pathname:nt,port:M,protocol:l,search:a,username:A}),Dt=Hh(a),ri=e0({pathname:nt});return{fullPath:Ka({hash:i,pathname:nt,search:a}),hash:i,host:Ne,hostname:q,href:gt,origin:Ve,password:D,pathname:nt,paths:ri,port:M,protocol:l,search:a,searchParams:Dt,username:A}}tt({hash:We(Q(void 0,"")),search:We(Q(void 0,"",ys({keys:"",required:!1,values:Q(null,void 0,"",-1,!1,0n)}))),hostname:We(Q(void 0,"")),pathname:We(Q(void 0,"")),paths:We(Q(void 0,[""])),protocol:We(Q(void 0,"")),username:We(Q(void 0,"")),password:We(Q(void 0,"")),port:We(Q(void 0,"",-1))});function rv(e,t,r){const n=!!r,i=t==null||Th(t,Hw),s=i?Wr(""):E.instanceOf(e,URL)||E.isString(e)?Wr(e):e,o=i?e:t,a=E.isString(o)&&o.startsWith("."),u=E.isString(o)||E.instanceOf(o,URL)?cs(Wr(o),(w,A)=>E.isTruthy(A)):o,l=n?r:i?t:void 0,c=Te(s,(w,A)=>{if(!E.hasKey(u,w))return A;const D=u[w];return E.isNumber(D)?String(D):E.isString(D)?w==="hash"&&D?dt({value:D,prefix:"#"}):w==="pathname"?dt({value:D,prefix:"/"}):D:A});E.hasKey(u,"paths")&&u.paths&&(c.pathname=za(a?s.pathname:"",...u.paths));const f=E.isString(u.search)?Hh(dt({value:u.search,prefix:"?"})):Og(u.search||{}),m=Xw(c.searchParams,f,{...l,encoding:Xr.None}),p=tv(m,l);return{...c,searchParams:m,search:p,paths:e0(c),fullPath:Ka(c),host:ks(c),origin:t0(c),href:Xh({...c,search:p})}}const nv=tt({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:Qw,hash:"",fullPath:"/",href:"/"},!0);({...nv.defaultValue});const iv=0;function r0(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==iv)}const Ss="locationchange",Tt=globalThis.history;globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Dc=Tt?.pushState;function Ec(...e){if(!Dc)return;const t=Dc.apply(Tt,e);return globalThis.dispatchEvent(new Event(Ss)),t}const Ac=Tt?.replaceState;function Cc(...e){if(!Ac)return;const t=Ac.apply(Tt,e);return globalThis.dispatchEvent(new Event(Ss)),t}function sv(){if(!(globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY||!Tt)){{if(Tt.pushState===Ec)throw new bc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.pushState has already been overridden. Does this module have two copies in your repo?");if(Tt.replaceState===Cc)throw new bc("The consolidation module thinks that window events have not been consolidated yet but globalHistory.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,Tt.pushState=Ec,Tt.replaceState=Cc,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Ss))})}}function bi(e,t){const r=Wr(e),n=Or({value:Or({value:r.pathname,prefix:dt({value:t||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?Or({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class ov{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Nh(t,Jw),this.params={...t};const r=this.readCurrentRoute();this.innerObservable=new Ph({defaultValue:r,equalityCheck:()=>!1}),sv(),this.removeGlobalListener=Nd(globalThis,Ss,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Yw("Looping route sanitization detected; aborting window URL change listener.");const n=bi(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(n);E.jsonEquals(n,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:za(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(bi(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const r={...bi(globalThis.location.href,this.params.basePath),...t},n=this.sanitizeRoute(r),s=this.routeIncludesBasePath(bi(globalThis.location.href,void 0))&&!this.routeIncludesBasePath(n)&&this.params.basePath?{...n,paths:[this.params.basePath,...n.paths]}:n;return rv(globalThis.location.href,{paths:s.paths,search:s.search,hash:s.hash?dt({value:s.hash,prefix:"#"}):""},{searchParamStrategy:en.Clear}).href}setRoute(t,r={}){const n=this.createRouteUrl(t),{fullPath:i}=Wr(n);return this.params.isPaused||!r.force&&E.jsonEquals(Wr(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,r){return r0(r)?(r.preventDefault(),this.setRoute(t)):!1}listen(t,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new qa(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(t,r),()=>this.removeListener(r)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function av(e){return new ov({basePath:e,sanitizeRoute(t){return{paths:uv(t.paths),hash:void 0,search:void 0}}})}function uv(e){const t=e[0];if(E.isEnumValue(t,at)){if(t===at.Book)return[at.Book,...e.slice(1)];if(t===at.Search)return e[1]?[t,e[1]]:[at.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Gr.paths}const Qi=Ua()("element-book-change-route"),$c="vira-",{defineElement:lv}=zh({assertInputs:e=>{if(!e.tagName.startsWith($c))throw new Error(`Tag name should start with '${$c}' but got '${e.tagName}'`)}}),Ot=lv,C=or({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),cv=H;function fv(e){try{if(!e)throw new Error("invalid empty color");return new cv(e)}catch{throw new Error(`Invalid color: ${h(e)}`)}}function oe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function kc(e,t){const r=J(t).map(n=>{const i=t[n],s=fv(i);return`${C[n].name}: ${s.toString()};`}).join(" ");return oe({name:e.name,svgTemplate:v`
            <div style=${r}>${e.svgTemplate}</div>
        `})}const n0=oe({name:"Check24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),lt=or({"vira-form-input-radius":"8px"}),Fs=k`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,ht=or({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ar=or({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":k`calc(${lt["vira-form-input-radius"].value} + 4px)`});function Ga({selector:e,elementBorderSize:t,outlineGap:r=2,outlineWidth:n=2}){const i=he(kd(n+r+t));return k`
        ${he(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ar["vira-focus-outline-color"].value};
            border-radius: ${Ar["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Jt=or({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Ar["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),dv=k`
    padding: 0;
    margin: 0;
`,Yt=k`
    ${dv};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Sc=k`#e2e2e2`,i0={menuShadow:k`
        filter: drop-shadow(0px 5px 5px ${Sc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:k`
        filter: drop-shadow(0px -5px 5px ${Sc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Wn=k`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,P=Ot()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>k`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Nt=Ot()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            ${Wn};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${P} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${P} {
            transition: opacity
                ${ht["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${lt["vira-form-input-radius"].value}
                ${lt["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${lt["vira-form-input-radius"].value}
                ${lt["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return v`
            <div class="option">
                <${P.assign({icon:n0})}></${P}>
                <slot>${e.label}</slot>
            </div>
        `}});function hv(e,t){return e>t}function mv(e,t){return e<t}function jn(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}var wt;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(wt||(wt={}));var ie;(function(e){e.Enter="enter",e.Exit="exit",e.Activate="activate",e.Focus="focus",e.Navigate="navigate",e.Pibling="pibling"})(ie||(ie={}));function xs(e){const t=e[0]?.[0];if(t)return t.navEntry.navParams.group?xs(t.children):{node:t,coords:{x:0,y:0}}}function Fc(e,t,r,n){if(!t){const u=xs(e.children);return u?(jn(u.node.element),{success:!0,wrapped:!1,defaulted:!0,newElement:u.node.element,coords:u.coords,direction:r,navAction:ie.Navigate}):{success:!1,reason:"no default element to focus",direction:r,navAction:ie.Navigate}}const{nextNode:i,requiresWrapping:s,coords:o}=s0(t.position,r),a=n?!0:!s;return i&&a?(jn(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s,direction:r,navAction:ie.Navigate,coords:o}):i?a?{success:!1,reason:"no conditions matched",direction:r,navAction:ie.Navigate}:{success:!1,reason:"wrapping blocked",direction:r,navAction:ie.Navigate}:{success:!1,reason:"failed to find node to focus",direction:r,navAction:ie.Navigate}}function s0(e,t){const r=e.ancestorChain[e.ancestorChain.length-1]?.node;sr.isDefined(r,"missing parent");const n=Vi.isDefined(r.children[e.nodeCoords.y]),i=r.children.length>1&&(t===wt.Down||t===wt.Up),s=t===wt.Down||t===wt.Right?1:-1,o=s===-1?hv:mv,a=i?Qu(e.nodeCoords.y+s,{min:0,max:r.children.length-1}):e.nodeCoords.y,u=Vi.isDefined(r.children[a]),l=i?e.nodeCoords.x>=u.length?u.length-1:e.nodeCoords.x:Qu(e.nodeCoords.x+s,{min:0,max:n.length-1}),c=r.children[a]?.[l],f=i?o(a,e.nodeCoords.y):o(l,e.nodeCoords.x);return{nextNode:c,requiresWrapping:f,coords:{x:l,y:a}}}function pv(e,t,r){const n=e.position.ancestorChain[e.position.ancestorChain.length-1];if(!n)return{success:!1,reason:"no parent to find a pibling from",direction:t,navAction:ie.Pibling};const{nextNode:i,requiresWrapping:s,coords:o}=s0(n,t),a=i?.navEntry.navParams.group?xs(i.children):{node:i,coords:o},u=r?!0:!s;return!a||!a.node?{success:!1,reason:"no node to navigate to",direction:t,navAction:ie.Pibling}:u?(jn(a.node.element),{success:!0,defaulted:!1,newElement:a.node.element,wrapped:s,coords:a.coords,direction:t,navAction:ie.Pibling}):{success:!1,reason:"wrapping blocked",direction:t,navAction:ie.Pibling}}var ct;(function(e){e.Disabled="disabled",e.Group="group",e.Focused="focused",e.Active="active"})(ct||(ct={}));const It={name:"data-nav",js(e){return e?`[${It.name}*="${e}"]`:`[${It.name}]`},css({baseSelector:e="",navValue:t}={}){return k`
            ${he(e)}${he(It.js(t))}
        `}},Za="navEntry";function o0(e){return Za in e}function a0(e){if(o0(e)){const t=e[Za];return Vi.instanceOf(t,u0,"Invalid nav entry")}else return}function gv(e){return t=>{e.navParams.group||e.navParams.disabled||(t.type==="mousedown"?t.target===e.element&&e.activate(!0):t.type==="mouseup"||t.type==="focus"?t.target===e.element&&e.focus(!0):t.type==="mousemove"?t.target===e.element&&e.navValue!==ct.Active&&e.focus(!0):(t.type==="blur"||t.type==="mouseleave")&&t.target===e.element&&(e.activate(!1),e.focus(!1)))}}class u0{element;navParams;navTreeNode;navValue;eventListener=gv(this);constructor(t,r,n){this.element=t,this.navParams=n,this.attachListeners(),this.navController=r}set navController(t){this._navController!==t&&(this._navController?.removeNavEntry(this),this._navController=t,t.addNavEntry(this))}get navController(){return sr.isDefined(this._navController,"this.navController has not been set in NavEntry constructor yet."),this._navController}clearNavValue(){this.navValue=void 0,this.element.setAttribute(It.name,""),go(this.element)&&this.element.blur()}focus(t){if(!this.navParams.group)return t?(go(this.element)||this.element.focus(),this.setNavValue(ct.Focused)):(go(this.element)&&this.element.blur(),this.navController.options.alwaysRequireFocused||this.removeNavValue(ct.Focused)),this.navController.triggerNavEntry(this,t,ie.Focus)}activate(t){if(!this.navParams.group)return this.focus(t),t?this.setNavValue(ct.Active):this.setNavValue(ct.Focused),this.navController.triggerNavEntry(this,t,ie.Activate)}setNavValue(t){this.navValue=t,this.element.setAttribute(It.name,t)}removeNavValue(t){this.navValue===t&&(this.navValue=void 0,this.element.setAttribute(It.name,""))}attachListeners(){this.element.addEventListener("mousemove",this.eventListener,!0),this.element.addEventListener("mouseleave",this.eventListener,!0),this.element.addEventListener("mousedown",this.eventListener,!0),this.element.addEventListener("mouseup",this.eventListener,!0),this.element.addEventListener("focus",this.eventListener,!0),this.element.addEventListener("blur",this.eventListener,!0)}}function yv(e,t){Object.entries(t).forEach(([r,n])=>{E.isBoolean(n)&&n?e.setAttribute(r,""):E.isBoolean(n)||n==null?e.removeAttribute(r):e.setAttribute(r,String(n))})}const wv=ur(class extends _t{element;lastKey;constructor(e){super(e),this.element=$s(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),Ke}});function vv(e){return"group"in e?ct.Group:e.disabled?ct.Disabled:""}function bv(e,t={}){return wv(h(t),r=>{e.needsUpdate=!0;const n=!t.group&&!t.disabled;sr.instanceOf(r,HTMLElement);const i={[It.name]:vv(t),tabindex:n?0:void 0};yv(r,i);const s=a0(r)||new u0(r,e,t);o0(r)?(s.navParams=t,s.navController=e):r[Za]=s,n?r.style.setProperty("cursor","pointer"):r.style.removeProperty("cursor")})}function Dv(e,t){if(!t)return{success:!1,reason:"no focused node to enter into",direction:void 0,navAction:ie.Enter};if(!t.position.node.children.length)return{success:!1,reason:"no children to enter into",direction:void 0,navAction:ie.Enter};const r=t.position.node.children[0]?.[0];return r?(jn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:ie.Enter,coords:{x:0,y:0}}):{success:!1,reason:"failed to find first child to enter into",direction:void 0,navAction:ie.Enter}}function Ev(e,t){return l0([{ancestorChain:[],node:e,nodeCoords:{x:0,y:0}}],e.children,t)}function l0(e,t,r){for(let n=0;n<t.length;n++){const i=t[n];for(let s=0;s<i.length;s++){const o=i[s],a={ancestorChain:e,nodeCoords:{x:s,y:n},node:o};if(r(a))return a;const u=l0(e.concat(a),o.children,r);if(u)return u}}}function c0(e,t){const r=Ev(e,({node:n})=>!n.root&&n.navEntry===t);if(!r)throw new Error("Failed to find NavEntry in NavTree.");return r}function Av(e,t){if(!t)return{success:!1,reason:"no focused node to exit out of",direction:void 0,navAction:ie.Exit};const r=t.position.ancestorChain.toReversed().find(i=>!i.node.root&&!i.node.navEntry.navParams.group)?.node;if(!r||r.root)return{success:!1,reason:"failed to find ancestor, nothing to exit to",direction:void 0,navAction:ie.Exit};const{nodeCoords:n}=c0(e,r.navEntry);return jn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element,direction:void 0,navAction:ie.Exit,coords:n}}class Cv extends on()("nav-exit"){}class $v extends on()("nav-exit"){}class kv extends on()("nav-navigate"){}class Sv extends on()("nav-navigate-pibling"){}function Fv(e){return{root:!0,children:f0(e)?.children||[]}}function f0(e){const t=e.element;if(!(t instanceof HTMLElement)||t.getAttribute(It.name)===ct.Disabled)return;const n=a0(t),i=xv(e);if((n?.navParams.group?!!i.length:!1)||i.length||n)return{root:!1,element:t,navEntry:n,children:i}}function xv(e){const t=[];function r(n){if(n.navEntry?.navParams.group&&!n.children.length)return;if(!n.navEntry){n.children.forEach(a=>a.forEach(u=>r(u)));return}const i=n.navEntry.navParams.x,s=n.navEntry.navParams.y||0,o=ls(t,s,()=>({noX:[],withX:[],y:s}));i==null?o.noX.push(n):o.withX.push({x:i,node:n})}return e.children.forEach(n=>{const i=f0(n);i&&r(i)}),t.sort((n,i)=>n.y-i.y).map(n=>(n.withX.sort((i,s)=>i.x-s.x),n.withX.forEach(({x:i,node:s})=>{n.noX.splice(i,0,s)}),n.noX)).filter(E.isTruthy)}class Tv extends ya{rootElement;options;constructor(t,r={}){super(),this.rootElement=t,this.options=r}needsUpdate=!1;navEntries=new Set;currentNavEntry;cachedNavTree;getNavTree(){return this.needsUpdate||!this.cachedNavTree?(this.needsUpdate=!1,this.buildNavTree()):this.cachedNavTree}focusDefaultElement(){xs(this.getNavTree().children)?.node.element.focus()}addNavEntry(t){this.navEntries.add(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}removeNavEntry(t){this.navEntries.delete(t),this.options.alwaysRequireFocused&&!this.currentNavEntry&&requestAnimationFrame(()=>{this.focusDefaultElement()})}triggerNavEntry(t,r,n){if(!t)return{success:!1,direction:void 0,navAction:n,reason:"No nav entry to operate on."};const i=c0(this.getNavTree(),t);return r?(this.navEntries.forEach(s=>{s!==t&&s.clearNavValue()}),this.currentNavEntry={entry:t,navAction:n,position:i}):this.currentNavEntry?.entry===t&&this.currentNavEntry.navAction===n&&!this.options.alwaysRequireFocused&&(this.currentNavEntry=void 0),{success:!0,defaulted:!1,direction:void 0,newElement:t.element,wrapped:!1,navAction:n,coords:i.nodeCoords}}navigate({direction:t,allowWrapping:r}){const n=Fc(this.getNavTree(),this.currentNavEntry,t,r);return this.dispatch(new kv({detail:n})),n}enterInto({fallbackToActivate:t}={}){const r=Dv(this.getNavTree(),this.currentNavEntry);return!r.success&&t?this.activate():(this.dispatch(new $v({detail:r})),r)}activate(){if(!this.currentNavEntry?.entry)return{success:!1,direction:void 0,navAction:ie.Activate,reason:"No focused NavEntry to activate."};const t=this.currentNavEntry.entry.activate(!0);return sr.isDefined(t,"Cannot activate a group."),t}exitOutOf(){this.currentNavEntry?.navAction===ie.Activate&&this.currentNavEntry.entry.focus(!0);const t=Av(this.getNavTree(),this.currentNavEntry);return this.dispatch(new Cv({detail:t})),t}navigatePibling({allowWrapping:t,direction:r}){const n=this.getNavTree(),s={...this.currentNavEntry?pv(this.currentNavEntry,r,t):Fc(n,void 0,r,t),navAction:ie.Pibling};return this.dispatch(new Sv({detail:s})),s}buildNavTree(){const t=Ow(this.rootElement),r=Fv(t);return this.cachedNavTree=r,r}}const Nv={option:"dropdown-option"},Di=Ot()({tagName:"vira-dropdown-options",events:{selectionChange:pt()},styles:k`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${lt["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Jt["vira-form-background-color"].value};
            border: 1px solid ${Jt["vira-form-border-color"].value};
            color: ${Jt["vira-form-foreground-color"].value};
            ${i0.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${It.css({baseSelector:".dropdown-item:not(.disabled):not(.selected)",navValue:ct.Focused})} {
            background-color: ${Jt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Nt} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Fs};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:r}){const n=e.options.map(i=>{const s=e.selectedOptions.includes(i),o=i.template||v`
                    <${Nt.assign({label:i.label,selected:s})}></${Nt}>
                `;return v`
                <div
                    class="dropdown-item ${Vn({disabled:!!i.disabled,selected:s})}"
                    ${En(Nv.option)}
                    title=${Ji(i.hoverText||void 0)}
                    role="option"
                    ${bv(e.navController,{disabled:i.disabled||s})}
                    ${Y("mousedown",a=>{a.stopPropagation()})}
                    ${Y("mouseup",a=>{a.stopPropagation(),i.disabled||t(new r.selectionChange(i))})}
                >
                    ${o}
                </div>
            `});return v`
            <slot>${n}</slot>
        `}}),Mv=oe({name:"Chat24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),d0=oe({name:"ChevronUp24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${C["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),h0=oe({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Bv=oe({name:"Commit24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Pv=oe({name:"Document24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),m0=oe({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Bt=oe({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),p0=oe({name:"EyeClosed24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),g0=oe({name:"EyeOpen24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${C["vira-icon-fill-color"].value}
            stroke=${C["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${C["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),y0=oe({name:"Loader24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Iv=k`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ht["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,qn=oe({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${Iv}
        </style>
        ${y0.svgTemplate}
    `}),Ya=oe({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Rv=oe({name:"Pencil24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),Lv=oe({name:"Shield24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),_v=oe({name:"SpeakerLoud24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33M19.7 5c1.94 1.48 3.2 3.85 3.2 7s-1.26 5.53-3.2 7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Ov=oe({name:"SpeakerMedium24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M18.2 8.67c.91.7 1.5 1.83 1.5 3.33s-.59 2.63-1.5 3.33"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill="none"
            />
            <path
                d="M10 16l6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Vv=oe({name:"SpeakerMuted24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M5 16V8h5l6-5v2.2m0 5.6V21l-5.6-4.7"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
            <path
                d="M4 20 20 4"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Uv=oe({name:"SpeakerQuiet24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m10 16 6 5V3l-6 5H5v8h5Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Wv=oe({name:"Star24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
        >
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
                fill=${C["vira-icon-fill-color"].value}
            />
        </svg>
    `}),Xi=oe({name:"StatusFailure24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),jv=oe({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${C["vira-icon-stroke-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width="calc(${C["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),qv=oe({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${C["vira-icon-fill-color"].value}
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${C["vira-icon-stroke-color"].value}
                stroke-width=${C["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ra={Chat24Icon:Mv,Check24Icon:n0,ChevronUp24Icon:d0,CloseX24Icon:h0,Commit24Icon:Bv,Document24Icon:Pv,Element16Icon:m0,Element24Icon:Bt,EyeClosed24Icon:p0,EyeOpen24Icon:g0,Loader24Icon:y0,LoaderAnimated24Icon:qn,Options24Icon:Ya,Pencil24Icon:Rv,Shield24Icon:Lv,SpeakerLoud24Icon:_v,SpeakerMedium24Icon:Ov,SpeakerMuted24Icon:Vv,SpeakerQuiet24Icon:Uv,Star24Icon:Wv,StatusFailure24Icon:Xi,StatusInProgress24Icon:jv,StatusSuccess24Icon:qv};class zv extends Ph{constructor(){super({defaultValue:document.hidden,equalityCheck:E.strictEquals}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const t=r=>this.updateVisibility(r);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const r=Gv.includes(t.type),n=Kv.includes(t.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const Kv=["blur","focusout","pagehide"],Gv=["focus","focusin","pageshow"],Zv=new zv;function Yv(e,t){return Zv.listen(e,t)}const xc={top:0,left:0,right:0,bottom:0};class w0 extends Td("hide-pop-up"){}class v0 extends on()("nav-select"){}class Jv{constructor(t,r){this.navController=t,this.options={...this.options,...r}}listenTarget=new ya;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;attachGlobalListeners(){this.cleanupCallbacks=[Yv(!1,t=>{t||this.removePopUp()}),el("mousedown",t=>{this.lastRootElement&&t.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),el("keydown",t=>{const r=t.code;if(r==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(r==="ArrowDown")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Down,allowWrapping:!1});else if(r==="ArrowUp")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Up,allowWrapping:!1});else if(r==="ArrowLeft")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Left,allowWrapping:!1});else if(r==="ArrowRight")t.stopImmediatePropagation(),t.preventDefault(),this.navController.navigate({direction:wt.Right,allowWrapping:!1});else if(r==="Enter"||r==="Return"){const n=this.navController.enterInto({fallbackToActivate:!0});n.success&&(this.listenTarget.dispatch(new v0({detail:n.coords})),t.stopImmediatePropagation(),t.preventDefault())}}})]}listen(t,r,n){return this.listenTarget.listen(t,r,n)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new w0)}showPopUp(t,r){this.lastRootElement=t;const n={...this.options,...r},i=jw(t);sr.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},c=Te(xc,p=>s[p]),f=Te(xc,p=>{const y=l[p],w=c[p];return Math.abs(y-w)}),m=f.top>f.bottom+n.verticalDiffThreshold&&f.bottom<n.minDownSpace;return this.attachGlobalListeners(),{popDown:!m,positions:{container:l,root:c,diff:f}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function Hv({selected:e,options:t,isMultiSelect:r}){if(e.length&&t.length){const n=t.filter(i=>e.includes(i.id));return n.length>1&&!r?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),n.slice(0,1)):n}else return[]}function Qv(e){const t=new Set,r=[];if(e.forEach(n=>{t.has(n.id)?r.push(n.id):t.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${r1(r)}`)}function Tc(e,t,r){return r?t.includes(e)?t.filter(n=>n!==e):[...t,e]:[e]}function Nc({open:e,emitEvent:t},{updateState:r,popUpManager:n,dispatch:i,host:s}){e?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),t&&i(e)}const Ei={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Cn=Ot()({tagName:"vira-dropdown",state({host:e}){return{showPopUpResult:void 0,popUpManager:new Jv(new Tv(e))}},hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Ar["vira-focus-outline-color"].name}: ${Jt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Yt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${lt["vira-form-input-radius"].value};
            transition: border-radius
                ${ht["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${Ga({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(180deg);
            transition: ${ht["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(0);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Jt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${Wn};
            border-radius: inherit;
            background-color: ${Jt["vira-form-background-color"].value};
            color: ${Jt["vira-form-foreground-color"].value};
        }

        .open-upwards ${Di} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${i0.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Fs}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
            left: 0;
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:pt(),openChange:pt()},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:r,inputs:n,dispatch:i,events:s}){e.popUpManager.listen(w0,()=>{if(t({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");sr.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(v0,o=>{const a=o.detail.x,u=n.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||Nc({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:r,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(Tc(u.id,n.selected,!!n.isMultiSelect)))})},render({dispatch:e,events:t,state:r,inputs:n,updateState:i,host:s}){Qv(n.options);function o(y){Nc(y,{dispatch:w=>{e(new t.openChange(w))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=Hv(n),u=n.icon?v`
                  <${P.assign({icon:n.icon})}
                      ${En(Ei.icon)}
                  ></${P}>
              `:"",l=r.showPopUpResult?r.showPopUpResult.popDown?k`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:k`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function c(){o({emitEvent:!0,open:!r.showPopUpResult})}const f=!a.length,m=n.selectionPrefix&&!f?v`
                      <span class="selected-label-prefix" ${En(Ei.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",p=f?n.placeholder||"":a.map(y=>y.label).join(", ");return v`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Vn({open:!!r.showPopUpResult,"open-upwards":!r.showPopUpResult?.popDown})}"
                ${En(Ei.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${Y("keydown",y=>{!r.showPopUpResult&&y.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${Y("click",y=>{y.detail===0&&c()})}
                ${Y("mousedown",y=>{y.button===0&&c()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${Vn({"using-placeholder":f})}"
                        title=${Ji(f?p:void 0)}
                    >
                        ${m} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${P.assign({icon:d0})}
                            class="trigger-icon"
                        ></${P}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${Le(!!r.showPopUpResult,v`
                            <${Di.assign({options:n.options,selectedOptions:a,navController:r.popUpManager.navController})}
                                ${Y(Di.events.selectionChange,y=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(Tc(y.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${En(Ei.options)}
                            ></${Di}>
                        `)}
                </div>
            </button>
        `}}),le=ja()({tagName:"vira-bold",cssVars:{"vira-bold-bold-weight":"bold"},hostClasses:{"vira-bold-bold":({inputs:e})=>e.bold},styles:({hostClasses:e,cssVars:t})=>k`
        span {
            text-decoration: inherit;
            white-space: inherit;
        }

        .bold-wrapper {
            position: relative;
        }

        .everything-wrapper {
            width: 100%;
        }

        .bold {
            font-weight: ${t["vira-bold-bold-weight"].value};
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }

        .normal {
            position: absolute;
            top: 0;
            left: 0;
        }

        ${e["vira-bold-bold"].selector} .normal {
            visibility: hidden;
            pointer-events: none;
            z-index: -1;
        }
        ${e["vira-bold-bold"].selector} .bold {
            visibility: visible;
            pointer-events: unset;
            z-index: unset;
        }
    `,render({inputs:e}){return v`
            <span class="everything-wrapper">
                <span class="bold-wrapper">
                    <span class="bold">${e.text}</span>

                    <span class="normal">${e.text}</span>
                </span>
            </span>
        `}});var b0=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(b0||{});const ye=Ot()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>k`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Wn};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Ar["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Fs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Yt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${lt["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ht["vira-interaction-animation-duration"].value},
                background-color
                    ${ht["vira-interaction-animation-duration"].value},
                border-color ${ht["vira-interaction-animation-duration"].value};
        }

        ${Ga({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${P} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?v`
                  <${P.assign({icon:e.icon})}></${P}>
              `:"",r=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:"";return v`
            <button ?disabled=${e.disabled}>${t} ${r}</button>
        `}}),Ct=Ot()({tagName:"vira-collapsible-wrapper",state(){return{contentHeight:0}},hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Yt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ht["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:pt()},render({state:e,slotNames:t,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?k`
                  height: ${e.contentHeight}px;
              `:k`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${Y("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${qh(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),jt=Ot()({tagName:"vira-image",state(){return{loadedUrls:{},erroredUrls:{}}},hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:pt(),imageError:pt()},styles:({hostClasses:e})=>k`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,render({inputs:e,state:t,updateState:r,dispatch:n,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?v`
                  <slot class="status-wrapper" name=${s.error}>
                      <${P.assign({icon:Xi})} class="error"></${P}>
                  </slot>
              `:t.loadedUrls[o]?void 0:v`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${P.assign({icon:qn})}></${P}>
                    </slot>
                `;return v`
            ${Le(!!a,a)}
            <img
                class=${Vn({hidden:!!a})}
                ${Y("load",async()=>{e._debugLoadDelay&&await Mn(e._debugLoadDelay),r({loadedUrls:{...t.loadedUrls,[o]:!0}}),n(new i.imageLoad)})}
                ${Y("error",async u=>{e._debugLoadDelay&&await Mn(e._debugLoadDelay),r({erroredUrls:{...t.erroredUrls,[o]:!0}}),n(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function na({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(r=>na({input:r,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Xv({value:e,allowed:t,blocked:r}){const n=t?na({input:e,matcher:t}):!0,i=r?na({input:e,matcher:r}):!1;return n&&!i}function ia(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce((n,i)=>(Xv({...e,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}function eb({inputs:e,previousValue:t,event:r,inputBlockedCallback:n,newValueCallback:i}){const s=An(r,HTMLInputElement),o=E.hasKey(r,"data")&&Ng.isString(r.data)||"";if(o){const{blocked:u}=ia({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&n(u)}const a=ia({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var D0=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(D0||{});const ae=Ot()({tagName:"vira-input",cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Ar["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},styles:({hostClasses:e,cssVars:t})=>k`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ar["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Fs};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Yt};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${Wn};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Yt};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${lt["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ht["vira-interaction-animation-duration"].value};
            }

            label {
                ${Yt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${lt["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Ga({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Yt};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${Wn};
            }

            button {
                ${Yt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${ht["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,events:{valueChange:pt(),inputBlocked:pt()},state(){return{forcedInputWidth:0,showPassword:!1}},hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},render:({inputs:e,dispatch:t,state:r,updateState:n,events:i})=>{const{filtered:s}=ia({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?v`
                  <${P.assign({icon:e.icon})} class="left-side-icon"></${P}>
              `:"",a=e.fitText?k`
                  width: ${r.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type==="password";return v`
            <label>
                ${o}
                ${Le(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${qh(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${tb(e.type,r.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Y("input",l=>{eb({inputs:e,previousValue:s,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Le(!!(e.showClearButton&&e.value),v`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${P.assign({icon:h0})}></${P}>
                        </button>
                    `)}
                ${Le(e.type==="password",v`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Y("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${P.assign({icon:r.showPassword?g0:p0})}></${P}>
                        </button>
                    `)}
                ${Le(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function tb(e,t){return e==="password"&&t?"text":e||"text"}const Ai=Ot()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>k`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(r){if(!e.route)return;const n=e.route.router.setRouteOnDirectNavigation(e.route.route,r);e.route.scrollToTop&&window.scrollTo({left:0,top:0,behavior:n?"instant":"smooth"})}if(e.link?.newTab)return v`
                <a
                    href=${e.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label=${Ji(e.aria?.label||void 0)}
                >
                    <slot></slot>
                </a>
            `;{const r=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return v`
                <a
                    href=${r}
                    rel="noopener noreferrer"
                    aria-label=${Ji(e.aria?.label||void 0)}
                    ${Y("click",t)}
                >
                    <slot></slot>
                </a>
            `}}}),{defineElement:rt}=zh(),Je=rt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>k`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const r=e.router?.createRouteUrl({...e.route})??"#";return v`
            <a
                href=${r}
                ${Y("click",n=>{(!e.router||r0(n))&&(n.preventDefault(),window.scrollTo(0,0),t(new Qi(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function rb(e,t){return e.entry.entryType===Ce.Root?!1:e.entry.entryType===Ce.Page||E.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:E.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const St=rt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>k`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${G["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${G["element-book-nav-hover-background-color"].value};
            color: ${G["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${G["element-book-nav-active-background-color"].value};
            color: ${G["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Je.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${G["element-book-nav-selected-background-color"].value};
            color: ${G["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${P} {
            display: inline-flex;
            color: ${G["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(r=>{if(!rb(r,e.selectedPath))return;const n=k`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return v`
                <li style=${n}>
                    <${Je.assign({router:e.router,route:{paths:[at.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Vn({"title-row":!0,selected:e.selectedPath?E.jsonEquals(e.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${Le(Vr(r,Ce.ElementExample),v`
                                    <${P.assign({icon:m0})}></${P}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${Je}>
                </li>
            `});return v`
            <${Je.assign({route:Gr,router:e.router})}>
                <slot name=${Mt.NavHeader}>Book</slot>
            </${Je}>
            <ul>
                ${t}
            </ul>
        `}});async function nb(e){await ta(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await Uw(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const ir=rt()({tagName:"book-error",styles:k`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(E.isArray(e.message)?e.message:[e.message]).map(r=>v`
                <p>${r}</p>
            `)}}),zn=rt()({tagName:"book-page-controls",events:{controlValueChange:pt()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>k`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${ae} {
            height: 24px;
            max-width: 128px;
        }

        ${P}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:r}){return Object.entries(e.config).length?Object.entries(e.config).map(([n,i],s)=>{if(i.controlType===z.Hidden)return"";const o=ib(e.currentValues[n],i,a=>{const u=E.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[n];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);t(new r.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[n]:a}}))});return v`
                    <div class="control-wrapper">
                        ${Le(s===0,v`
                                <${P.assign({icon:Ya})}
                                    class="options-icon"
                                ></${P}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function ib(e,t,r){return Fr(t,z.Hidden)?"":Fr(t,z.Checkbox)?v`
            <input
                type="checkbox"
                ?checked=${e}
                ${Y("input",n=>{const i=An(n,HTMLInputElement);r(i.checked)})}
            />
        `:Fr(t,z.Color)?v`
            <input
                type="color"
                .value=${e}
                ${Y("input",n=>{const i=An(n,HTMLInputElement);r(i.value)})}
            />
        `:Fr(t,z.Text)?v`
            <${ae.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Y(ae.events.valueChange,n=>{r(n.detail)})}
            ></${ae}>
        `:Fr(t,z.Number)?v`
            <input
                type="number"
                .value=${e}
                ${Y("input",n=>{const i=An(n,HTMLInputElement);r(i.value)})}
            />
        `:Fr(t,z.Dropdown)?v`
            <select
                .value=${e}
                ${Y("input",n=>{const i=An(n,HTMLSelectElement);r(i.value)})}
            >
                ${t.options.map(n=>v`
                        <option ?selected=${n===e} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:v`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const Mc=rt()({tagName:"book-breadcrumbs",styles:k`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((r,n,i)=>{const s=n>=i.length-1,o=i.slice(0,n+1),a=s?"":v`
                      <span class="spacer">&gt;</span>
                  `;return v`
                <${Je.assign({route:{hash:void 0,search:void 0,paths:[at.Book,...o]},router:e.router})}>
                    ${r}
                </${Je}>
                ${a}
            `}):v`
                &nbsp;
            `}}),wo=rt()({tagName:"book-breadcrumbs-bar",styles:k`
        :host {
            border-bottom: 1px solid
                ${G["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${G["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return v`
            ${Le(!!e.currentSearch,v`
                    &nbsp;
                `,v`
                    <${Mc.assign({currentRoute:e.currentRoute,router:e.router})}></${Mc}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Y("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=n.value;await Mn({milliseconds:200}),n.value===i&&(n.value?t(new Qi({paths:[at.Search,encodeURIComponent(n.value)]})):t(new Qi(Gr)))})}
            />
        `}}),Bc=rt()({tagName:"book-entry-description",styles:k`
        :host {
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${G["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>v`
                <p>${t}</p>
            `)}}),Pc=rt()({tagName:"book-page-wrapper",styles:k`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${Je} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?v`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:v`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,r=[at.Book,...e.pageNode.fullUrlBreadcrumbs],n=e.pageNode.entry.errors.length?$d(e.pageNode.entry.errors):void 0;return n&&console.error(n),v`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Je.assign({route:{paths:r,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Je}>
                    ${n?v`
                              <${ir.assign({message:n.message})}></${ir}>
                          `:v`
                              <${Bc.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${Bc}>
                              <${zn.assign({config:e.pageNode.entry.controls,currentValues:ba(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${zn}>
                          `}
                </div>
            </div>
        `}}),Ci=rt()({tagName:"book-element-example-controls",styles:k`
        :host {
            display: flex;
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[at.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return v`
            <${Je.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Je}>
        `}}),Ic=Symbol("unset-internal-state"),Rc=rt()({tagName:"book-element-example-viewer",state(){return{isUnset:Ic}},render({state:e,inputs:t,updateState:r}){try{if(t.elementExampleNode.entry.errors.length)throw $d(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===Ic&&r({isUnset:void 0,...t.elementExampleNode.entry.state?.()});const n=t.elementExampleNode.entry.render({state:e,updateState:r,controls:t.currentPageControls});if(n instanceof Promise)throw new TypeError("render output cannot be a promise");return v`
                ${Le(!!t.elementExampleNode.entry.styles,v`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error("ERROR HERE",_e(n)),console.error(n),v`
                <${ir.assign({message:`${t.elementExampleNode.entry.title} failed: ${_e(n)}`})}></${ir}>
            `}},options:{allowPolymorphicState:!0}}),Lc=rt()({tagName:"book-element-example-wrapper",styles:k`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Ci} {
            color: ${G["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ci} {
            color: ${G["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return v`
            <div class="individual-example-wrapper">
                <${Ci.assign(Zg(e,["currentPageControls"]))}></${Ci}>
                <${Rc.assign(e)}></${Rc}>
            </div>
        `}});function E0(e,t,r,n){const i=Lo(r,n),s=[];if(i){const o=E0(e,t,i,n);o&&s.push(o)}if(Vr(r,Ce.Page)&&!e.includes(r)){const o=ba(t,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:o,breadcrumbs:Te(o,()=>r.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function sb({currentNodes:e,isTopLevel:t,router:r,isSearching:n,controls:i,originalTree:s}){if(!e.length&&n)return[v`
                No results
            `];const o=E.isLengthAtLeast(e,1)?E0(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&E.isLengthAtLeast(e,1)?v`
                  <${zn.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${zn}>
              `:ue,u=Aw(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(Vr(l,Ce.Page))return v`
                    <${Pc.assign({isTopLevel:t,pageNode:l,controls:i,router:r})}
                        class="block-entry"
                    ></${Pc}>
                `;if(Vr(l,Ce.ElementExample)){const c=ba(i,l.fullUrlBreadcrumbs.slice(0,-1));return v`
                    <${Lc.assign({elementExampleNode:l,currentPageControls:c,router:r})}
                        class="inline-entry"
                    ></${Lc}>
                `}else return Vr(l,Ce.Root)?ue:v`
                    <${ir.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${ir}>
                `});return[a,u]}const Br=rt()({tagName:"book-entry-display",state(){return{lastElement:void 0}},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${wo} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${ht["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:pt()},render:({inputs:e,dispatch:t,events:r,state:n,updateState:i})=>{const s=_o(e.currentRoute.paths),o=sb({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return v`
            <${wo.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${wo}>

            ${Le(e.showLoading,v`
                    <div
                        ${wc(()=>{t(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${P.assign({icon:qn})}></${P}>
                    </div>
                    ${Le(!!n.lastElement,v`
                            ${n.lastElement}
                            <slot name=${Mt.Footer}></slot>
                        `)}
                `,v`
                    <div
                        ${wc(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${Mt.Footer}></slot>
                `)}
        `}});function ob(e,t,r){const n=_c(e,t);return n.length?n:(r(Gr),_c(e,Gr.paths))}function _c(e,t){return e.filter(r=>s1({searchFor:t.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const vo=ja()({tagName:"element-book-app",state(){return{currentRoute:Gr,router:void 0,loading:!0,colors:{config:void 0,theme:vc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0}},events:{pathUpdate:pt()},styles:k`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${G["element-book-page-background-color"].value};
            color: ${G["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Br} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${St} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Oc(e,_o(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:r,updateState:n,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(c){return{...e.currentRoute,...c}}function a(c){const f=o(c);return!E.jsonEquals(e.currentRoute,f)}function u(c){t.preventWindowTitleChange||(e.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,c].filter(E.isTruthy).join(" - "))}function l(c){if(!a(c))return;const f=o(c);e.router?e.router.setRoute(f):n({currentRoute:{...e.currentRoute,...f}}),t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(f.paths))}try{if(t.elementBookRoutePaths&&!E.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const D=av(t.internalRouterConfig.basePath);n({router:D}),D.listen(!0,S=>{n({currentRoute:S})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const c={themeColor:t.themeColor};if(!E.jsonEquals(c,e.colors.config)){const D=vc(c);n({colors:{config:c,theme:D}}),_1(r,D)}const f=t._debug??!1,m=c1({entries:t.pages,debug:f});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),n({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:Id(m.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=_o(e.currentRoute.paths),w=(p?Zw({flattenedNodes:m.flattenedNodes,searchQuery:p}):void 0)??ob(m.flattenedNodes,e.currentRoute.paths,l);u(w[0]?.entry.title);const A=e.treeBasedControls?.controls;return A?(t._debug&&console.info({currentControls:A}),v`
                <div
                    class="root"
                    ${Y(Qi,async D=>{const S=D.detail;if(!a(S))return;if(n({loading:!0}),l(S),!(r.shadowRoot.querySelector(St.tagName)instanceof St))throw new TypeError(`Failed to find child '${St.tagName}'`);await Oc(r,p,e.currentRoute)})}
                    ${Y(zn.events.controlValueChange,D=>{if(!e.treeBasedControls)return;const S=d1(A,D.detail.fullUrlBreadcrumbs,D.detail.newValues);n({treeBasedControls:{...e.treeBasedControls,controls:S}})})}
                >
                    <${St.assign({flattenedNodes:m.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Mt.NavHeader}
                            slot=${Mt.NavHeader}
                        ></slot>
                    </${St}>
                    <${Br.assign({controls:A,currentNodes:w,currentRoute:e.currentRoute,debug:f,originalTree:m.tree,router:e.router,showLoading:e.loading})}
                        ${Y(Br.events.loadingRender,async D=>{await ta();const S=r.shadowRoot.querySelector(Br.tagName);S?S.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Br.tagName}' for scrolling.`),await ta(),n({loading:!D.detail})})}
                    >
                        <slot
                            name=${Mt.Footer}
                            slot=${Mt.Footer}
                        ></slot>
                    </${Br}>
                </div>
            `):v`
                    <${ir.assign({message:"Failed to generate page controls."})}></${ir}>
                `}catch(c){return console.error(c),v`
                <p class="error">${_e(c)}</p>
            `}}});async function Oc(e,t,r){if(t||r.paths.length<=1)return;const n=e.shadowRoot.querySelector(St.tagName);if(!(n instanceof St))throw new TypeError(`Failed to find child '${St.tagName}'`);await nb(n)}const Vt=et({title:"Elements",parent:void 0}),Ja=et({parent:Vt,title:"Dropdown"}),ab=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:v`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:k`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:k`
            ${Nt} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],ub=et({title:Nt.tagName,parent:Ja,controls:{Selected:{controlType:z.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:z.Text,initValue:""}},defineExamples({defineExample:e}){ab.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs.selected||[]}},styles:t.customStyle,render({controls:r}){const n={label:r.Label||t.inputs.label,selected:r.Selected?r.Selected==="all":t.inputs.selected};return t.customTemplate?v`
                            <${Nt.assign(n)}>
                                ${t.customTemplate}
                            </${Nt}>
                        `:v`
                            <${Nt.assign(n)}></${Nt}>
                        `}})})}}),Tn=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],lb=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"short options",inputs:{options:[{id:"1",label:"1"},{id:"2",label:"2"}]}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Tn,{id:42,label:"custom template",template:v`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Tn,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:k`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:k`
            ${Cn} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Bt}}],cb=et({title:Cn.tagName,parent:Ja,controls:{Selected:{controlType:z.Dropdown,initValue:"",options:["",...Tn.map(e=>e.label)]},Prefix:{controlType:z.Text,initValue:""},"Force State":{controlType:z.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:z.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:z.Dropdown,initValue:"",options:["",...Object.keys(ra)]},Disabled:{controlType:z.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:z.Text,initValue:"Select something"}},defineExamples({defineExample:e}){lb.forEach(t=>{e({title:t.title,state(){return{selected:t.inputs?.selected||[]}},styles:t.customStyle,render({state:r,updateState:n,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Tn,selected:i.Selected?[Tn.find(o=>o.label===i.Selected)?.id].filter(E.isTruthy):r.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?ra[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return v`
                        <${Cn.assign(s)}
                            ${Y(Cn.events.selectedChange,o=>{n({selected:o.detail})})}
                        ></${Cn}>
                    `}})})}}),fb=et({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:z.Color,initValue:""},"Fill Color":{controlType:z.Color,initValue:""},"Stroke Width":{controlType:z.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(ra).forEach(t=>{e({title:t.name,styles:k`
                    :host(:hover) ${P} {
                        background-color: #f2f2f2;
                    }

                    ${P} {
                        padding: 8px;
                        border-radius: ${lt["vira-form-input-radius"].value};
                    }
                `,render({controls:r}){const n=k`
                        ${C["vira-icon-fill-color"].name}: ${he(r["Fill Color"]||"inherit")};
                        ${C["vira-icon-stroke-color"].name}: ${he(r["Stroke Color"]||"inherit")};
                        ${C["vira-icon-stroke-width"].name}: ${he(r["Stroke Width"]?kd(r["Stroke Width"]):"inherit")};
                    `;return v`
                        <${P.assign({icon:t})} style=${n}></${P}>
                    `}})})}}),db=et({parent:Vt,title:le.tagName,descriptionParagraphs:["Reserves space for bolded text, even if the text isn't currently bold."],controls:{bolded:{controlType:z.Checkbox,initValue:!1}},defineExamples({defineExample:e}){e({title:"Not bold",render(){return v`
                    <${le.assign({text:"Text here",bold:!1})}></${le}>
                `}}),e({title:"Bold",render(){return v`
                    <${le.assign({text:"Text here",bold:!0})}></${le}>
                `}}),e({title:"Dynamic",render({controls:t}){return v`
                    <${le.assign({text:"Text here",bold:t.bolded})}></${le}>
                `}}),e({title:"Resized",styles:k`
                ${le} {
                    display: flex;
                    border: 1px solid dodgerblue;
                    border-radius: 8px;
                    padding: 16px;
                }
            `,render(){return v`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Alignment",styles:k`
                ${le} {
                    width: 300px;
                    display: block;
                    text-align: right;
                }
            `,render(){return v`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}}),e({title:"Stylized",styles:k`
                ${le} {
                    text-decoration: underline;
                }
            `,render(){return v`
                    <${le.assign({text:"Not Bolded",bold:!1})}></${le}>
                    <${le.assign({text:"Bolded",bold:!0})}></${le}>
                `}})}}),hb=et({parent:Vt,title:ye.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:z.Color,initValue:ye.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:z.Color,initValue:ye.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:z.Color,initValue:ye.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:z.Color,initValue:ye.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:r,styles:n,inputs:i}){const s=n??k``;e({title:r,styles:s,render({controls:o}){const a=k`
                        ${ye.cssVars["vira-button-primary-color"].name}: ${he(o["Primary color"]||"inherit")};
                        ${ye.cssVars["vira-button-secondary-color"].name}: ${he(o["Secondary color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-hover-color"].name}: ${he(o["Hover color"]||"inherit")};
                        ${ye.cssVars["vira-button-primary-active-color"].name}: ${he(o["Active color"]||"inherit")};
                    `;return v`
                        <${ye.assign({text:"hello",...i})}
                            style=${a}
                        ></${ye}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:Ya}}),t({title:"outline",inputs:{buttonStyle:b0.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:k`
                ${ye} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:k`
                ${ye} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:k`
                :host {
                    ${ye.cssVars["vira-button-primary-color"].name}: pink;
                    ${ye.cssVars["vira-button-secondary-color"].name}: purple;
                    ${ye.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${ye.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return v`
                    <${ye.assign({text:"hello"})}></${ye}>
                `}})}}),mb=et({title:Ct.tagName,parent:Vt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>v`
                        <${Ct.assign({expanded:!!r.expandedStates[i]})}
                            ${Y(Ct.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Ct.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Y("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Le(!!r.showMoreStates[i],v`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Ct}>
                    `)}}),e({title:"wider examples",styles:k`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,state(){return{expandedStates:[],showMoreStates:[]}},render({updateState:t,state:r}){return new Array(3).fill(0).map((n,i)=>v`
                        <${Ct.assign({expanded:!!r.expandedStates[i]})}
                            ${Y(Ct.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Ct.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Y("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${Le(!!r.showMoreStates[i],v`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${Ct}>
                    `)}})}}),pb=et({title:P.tagName,parent:Vt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${P.assign({icon:Bt})}></${P}>
                `}}),e({title:"using createColoredIcon",render(){return v`
                    <${P.assign({icon:kc(Bt,{"vira-icon-stroke-color":"red"})})}></${P}>
                `}}),e({title:"fit container",styles:k`
                ${P} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return v`
                    <${P.assign({icon:kc(Bt,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${P}>
                `}})}}),gb=et({title:jt.tagName,parent:Vt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:k`
                    border-radius: 32px;
                `,loadingSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:qn,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:k`
                    border-radius: 32px;
                `,errorSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:Xi,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:k`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:k`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${P.assign({icon:qn,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `,errorSlot:v`
                    <div
                        style=${k`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${P.assign({icon:Xi,fitContainer:!0})}
                            style=${k`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${P}>
                    </div>
                `}].forEach(r=>{e({title:r.title,styles:k`
                    ${jt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||k``}
                    }

                    ${r.allowReload?k`
                              ${jt} {
                                  cursor: pointer;
                              }

                              ${jt}:hover {
                                  border-color: #0055ff;
                              }
                          `:k``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,state(){return{imageUrl:r.inputs.imageUrl}},render({state:n,updateState:i}){return v`
                        <${jt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${Y("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Cd()}`})})}
                        >
                            ${r.loadingSlot?v`
                                      <div class="slot-wrapper" slot=${jt.slotNames.loading}>
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?v`
                                      <div class="slot-wrapper" slot=${jt.slotNames.error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${jt}>
                    `}})})}}),yb=et({title:ae.tagName,parent:Vt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:z.Color,initValue:ae.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:z.Color,initValue:ae.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:z.Color,initValue:ae.cssVars["vira-input-border-color"].default},"Focus color":{controlType:z.Color,initValue:ae.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:z.Color,initValue:ae.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:n,title:i,inputs:s}){e({title:i,styles:k`
                    ${n||k``}
                `,state(){return{value:s.value}},render({state:o,updateState:a,controls:u}){const l={[String(ae.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(ae.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(ae.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(ae.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(ae.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},c=Te(l,(m,p)=>p||"inherit"),f=Object.entries(c).map(([m,p])=>[m,p].join(": ")+";").join(`
`);return v`
                        <${ae.assign({...s,value:o.value})}
                            style=${f}
                            ${Y(ae.events.valueChange,m=>{a({value:m.detail}),console.info("changed:",m.detail)})}
                        ></${ae}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Bt}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:k`
                    ${ae} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Bt}},{title:"taller height",styles:k`
                    ${ae} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Bt}},{title:"shorter height",styles:k`
                    ${ae} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Bt}},{title:"max width",styles:k`
                    ${ae} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:k`
                    ${ae} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:D0.Password}}].forEach(t)}}),wb=et({title:Ai.tagName,parent:Vt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:z.Color,initValue:""},"Hover color":{controlType:z.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:r,inputs:n}){e({title:r,render({controls:i}){const s=k`
                        ${Ai.cssVars["vira-link-hover-color"].name}: ${he(i["Hover color"]||"inherit")};
                        color: ${he(i["CSS Color"]||"inherit")};
                    `;return v`
                        <${Ai.assign(n)} style=${s}>My Link</${Ai}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),vb=[Vt,fb,Ja,db,hb,mb,ub,cb,pb,gb,yb,wb].sort((e,t)=>e.title.localeCompare(t.title));Wa({tagName:"vira-book-app",styles:k`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${vo} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return v`
            <${vo.assign({internalRouterConfig:{basePath:za("element-vir","vira"),useInternalRouter:!0},pages:vb,themeColor:"#33ccff"})}>
                <h1 slot=${Mt.NavHeader}>Vira</h1>
            </${vo}>
        `}});
